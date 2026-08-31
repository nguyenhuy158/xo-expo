// Kiem tra logic thang: node selfcheck.mjs
import assert from "node:assert";
const LINES=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function findWinner(c){for(const l of LINES){const[a,b,d]=l;if(c[a]&&c[a]===c[b]&&c[a]===c[d])return{mark:c[a],line:l};}return{mark:null,line:[]};}
assert.equal(findWinner(Array(9).fill(null)).mark, null);
assert.deepEqual(findWinner(["X","X","X",null,null,null,null,null,null]), {mark:"X",line:[0,1,2]});
assert.equal(findWinner([null,null,"O",null,"O",null,"O",null,null]).mark, "O");
assert.equal(findWinner(["X","O","X","X","O","O","O","X","X"]).mark, null);
console.log("ok");
