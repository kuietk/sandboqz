export {
    drawGrid
}

function drawGrid(ctx, major, minor, stroke, fill) {

    minor = minor || 10;
    major = major || minor * 5;
    stroke = stroke || "white";
    fill = fill || "orange";

    ctx.save();
    ctx.strokeStyle = stroke;
    ctx.fillStyle =fill;

    let width = ctx.canvas.width;
    let height = ctx.canvas.height;

    //vertical
    for(var x = minor * 2; x < width - 5; x += minor){
        ctx.beginPath();
        ctx.moveTo(x, 20);
        ctx.lineTo(x, height - 7);
        ctx.lineWidth = 0.25;
        ctx.stroke();
        if (x % major == 0) {ctx.fillText(x, x, 10);}
    }
    
    //horizontal
    for(var y = minor * 2; y < height - 5; y += minor) {
        ctx.beginPath();
        ctx.moveTo(20, y)
        ctx.lineTo(width -10, y);
        ctx.linewidth = 0.25;
        ctx.stroke();
        if(y % major == 0) {ctx.fillText (y, 0, y + 10);}
    }


    //center lines
    ctx.strokeStyle = "yellow"

    ctx.beginPath();
    ctx.moveTo(18 , height / 2);
    ctx.lineTo(width - 8, height / 2);
    ctx.lineWidth = 0.75;
    ctx.stroke();

    ctx.strokeStyle = "green"
    
    ctx.beginPath();
    ctx.moveTo(width / 2 , 18);
    ctx.lineTo(width / 2 , height - 3);
  
    ctx.stroke();



    ctx.restore();
}