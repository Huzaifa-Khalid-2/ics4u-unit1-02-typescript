/**
 * The program shows how many logs
 *   can fit on a truck.
 *
 * By:      Huzaifa Khalid
 * Version: 1.0
 * Since:   2022-09-14
 */

import promptSync from "prompt-sync";

const prompt = promptSync();

const length = prompt("Enter log length (0.25,0.5,1): ");
const length = Number(lengthString);
const truckMass = 1100;
const logWeight = 20;
const numberOfLogs = truckMass / (length * logWeight);
console.log(`${numberOfLogs} logs can fit on the truck`);

console.log("\nDone.");
