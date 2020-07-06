let cnv = document.getElementById("Canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;

drawBox(2.5, 'blue', 50, 30, 200, 300);
drawBox(5, 'green', 275, 250, 300, 300);
drawBox(7.5, 'red', 600, 50, 200, 100);
drawBox(10, 'yellow', 300, 575, 400, 200);

drawFace(1, 1, 400, 100, 'yellow');
drawFace(2, 2, 430, 300, 'blue');
drawFace(0.5, 2, 100, 145, 'orange');
drawFace(2, 0.25, 400, 300, 'green');

function drawBox(num, color, x, y, w, h)
{
    ctx.lineWidth = num;
    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, w, h);
}   

function drawFace(x_num, y_num, x, y, color)
{
    ctx.scale(x_num, y_num);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x-20, y-20, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x+20, y-20, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y+10, 25, 0 * Math.PI, Math.PI);
    ctx.stroke();
}


