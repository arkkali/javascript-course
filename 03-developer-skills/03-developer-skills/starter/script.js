////////////////////////////////////
// TIME-PRESSURED CHALLENGE: Work Hours Analyzer

/*
JOB INTERVIEW SIMULATION:
10-minute challenge to analyze freelancer work week
Stay systematic even under pressure!
*/

function analyzeWorkWeek(dailyHours) {
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const maxDay = days[maxDayIndex];

  const daysWorked = dailyHours.filter(hours => hours > 0).length;
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log("Work week analysis:", analysis);


console.log("Challenge completed under time pressure!");