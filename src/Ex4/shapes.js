// Câu 24: tạo các class theo sơ đồ trong đề
//
//              Shape
//            -color: String
//            +getArea(): double
//            +toString(): String
//                 ^
//        ---------------------
//     Rectangle           Triangle
//   -length: int         -base: int
//   -width: int          -height: int

class Shape {
  constructor(color) {
    this.color = color;
  }

  // lớp cha chỉ định nghĩa "khuôn", lớp con sẽ viết lại
  getArea() {
    return 0;
  }

  toString() {
    return `Shape[color=${this.color}]`;
  }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `Rectangle[length=${this.length}, width=${this.width}, ${super.toString()}]`;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }

  toString() {
    return `Triangle[base=${this.base}, height=${this.height}, ${super.toString()}]`;
  }
}

export { Shape, Rectangle, Triangle };
