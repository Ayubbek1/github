let plus = document.querySelector(".btns button:nth-child(1)")
let minus = document.querySelector(".btns button:nth-child(2)")
let reset = document.querySelector(".btns button:nth-child(3)")
let start = document.querySelector(".timeb button:nth-child(1)")
let stopp = document.querySelector(".timeb button:nth-child(2)")
let res = document.querySelector(".timeb button:nth-child(3)")
let random = document.querySelector(".btns button:nth-child(4)")
let h = document.querySelector("h1")
let h2 = document.querySelector("h2")
let min = 0
let msec = 0
let sec = 0
let hour = 0
plus.onclick = () =>{
    h.innerHTML++
}
minus.onclick = () =>{
    h.innerHTML--
    if(h.innerHTML == -1){
        h.innerHTML++
    }
}
reset.onclick = () =>{
    h.innerHTML = 0
}
random.onclick = () =>{
    h.innerHTML =Math.round(Math.random()*100)
}
start.onclick = () =>{
    let timer = setInterval(() => {
        start.innerHTML = "START"
        msec++
        if(sec === 60){
            h2.innerHTML = 0
            sec = 0
            min++
        }
        if(msec === 250){
            msec = 0
            sec++
        }
        if(min === 60){
            min = 0
            hour++
        }
        h2.innerHTML = `${hour<10 ? `0${hour}`:hour}:${min<10 ? `0${min}`:min}:${sec<10 ? `0${sec}`:sec}:${msec*4}`
        stopp.onclick = () =>{
            clearInterval(timer)
            start.innerHTML = "CONTINUE"
        }
        res.onclick = () =>{
            min = 0
            sec = 0
            msec = 0
            h2.innerHTML = 0
            start.innerHTML = "START"

            clearInterval(timer)
        }
    }, 1);

}

console.log(start.innerHTML);
