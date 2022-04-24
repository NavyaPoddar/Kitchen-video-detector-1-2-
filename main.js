cocossd = "";
kitchenvideo = "";
modelstatus = "";

function preload() {
    kitchenvideo = createVideo("kitchen.mp4");
    kitchenvideo.hide();
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
}

function startapp() {
    cocossd = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("modelstatus_tag").innerHTML = "Status: Detecting Objects";
}

function modelloaded() {
    console.log("model has loaded");
    modelstatus = true;
    kitchenvideo.loop();
    kitchenvideo.speed(1);
    kitchenvideo.volume(0.2);
}

function draw() {
    image(kitchenvideo, 0, 0, 600, 450);
}