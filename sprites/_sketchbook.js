import {
    drawPixel,
    c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, 
    c10, c11, c12, c13, c14, c15, c16, c17
} from "../drawJS/__init.js"
// .. to move up a folder 

import {
    midX, midY
} from "../main.js"

export function onE(ctx, x1, y1){//bg
    drawPixel(ctx, 45 + x1, 45 + y1, 70, 100)
    drawPixel(ctx, 50 + x1, 50 + y1, 60, 90, c9)
}

export function twO(ctx, x1, y1){ //2
    drawPixel(ctx, 70 + x1, 60 + y1, 5, 10, c10)
    drawPixel(ctx, 60 + x1, 55 + y1, 10, 5, c10)
    drawPixel(ctx, 60 + x1, 70 + y1, 10, 5, c10)
    drawPixel(ctx, 55 + x1, 75 + y1, 5, 10, c10)
    drawPixel(ctx, 60 + x1, 85 + y1, 10, 5, c10)


}

export function threE(ctx, x1, y1){
    drawPixel(ctx, 60 + x1, 100 + y1, 5 , 20, c4)
    drawPixel(ctx, 55 + x1, 120 + y1, 15, 5, c16)
    drawPixel(ctx, 60 + x1, 125 + y1, 5, 10, c10)
}

export function fouR(ctx, x1, y1){
    onE(ctx, x1, y1)
    twO(ctx, x1, y1)
    threE(ctx, x1, y1)
}

export function fivE(ctx, x1, y1){

}

export function siX(ctx){

}

export function seveN(ctx){

}