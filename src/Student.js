import Person from './Person.js';

// Yêu cầu 2: Student kế thừa Person
class Student extends Person {
  constructor(name, age, scores) {
    super(name, age);
    this.scores = scores;
  }

  // Yêu cầu 6: reduce - tính điểm trung bình
  calcAvg() {
    if (this.scores.length === 0) return 0;
    const total = this.scores.reduce((sum, score) => sum + score, 0);
    return total / this.scores.length;
  }

  // Yêu cầu 6: map - đổi mỗi điểm thành chuỗi "8 điểm"
  getScoresText() {
    return this.scores.map(score => score + ' điểm').join(', ');
  }

  // Yêu cầu 5: spread - gộp điểm mới vào danh sách điểm cũ
  addScores(...newScores) {
    this.scores = [...this.scores, ...newScores];
  }

  createScores(...newScores){
    this.scores = [...this.scores, ...newScores]
  }

  // Yêu cầu 2: hiển thị đầy đủ thông tin (ghi đè introduce của cha)
  introduce() {
    return `${super.introduce()} Tôi là học sinh.
Điểm số: ${this.getScoresText()}
Điểm trung bình: ${this.calcAvg().toFixed(2)}`;
  }
}

export default Student;
