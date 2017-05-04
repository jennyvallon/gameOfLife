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
        
        it("instance should return an array",function(){
            expect(Array.isArray(board)).toEqual(true);
        });
        
        it("instance should return a 2d array",function(){
            for(i=0;i<board.length;i++){
                expect(Array.isArray(board[i])).toEqual(true);
            }
        });
        
        it("constructors first argument should be columns",function(){
            expect(board.length).toEqual(col);
        });
        
        it("constructors second argument should be rows",function(){
            expect(board[0].length).toEqual(row);
        });
        
        it("each row index should contain a cell",function(){
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
        var cell;
        beforeEach(function() {
            cell=new Cell;
        });
        
        it("constructor should create an instance of Cell",function(){
            expect(cell instanceof Cell).toEqual(true);
        });
        
        it("should have two states:alive or dead",function(){
            expect(Object.keys(cell.state).length).toEqual(2);
            expect(Object.keys(cell.state)).toContain("alive");
            expect(Object.keys(cell.state)).toContain("dead");
        });
        
        it("should be able to toggle between the two states",function(){
            expect(cell.state.alive).toEqual(false);
            expect(cell.state.dead).toEqual(true);
            cell.toggleState();
            expect(cell.state.alive).toEqual(true);
            expect(cell.state.dead).toEqual(false);
            cell.toggleState();
            expect(cell.state.alive).toEqual(false);
            expect(cell.state.dead).toEqual(true);
        }); 
        
        it("should have a value of '1' if alive and '0' if dead",function(){
            expect(cell.state.alive).toEqual(false);
            expect(cell.state.dead).toEqual(true);
            expect(cell.value()).toEqual(0);
            cell.toggleState();
            expect(cell.state.alive).toEqual(true);
            expect(cell.state.dead).toEqual(false);
            expect(cell.value()).toEqual(1);
            cell.toggleState();
            expect(cell.state.alive).toEqual(false);
            expect(cell.state.dead).toEqual(true);
            expect(cell.value()).toEqual(0);
        });
    });
    
    describe("Board of Cells", function() { 
        var board;
        var col;
        var row;
        
        beforeEach(function() {
            col=Math.floor((Math.random() * 100) + 1);
            row=Math.floor((Math.random() * 100) + 1);
            board=new Board(col,row);
        });
        
        it("should have access to its own coordinates on the Board",function(){
            for(i=0;i<board.length;i++){
                for(j=0;j<board[i].length;j++){
                    expect(board[i][j].coordinates).toEqual(jasmine.any(Object));
                    expect(board[i][j].coordinates.x).toEqual(i);
                    expect(board[i][j].coordinates.y).toEqual(j);
                }
            } 
        });
    });
});
