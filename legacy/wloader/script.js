(async () => {
	window.opener.postMessage(
    await (
      await fetch("https://unpkg.com/react@17/umd/react.development.js")
    ).text(),
    "*"
  );
	window.opener.postMessage(
    await (
      await fetch("https://unpkg.com/react-dom@17/umd/react-dom.development.js")
    ).text(),
    "*"
  );
  window.opener.postMessage(
    await (
      await fetch("https://thatfrueddued.github.io/blooket-utility/index.js")
    ).text(),
    "*"
  );
})();
