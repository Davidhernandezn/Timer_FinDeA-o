const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const newYear = '1 Jan 2025';

function countTimer(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000; //PARA MILISEGUNDOS

    const daysCalc = Math.floor(totalSeconds / 3600 / 24) //DIAS

    const hoursCalc = Math.floor(totalSeconds / 3600) % 24; //CONVIERTE A  HORAS, DIVIDIR POR 24 Y EL RESTO ES M
    const minsCalc = Math.floor(totalSeconds / 3600 / 60) % 60; //MINUTOS
    const secondsCalc = Math.floor(totalSeconds %  60); //SEGUNDOS

    //PARA AGREGARLO AL HTML
    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    mins.innerHTML = minsCalc;
    seconds.innerHTML = secondsCalc;
}

countTimer()
setInterval(countTimer, 1000);//EJECUTA EL METODO CADA SEGUNDO

//CREAR SELECTORES

const notificarBtn = document.querySelector('#notificar');
//AÑADIMOS LISTENER 
notificarBtn.addEventListener('click', () => {
    //PROMISE, RESULEVE CON THEN
    //Notification (ES UN OBJETO)
    Notification.requestPermission().then(resultado => {
        console.log('Respuesta: ', resultado);
    })
});

verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        // MOSTRAR NOTIFICACION
        const notificacion = new Notification('ESTO ES LA NOTIFICACION', {
            icon: './CapturaTimer.png',
            body: 'Tutoriales de js',
        });

        console.log('SHOW NOTIDF');
        notificacion.onclick = function () {
            window.open('https://google.com');
        };
    }
});


