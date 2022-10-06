"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSpaceInvader();

function drawSpaceInvader(){

    context.beginPath();
    context.fillStyle = "#a35ad5";
    context.strokeStyle = "#a35ad5";
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