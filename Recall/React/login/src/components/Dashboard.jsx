function Dashboard() {
    const user = JSON.parse(localStorage.getItem("userData"));
  
    return (
        <div className="dashboard">

      <div>
        <h2>Dashboard</h2>
  
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      </div>
    );
  }
  
  export default Dashboard;
  