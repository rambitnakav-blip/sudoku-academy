const fs=require("fs"),vm=require("vm"),assert=require("assert");
const context={window:{},console};vm.createContext(context);vm.runInContext(fs.readFileSync("solver.js","utf8"),context);
const E=context.window.SudokuLogic;
assert(E,"solver exports public API");
for(const [n,R,C,solution] of [
[4,2,2,[1,2,3,4,3,4,1,2,2,1,4,3,4,3,2,1]],
[6,2,3,Array.from({length:36},(_,i)=>((Math.floor(i/6)*3+Math.floor(Math.floor(i/6)/2)+i%6)%6)+1)],
[9,3,3,Array.from({length:81},(_,i)=>((Math.floor(i/9)*3+Math.floor(Math.floor(i/9)/3)+i%9)%9)+1)]
]){
 assert.strictEqual(E.conflict(solution,n,R,C),false,"valid completed grid has no conflicts "+n);
 const puzzle=solution.slice();puzzle[0]=0;
 const result=E.solveCount(puzzle,n,R,C,2);
 assert.strictEqual(result.count,1,"one-hole puzzle has exactly one solution "+n);
 assert.deepStrictEqual(Array.from(result.solution),solution,"solver recovers the solution "+n);
 assert.strictEqual(E.logicalSolve(puzzle,n,R,C,10).solved,true,"one-hole puzzle is logically solvable "+n);
}
const dup=[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
assert.strictEqual(E.conflict(dup,4,2,2),true,"duplicate row detected");
const single=[1,2,3,0,3,4,1,2,2,1,4,3,4,3,2,1];
const step=E.logicStep(single,4,2,2,10);
assert(step&&step.type==="place"&&step.value===4,"naked single is detected");
console.log("Sudoku Academy smoke tests passed: 4x4, 6x6, 9x9 uniqueness, solution recovery, conflict detection and logical singles.");
