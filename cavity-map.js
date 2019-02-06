/*
You are given a square map as a matrix of integer strings. Each cell of the map has a value denoting its depth. We will 
call a cell of the map a cavity if and only if this cell is not on the border of the map and each cell adjacent to it has 
strictly smaller depth. Two cells are adjacent if they have a common side, or edge.
Find all the cavities on the map and replace their depths with the uppercase character X.
For example, given a matrix:

989
191
111

You should return:

989
1X1
111

The center cell was deeper than those on its edges: [8,1,1,1]. The deep cells in the top two corners don't share an edge 
with the center cell.
*/
function cavityMap(grid) {
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            if (grid[i][j] > grid[i][j + 1] && grid[i][j] > grid[i][j - 1] && grid[i][j] > grid[i - 1][j] && grid[i][j] > grid[i + 1][j]) {
                let newEl = grid[i].split('');
                newEl.splice(j, 1, 'X');
                newEl = newEl.join('');
                grid[i] = newEl;
            }
        }
    }
    return grid;
}
console.log(cavityMap(['1112', '1912', '1892', '1234']));