import "animate.css";
import "./style.css";

const skeletonContainer = document.getElementById("skeleton-cards");
const realCards = document.getElementById("real-cards");

const PLACEHOLDERS = 2;
for (let i = 0; i < PLACEHOLDERS; i++) {
  const card = document.createElement("div");
  card.className = "skeleton-card";

  const avatar = document.createElement("div");
  avatar.className = "sk-avatar";

  const lines = document.createElement("div");
  lines.className = "sk-lines";

  const line1 = document.createElement("div");
  line1.className = "sk-line sk-line-1";

  const line2 = document.createElement("div");
  line2.className = "sk-line sk-line-2";

  lines.append(line1, line2);
  card.append(avatar, lines);
  skeletonContainer.appendChild(card);
}

function revealCards() {
  skeletonContainer.classList.add("animate__animated", "animate__fadeOut");

  setTimeout(() => {
    skeletonContainer.classList.add("hidden");
    realCards.classList.remove("hidden");
    realCards.classList.add("animate__animated", "animate__fadeIn");
  }, 700);
}
setTimeout(revealCards, 1500);

function playAnimateCSS(el, animationName, { speed = "animate__faster" } = {}) {
  if (!el) return;
  const base = "animate__animated";

  // remove animações anteriores
  el.classList.remove(
    "animate__pulse",
    "animate__bounce",
    "animate__rubberBand",
    "animate__wobble",
    "animate__faster",
    "animate__fast",
    "animate__slow"
  );

  void el.offsetWidth; // força reflow

  el.classList.add(base, animationName, speed);

  el.addEventListener(
    "animationend",
    () => el.classList.remove(base, animationName, speed),
    { once: true }
  );
}

// === MAPEAMENTO DOS BOTÕES ===
const loginBtn = document.getElementById("loginBtn"); // pulse
const verMais1 = document.getElementById("verMais1"); // bounce
const verMais2 = document.getElementById("verMais2"); // rubberBand
const saibaMais = document.getElementById("saibaMais"); // wobble

// vincula animação ao hover / foco / clique
function bindHoverPlay(el, anim) {
  if (!el) return;
  const trigger = () => playAnimateCSS(el, anim, { speed: "animate__faster" });
  el.addEventListener("mouseenter", trigger);
  el.addEventListener("focus", trigger);
  el.addEventListener("click", trigger);
  el.addEventListener("touchstart", trigger, { passive: true });
}

bindHoverPlay(loginBtn, "animate__pulse");
bindHoverPlay(verMais1, "animate__bounce");
bindHoverPlay(verMais2, "animate__rubberBand");
bindHoverPlay(saibaMais, "animate__wobble");
