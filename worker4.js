onmessage = function (e){
    console.log('Получено сообщение от основного потока');
    let workerResult = "Результат деления : " + (e.data[0] / e.data[1]);
    if(e.data[1] === "0"){
        workerResult = "На ноль не делят!";
    }
    console.log('Отправка сообщения в  основной поток');
    this.postMessage(workerResult);
}