chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.contentScriptQuery == "fetchJoke") {
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((data) => sendResponse({ joke: data.joke }))
      .catch((error) => console.error("Error:", error));
    return true; // Will respond asynchronously.
  }
});
