////////////////////////////////////
// SYSTEMATIC BUG FIXING APPLICATION

/*
DEBUGGING PROCESS APPLICATION:

STEP 1: IDENTIFY ✅
- Bug: calculateAverageScore returns NaN or wrong value
- Expected: Average of [85, 92, 78, 96, 88] should be 87.8
- Actual: Getting NaN or incorrect value

STEP 2: ISOLATE ✅
- Bug location: Inside calculateAverageScore function
- Specific issues: initialization, loop condition, division

STEP 3: INVESTIGATE ✅
- total starts as undefined (undefined + number = NaN)
- Loop goes one iteration too far (accesses undefined)
- Division uses wrong denominator

STEP 4: FIX ✅
- Initialize total to 0
- Change <= to < in loop condition
- Remove + 1 from division

STEP 5: PREVENT ✅
- Add input validation
- Add type checking for array elements
*/

function calculateAverageScoreFixed(scores) {
  // STEP 5 - PREVENT: Validate input
  if (!Array.isArray(scores) || scores.length === 0) {
    console.error("Invalid input: scores must be a non-empty array");
    return 0;
  }

  let total = 0; // ✅ Initialize correctly

  for (let i = 0; i < scores.length; i++) {
    // ✅ Loop condition fixed
    if (typeof scores[i] === "number") {
      total += scores[i];
    } else {
      console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
    }
  }

  return total / scores.length; // ✅ Correct denominator
}

// Test the fixed function
const testScores = [85, 92, 78, 96, 88];
const fixedResult = calculateAverageScoreFixed(testScores);
console.log("Fixed result:", fixedResult); // 87.8 ✅

