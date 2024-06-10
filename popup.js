document.getElementById("newJokeBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage(
    { contentScriptQuery: "fetchJoke" },
    (response) => {
      document.getElementById("jokeElement").textContent = response.joke;
    }
  );
});
