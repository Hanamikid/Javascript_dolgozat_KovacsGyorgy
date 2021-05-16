function myFunction(imgs) {
    let expandImg = document.getElementById("nagykep");
    let imgText = document.getElementById("macska-neve");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }