const qrWrapper = document.querySelector(".display-wrapper");
const qrImage = qrWrapper.querySelector("img");
const displayText = document.querySelector(".display-text");
const generateBtn = document.querySelector("#generateBtn");

let url;
let size;

const generateQRCode = (url, size) => {
  const qrCode = new QRCode(qrWrapper, {
    text: url,
    width: size,
    height: size,
  });
};

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  clearDisplay();

  url = document.querySelector("#linkName").value;
  size = document.querySelector("#qrsize").value;
  if (url === "") {
    alert("Please enter a URL");
  } else {
    displayText.classList.add("textHide");
    qrWrapper.classList.add("qrGenerated");
    generateQRCode(url, size);
    setTimeout(() => {
      const saveUrl = qrWrapper.querySelector("img").src;
      createSaveBtn(saveUrl);
    }, 50);
  }
});
const clearDisplay = () => {
  qrWrapper.innerHTML = "";
  const saveLink = document.querySelector("#saveLink");
  if (saveLink) {
    saveLink.remove();
  }
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "saveLink";
  link.classList.add("saveBtn");
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save Image";
  document.getElementById("generated").appendChild(link);
};
