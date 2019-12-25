var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var delay = function() {
    var a = 0;
    return function(b, c) {
        clearTimeout(a);
        a = setTimeout(b, c);
    };
}();

var W = 700;

var H = 500;

canvas.width = W;

canvas.height = H;

var numberFlakes = 100;

var flakes = [];

for (var i = 0; i < numberFlakes; i++) flakes.push({
    x: Math.random() * W,
    y: Math.random() * H,
    radius: 8 * Math.random() + 1
});

function drawFlakes() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.beginPath();
    for (var a = 0; a < numberFlakes; a++) {
        var b = flakes[a];
        ctx.moveTo(b.x, b.y);
        ctx.arc(b.x, b.y, b.radius, 0, 2 * Math.PI, true);
    }
    ctx.fill();
    moveFlakes();
}

var angle = 0;

function moveFlakes() {
    for (var a = 0; a < numberFlakes; a++) {
        var b = flakes[a];
        b.y += Math.cos(angle) + 1 + b.radius / 2;
        if (b.x > W + 5 || b.x < -5 || b.y > H) if (a % 3 > 0) flakes[a] = {
            x: Math.random() * W,
            y: -10,
            radius: b.radius
        }; else if (Math.sin(angle) > 0) flakes[a] = {
            x: -5,
            y: Math.random() * H,
            radius: b.radius
        }; else flakes[a] = {
            x: W + 5,
            y: Math.random() * H,
            radius: b.radius
        };
    }
}

function init() {
    drawFlakes();
}

setInterval(init, 30);

function newwin() {
    $("#conner").css("visibility", "hidden");
    $(".container").addClass("is-active");
    delay(function() {
        $(".popup").show();
    }, 3e3);
}

function hidepopup() {
    $(".popup").hide();
}

var delay = function() {
    var a = 0;
    return function(b, c) {
        clearTimeout(a);
        a = setTimeout(b, c);
    };
}();