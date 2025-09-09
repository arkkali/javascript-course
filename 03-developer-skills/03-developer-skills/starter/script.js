/*
RESEARCH CHALLENGE: Find Maximum Value in Array
Search progression:
1. "javascript maximum value array"
2. "javascript Math.max array"  
3. "javascript Math.max spread operator array"
4. "Math.max MDN javascript"
*/


function demonstrateArrayMax(numbers) {
  // Method 1 - Math.max with spread operator (modern + concise)
  const method1 = Math.max(...numbers);

  // Method 2 - Traditional for loop (classic + efficient)
  let method2 = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > method2) method2 = numbers[i];
  }

  // Method 3 - Array.reduce (functional style)
  const method3 = numbers.reduce((max, current) =>
    current > max ? current : max
  );

  return { method1, method2, method3 };
}


//sample data
const testNumbers = [3, 7, 2, 9, 1, 5];
const maxResults = demonstrateArrayMax(testNumbers);
console.log("Multiple approaches from research:", maxResults);
