//creating variables
var thickness, wall;
var speed, weight, bullet;

//creating function setup
function setup() 
{
  //creating canvas
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 38);

  //creating sprite
  bullet = createSprite(50, 200, 100, 50);
  wall = createSprite(940, 200, thickness, height/2);

  //setting bullet's velocity
  bullet.velocityX = speed;

  //giving bullet a color
  bullet.shapeColor = "white";

  //setting color of wall
  wall.shapeColor = (80, 80, 80);
}

//creating draw function
function draw() 
{
  //creating background
  background(0, 0, 0); 

    if (hasCollided(bullet, wall))
    {
      bullet.velocityX = 0;
    
      //creating varianble deformation
      var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

      if (damage > 10)
      {
        bullet.shapeColor = "red";
      }

      if (damage < 10 )
      {
        bullet.shapeColor = "green";
      }
    }

  //displaying sprites
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;

}