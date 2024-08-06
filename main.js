//IMPORTS
// - needs the `./`
import{
    drawGrid,
    drawPixel,
    drawLine,
    vectorLine,
    drawPalette,

    c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, 
    c10, c11, c12, c14, c15, c16, c17
}from "./drawJS/__init.js"

//sprites
import { 
    spriteShip,
    spriteSig,
    spriteTetrisT,
    spriteTriforce
} from "./sprites/__initSprite.js";


var canvas = document.getElementById("main");
// references [canvas] 
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 20
canvas.height = window.innerHeight - 20
// sets context params for [canvas] 
//-----------------------------------------------//

//grid
drawGrid(ctx);//needs adjusting //maybe some more, i dunno
//drawPixel(ctx)
//vectorLine(ctx, 45, 200, 60, 200, 10)
spriteShip(ctx, 100, -200)

spriteSig(ctx, 95, 210) //needs to be able to change size           
                   
           
spriteTetrisT(ctx, -40, -200,);//fixed
spriteTriforce(ctx, 0, 0, "red")//fixed
drawPalette(ctx, 0, 222.5);           
         
      
/* THE Graveyard 









*/