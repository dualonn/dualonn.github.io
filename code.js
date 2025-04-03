function pagehandler(trigger){
    document.getElementById(trigger.id.split("-")[0]).style.display = "flex"
    document.querySelectorAll(`body > div:not(#${trigger.id.split("-")[0]}, .top-bar)`).forEach(element =>{
        element.style.display = "none"
    })
}

function scroll(){
    console.log(document.getElementById("img-carousel").scrollLeft)
    document.getElementById("img-carousel").scrollLeft += 1.5
    if(document.getElementById("img-carousel").scrollLeft > ((document.getElementById("img-carousel").children.length - 1) * 1100) - 1){
        document.getElementById("img-carousel").scrollLeft = 0
    }
    requestAnimationFrame(scroll)
}

requestAnimationFrame(scroll)

// function pagehandler(trigger, newshow){
//     let thisid = trigger.id;
//     let divs = document.getElementsByClassName("show")
//     console.log(document.getElementsByClassName("show"))

//     for(let data of divs){
//         document.getElementById(data.id).className = "shownone"
//     }

//     document.getElementById(newshow).className = "show"
// }
