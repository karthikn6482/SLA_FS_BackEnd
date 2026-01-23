import { useState } from "react";

function StudentRegistration() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    age: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="course" placeholder="Course" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
        <button>Register</button>
      </form>

      {submitted &&
        (student.age < 18 ? (
          <p style={{ color: "red" }}>Not eligible for course</p>
        ) : (
          <div className="card">
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Course: {student.course}</p>
            <p>Age: {student.age}</p>
          </div>
        ))}
    </>
  );
}

export default StudentRegistration;
