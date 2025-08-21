// Exercise: Truth Detector
const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

for (let val of values) {
  console.log("Value:", val);
  console.log("Boolean:", Boolean(val));
  if (val) {
    console.log("Truthy!");
  } else {
    console.log("Falsy!");
  }
  console.log("-----------------");
}