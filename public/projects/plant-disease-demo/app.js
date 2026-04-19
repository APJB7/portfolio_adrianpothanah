const appGrid = document.getElementById("appGrid");
const analyzeBtn = document.getElementById("analyzeBtn");
const statusBar = document.getElementById("status");
const emptyState = document.getElementById("emptyState");
const resultSection = document.getElementById("resultSection");

const predictedClass = document.getElementById("predictedClass");
const confidence = document.getElementById("confidence");
const severity = document.getElementById("severity");
const severityPercent = document.getElementById("severityPercent");

const researchPathogenNotes = document.getElementById("researchPathogenNotes");
const researchFindings = document.getElementById("researchFindings");
const researchActions = document.getElementById("researchActions");
const researchMonitoring = document.getElementById("researchMonitoring");
const researchCautions = document.getElementById("researchCautions");
const researchFollowUp = document.getElementById("researchFollowUp");

const summary = document.getElementById("summary");
const treatmentList = document.getElementById("treatmentList");
const monitoringList = document.getElementById("monitoringList");
const cautionList = document.getElementById("cautionList");
const followUpText = document.getElementById("followUpText");

const top3List = document.getElementById("top3List");

const demoData = {
  detectedCondition: "Tomato Leaf Mold",
  confidence: "1.0000",
  severity: "Severe",
  affectedArea: "55.53%",
  pathogenNotes: [
    "Leaf mold in tomato is commonly associated with humid, poorly ventilated growing conditions.",
    "Symptoms often begin as pale or yellow areas on the upper surface of leaves before fungal growth becomes more obvious underneath."
  ],
  researchFindings: [
    "The disease spreads more easily where leaves remain wet for long periods.",
    "Dense plant growth and poor airflow can accelerate symptom progression."
  ],
  supportedActions: [
    "Remove heavily infected foliage.",
    "Reduce humidity around the crop.",
    "Improve spacing and pruning to support airflow.",
    "Use a suitable fungicide if symptoms continue progressing."
  ],
  monitoringPoints: [
    "Watch whether the number of symptomatic leaves increases.",
    "Track whether lesions spread to newly formed leaves.",
    "Check humidity and watering practices."
  ],
  cautions: [
    "Do not leave infected leaves in the growing area.",
    "Avoid overhead watering where possible."
  ],
  followUp:
    "This severe case should be reviewed within 5–7 days to see whether symptoms are stabilising or continuing to spread.",
  summary:
    "The uploaded sample is classified as Tomato Leaf Mold with severe severity. This suggests substantial visible disease spread and the need for prompt management action.",
  treatment: [
    "Remove severely infected leaves and dispose of them safely.",
    "Avoid overhead irrigation and keep leaves dry.",
    "Increase spacing and airflow around the plant.",
    "Use an appropriate fungicide if disease pressure remains high."
  ],
  monitoring: [
    "Check for new lesions on upper and lower leaves.",
    "Observe whether humidity remains trapped around the canopy.",
    "Inspect the plant again within a week."
  ],
  careCautions: [
    "Do not compost heavily infected leaves near healthy plants.",
    "Do not rely only on visual improvement after one day."
  ],
  top3: [
    "Tomato Leaf Mold — 1.0000",
    "Tomato Early Blight — 0.0000",
    "Tomato Late Blight — 0.0000"
  ]
};

function fillList(element, items) {
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function fillResults() {
  predictedClass.textContent = demoData.detectedCondition;
  confidence.textContent = demoData.confidence;

  severity.innerHTML = `<span class="result-pill severe">${demoData.severity}</span>`;
  severityPercent.textContent = demoData.affectedArea;

  fillList(researchPathogenNotes, demoData.pathogenNotes);
  fillList(researchFindings, demoData.researchFindings);
  fillList(researchActions, demoData.supportedActions);
  fillList(researchMonitoring, demoData.monitoringPoints);
  fillList(researchCautions, demoData.cautions);

  researchFollowUp.textContent = demoData.followUp;
  summary.textContent = demoData.summary;
  fillList(treatmentList, demoData.treatment);
  fillList(monitoringList, demoData.monitoring);
  fillList(cautionList, demoData.careCautions);
  followUpText.textContent = demoData.followUp;
  fillList(top3List, demoData.top3);
}

analyzeBtn.addEventListener("click", () => {
  appGrid.classList.add("has-results");

  statusBar.classList.add("loading");
  statusBar.textContent = "Analyzing sample leaf image...";

  analyzeBtn.disabled = true;
  analyzeBtn.querySelector("span").textContent = "Analyzing...";

  setTimeout(() => {
    fillResults();
    emptyState.classList.add("hidden");
    resultSection.classList.remove("hidden");

    statusBar.classList.remove("loading");
    statusBar.textContent =
      "Analysis complete: Tomato Leaf Mold detected with severe severity.";

    analyzeBtn.disabled = false;
    analyzeBtn.querySelector("span").textContent = "Analyze Again";
  }, 1600);
});

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.remove("active");
    });

    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.remove("active");
    });

    btn.classList.add("active");
    document.querySelector(`.tab-panel[data-tab="${target}"]`).classList.add("active");
  });
});