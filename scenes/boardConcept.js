import * as draw from "../drawJS/__init.js"


export function boardConcept(ctx){

    
    function onE(ctx, x1, y1, c1, c2){
        x1 = x1 || 0
        y1 = y1 || 0
    
        c1 = c1 || draw.c16
        c2 = c2 || draw.c10
    
    
        draw.drawPixel(ctx, 46.5 + x1, 15 + y1, 12, 130, c1)
        draw.drawPixel(ctx, 50 + x1, 20 + y1 ,5, 120, c2)
    }
    
    function twO(ctx, x1, y2){
        onE(ctx, 110 + x1, 5 + y2)
        onE(ctx, 0 + x1, 5 + y2)
        onE(ctx, 220 + x1, 5 + y2)
        onE(ctx, 330 + x1, 5 + y2)
        onE(ctx, 440 + x1, 5 + y2)
    }
    
    function threE(ctx, x1, y1){
        twO(ctx, -27, 10)
        twO(ctx, -27, 310)
        
    }
    
    function fouR(ctx, x1, y2){
        draw.drawPixel(ctx, 175, 200, 150, 100, draw.c9)
        draw.drawPixel(ctx, 180, 205, 140, 90, draw.c15)
    }
    
    function fivE(ctx, x1, y1, clr1, clr2){
        var clr2 = draw.c2
        draw.drawPixel(ctx, 35 + x1, 35 + y1, 90, 120, clr1)
        draw.drawPixel(ctx, 40 + x1, 40 + y1, 80, 110, clr2)
    }
    
    function siX(ctx){
        fivE(ctx, 0, 0, draw.c7)
        fivE(ctx, 110, 0, draw.c7)
        fivE(ctx, 220, 0, draw.c7)
        fivE(ctx, 330, 0, draw.c7)
    
        fivE(ctx, 0, 300, draw.c16)
        fivE(ctx, 110, 300, draw.c16)
        fivE(ctx, 220, 300, draw.c16)
        fivE(ctx, 330, 300, draw.c16)
    }
    
    function seveN(ctx){
       fivE(ctx, 0, 150)
       fivE(ctx, 330, 150, draw.c6)
    }


    threE(ctx, 0, 0)
    fouR(ctx)
    siX(ctx)
    seveN(ctx)

}