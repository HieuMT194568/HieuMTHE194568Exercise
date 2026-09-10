import { useState } from "react";
import Person from "../Person";
import Student from "../Student";
import StudentForm from "./StudentForm.js";
import { getNameAndAge, getPassScores, evaluateStudent } from "./scoreUtils.js";

let EsExercise = () => {
  const [student, setStudent] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const person1 = new Person("Đạt", 42);

  // Yêu cầu 7: gọi Promise để chấm điểm
  const chamDiem = (s) => {
    setLoading(true);
    setResult("");
    evaluateStudent(s.calcAvg()).then((text) => {
      setResult(text);
      setLoading(false);
    });
  }

  // Tạo student mới từ form
  const handleStudentSubmit = (name, age, scores) => {
    const student1 = new Student(name, age, scores);
    setStudent(student1);
    chamDiem(student1);
  }

  // Yêu cầu 5: thêm điểm mới (spread)
  const handleAddScores = (newScores) => {
    const updated = new Student(student.name, student.age, student.scores);
    updated.addScores(...newScores);
    setStudent(updated);
    chamDiem(updated);
  }

  return (
    <>
      {/* Yêu cầu 1 */}
      <p>{person1.introduce()}</p>

      {student && (
        <>
          {/* Yêu cầu 2 */}
          <p style={{ whiteSpace: 'pre-line' }}>{student.introduce()}</p>

          {/* Yêu cầu 4: destructuring */}
          <p>{getNameAndAge(student)}</p>

          {/* Yêu cầu 6: filter */}
          <p>Điểm đạt: {getPassScores(student.scores).join(', ')}</p>

          {/* Yêu cầu 7: kết quả từ Promise */}
          {loading ? <p>Đang chấm điểm...</p> : <p>Kết quả: {result}</p>}
        </>
      )}

      <StudentForm
        onSubmit={handleStudentSubmit}
        onAddScores={handleAddScores}
        hasStudent={student !== null}
      />
    </>
  );
}

export default EsExercise;
