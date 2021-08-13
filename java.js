/**
 * Created by zhang5170 on 11/15/2017.
 */
function draw(){
    drawSun();
    drawCloud1(200, 0);
    drawCloud2(370, 0);
    drawCloud3(540, 0);
    drawRects();
    drawLine1(0);
    drawLine2(0);
    drawLine3(0);
    drawBoat(0);
}

function drawCloud1(xStart, xCoor){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#B3B3B3";
    ctx.beginPath();
    ctx.arc(xStart + xCoor,30,15,0,2*Math.PI);
    ctx.arc(xStart + 10 + xCoor,40,18,0,2*Math.PI);
    ctx.arc(xStart - 10 + xCoor,40,15,0,2*Math.PI);
    ctx.arc(xStart + 10 + xCoor,30,17,0,2*Math.PI);
    ctx.arc(xStart + 27 + xCoor,35,20,0,2*Math.PI);
    ctx.fill();
}

function drawCloud2(xStart, xCoor){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#B3B3B3";
    ctx.beginPath();
    ctx.arc(xStart + xCoor,60,13,0,2*Math.PI);
    ctx.arc(xStart + 10 + xCoor,65,15,0,2*Math.PI);
    ctx.arc(xStart + 10 + xCoor,55,15,0,2*Math.PI);
    ctx.arc(xStart + 20 + xCoor,55,10,0,2*Math.PI);
    ctx.arc(xStart + 30 + xCoor,60,20,0,2*Math.PI);
    ctx.arc(xStart + 40 + xCoor,70,18,0,2*Math.PI);
    ctx.arc(xStart + 20 + xCoor,70,15,0,2*Math.PI);
    ctx.arc(xStart + 40 + xCoor,60,17,0,2*Math.PI);
    ctx.arc(xStart + 57 + xCoor,65,15,0,2*Math.PI);
    ctx.fill();
}

function drawCloud3(xStart, xCoor){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#B3B3B3";
    ctx.beginPath();
    ctx.arc(xStart + xCoor,43,12,0,2*Math.PI);
    ctx.arc(xStart - 5 + xCoor,43,12,0,2*Math.PI);
    ctx.arc(xStart - 10 + xCoor,48,12,0,2*Math.PI);
    ctx.arc(xStart - 5 + xCoor,43,12,0,2*Math.PI);
    ctx.arc(xStart + xCoor,42,10,0,2*Math.PI);
    ctx.arc(xStart + 10 + xCoor,45,15,0,2*Math.PI);
    ctx.arc(xStart + 20 + xCoor,55,18,0,2*Math.PI);
    ctx.arc(xStart + xCoor,55,15,0,2*Math.PI);
    ctx.arc(xStart + 20 + xCoor,45,17,0,2*Math.PI);
    ctx.arc(xStart + 37 + xCoor,50,20,0,2*Math.PI);
    ctx.fill();
}

function drawSun(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#FFFF66";
    ctx.beginPath();
    ctx.arc(60,40,30,0,2*Math.PI);
    ctx.fill();
}

function drawLine1(xCoor){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.strokeStyle = "#0000FF";
    ctx.beginPath();
    ctx.moveTo(10 + xCoor,320);
    ctx.lineTo(80 + xCoor,320);
    ctx.lineWidth = 5;
    ctx.moveTo(120 + xCoor,320);
    ctx.lineTo(190 + xCoor,320);
    ctx.lineWidth = 5;
    ctx.moveTo(230 + xCoor,320);
    ctx.lineTo(300 + xCoor,320);
    ctx.lineWidth = 5;
    ctx.moveTo(340 + xCoor,320);
    ctx.lineTo(410 + xCoor,320);
    ctx.lineWidth = 5;
    ctx.moveTo(450 + xCoor,320);
    ctx.lineTo(520 + xCoor,320);
    ctx.lineWidth = 5;
    ctx.moveTo(560 + xCoor,320);
    ctx.lineTo(630 + xCoor,320);
    ctx.lineWidth = 5;
    ctx.stroke();
}

function drawLine2(xCoor){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.strokeStyle = "#0000FF";
    ctx.beginPath();
    ctx.moveTo(30 + xCoor,350);
    ctx.lineTo(100 + xCoor,350);
    ctx.lineWidth = 5;
    ctx.moveTo(150 + xCoor,350);
    ctx.lineTo(220 + xCoor,350);
    ctx.lineWidth = 5;
    ctx.moveTo(260 + xCoor,350);
    ctx.lineTo(330 + xCoor,350);
    ctx.lineWidth = 5;
    ctx.moveTo(370 + xCoor,350);
    ctx.lineTo(440 + xCoor,350);
    ctx.lineWidth = 5;
    ctx.moveTo(480 + xCoor,350);
    ctx.lineTo(550 + xCoor,350);
    ctx.lineWidth = 5;
    ctx.moveTo(590 + xCoor,350);
    ctx.lineTo(660 + xCoor,350);
    ctx.lineWidth = 5;
    ctx.stroke();
}

function drawLine3(xCoor){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.strokeStyle = "#0000FF";
    ctx.beginPath();
    ctx.moveTo(5 + xCoor,380);
    ctx.lineTo(75 + xCoor,380);
    ctx.lineWidth = 5;
    ctx.moveTo(115 + xCoor,380);
    ctx.lineTo(185 + xCoor,380);
    ctx.lineWidth = 5;
    ctx.moveTo(225 + xCoor,380);
    ctx.lineTo(295 + xCoor,380);
    ctx.lineWidth = 5;
    ctx.moveTo(335 + xCoor,380);
    ctx.lineTo(405 + xCoor,380);
    ctx.lineWidth = 5;
    ctx.moveTo(445 + xCoor,380);
    ctx.lineTo(515 + xCoor,380);
    ctx.lineWidth = 5;
    ctx.moveTo(555 + xCoor,380);
    ctx.lineTo(625 + xCoor,380);
    ctx.lineWidth = 5;
    ctx.stroke();
}

function drawRects() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#282828";
    ctx.fillRect(0,210, 600, 70);
    ctx.fillRect(170, 170, 150, 130);
    ctx.fillRect(400, 170, 50, 130);
    ctx.fillRect(470, 130, 25, 170);
    ctx.fillStyle = "#303030";
    ctx.fillRect(300, 30, 60, 280);
    ctx.fillStyle = "#505050";
    ctx.fillRect(100, 100, 60, 200);
    ctx.fillRect(200, 200, 40, 100);
    ctx.fillRect(250, 150, 45, 150);
    ctx.fillRect(400, 200, 100, 100);
    ctx.fillStyle = "#606060";
    ctx.fillRect(500, 150, 50, 150);
    ctx.fillRect(570, 200, 80, 130);
    ctx.fillStyle = "#707070";
    ctx.fillRect(0, 180, 20, 120);
    ctx.fillRect(40, 150, 50, 150);
    ctx.fillRect(180, 240, 100, 50);
    ctx.fillRect(340, 120, 80, 170);
    ctx.fillStyle = "#484848";
    ctx.fillRect(380, 230, 150, 60);
    ctx.fillRect(0, 220, 70, 70);
    ctx.fillStyle = "#606060";
    ctx.fillRect(0,270, 600, 40);
    ctx.fillStyle = "#0099FF";
    ctx.fillRect(0, 300, 600, 100);
}

function drawBoat(xCoor){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(240 + xCoor, 280);
    ctx.lineTo(290 + xCoor, 280);
    ctx.lineTo(240 + xCoor, 330);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(190 + xCoor, 280);
    ctx.lineTo(140 + xCoor, 280);
    ctx.lineTo(190 + xCoor, 330);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#CC3300";
    ctx.beginPath();
    ctx.moveTo(215 + xCoor, 210);
    ctx.lineTo(215 + xCoor, 275);
    ctx.lineTo(270 + xCoor, 275);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(215 + xCoor, 210);
    ctx.lineTo(215 + xCoor, 275);
    ctx.lineTo(160 + xCoor, 275);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(190 + xCoor, 280, 50, 50);
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.arc(235 + xCoor,300,10,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(195 + xCoor,300,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#FFCC00";
    ctx.beginPath();
    ctx.arc(235 + xCoor,300,10,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(195 + xCoor,300,10,0,2*Math.PI);
    ctx.fill();
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(215 + xCoor,280);
    ctx.lineTo(215 + xCoor,210);
    ctx.stroke();
}

var a;
var xNum1 = 0;
var xNum2 = 0;
var xNum3 = 0;
var xNum4 = 0;
var xNum5 = 0;
var xNum6 = 0;
var xNum7 = 0;


function initialize() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    drawBackground();
}

function startAnimation() {
    animate();
}

function stopAnimation() {
    cancelAnimationFrame(a);
}

function animate() {
    a = requestAnimationFrame(animate);
    drawBackground();
    drawSun();
    moveCloud1();
    moveCloud2();
    moveCloud3();
    drawRects();
    moveLine1();
    moveLine2();
    moveLine3();
    moveBoat();
}

function drawBackground() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#FFCC00";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
}

function moveBoat(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    drawBoat(xNum1);
    xNum1++;
}

function moveLine1(){
    //var ctx = document.getElementById("myCanvas").getContext("2d");
    drawLine1(xNum2);
    xNum2++;
    if (xNum2 > 40){
        xNum2 = -10;
    }
}

function moveLine2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    drawLine2(xNum3);
    xNum3++;
    if (xNum3 > 10){
        xNum3 = -30;
    }
}

function moveLine3(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    drawLine3(xNum4);
    xNum4++;
    if (xNum4 > 45){
        xNum4 = -5;
    }
}


function moveCloud1(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    drawCloud1(200, xNum5);
    xNum5++;
    if (xNum5 > 410){
        xNum5 = -200;
    }
}

function moveCloud2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    drawCloud2(370, xNum6);
    xNum6++;
    if (xNum6 > 240){
        xNum6 = -370;
    }
}

function moveCloud3(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    drawCloud3(540, xNum7);
    xNum7++;
    if (xNum7 > 70){
        xNum7 = -540;
    }
}

