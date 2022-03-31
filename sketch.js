var weight=[35,38,40,45]
function avg(){
  var sum=weight[0]+weight[1]+weight[2]+weight[3]
  console.log(sum);
  var average=sum/weight.length;
  console.log(average);
}
function setup() 
{
  createCanvas(400,400);
  avg();
}

function draw() 
{
background(51);

}

