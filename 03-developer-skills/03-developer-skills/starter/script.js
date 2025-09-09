// Developer Skills Hour 2 - Learning How to Code & Problem-Solving Framework
"use strict";

console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

/*
The Reality of Learning to Code:
- Most people expect: Learn syntax → Become developer
- Actual process: Learn basics → Feel confident → Try real project → 
  Get stuck everywhere → Question everything → Keep pushing → 
  Gradual improvement → Success
- Key insight: Problem-solving matters more than syntax memorization
*/

console.log(
  "Key insight: Professional developers think systematically, not just code"
);

/*
Beginner vs Professional Problem-Solving Approaches:

BEGINNER APPROACH:
1. Jump straight into coding
2. Get stuck immediately  
3. Google random solutions
4. Copy-paste without understanding
5. Get frustrated when nothing works

PROFESSIONAL APPROACH:
1. Understand the problem completely
2. Break into smaller sub-problems
3. Research specific solutions  
4. Implement step by step
5. Test and debug systematically

Today we learn the professional approach!
*/

console.log("Goal: Transform from beginner to professional problem-solver");


////////////////////////////////////
// PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer

/*
PROBLEM STATEMENT:
Given an array of temperatures from one day, calculate the temperature amplitude. 
Keep in mind that sometimes there might be a sensor error.

Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

STEP 1: UNDERSTANDING THE PROBLEM
- Temperature amplitude = difference between highest and lowest temperature
- Sensor errors = 'error' strings that should be ignored
- Return a number representing amplitude (max - min)

STEP 2: SUB-PROBLEMS
1. How to ignore errors? (Skip non-number values)
2. Find max value in temperature array
3. Find min value in temperature array  
4. Subtract min from max and return result
*/

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);


////////////////////////////////////
// EXTENDED PROBLEM: Two Arrays

/*
PROBLEM 2: Function should handle TWO arrays of temperatures

STEP 1: UNDERSTAND - Merge arrays, then apply existing logic
STEP 2: SUB-PROBLEMS - 1) Merge arrays 2) Use existing algorithm  
STEP 3: RESEARCH - array1.concat(array2) method
STEP 4: IMPLEMENT - Combine and reuse existing code
*/

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);

console.log(
  "Problem-solving framework applied successfully to extended challenge!"
);