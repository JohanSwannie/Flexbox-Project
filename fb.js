const container2 = document.querySelector(".container2");
const box = document.querySelectorAll(".box");
const butty = document.getElementById("butty");
const jc = document.getElementById("jc");
const ai = document.getElementById("ai");
const ac = document.getElementById("ac");
const fd = document.getElementById("fd");
const fw = document.getElementById("fw");
const gp = document.getElementById("gp");
const jcb = document.getElementById("jcb");
const aib = document.getElementById("aib");
const acb = document.getElementById("acb");
const wh = document.getElementById("wh");
const ht = document.getElementById("ht");

const allSelections = () => {
  let jcCollection = jc.selectedOptions;
  let jcOutput = "";
  for (let i = 0; i < jcCollection.length; i++) {
    jcOutput += jcCollection[i].label;
  }
  container2.style.justifyContent = jcOutput;

  let aiCollection = ai.selectedOptions;
  let aiOutput = "";
  for (let i = 0; i < aiCollection.length; i++) {
    aiOutput += aiCollection[i].label;
  }
  container2.style.alignItems = aiOutput;

  let acCollection = ac.selectedOptions;
  let acOutput = "";
  for (let i = 0; i < acCollection.length; i++) {
    acOutput += acCollection[i].label;
  }
  container2.style.alignContent = acOutput;

  let fdCollection = fd.selectedOptions;
  let fdOutput = "";
  for (let i = 0; i < fdCollection.length; i++) {
    fdOutput += fdCollection[i].label;
  }
  container2.style.flexDirection = fdOutput;

  let fwCollection = fw.selectedOptions;
  let fwOutput = "";
  for (let i = 0; i < fwCollection.length; i++) {
    fwOutput += fwCollection[i].label;
  }
  container2.style.flexWrap = fwOutput;

  let gpCollection = gp.selectedOptions;
  let gpOutput = "";
  for (let i = 0; i < gpCollection.length; i++) {
    gpOutput += gpCollection[i].label;
  }
  container2.style.gap = gpOutput;

  let jcbCollection = jcb.selectedOptions;
  let jcbOutput = "";
  for (let i = 0; i < jcbCollection.length; i++) {
    jcbOutput += jcbCollection[i].label;
  }
  box.forEach((item) => {
    item.style.justifyContent = jcbOutput;
  });

  let aibCollection = aib.selectedOptions;
  let aibOutput = "";
  for (let i = 0; i < aibCollection.length; i++) {
    aibOutput += aibCollection[i].label;
  }
  box.forEach((item) => {
    item.style.alignItems = aibOutput;
  });

  let acbCollection = acb.selectedOptions;
  let acbOutput = "";
  for (let i = 0; i < acbCollection.length; i++) {
    acbOutput += acbCollection[i].label;
  }
  box.forEach((item) => {
    item.style.alignContent = acbOutput;
  });

  let whCollection = wh.selectedOptions;
  let whOutput = "";
  for (let i = 0; i < whCollection.length; i++) {
    whOutput += whCollection[i].label;
  }
  box.forEach((item) => {
    item.style.width = whOutput;
  });

  let htCollection = ht.selectedOptions;
  let htOutput = "";
  for (let i = 0; i < htCollection.length; i++) {
    htOutput += htCollection[i].label;
  }
  box.forEach((item) => {
    item.style.height = htOutput;
  });
};

allSelections();

butty.addEventListener("click", () => {
  allSelections();
});
