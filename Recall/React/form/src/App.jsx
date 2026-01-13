// Task 1: Single Input Controlled Form

// import { useState } from "react";

// function App() {
//   const [username, setUsername] = useState("");
//   const [submittedName, setSubmittedName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     setSubmittedName(username);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Single Input Controlled Form</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>

//       {submittedName && <p>Entered Username: {submittedName}</p>}
//     </div>
//   );
// }

// export default App;


//  Task 2: Two Inputs with Validation


// import { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let isValid = true;


//     setEmailError("");
//     setPasswordError("");
//     setSuccess("");


//     if (!email.includes("@")) {
//       setEmailError("Email must contain @");
//       isValid = false;
//     }


//     if (password.length < 6) {
//       setPasswordError("Password must be at least 6 characters");
//       isValid = false;
//     }

//     if (isValid) {
//       setSuccess("Form submitted successfully!");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Two Inputs with Validation</h2>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {emailError && <p style={{ color: "red" }}>{emailError}</p>}
//         </div>

//         <div>
//           <input
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
//         </div>

//         <button type="submit">Submit</button>
//       </form>

//       {success && <p style={{ color: "green" }}>{success}</p>}
//     </div>
//   );
// }

// export default App;



// Task 3: Single State Object Form


// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Single State Object Form</h2>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             name="mobile"
//             placeholder="Enter mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit">Register</button>
//       </form>

//       {submittedData && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Submitted Data:</h3>
//           <p>Name: {submittedData.name}</p>
//           <p>Email: {submittedData.email}</p>
//           <p>Mobile: {submittedData.mobile}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// Task 4: Login Form with Conditional UI


// import { useState } from "react";

// function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (username === "admin" && password === "123456") {
//       setIsLoggedIn(true);
//       setError("");
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Login Form</h2>


//       {isLoggedIn ? (
//         <h3 style={{ color: "green" }}>Welcome Admin 🎉</h3>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <input
//               type="text"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div>
//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button type="submit">Login</button>

//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </form>
//       )}
//     </div>
//   );
// }

// export default App;


// Task 5: Multi-Step Form (Interview Favourite)


// import { useState } from "react";

// function App() {
//   const [step, setStep] = useState(1); // Step management

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     age: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const nextStep = () => {
//     if (step === 1) {
//       if (!formData.name || !formData.email) {
//         setError("Please fill all fields in Step 1");
//         return;
//       }
//     }
//     setError("");
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     setError("");
//     setStep(step - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.mobile || !formData.age) {
//       setError("Please fill all fields in Step 2");
//       return;
//     }
//     setError("");
//     alert("Form Submitted Successfully!");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Multi-Step Form</h2>

//       <form onSubmit={handleSubmit}>
        
//         {step === 1 && (
//           <>
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <button type="button" onClick={nextStep}>
//               Next
//             </button>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <div>
//               <input
//                 type="text"
//                 name="mobile"
//                 placeholder="Enter mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <input
//                 type="number"
//                 name="age"
//                 placeholder="Enter age"
//                 value={formData.age}
//                 onChange={handleChange}
//               />
//             </div>

//             <button type="button" onClick={prevStep}>
//               Previous
//             </button>

//             <button type="submit">Submit</button>
//           </>
//         )}

//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </form>

//       <hr />

//       <h3>Live Data Preview</h3>
//       <p>Name: {formData.name}</p>
//       <p>Email: {formData.email}</p>
//       <p>Mobile: {formData.mobile}</p>
//       <p>Age: {formData.age}</p>
//     </div>
//   );
// }

// export default App;



// Task 6: Form + LocalStorage (MNC Level)


import { useState, useEffect } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("signupData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    localStorage.setItem("signupData", JSON.stringify(formData));

    alert("Data saved successfully!");


    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup Form (LocalStorage)</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default App;