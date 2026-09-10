// ============================================================
// NHÓM B - làm việc với mảng people
// Teenager = tuổi từ 10 đến 20
// ============================================================

const isTeenager = (p) => p.age >= 10 && p.age <= 20;

// Câu 6: find - lấy NGƯỜI ĐẦU TIÊN là teenager
export function findFirstTeenager(people) {
  return people.find(isTeenager);
}

// Câu 7: filter - lấy TẤT CẢ người là teenager
export function findAllTeenagers(people) {
  return people.filter(isTeenager);
}

// Câu 8: every - có phải MỌI người đều là teenager không? (true/false)
export function isEveryTeenager(people) {
  return people.every(isTeenager);
}

// Câu 9: some - có ÍT NHẤT MỘT người là teenager không? (true/false)
export function isAnyTeenager(people) {
  return people.some(isTeenager);
}

// ============================================================
// NHÓM C - làm việc với mảng [1, 2, 3, 4]
// ============================================================

// Câu 10: reduce có giá trị khởi tạo là tham số thứ 2
export function sumWithReduce(arr) {
  return arr.reduce(function (accumulator, current) {
    return accumulator + current;
  }, 0);
}

// Câu 11: viết lại bằng arrow function cho ngắn gọn
export const sumArrow = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
export const productArrow = (arr) => arr.reduce((acc, cur) => acc * cur, 1);

// ============================================================
// NHÓM D - companies / ages / person
// ============================================================

// Câu 12: forEach - in tên của từng công ty
export function getCompanyNames(companies) {
  const names = [];
  companies.forEach((company) => names.push(company.name));
  return names;
}

// Câu 13: filter - công ty bắt đầu SAU năm 1987
export function getCompaniesAfter1987(companies) {
  return companies.filter((company) => company.start > 1987);
}

// Câu 14: lấy công ty category Retail, tăng start thêm 1
export function getRetailCompanies(companies) {
  return companies
    .filter((company) => company.category === 'Retail')
    .map((company) => ({ ...company, start: company.start + 1 }));
}

// Câu 15: sắp xếp công ty theo năm kết thúc TĂNG DẦN
export function sortCompaniesByEndAsc(companies) {
  // dùng [...companies] để không làm hỏng mảng gốc
  return [...companies].sort((a, b) => a.end - b.end);
}

// Câu 16: sắp xếp mảng ages GIẢM DẦN
export function sortAgesDesc(ages) {
  return [...ages].sort((a, b) => b - a);
}

// Câu 17: reduce - tính tổng tất cả các tuổi
export function sumAges(ages) {
  return ages.reduce((total, age) => total + age, 0);
}

// Câu 18: object destructuring - tạo object mới có name, category và method print
export function makeCompanySummary(company) {
  const { name, category } = company;
  return {
    name,
    category,
    print() {
      return `Tên công ty: ${this.name} (${this.category})`;
    }
  };
}

// Câu 19: rest parameter - cộng số lượng tham số không biết trước
export function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

// Câu 20: rest parameter - gom mọi tham số vào 1 mảng.
// Nếu tham số là mảng thì lấy từng phần tử bên trong ra.
export function collectToArray(...args) {
  let result = [];
  args.forEach((item) => {
    if (Array.isArray(item)) {
      result = [...result, ...item];
    } else {
      result.push(item);
    }
  });
  return result;
}

// Câu 21: destructuring lồng nhau - lấy street ra khỏi person.address
export function getStreet(person) {
  const { address: { street } } = person;
  return street;
}

// Câu 22: closure - mỗi lần gọi trả về số tăng dần bắt đầu từ 0
export function createCounter() {
  let count = 0;
  return function () {
    const current = count;
    count = count + 1;
    return current;
  };
}

// Câu 23: tách query parameter của URL thành object {key: value}
export function parseQueryParams(url) {
  const result = {};
  const questionIndex = url.indexOf('?');
  if (questionIndex === -1) return result;

  const queryString = url.slice(questionIndex + 1);
  queryString.split('&').forEach((pair) => {
    const [key, value] = pair.split('=');
    if (key) {
      result[decodeURIComponent(key)] = decodeURIComponent(value || '');
    }
  });
  return result;
}

// ============================================================
// NHÓM E - Câu 25: Promise
// Random số 1-10. Lớn hơn 5 thì resolve, ngược lại reject "Error"
// ============================================================
export function getRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.floor(Math.random() * 10) + 1;
      if (n > 5) {
        resolve(n);
      } else {
        reject('Error');
      }
    }, 800);
  });
}
