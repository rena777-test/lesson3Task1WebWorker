onmessage = function (e){
    console.log('Получено сообщение от основного потока');
    let workerResult = "Результат умножения : " + (e.data[0] * e.data[1]);
    console.log('Отправка сообщения в  основной поток');
    this.postMessage(workerResult);
}