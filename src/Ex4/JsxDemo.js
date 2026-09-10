import logo from '../logo.svg';
import { courses } from './data.js';

// Câu 1: Hello React
export function HelloReact() {
  return (
    <h1>
      Hello <span className="ex4-blue">React</span>
    </h1>
  );
}

// Câu 2: logo React + dòng giới thiệu
export function ReactLogo() {
  return (
    <div>
      <img src={logo} className="ex4-logo" alt="React logo" />
      <p>The library for web and native user interfaces</p>
    </div>
  );
}

// Câu 3: Navbar
export function Navbar() {
  return (
    <ul className="ex4-navbar">
      <li><a className="active" href="#home">Home</a></li>
      <li><a href="#search">Search</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a className="login" href="#login">Login</a></li>
    </ul>
  );
}

// Câu 4: This is JSX
export function ThisIsJsx() {
  return <h1 className="ex4-blue">This is JSX</h1>;
}

// Câu 5: danh sách khoá học
export function CourseList() {
  return (
    <div>
      <h2>Course names</h2>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
}
