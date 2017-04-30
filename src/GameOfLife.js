function Cell(){
    
}

function Board(columns,rows){
    this.dimensions={};
    this.dimensions.columns=columns;
    this.dimensions.rows=rows;
    return this.init();
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

Board.prototype.constructor=Board;

Board.prototype.populate=function(array){
    for(i=0;i<array.length;i++){
        for(j=0; j<array[i].length;j++){
            array[i][j]=new Cell();
            this.__proto__.cellCounter++;
        }
    }
//    array.__proto__=this;
    return array;
};

Board.prototype.init=function(){
    var array=this.create(this.dimensions.columns,this.dimensions.rows);
    array=this.populate(array);
    return array;
};

//var board=new Board();

