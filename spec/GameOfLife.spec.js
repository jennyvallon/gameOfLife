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
});
