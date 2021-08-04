var canvas=new fabric.Canvas ("my_canvas");
blockImagewidth=25;
blockImageheight=25;
player_x=20;
player_y=20; 
var player_object="";
var block_object="";
function player_load () {
    fabric.Image.fromURL("player.png", function(img) {
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add (player_object);
    }); 
}
function block_load (getimage) {
    fabric.Image.fromURL(getimage, function(img) {
        block_object=img;
        block_object.scaleToWidth(blockImagewidth);
        block_object.scaleToHeight(blockImageheight);
        block_object.set({
            top:player_y,left:player_x
        });
        canvas.add (block_object);
    }); 
}