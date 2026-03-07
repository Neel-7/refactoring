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
