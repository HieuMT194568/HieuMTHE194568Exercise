// Yêu cầu 1: Class Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Xin chào, tôi tên là ${this.name}, năm nay ${this.age} tuổi.`;
  }
}

export default Person;
