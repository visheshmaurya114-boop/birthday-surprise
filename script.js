const surpriseBtn =
    document.getElementById("surpriseBtn");

const surpriseContent =
    document.getElementById("surpriseContent");

const flame =
    document.getElementById("flame");

const photo =
    document.getElementById("herPhoto");

const typingText =
    document.getElementById("typingText");

const extraMessage =
    document.getElementById("extraMessage");

const heart =
    document.getElementById("heart");


// MESSAGE

const message =
    "You are a very important person in my life ❤️";


// BUTTON CLICK

surpriseBtn.addEventListener("click", function () {

    // Prevent second click

    surpriseBtn.disabled = true;

    surpriseBtn.textContent =
        "🕯️ Making a wish...";


    // STEP 1
    // Candle goes out

    setTimeout(function () {

        flame.classList.add("blown");

    }, 300);


    // STEP 2
    // Surprise opens

    setTimeout(function () {

        surpriseContent.classList.add("show");

        surpriseBtn.textContent =
            "💖 Surprise Opened!";

    }, 1000);


    // STEP 3
    // Photo appears

    setTimeout(function () {

        photo.classList.add("show");

    }, 1800);


    // STEP 4
    // Start typing

    setTimeout(function () {

        typeMessage();

    }, 2900);


    // STEP 5
    // Extra message + heart

    setTimeout(function () {

        extraMessage.classList.add("show");

        heart.classList.add("show");

    }, 6500);


    // STEP 6
    // Confetti

    setTimeout(function () {

        createConfetti();

    }, 1100);

});


// TYPING FUNCTION

function typeMessage() {

    let index = 0;

    typingText.textContent = "";


    const typingInterval =
        setInterval(function () {

            typingText.textContent +=
                message[index];

            index++;


            if (index >= message.length) {

                clearInterval(typingInterval);

            }

        }, 65);

}


// CONFETTI

const canvas =
    document.getElementById("confetti");

const ctx =
    canvas.getContext("2d");


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


let confetti = [];


function createConfetti() {

    confetti = [];


    for (let i = 0; i < 180; i++) {

        confetti.push({

            x:
                Math.random() *
                canvas.width,

            y:
                -Math.random() *
                canvas.height,

            size:
                Math.random() * 8 + 4,

            speed:
                Math.random() * 4 + 2,

            rotation:
                Math.random() * 360,

            rotationSpeed:
                Math.random() * 6 - 3,

            symbol:
                Math.random() > 0.5
                    ? "❤"
                    : "✦"

        });

    }


    animateConfetti();

}


function animateConfetti() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    confetti.forEach(function (piece) {

        piece.y += piece.speed;

        piece.rotation +=
            piece.rotationSpeed;


        ctx.save();


        ctx.translate(
            piece.x,
            piece.y
        );


        ctx.rotate(
            piece.rotation *
            Math.PI /
            180
        );


        ctx.font =
            `${piece.size * 2}px Arial`;


        ctx.fillText(
            piece.symbol,
            0,
            0
        );


        ctx.restore();

    });


    confetti =
        confetti.filter(function (piece) {

            return piece.y <
                canvas.height + 50;

        });


    if (confetti.length > 0) {

        requestAnimationFrame(
            animateConfetti
        );

    }

}


// RESIZE

window.addEventListener(
    "resize",
    resizeCanvas
);