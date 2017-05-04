function Cell(){
    var alive={alive:true,dead:false};
    var dead={alive:false,dead:true};
    
    this.state=dead;
    
    this.toggleState=function(){
        if(this.state===alive){
            this.state=dead;
        }else if(this.state===dead){
            this.state=alive;
        }
    };
    this.value=function(){
        if(this.state===alive){return 1;}
        else if(this.state===dead){return 0;}
    };
};

function Board(columns,rows){
    this._dimensions={};
    this._dimensions.columns=columns;
    this._dimensions.rows=rows;
    return this._init();
};

Board.prototype._create=function(length){
    var arr = new Array(length || 0),
        i = length;
        
    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = this._create.apply(this, args);
    }
    return arr;
};

Board.prototype.constructor=Board;

Board.prototype._populate=function(array){
    for(i=0;i<array.length;i++){
        for(j=0; j<array[i].length;j++){
            array[i][j]=new Cell();
        }
    }
    //make returned board have "Board" prototype
    array.__proto__=this;
    return array;
};

Board.prototype._init=function(){
    var array=this._create(this._dimensions.columns,this._dimensions.rows);
    array=this._populate(array);
    return array;
};

//var board=new Board();

