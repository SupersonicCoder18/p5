function preload()
{

}

function setup()
{
    canvas=createCanvas(700,500);
    canvas.position(400,400);
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,600,450);
}

function takeShot()
{
    save("hellur.png")
}