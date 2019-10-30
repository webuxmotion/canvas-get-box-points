const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//
// lib variables
//

var point_size = 4;
var font_size = "20px";
// order is matter
var pointsNames = ["a", "b", "c", "f", "e", "d", "g"];
var points = {};
// END. lib variables

//
// Client's variables
//

var center_x = 150;
var center_y = 250;

var angle_1 = 25;
var angle_2 = 15;

var right_side = 100;
var left_side = 100;

var height = 40;

generatePoints();
drawPoints();

function generatePoints() {
    pointsNames.forEach(el => {
        points[el] = getPoint(el);
    });
}

function drawPoints() {
    pointsNames.forEach(el => {
        drawP(points[el], el);
    });
}

function getPoint(point) {
    switch (point) {
        case "a":
        {
            var x = center_x;
            var y = center_y;
            return [x, y];
        }
            break;

        case "b":
        {
            var x = center_x + right_side;
            var y = center_y + Math.tan(-toRadian(angle_1)) * right_side;
            return [x, y];
        }
            break;

        case "c":
        {
            var x = points.b[0];
            var y = points.b[1] - height;
            return [x, y];
        }
            break;

        case "f":
        {
            var x = center_x - left_side;
            var y = center_y + Math.tan(-toRadian(angle_2)) * left_side;
            return [x, y];
        }
            break;

        case "e":
        {
            var x = points.f[0];
            var y = points.f[1] - height;
            return [x, y];
        }
            break;

        case "d":
        {
            var x = points.c[0] - left_side;
            var y = points.f[1] - (points.a[1] - points.c[1]);
            return [x, y];
        }
            break;

        case "g":
        {
            var x = center_x;
            var y = center_y - height;
            return [x, y];
        }
            break;
    }
}

function drawP(coords, label) {
    var x = coords[0];
    var y = coords[1];

    ctx.beginPath();
    ctx.arc(x, y, point_size, 0, 2 * Math.PI);
    ctx.fill();

    ctx.font = font_size;
    ctx.fillText(label, x + 10, y);
}

function toRadian(angle) {
    return (angle * Math.PI) / 180;
}
