import { 
    drawPixel 
} from "./__init.js"

export {
    drawPalette,
    c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, 
    c10, c11, c12, c14, c15, c16, c17
}

const c0 = "#FFFFFF"
const c1 = "#CCCCCC"
const c2 = "#999999"
const c3 = "#666666"
const c4 = "#333333"
const c5 = "#000000"

const c6 = "blue"
const c7 = "green"
const c8 = "yellow"
const c9 = "orange"
const c10 = "red"
const c11 = "violet"

const c12 = "darkblue"
const c13 = "darkgreen"
const c14 = "yellowgreen"
const c15 = "darkorange"
const c16 = "darkred"
const c17 = "purple"


function drawPalette(ctx, x1, y1){
    let centerW = window.innerWidth / 2 - 150
    let centerH = window.innerHeight / 2 - 50

    x1 = x1 + centerW || centerW
    y1 = y1 + centerH || centerH

    //row 1
    drawPixel(ctx, 20 + x1, 20 +  y1, 20, 20, c0)
    drawPixel(ctx, 40 + x1, 20 +  y1, 20, 20, c1)
    drawPixel(ctx, 60 + x1, 20 +  y1, 20, 20, c2)
    drawPixel(ctx, 80 + x1, 20 +  y1, 20, 20, c3)
    drawPixel(ctx, 100 + x1, 20 +  y1, 20, 20, c4)
    drawPixel(ctx, 120 + x1, 20 +  y1, 20, 20, c5)

    //row 2
    drawPixel(ctx, 20 + x1, 40 +  y1, 20, 20, c6)
    drawPixel(ctx, 40 + x1, 40 +  y1, 20, 20, c7)
    drawPixel(ctx, 60 + x1, 40 +  y1, 20, 20, c8)
    drawPixel(ctx, 80 + x1, 40 + y1, 20, 20, c9)
    drawPixel(ctx, 100 + x1, 40 + y1, 20, 20, c10)
    drawPixel(ctx, 120 + x1, 40 + y1, 20, 20, c11)

    //row 3
    drawPixel(ctx, 20 + x1, 60 +  y1, 20, 20, c12)
    drawPixel(ctx, 40 + x1, 60 +  y1, 20, 20, c13)
    drawPixel(ctx, 60 + x1, 60 +  y1, 20, 20, c14)
    drawPixel(ctx, 80 + x1, 60 + y1, 20, 20, c15)
    drawPixel(ctx, 100 + x1, 60 + y1, 20, 20, c16)
    drawPixel(ctx, 120 + x1, 60 + y1, 20, 20, c17)


    
}




/*
wtaf?
musta done this one high or somethin 8-6-24


function drawPalette(ctx, x1, y1, scalE){
    scalE = scalE || 10
    x1 = x1 || 20
    y1 = y1 || 20
    var r = 1 
    var y2 = y1 + scalE

    var x2 = x1 + scalE
    var x3 = x2 + scalE
    var x4 = x3 + scalE
    var x5 = x4 + scalE
    var x6 = x5 + scalE
    var x7 = x6 + scalE
    var x8 = x7 + scalE

    ctx.save()
//col1
    brushPixel(ctx, x1, y1, r,  "white");
    brushPixel(ctx, x1, y2, r, "darkgrey")
//col2
    brushPixel(ctx, x2, y1);
    brushPixel(ctx, x2, y2, r,  "darkorange");
//col3
    brushPixel(ctx, x3, y1, r, "red");
    brushPixel(ctx, x3, y2, r,  "maroon");
//col4
    brushPixel(ctx, x4, y1, r, "violet");
    brushPixel(ctx, x4, y2, r, "purple");
//col5
    brushPixel(ctx, x5, y1, r, "blue")
    brushPixel(ctx, x5, y2, r, "darkblue")
//col6
    brushPixel(ctx, x6, y1, r, "green")
    brushPixel(ctx, x6, y2, r, "darkgreen")
//col7
    brushPixel(ctx, x7, y1, r, "tan")
    brushPixel(ctx, x7, y2, r, "chocolate")
//col8
    brushPixel(ctx, x8, y1, r, "#666666")
    brushPixel(ctx, x8, y2, r, "#222222") 
ctx.restore()
}
*/