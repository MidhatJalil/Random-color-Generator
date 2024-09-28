function changecolor(){
    document.body.style.backgroundColor= `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
    document.getElementById('code').innerHTML = `${document.body.style.backgroundColor.toString()}`

}