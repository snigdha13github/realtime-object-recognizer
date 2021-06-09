function setup()
{
    c1=createCanvas(600,500);
    c1.center();
    v1=createCapture(VIDEO);
    v1.hide();
    realtime=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pJD_C2C60/model.json",modelLoaded);
}
function draw()
{
    image(v1,0,0,600,500);
    realtime.classify(v1,gotResult);
}
function modelLoaded()
{
    console.log("model has loaded");
}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}