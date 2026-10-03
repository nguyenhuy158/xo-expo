// Kiem tra logic thang: node selfcheck.mjs
import assert from "node:assert";
import { findWinner } from "./game.js";

assert.equal(findWinner(Array(9).fill(null)).mark, null);
assert.deepEqual(findWinner(["X","X","X",null,null,null,null,null,null]), {mark:"X",line:[0,1,2]});
assert.equal(findWinner([null,null,"O",null,"O",null,"O",null,null]).mark, "O");
assert.equal(findWinner(["X","O","X","X","O","O","O","X","X"]).mark, null);
console.log("ok");
