import {
    drawPixel,
    drawLine
} from "../drawJS/__init.js"

export const c0 = "#BBBBBB"
export const c1 = "white"
export const c2 = "grey"
export const c3 = "#333333"
export const c4 = "darkred"
export const c5 = "#6699FF"

export {
    spriteShip
}


function spriteShip(ctx, x1, y1){

    let centerW = window.innerWidth / 2 - 80
    let centerH = window.innerHeight / 2 - 80

    x1 = x1 + centerW || centerW
    y1 = y1 + centerH || centerH

    //ship
    drawPixel(ctx, x1 + 40, y1 + 75, 60, 10, c2 )


    drawPixel(ctx, x1 + 80, y1 + 80, 15, 10, c4)
    drawPixel(ctx, x1 + 45, y1 + 80, 15, 10, c4)
    drawPixel(ctx, x1 + 40, y1 + 60, 60, 20, c0)
    drawPixel(ctx, x1 + 60, y1 + 40, 20, 20, c0)
    drawPixel(ctx, x1 + 50, y1 + 50, 40, 20, c0)

    //window
    drawPixel(ctx, x1 + 60, y1 + 50, 20,10, "lightblue")
    drawPixel(ctx, x1 + 60, y1 + 50, 10, 5, c1)
    drawPixel(ctx, x1 + 60, y1 + 55, 20, 5, c5)


    //refined



    drawLine(ctx, x1 + 40, y1 + 70, 5, 3, 0, c2)
    drawLine(ctx, x1 + 85, y1 + 60, 5, 3, 1, c2)
    drawLine(ctx, x1 + 40, y1 + 60, 5, 4, 0, c2)
    drawLine(ctx, x1 + 80, y1 + 45, 5, 4, 1, c2)

    drawPixel(ctx,x1 + 60, y1 + 65,20, 10, c2)
    drawPixel(ctx,x1 + 60, y1 + 65, 5, 5, c0)
    drawPixel(ctx,x1 + 75, y1 + 65, 5, 5, c0)

    drawPixel(ctx,x1 + 47.5, y1 + 77.5, 10, 5, c4)
    drawPixel(ctx,x1 + 82.5, y1 + 77.5, 10, 5, c4)

    drawPixel(ctx, x1 + 47.5, y1 + 85, 10, 5, "orange")
    drawPixel(ctx, x1 + 82.5, y1 + 85, 10, 5, "orange")


}