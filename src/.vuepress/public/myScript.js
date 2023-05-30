
let body = document.getElementsByTagName('body')[0]
body.style.backgroundImage = `url(/assets/images/cover${Math.round(Math.random() * 9)}.jpg)`
let i = 1
setInterval(() => {
    if (i > 9) i = 1
    body.style.backgroundImage = `url(/assets/images/cover${i}.jpg)`
    i++
}, 20000);