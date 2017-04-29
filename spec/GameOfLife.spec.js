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
    });
});
