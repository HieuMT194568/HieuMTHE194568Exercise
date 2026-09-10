import { useRef, useState } from 'react';
import './Ex4.css';
import { HelloReact, ReactLogo, Navbar, ThisIsJsx, CourseList } from './JsxDemo.js';
import { people, numbers, companies, ages, person } from './data.js';
import { Rectangle, Triangle } from './shapes.js';
import {
  findFirstTeenager, findAllTeenagers, isEveryTeenager, isAnyTeenager,
  sumWithReduce, sumArrow, productArrow,
  getCompanyNames, getCompaniesAfter1987, getRetailCompanies,
  sortCompaniesByEndAsc, sortAgesDesc, sumAges, makeCompanySummary,
  sumAll, collectToArray, getStreet, createCounter, parseQueryParams,
  getRandomNumber
} from './es6Utils.js';

// Khung nhỏ để bọc mỗi câu cho dễ nhìn
function Section({ title, children }) {
  return (
    <div className="ex4-section">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

// Hiển thị kết quả dạng chữ
function Result({ value }) {
  return <div className="ex4-result">{JSON.stringify(value, null, 2)}</div>;
}

function Ex4() {
  // Câu 22: tạo counter 1 lần duy nhất, giữ nguyên qua các lần render
  const counterRef = useRef(createCounter());
  const [counterValues, setCounterValues] = useState([]);

  // Câu 25: kết quả của Promise
  const [promiseText, setPromiseText] = useState('Bấm nút để chạy');

  const handleCount = () => {
    const next = counterRef.current();
    setCounterValues([...counterValues, next]);
  };

  const handleRunPromise = () => {
    setPromiseText('Đang lấy số ngẫu nhiên...');
    getRandomNumber()
      .then((n) => setPromiseText('Số ngẫu nhiên lớn hơn 5: ' + n))
      .catch((err) => setPromiseText(err));
  };

  const retail = getRetailCompanies(companies);
  const summary = makeCompanySummary(companies[0]);
  const rectangle = new Rectangle('red', 4, 5);
  const triangle = new Triangle('blue', 6, 8);
  const url = 'https://example.com/search?name=react&page=2&sort=new';

  return (
    <div>
      <h1>Exercise 4: JSX and ES6</h1>

      {/* ================= PHẦN JSX ================= */}
      <Section title="Câu 1 - Hello React">
        <HelloReact />
      </Section>

      <Section title="Câu 2 - Logo React">
        <ReactLogo />
      </Section>

      <Section title="Câu 3 - Navbar bằng JSX">
        <Navbar />
      </Section>

      <Section title="Câu 4 - Hiển thị dòng chữ">
        <ThisIsJsx />
      </Section>

      <Section title="Câu 5 - Danh sách khoá học">
        <CourseList />
      </Section>

      {/* ================= MẢNG people ================= */}
      <Section title="Câu 6 - find: người ĐẦU TIÊN là teenager">
        <Result value={findFirstTeenager(people)} />
      </Section>

      <Section title="Câu 7 - filter: TẤT CẢ người là teenager">
        <Result value={findAllTeenagers(people)} />
      </Section>

      <Section title="Câu 8 - every: mọi người đều là teenager?">
        <Result value={isEveryTeenager(people)} />
      </Section>

      <Section title="Câu 9 - some: có ai là teenager không?">
        <Result value={isAnyTeenager(people)} />
      </Section>

      {/* ================= MẢNG [1,2,3,4] ================= */}
      <Section title="Câu 10 - reduce có giá trị khởi tạo">
        <Result value={sumWithReduce(numbers)} />
      </Section>

      <Section title="Câu 11 - viết lại bằng arrow function">
        <p>Tổng: {sumArrow(numbers)}</p>
        <p>Tích: {productArrow(numbers)}</p>
      </Section>

      {/* ================= companies / ages / person ================= */}
      <Section title="Câu 12 - forEach: in tên từng công ty">
        <Result value={getCompanyNames(companies)} />
      </Section>

      <Section title="Câu 13 - công ty bắt đầu sau năm 1987">
        <Result value={getCompanyNames(getCompaniesAfter1987(companies))} />
      </Section>

      <Section title="Câu 14 - công ty Retail, start tăng thêm 1">
        {retail.map((company) => (
          <div className="ex4-company" key={company.name}>
            <p>{company.name}</p>
            <p>{company.category}</p>
            <p>{company.start}</p>
            <p>{company.end}</p>
          </div>
        ))}
      </Section>

      <Section title="Câu 15 - sắp xếp công ty theo end tăng dần">
        <Result value={sortCompaniesByEndAsc(companies).map((c) => c.name + ': ' + c.end)} />
      </Section>

      <Section title="Câu 16 - sắp xếp ages giảm dần">
        <Result value={sortAgesDesc(ages)} />
      </Section>

      <Section title="Câu 17 - reduce: tổng tất cả các tuổi">
        <Result value={sumAges(ages)} />
      </Section>

      <Section title="Câu 18 - object destructuring + method print">
        <p>{summary.print()}</p>
      </Section>

      <Section title="Câu 19 - rest parameter: cộng nhiều số">
        <p>sumAll(1, 2, 3, 4, 5) = {sumAll(1, 2, 3, 4, 5)}</p>
      </Section>

      <Section title="Câu 20 - rest parameter: gom mọi thứ vào 1 mảng">
        <p>collectToArray(1, 'hai', [3, 4], true)</p>
        <Result value={collectToArray(1, 'hai', [3, 4], true)} />
      </Section>

      <Section title="Câu 21 - destructuring lấy street">
        <p>street = {getStreet(person)}</p>
      </Section>

      <Section title="Câu 22 - hàm đếm tăng dần từ 0">
        <button onClick={handleCount}>Gọi counter</button>
        <p>Các giá trị đã trả về: {counterValues.join(', ')}</p>
      </Section>

      <Section title="Câu 23 - tách query parameter của URL">
        <p>{url}</p>
        <Result value={parseQueryParams(url)} />
      </Section>

      <Section title="Câu 24 - class Shape / Rectangle / Triangle">
        <p>{rectangle.toString()} - Diện tích: {rectangle.getArea()}</p>
        <p>{triangle.toString()} - Diện tích: {triangle.getArea()}</p>
      </Section>

      {/* ================= Promise ================= */}
      <Section title="Câu 25 - Promise: số ngẫu nhiên lớn hơn 5">
        <button onClick={handleRunPromise}>Chạy Promise</button>
        <p>{promiseText}</p>
      </Section>
    </div>
  );
}

export default Ex4;
