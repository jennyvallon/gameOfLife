//test
describe("Game of Life", function() { 
    describe("Board", function() { 
        it("should have a board",function(){
            expect(board).toBeTruthy();
        });
        it("board should be created dynamically",function(){
            var x=6; 
            var y=8;
            expect(board.create(x,y).length).toEqual(x);
            expect(board.create(x,y)[0].length).toEqual(y);
        });
    });
    describe("Cell", function(){
        
    });
});
