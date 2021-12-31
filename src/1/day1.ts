import { readFileSync } from 'fs';
import * as path from 'path';

var current_path_to_locales_dir = path.join(__dirname, "..", "1");
const file = readFileSync(current_path_to_locales_dir + '/input.txt', 'utf-8');
const fileArray = file.split("\r\n");

export function run() {
    part1();
    part2();
}

function part1() {
    console.log("Running part 1 - https://adventofcode.com/2021/day/1");

    var totalIncreased: number = 0;
    var prevMeasurement: number = 0;

    fileArray.forEach(function (measurement, index) {
        if (index != 0) {
            if (+measurement > prevMeasurement) {
                totalIncreased++;
            }
        }
        prevMeasurement = +measurement;
    });

    console.log("Result part 1: " + totalIncreased + "\n");
}

function part2() {
    console.log("Running part 2 - https://adventofcode.com/2021/day/1#part2");

    var totalIncreased: number = 0;
    var prevMeasurement: number = 0;

    for (let index = 0; index < fileArray.length - 2; index++) {
        const val1 = fileArray[index];
        const val2 = fileArray[index + 1];
        const val3 = fileArray[index + 2];

        let measurement = +val1 + +val2 + +val3;
        
        if (index != 0) {
            if (+measurement > prevMeasurement) {
                totalIncreased++;
            }
        }
        prevMeasurement = +measurement;
    }


    console.log("Result part 2: " + totalIncreased + "\n");
}