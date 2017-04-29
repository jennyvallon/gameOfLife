//test
describe("Game of Life", function() { 
    var grid = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    it("grid should exist",function(){
        expect(life(grid)).toBeTruthy();
    });
    
    it('should count neighbors when no neighbors', function () {
        expect(neighborCount(grid)).toEqual(0);
    });
    
    grid = [
        [1,0,0],
        [0,0,0],
        [0,0,0]
    ];
    it('should expect 1 neighbor',function(){
        expect(grid[0][0]).toEqual(1);
    });
});
