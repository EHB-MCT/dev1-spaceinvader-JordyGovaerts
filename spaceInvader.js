"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawBackground();
drawSpaceInvader();

function drawBackground(){

    context.beginPath();
    context.fillStyle = "black";
    context.rect(75,75,300,300);
    context.stroke();
    context.fill();
}

function drawSpaceInvader(){

    context.beginPath();
    context.fillStyle = "#66FF00";
    context.strokeStyle = "#66FF00";
    context.rect(100,100,50,50);
    context.rect(150,150,50,200);
    context.rect(100,250,50,50);
    context.rect(200,300,50,50);
    context.rect(200,100,50,50);
    context.rect(250,150,50,200);
    context.rect(300,100,50,50);
    context.rect(300,250,50,50);
    context.stroke();
    context.fill();
}