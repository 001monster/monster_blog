


window.onload = function () {
    let bodyDom = document.getElementsByTagName('body')[0]
    bodyDom.style.backgroundImage = `url(/assets/images/cover${Math.round(Math.random() * 9)}.webp)`
    let i = 1
    setInterval(() => {
        if (i > 9) i = 1
        bodyDom.style.backgroundImage = `url(/assets/images/cover${i}.webp)`
        i++
    }, 20000);
}