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
        
        it("board instance should return an array",function(){
            expect(Array.isArray(board)).toEqual(true);
        });
        
        it("board instance should return a 2d array",function(){
            for(i=0;i<board.length;i++){
                expect(Array.isArray(board[i])).toEqual(true);
            }
        });
        
        it("the constructors first argument should be columns",function(){
            expect(board.length).toEqual(col);
        });
        
        it("second argument should be rows",function(){
            expect(board[0].length).toEqual(row);
        });
        
        it("each index should contain a cell",function(){
            for(i=0;i<board.length;i++){
                for(j=0;j<board[i].length;j++){
                    expect(board[i][j].constructor===Cell).toEqual(true);
                }
            }
        });
        
        it("constructor should return instances of Board",function(){
            expect(board instanceof Board).toEqual(true);
        });
    });
    describe("Cell", function() { 
        
        beforeEach(function() {
            cell=new Cell;
        });
        it("should have two states:alive or dead",function(){
            expect(Object.keys(cell.state).length).toEqual(2);
            expect(Object.keys(cell.state)).toContain("alive");
            expect(Object.keys(cell.state)).toContain("dead");
        });
    });
});
