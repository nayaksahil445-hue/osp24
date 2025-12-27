function loginAgent() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // DEMO credentials
  if (user === "agent1" && pass === "agent123") {
    localStorage.setItem("loggedAgent", "Rahul Kumar");
    localStorage.setItem("agentId", "agent1");
    window.location.href = "agent-dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid login credentials";
  }
}
