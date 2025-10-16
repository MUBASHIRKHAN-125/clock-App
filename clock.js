let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let daysDisplay = document.getElementById("days");

let updateDays = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" ,"Friday" , "Saturaday"  ];

const updateTime = () => {

    setInterval(() => {

        setInterval(() => {

            const currentDate = new Date();

            daysDisplay.innerText = updateDays[currentDate.getDay()];
            let hr = currentDate.getHours();
            let min = currentDate.getMinutes();
            let sec = currentDate.getSeconds();

            let session = hr >= 12 ? "PM" : "AM";
            hr = hr % 12 || 12;

            hr = hr < 10 ? "0" + hr : hr;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;

            hours.innerText = hr;
            minutes.innerText = min;
            seconds.innerText = sec;

            document.getElementById("session").innerText = session;

        }, 1000);

    });
};
updateTime();