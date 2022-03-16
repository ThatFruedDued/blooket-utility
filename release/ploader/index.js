import express from "express";
import fetch from "node-fetch";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";

const app = express();

const index = readFileSync("./public/index.html", "utf8");
let blooketScripts = "";

async function updateBlooket() {
  try {
    blooketScripts = (
      await (
        await fetch("https://dashboard.blooket.com/").catch((e) =>
          console.log(e)
        )
      )
        .text()
        .catch((e) => {
          console.log(e);
        })
    )
      .split('<div id="app"></div>')[1]
      .replace("</body></html>", "")
      .split('src="')
      .map((src) => {
        if (src.startsWith("/")) {
          return "https://dashboard.blooket.com" + src;
        }
        return src;
      })
      .join('src="');
    const lastScript = blooketScripts
      .split('<script src="')
      [blooketScripts.split('<script src="').length - 1].split('"')[0];
    blooketScripts = blooketScripts
      .split("<script")
      .filter((str) => !str.includes(lastScript))
      .join("<script");
    blooketScripts += `<script>window.loaderSrc="${lastScript}"</script>`;
  } catch (e) {
    console.log(e);
  }
}

await updateBlooket();
setInterval(updateBlooket, 60000);

app.all("*", (req, res) => {
  if (req.originalUrl === "/preload.js") {
    res.sendFile(resolve("./public/preload.js"));
  } else if (req.originalUrl === "/favicon.ico") {
    res.sendStatus(404);
  } else if (req.originalUrl === "/conf") {
    res.sendFile(resolve("./public/conf.html"));
  } else if (req.originalUrl === "/conf.bundle.js") {
    res.sendFile(resolve("./public/conf.bundle.js"));
  } else if (req.originalUrl === "/reset") {
    res.send("<script>localStorage.clear();location.href='/conf'</script>");
  } else if (req.originalUrl === "/gui.bundle.js") {
    res.sendFile(resolve("./public/gui.bundle.js"));
  } else {
    res.send(index.replace("%BLOOKET_SCRIPTS%", blooketScripts));
  }
});

app.listen(process.env.PORT || 8000);

process.stdin.resume();
