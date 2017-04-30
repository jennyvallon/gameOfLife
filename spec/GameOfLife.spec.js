//test
describe("Game of Life", function() { 
    describe("Board", function() { 
        var board;
        var col;
        var row;
        
        beforeEach(function() {
            col=Math.floor((Math.random() * 100) + 1);
            row=Math.floor((Math.random() * 100) + 1);
            board=new Board(col,row);
        });
        
        it("should be an array",function(){
            expect(Array.isArray(board)).toEqual(true);
        });
        
        it("first argument should be columns",function(){
            expect(board.length).toEqual(col);
        });
        
        it("second argument should be rows",function(){
            expect(board[0].length).toEqual(row);
        });
        
        it("should contain cells",function(){
            var isCell;
            for(i=0;i<board.length;i++){
                for(j=0;j<board[i].length;j++){
                    if(board[i][j]!==new Cell()){
                        isCell=false;
                    }
                }
            }
            isCell=true;
            expect(isCell).toEqual(true);
        });
        
        it("should be able to access Board prototype properties",function(){
            expect(board.constructor).toEqual(Board);
            expect(board._populate).toBeTruthy();
            expect(board._init).toBeTruthy();
            expect(board._create).toBeTruthy();
            expect(board._dimensions).toBeTruthy();
            
        });
    });
});
