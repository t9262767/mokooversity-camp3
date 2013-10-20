/*jslint browser: true, devel: true, closure: true */
var gameModule = (function () {

    "use strict";

    var counter = 0,
        ballX,
        ballY,
        ballR,
        scores = 0,
        canvasover = document.getElementById("game"),
        ctxover = canvasover.getContext('2d');

    function gameover() {
        console.log("Final: " + scores);
    }

    function startGame() {

        var canvas = document.getElementById("game"),
            ctx = canvas.getContext('2d'),
            a = Math.ceil(Math.random() * 255),
            b = Math.ceil(Math.random() * 255),
            c = Math.ceil(Math.random() * 255);

        ballX = Math.ceil(Math.random() * 300);
        ballY = Math.ceil(Math.random() * 300);
        ballR = Math.ceil(Math.random() * 100);

        canvas.width = 430;
        canvas.height = 300;

        ctx.fillStyle = "rgb(" + a + "," + b + "," + c + ")";
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
        ctx.fill();

        if (counter >= 20) {
            gameover();
        } else {
            setTimeout(startGame, 1000);
            counter = counter + 1;
            console.log("Counter: " + counter);
        }
    }

    function touchEvent(evt) {

        var x = evt.clientX,
            y = evt.clientY,
            tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);

        console.log("click" + "   " + x + "  " + y + "  ");

        if (tmp < ballR * ballR) {

            ctxover.fillStyle = 'rgb(255,255,255)';
            ctxover.beginPath();
            ctxover.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
            ctxover.fill();

            scores = scores + (100 - ballR);
            console.log("good! u hit it! score:" + " " + scores);
        }
    }


    function start() {
        document.getElementById("main").addEventListener("click", touchEvent, false);
        startGame();
    }

    return {
        start: start
    };

}(document));

gameModule.start();