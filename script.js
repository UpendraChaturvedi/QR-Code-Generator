let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");
let btn = document.getElementById("btn");

function generateqr() {
  if (qrtext.value) {
    qrimage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrtext.value;
    imgbox.classList.add("show-img");
  } else {
    // qrimage.alt = "Please enter valid data";
    qrtext.classList.add("error");
    setTimeout(() => {
      qrtext.classList.remove("error");
    }, 20000);
  }
}
btn.addEventListener("click", generateqr);
