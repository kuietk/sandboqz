export {
    spriteSig
}

import {
    drawPixel,
    drawLine,
    c0, c1, c2, c3, c4, c5, c6,
    c7, c8, c9, c10, c11
} from "../drawJS/__init.js"

function spriteSig(ctx, x1, y1, z1){
    let centerW = window.innerWidth / 2 - 65
    let centerH = window.innerHeight / 2 - 80

    x1 = x1 + centerW || centerW
    y1 = y1 + centerH || centerH

    z1 = z1 * 0.5 || 0


    //outline
    drawPixel(ctx, 47.5 + x1, 17.5 + y1, 15 + z1, 105, c0)
        //right side
    drawPixel(ctx, 57.5 + x1, 87.5 + y1, 15 + z1, 15, c0)
    drawPixel(ctx, 67.5 + x1, 97.5 + y1, 15 + z1, 15, c0)
    drawPixel(ctx, 77.5 + x1, 107.5 + y1, 15 + z1, 15, c0)
    drawPixel(ctx, 67.5 + x1, 77.5 + y1, 15 + z1, 15, c0)
    drawPixel(ctx, 77.5 + x1, 67.5 + y1, 15 + z1, 15, c0)
        //left side
    drawPixel(ctx, 37.5 + x1, 37.5 + y1, 15 + z1, 15, c0)
    drawPixel(ctx, 27.5 + x1, 47.5 + y1, 15 + z1, 15, c0)
    drawPixel(ctx, 27.5 + x1, 27.5 + y1, 15 + z1, 15, c0)
    drawPixel(ctx, 17.5 + x1, 17.5 + y1, 15 + z1, 15, c0)
    drawPixel(ctx, 17.5 + x1, 57.5 + y1, 15 + z1, 15, c0)

    //body
    drawPixel(ctx, 50 + x1, 20 + y1, 10 + z1, 100, c11)

    drawLine(ctx, 60 + x1, 90 + y1, 10 + z1 * 0.5, 3 , 1, c11)
    drawLine(ctx, 60 + x1, 90 + y1, 10 + z1 * 0.5, 3, 0, c11)

    drawLine(ctx, 20 + x1, 60 + y1, 10 + z1 * 0.5, 3, 0, c11)
    drawLine(ctx, 20 + x1, 20 + y1, 10 + z1 * 0.5, 3, 1, c11)


}










// not sure what broke here
//spriteSig SPRITE
/*
function spritE(ctx, x1, y1, size, size, color){
    x1 = x1 || 0
    y1 = y1 || 0


    size = size || 5;
    color = color || "yellow"
    
    ctx.save()
    drawPixel(ctx, 90 + x1, 43 + y1, size, size, color);
                
    drawPixel(ctx, 90 + x1, 47 + y1, size, size, color);
    drawPixel(ctx, 90 + x1, 50 + y1, size, size, color);
    drawPixel(ctx, 90 + x1, 53 + y1, size, size, color);
    drawPixel(ctx, 90 + x1, 56 + y1, size, size, color);
    drawPixel(ctx, 90 + x1, 59 + y1, size, size, color);
            
    drawPixel(ctx, 87 + x1, 53 + y1, size, size, color);
    drawPixel(ctx, 84 + x1, 50 + y1, size, size, color);
    drawPixel(ctx, 84 + x1, 56 + y1, size, size, color);
            
    drawPixel(ctx, 90 + x1, 62 + y1, size, size, color);
    drawPixel(ctx, 90 + x1, 65 + y1, size, size, color);
    drawPixel(ctx, 93 + x1, 362 + y1, size, size, color);
    drawPixel(ctx, 96 + x1, 65 + y1, size, size, color);
    drawPixel(ctx, 96 + x1, 59 + y1, size, size, color);
    drawPixel(ctx, 90 + x1, 69 + y1, size, size, color);
    ctx.restore()        
}
function spriteSig(ctx, x1, y1){



    let centerW = window.innerWidth / 2
    let centerH = window.innerHeight / 2 

    x1 = x1 + centerW || centerW
    y1 = y1 + centerH || centerH



    spritE(ctx, -0.5 + x1, 24.5 + y1, 4, "red");            
    spritE(ctx, 1 + x1, 26 + y1, 2, "darkgreen");
    spritE(ctx, 0 + x1, 25 + y1, 2, "lightgreen");
}
*/