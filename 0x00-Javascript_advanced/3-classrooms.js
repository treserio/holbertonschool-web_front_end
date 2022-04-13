function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return () => seat;
  }
  let students = Array();
  for (let i = 0; i < numbersOfStudents; ++i) {
    students.push(studentSeat(i + 1));
  }
  return students;
}

const classRoom = createClassRoom(10);
