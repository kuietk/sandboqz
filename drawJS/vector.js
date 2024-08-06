export {
    vectorLine
}

function vectorLine(ctx, x_start, y_start, x_end, y_end, line_width, stroke_color,){
    
    //start coordinates
    x_start = x_start || 50;
    y_start = y_start || 50;

    //end coordinates
    x_end = x_end || 150;
    y_end = y_end || 150;

    //color
    stroke_color = stroke_color || "darkred"; 

    line_width = line_width || 1

    ctx.beginPath();
    ctx.moveTo(x_start, y_start);
    ctx.lineTo(x_end, y_end);
    ctx.strokeStyle = stroke_color; 
    ctx.lineWidth = line_width;
    ctx.stroke();
    



}