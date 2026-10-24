const activeUsers : string[] = []
activeUsers.push("Tony");

const ageList: number[] = [45, 56, 13]
ageList[0] = 99;
// ageList[0] = "srdar"; // Error: Type 'string' is not assignable to type 'number'

// more syntax
const bools: Array<boolean> = []
// const bools: boolean[] = [] // same as above

type Point = {
    x: number,
    y: number
}

const coords: Point[] = []
coords.push({x:23, y:8})
// coords.push({y:8}) // Error: Property 'x' is missing in type '{ y: number; }' but required in type 'Point'.

//multidimensional arrays

const board: string[][] = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]]

const demo: number[][][] = [
    [[1, 2, 3], [4, 5, 6]],
    [[7, 8, 9], [10, 11, 12]],
    [[13, 14, 15], [16, 17, 18]]
]