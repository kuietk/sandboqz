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

//SPRITES
import * as sprite from "./sprites/__initSprite.js";
import * as scn from "./scenes/initScene.js"
var canvas = document.getElementById("main");
// references [canvas] 
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 20
canvas.height = window.innerHeight - 20
// sets context params for [canvas] 
//-----------------------------------------------//
export const midX = canvas.width / 2
export const midY = canvas.height / 2

//grid
drawGrid(ctx);//needs adjusting //maybe some more, i dunno
//pallet
drawPalette(ctx, midX - 170, midY - 50);           





scn.boardConcept(ctx)

//sprite.onE(ctx)
//sprite.twO(ctx)
//sprite.threE(ctx)
//sprite.fouR(ctx, 110, 0)

sprite.swordsOne(ctx,30,0)


//drawPixel(ctx)
//vectorLine(ctx, 45, 200, 60, 200, 10)
//spriteShip(ctx, 100, -200)

//spriteSig(ctx, 95, 210) //needs to be able to change size           
                   
           
//spriteTetrisT(ctx, -40, -200,);//fixed
//spriteTriforce(ctx, 0, 0, "red")//fixed
         
      
/* THE Graveyard 









*/