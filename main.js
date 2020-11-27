window.onload=function(){

    const button=document.querySelectorAll("a")
    console.log(button)
    button.addEventListener("click",(e)=>{
        var x = e.clientX - e.target.offsetLeft;
        var y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px'
        ripples.style.top = y + 'px'
        this.appendChild(ripples)
    })
}