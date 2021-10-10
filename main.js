let myPs = document.querySelectorAll(".date");
let myBox = document.querySelectorAll(".box");
let container = document.querySelector(".container");


myPs[0].addEventListener("click" , function(e) {
    let currentClass = container.classList[1];
    myPs[0].style.color = "white";
    if(currentClass != "daily" && currentClass == "weekly") {
        myPs[1].style.color = "#bdc1ff";
    }
    if(currentClass != "daily" && currentClass == "monthly") {
        myPs[2].style.color = "#bdc1ff";
    }
    // Moving
    if(currentClass != "daily") {
    myBox.forEach(function(box) {
        box.classList.add("moving");
        box.style.animationPlayState = "running";
        setTimeout(function() {
            if(container.classList.contains("daily") === false) {
                container.classList.remove(currentClass);
                container.classList.add("daily");
                myBox.forEach(function(box) {
                    box.querySelector("p:nth-child(2)").textContent = Math.floor(Math.random() * 25) + "hrs"; 
                })
            }
        } , 1000)
        setTimeout(() => box.classList.remove("moving") , 2000)
    })
}
})
myPs[1].addEventListener("click" , function(e) {
    let currentClass = container.classList[1];
    myPs[1].style.color = "white";
    if(currentClass != "weekly" && currentClass == "daily") {
        myPs[0].style.color = "#bdc1ff";
    }
    if(currentClass != "weekly" && currentClass == "monthly") {
        myPs[2].style.color = "#bdc1ff";
    }
    // Moving
    if(currentClass !="weekly") {
    myBox.forEach(function(box) {
        box.classList.add("moving");
        box.style.animationPlayState = "running"
        setTimeout(function() {
            if(container.classList.contains("weekly") === false) {
                container.classList.remove(currentClass);
                container.classList.add("weekly");
                myBox.forEach(function(box) {
                    box.querySelector("p:nth-child(2)").textContent = Math.floor(Math.random() * 49) + "hrs"; 
                })
            }
        } , 1000)
        setTimeout(() => box.classList.remove("moving") , 2000)

    })
}
})
myPs[2].addEventListener("click" , function(e) {
    let currentClass = container.classList[1];
    myPs[2].style.color = "white";
    if(currentClass != "monthly" && currentClass == "daily") {
        myPs[0].style.color = "#bdc1ff";
    }
    if(currentClass != "monthly" && currentClass == "weekly") {
        myPs[1].style.color = "#bdc1ff";
    }
    // Moving
    if(currentClass != "monthly") {
    myBox.forEach(function(box) {
        box.classList.add("moving");
        box.style.animationPlayState = "running"
        setTimeout(function() {
            if(container.classList.contains("monthly") === false) {
                container.classList.remove(currentClass);
                container.classList.add("monthly");
                myBox.forEach(function(box) {
                    box.querySelector("p:nth-child(2)").textContent = Math.floor(Math.random() * (7 * 25)) + "hrs"; 
                })
            }
        } , 1000)
        setTimeout(() => box.classList.remove("moving") , 2000)
    })
}
})
