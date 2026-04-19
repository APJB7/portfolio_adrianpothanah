const appGrid = document.getElementById("appGrid");
const analyseBtn = document.getElementById("analyseBtn");
const statusBar = document.getElementById("statusBar");
const emptyState = document.getElementById("emptyState");
const loadingState = document.getElementById("loadingState");
const resultsState = document.getElementById("resultsState");

analyseBtn.addEventListener("click", () => {
  appGrid.classList.add("has-results");

  emptyState.classList.add("hidden");
  resultsState.classList.add("hidden");
  loadingState.classList.remove("hidden");

  statusBar.classList.add("loading");
  statusBar.textContent = "Scanning sample image and generating prediction...";

  analyseBtn.disabled = true;
  analyseBtn.innerHTML = `
    <span class="btn-icon">⌛</span>
    Analysing...
    <span class="btn-shimmer"></span>
  `;

  setTimeout(() => {
    loadingState.classList.add("hidden");
    resultsState.classList.remove("hidden");

    statusBar.classList.remove("loading");
    statusBar.textContent =
      "Analysis complete: Tomato Leaf Mold detected with severe severity.";

    analyseBtn.disabled = false;
    analyseBtn.innerHTML = `
      <span class="btn-icon">↻</span>
      Analyse Again
      <span class="btn-shimmer"></span>
    `;
  }, 1800);
});