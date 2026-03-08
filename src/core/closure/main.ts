function setSize(size: number) {
  const textElement = document.getElementById("text");
  console.log(size);

  if (textElement) {
    textElement.style.fontSize = size + "px";
  }
}

const size12 = () => setSize(12);
const size14 = () => setSize(14);
const size16 = () => setSize(16);

document.getElementById("size-12")!.onclick = size12;
document.getElementById("size-14")!.onclick = size14;
document.getElementById("size-16")!.onclick = size16;

// Counter

function counter() {
  let privateValue = 0;

  function changeBy(val: number) {
    privateValue += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateValue;
    },
  };
}

document.querySelectorAll(".counter").forEach((counterEl) => {
  const myCounter = counter();

  const counterVal = counterEl.querySelector(".counter-value");
  const decBtn = counterEl.querySelector(".decrement");
  const incBtn = counterEl.querySelector(".increment");

  function updateUI() {
    counterVal!.textContent = myCounter.value().toString();
  }

  decBtn?.addEventListener("click", () => {
    myCounter.decrement();
    updateUI();
  });

  incBtn?.addEventListener("click", () => {
    myCounter.increment();
    updateUI();
  });
});
