import { createScores } from "./scoreUtils.js";

let StudentForm = ({ onSubmit, onAddScores, hasStudent }) => {

  // Form 1: tạo student mới
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const age = Number(e.target.age.value);
    const scoresText = e.target.score.value;
    // tách chuỗi "8, 9, 10" thành mảng số [8, 9, 10]
    const arr = scoresText.split(",").map(item => Number(item.trim()));
    // Yêu cầu 3: rest parameter
    const scoreA = createScores(...arr);

    onSubmit(name, age, scoreA);
  }

  // Form 2: thêm điểm mới cho student đang có
  const handleAddScores = (e) => {
    e.preventDefault();
    const newScoresText = e.target.newScore.value;
    const arr = newScoresText.split(",").map(item => Number(item.trim()));

    onAddScores(arr);
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Tên của student" />
        <br />
        <input name="age" placeholder="Tuổi của student" />
        <br />
        <input name="score" placeholder="Ví dụ: 8, 7.5, 9, 6" />
        <br />
        <button type='submit'>Submit</button>
      </form>

      {hasStudent && (
        <form onSubmit={handleAddScores}>
          <input name="newScore" placeholder="Điểm mới, ví dụ: 3, 4" />
          <button type='submit'>Thêm điểm mới</button>
        </form>
      )}
    </>
  );
}

export default StudentForm;
