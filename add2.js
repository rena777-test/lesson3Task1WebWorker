window.onload = init;

function init() {
   let btnAdd = document.getElementById("add");
   let btnSub = document.getElementById("sub");
   let btnMult = document.getElementById("mult");
   let btnDivis = document.getElementById("divis");
    btnAdd.onclick = clickHandler;
    btnSub.onclick = clickHandler;
    btnMult.onclick = clickHandler;
    btnDivis.onclick = clickHandler; 
}

function clickHandler(b) {
    let sign = b.path[0].innerHTML;//console.log(sign);
    let first = document.querySelector("#number1");
    let second = document.querySelector("#number2");
    if (window.Worker) {
        switch (sign) {
            case "+":
               let worker1 = new Worker("worker1.js");
                worker1.postMessage([first.value, second.value]); // массив из 2-x значений(из первого инпута и со 2-го)
                console.log("Сообщение отправлено ");
                worker1.onmessage = onmessageHandler;
                break;
            case "-":
               let worker2 = new Worker("worker2.js");
                worker2.postMessage([first.value, second.value]); // массив из 2-x значений(из первого инпута и со 2-го)
                console.log("Сообщение отправлено ");
                worker2.onmessage = onmessageHandler;
                break;
            case "*":
              let  worker3 = new Worker("worker3.js");
                worker3.postMessage([first.value, second.value]); // массив из 2-x значений(из первого инпута и со 2-го)
                console.log("Сообщение отправлено ");
                worker3.onmessage = onmessageHandler;
                break;
            case "/":
              let  worker4 = new Worker("worker4.js");
                worker4.postMessage([first.value, second.value]); // массив из 2-x значений(из первого инпута и со 2-го)
                console.log("Сообщение отправлено ");
                worker4.onmessage = onmessageHandler;
                break;
        }
    }
}

function onmessageHandler(e) {
    let result = document.querySelector("p");
    result.innerHTML = e.data;
    console.log("Сообщение получено ");
};




