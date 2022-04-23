/**
 * Create a program that does the following - 
 *  1. Read files 1.txt, 2.txt, 3.txt and all the numbers inside them 
 *  2. Sort the numbers in ascending order
 *  3. Write the sorted numbers to a file called sorted.txt
 */
const fs = require("fs");

const data1 = fs.readFileSync("1.txt", "utf8").split("\n");
const data2 = fs.readFileSync("2.txt", "utf8").split("\n");
const data3 = fs.readFileSync("3.txt", "utf8").split("\n");
const data = data1.concat(data2, data3);
// console.log(data);
data.sort((a, b) => a - b);
const stream = fs.createWriteStream("./sortedData.txt");
for (let i = 0; i < data.length; i++) {
  stream.write(data[i] + "\n");
}
