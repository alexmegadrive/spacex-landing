const btnStart = document.querySelector(".btn_start");
const imgPlanet = document.querySelector(".img__planet");
const body = document.querySelector("body");
let btnStartRect = btnStart.getBoundingClientRect();
let planetCircleRect;
let imgCircleRect;
let line;

if (screen.width >= 1200) {
  drawCircle();
  lineDraw(
    btnStartRect.right,
    btnStartRect.bottom - btnStartRect.height / 2,
    btnStartRect.right + 70,
    planetCircleRect.bottom - planetCircleRect.height / 2,
    "line--gradient1"
  );
  lineDraw(
    btnStartRect.right + 70,
    planetCircleRect.bottom - planetCircleRect.height / 2,
    planetCircleRect.left,
    planetCircleRect.bottom - planetCircleRect.height / 2,
    "line--gradient2"
  );
}

window.addEventListener("resize", function (event) {
  if (screen.width >= 1200) {
    const lines = document.querySelectorAll(".line");

    btnStartRect = document.querySelector(".btn_start").getBoundingClientRect();
    newCircle = document.querySelector(".planet__circle");
    planetCircleRect = newCircle.getBoundingClientRect();

    for (const line of lines) {
      line.remove();
    }

    lineDraw(
      btnStartRect.right,
      btnStartRect.bottom - btnStartRect.height / 2,
      btnStartRect.right + 70,
      planetCircleRect.bottom - planetCircleRect.height / 2,
      "line--gradient1"
    );
    lineDraw(
      btnStartRect.right + 70,
      planetCircleRect.bottom - planetCircleRect.height / 2,
      planetCircleRect.left,
      planetCircleRect.bottom - planetCircleRect.height / 2,
      "line--gradient2"
    );
  }
});

function drawCircle() {
  let newCircle = document.createElement("div");
  newCircle.classList.add("planet__circle");
  imgPlanet.append(newCircle);
  planetCircleRect = newCircle.getBoundingClientRect();
}

function lineDraw(x1, y1, x2, y2, cl) {
  if (x2 < x1) {
    let tmp;
    tmp = x2;
    x2 = x1;
    x1 = tmp;
    tmp = y2;
    y2 = y1;
    y1 = tmp;
  }
  let lineLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  let m = (y2 - y1) / (x2 - x1);
  let degree = (Math.atan(m) * 180) / Math.PI;
  document.body.innerHTML += `<div class='line ${cl}' style=' transform: rotate(${degree}deg); width:${lineLength}px;  top:${y1}px; left:${x1}px;'></div>`;
}
