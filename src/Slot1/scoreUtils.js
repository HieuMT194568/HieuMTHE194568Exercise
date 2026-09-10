// Yêu cầu 3: Rest parameter
export function createScores(...scores) {
  return scores;
}

// Yêu cầu 4: Destructuring - lấy name và age ra khỏi object student
export function getNameAndAge(student) {
  const { name, age } = student;
  return `Tên: ${name} - Tuổi: ${age}`;
}

// Yêu cầu 6: filter - lọc ra những điểm đạt (>= 5)
export function getPassScores(scores) {
  return scores.filter(score => score >= 5);
}

// Yêu cầu 7: Promise - giả lập chấm điểm mất 1 giây
export function evaluateStudent(avg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (avg >= 8) {
        resolve('Học sinh giỏi');
      } else {
        resolve('Cần cố gắng');
      }
    }, 1000);
  });
}
