// JavaScript Fundamentals Part 2 - Hour 1
//Coding Challenge #1: Function Calculator
// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win! (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win! (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins. (${avgDolphins} vs. ${avgKoalas})`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));




// JavaScript Fundamentals Part 2 - Hour 2
// Coding Challenge #2 - Student Grade Manager
const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  return total / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}
// Function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

// Function to count passing students
function countPassing(grades, passingGrade) {
  let count = 0;
  grades.forEach((grade) => {
    if (grade >= passingGrade) count++;
  });
  return count;
}
// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);
console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);




// JavaScript Fundamentals Part 2 - Hour 3
// Coding Challenge #3 - User Profile System
const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - this.birthYear; // store age in object
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    this.friends.push({ name, status });
    return this.friends.length; // return new length
  },

  // Get active friends count
  getActiveFriends: function () {
    return this.friends.filter((friend) => friend.status === "active").length;
  },

  // Toggle active status
  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    this.calcAge(); // ensure age is updated
    const activeFriends = this.getActiveFriends();
    return `${this.firstName} ${this.lastName} is a ${this.age}-year-old living in ${
      this.location
    }. 
Status: ${this.isActive ? "Active" : "Inactive"}.
She has ${this.friends.length} friends (${activeFriends} active). 
Interests: ${this.interests.join(", ")}.`;
  },
};

// Test your user profile system
console.log(user.getSummary());

user.addFriend("Alex", "active");
user.toggleStatus();

console.log(`\nAfter updates:`);
console.log(user.getSummary());
