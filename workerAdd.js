onmessage = function (e){
    console.log('Получено сообщение от основного потока');
    let workerResult = "Результат сложения : " + (parseInt(e.data[0] ,10) + parseInt(e.data[1],10));
    console.log('Отправка сообщения в  основной поток');
    this.postMessage(workerResult);
}