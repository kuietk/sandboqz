import {
    drawPixel,
    drawLine,
    c0, c1, c2, c3, c4, c5,
} from "../drawJS/__init.js"

export function spriteTetrisT(ctx, x1, y1){
    let scalE = 10;
    
    let centerW = window.innerWidth / 2 - 60
    let centerH = window.innerHeight / 2 - 60

    x1 = x1 + centerW || centerW
    y1 = y1 + centerH || centerH


    ctx.save();   
    
    //outline
    drawPixel(ctx, -3.5 + x1, 0 + y1, 2.6 * scalE, 2.6 * scalE, "white"); //middle
    drawPixel(ctx, -3 + x1, 25.5 + y1, 2.6 * scalE, 2.6 * scalE, "white");
    drawPixel(ctx, 22.5 + x1, 0 + y1, 2.6 * scalE, 2.6 * scalE, "white"); //right
    drawPixel(ctx, -28.5 + x1, 0 + y1, 2.6 * scalE, 2.6 * scalE, "white"); //left

     //middle top
    drawPixel(ctx, -2.5 + x1, 0.5 + y1, 2.5 * scalE, 2.5 * scalE, "blue"); 
    drawPixel(ctx, 0 + x1, 3 + y1, 2 * scalE, 2 * scalE, "darkblue");
     //middle bottom
    drawPixel(ctx, -2.5 + x1, 26 + y1, 2.5 * scalE, 2.5 * scalE, "blue");
    drawPixel(ctx, 0 + x1, 28.5 + y1, 2 * scalE, 2 * scalE, "darkblue");
     //right
    drawPixel(ctx, 23 + x1, 0.5 + y1, 2.5 * scalE, 2.5 * scalE, "blue");
    drawPixel(ctx, 25 + x1, 2.5 + y1, 2 * scalE, 2 * scalE, "darkblue");
     //left
    drawPixel(ctx, -28 + x1, 0.5 + y1, 2.5 * scalE, 2.5 * scalE, "blue");
    drawPixel(ctx, -25 + x1, 3 + y1, 2 * scalE, 2 * scalE, "darkblue");
    

    ctx.restore()

}

/*


function spriteTetrisA(ctx, x1, y1, scalE, rotatE){
    scalE = scalE || 2
    
    x1 = x1 || 0
    y1 = y1 || 0

    rotatE = rotatE || 0

    ctx.save()   
    brushPixel(ctx)
    


    ctx.restore()

}
*/