import express from "express";
import fetch from "node-fetch";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";

const app = express();

const index = readFileSync("./public/index.html", "utf8");

let blooketScripts = {};

async function updateBlooket(subdomain) {
  try {
    blooketScripts[subdomain] = (
      await (
        await fetch(`https://${subdomain}.blooket.com/`).catch((e) =>
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
          return `https://${subdomain}.blooket.com` + src;
        }
        return src;
      })
      .join('src="');
    const lastScript = blooketScripts[subdomain]
      .split('<script src="')
      [blooketScripts[subdomain].split('<script src="').length - 1].split(
        '"'
      )[0];
    blooketScripts[subdomain] = blooketScripts[subdomain]
      .split("<script")
      .filter((str) => !str.includes(lastScript))
      .join("<script");
    blooketScripts[
      subdomain
    ] += `<script>window.loaderSrc="${lastScript}"</script>`;
  } catch (e) {
    console.log(e);
  }
}

await updateBlooket("dashboard");
await updateBlooket("id");
setInterval(() => {
  updateBlooket("dashboard");
  updateBlooket("id");
}, 60000);

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
  } else if (req.originalUrl === "/login" || req.originalUrl === "/logout") {
    res.send(index.replace("%BLOOKET_SCRIPTS%", blooketScripts.id));
  } else if (req.originalUrl === "/api/config") {
    const url = "https://blooket-utility.okr765.com";
    res.json({
      googleClientId:
        "366017072728-ohc155g4bl2467hdr4k3lbfmbpcaofqr.apps.googleusercontent.com",
      recaptchaSiteKey: "6LfKi6gUAAAAAN3mghcLqZm5lgFOh1itqc8CZj6-",
      isDev: false,
      wwwBase: url,
      dashboardBase: url,
      securityBase: url,
      frontendIDBase: url,
      frontendWWWBase: url,
      frontendDashboardBase: url,
    });
  } else {
    res.send(index.replace("%BLOOKET_SCRIPTS%", blooketScripts.dashboard));
  }
});

app.listen(process.env.PORT || 8000);

process.stdin.resume();
