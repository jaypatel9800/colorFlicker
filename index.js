const change = () => {
    let r = Math.round(Math.random() * 256);
    let y = Math.round(Math.random() * 256);
    let b = Math.round(Math.random() * 256);
    let bgColor = "rgb("+r+", "+y+", "+b+")"
    document.body.style.backgroundColor = bgColor;
    document.querySelector(".btn").style.color = bgColor;
    document.querySelector(".color").innerHTML = bgColor;
    document.querySelector(".a").style.color = bgColor;
}