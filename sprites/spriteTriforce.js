import {
    drawPixel,
    drawLine,
    vectorLine,
    c0, c1, c2, c3, c4, c5,
} from "../drawJS/__init.js"

export function spriteTriforce(ctx, x1, y1, coloR){

    let centerW = window.innerWidth / 2 - 210
    let centerH = window.innerHeight / 2 - 220

    x1 = x1 + centerW || centerW
    y1 = y1 + centerH || centerH

    coloR = coloR || "yellow"
    let z1 = 3
    ctx.save()

    vectorLine(ctx, 200 + x1, 100 + y1, 300 + x1, 300 + y1, z1, coloR);
    vectorLine(ctx, 100 + x1, 300 + y1, 200 + x1, 100 + y1, z1, coloR);
    vectorLine(ctx, 150 + x1, 200 + y1, 250 + x1, 200 + y1, z1, coloR);
    vectorLine(ctx, 250 + x1, 200 + y1, 200 + x1, 300 + y1, z1, coloR);
    vectorLine(ctx, 300 + x1, 300 + y1, 100 + x1, 300 + y1, z1, coloR);
    vectorLine(ctx, 200 + x1, 300 + y1, 150 + x1, 200 + y1, z1, coloR);

    vectorLine(ctx, 190 + x1, 100 + y1, 200 + x1, 100 +y1, z1, coloR);
    vectorLine(ctx, 190 + x1, 100 + y1, 90 + x1, 290 +y1, z1, coloR);
    vectorLine(ctx, 90 + x1, 290 + y1, 100 + x1,  300 + y1, z1, coloR);
    vectorLine(ctx, 140 + x1, 195 + y1, 150 + x1, 200 +y1, z1, coloR);
    vectorLine(ctx, 240 + x1, 201 + y1, 195 + x1, 287 +y1, z1, coloR);

    ctx.restore()
}

