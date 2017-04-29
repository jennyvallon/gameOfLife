function Board(){
    this.create;
};

Board.prototype.create=function(length){
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = this.create.apply(this, args);
    }

    return arr;
};

var board=new Board();