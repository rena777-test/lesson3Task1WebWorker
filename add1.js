window.onload = init;
let worker, first, second, result;
let worker2, first2, second2, result2;
let worker3, first3, second3, result3;
let worker4, first4, second4, result4;

function init() {
    if (window.Worker) {
        worker = new Worker("worker1.js");
        first = document.querySelector("#number1");
        second = document.querySelector("#number2");
        result = document.querySelector("p");
        btnAdd = document.getElementById("add");

        btnAdd.onclick = clickHandler;
        worker.onmessage = onmessageHandler;
    }
    if (window.Worker) {
        worker2 = new Worker("worker2.js");
        first2 = document.querySelector("#number1");
        second2 = document.querySelector("#number2");
        result2 = document.querySelector("p");
        btnSub = document.getElementById("sub");

        btnSub.onclick = clickHandler2;
        worker2.onmessage = onmessageHandler2;
    }
    if (window.Worker) {
        worker3 = new Worker("worker3.js");
        first3 = document.querySelector("#number1");
        second3 = document.querySelector("#number2");
        result3 = document.querySelector("p");
        btnMult = document.getElementById("mult");

        btnMult.onclick = clickHandler3;
        worker3.onmessage = onmessageHandler3;
    }
    if (window.Worker) {
        worker4 = new Worker("worker4.js");
        first4 = document.querySelector("#number1");
        second4 = document.querySelector("#number2");
        result4 = document.querySelector("p");
        btnDivis = document.getElementById("divis");

        btnDivis.onclick = clickHandler4;
        worker4.onmessage = onmessageHandler4;
    }
}

function clickHandler() {
    worker.postMessage([first.value, second.value]); // массив из 2-x значений(из первого инпута и со 2-го)
    console.log("Сообщение отправлено ");
}

function onmessageHandler(e) {
    result.innerHTML = e.data;
    console.log("Сообщение получено ");
};

function clickHandler2() {
    worker2.postMessage([first2.value, second2.value]); // массив из 2-x значений(из первого инпута и со 2-го)
    console.log("Сообщение отправлено ");
}

function onmessageHandler2(e) {
    result2.innerHTML = e.data;
    console.log("Сообщение получено ");
};

function clickHandler3() {
    worker3.postMessage([first3.value, second3.value]); // массив из 2-x значений(из первого инпута и со 2-го)
    console.log("Сообщение отправлено ");
}

function onmessageHandler3(e) {
    result3.innerHTML = e.data;
    console.log("Сообщение получено ");
};

function clickHandler4() {
    worker4.postMessage([first4.value, second4.value]); // массив из 2-x значений(из первого инпута и со 2-го)
    console.log("Сообщение отправлено ");
}

function onmessageHandler4(e) {
    result4.innerHTML = e.data;
    console.log("Сообщение получено ");
};
