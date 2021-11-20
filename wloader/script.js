(async () => {
  window.opener.postMessage(
    await (
      await fetch("https://thatfrueddued.github.io/blooket-utility/index.js")
    ).text(),
    "*"
  );
})();
