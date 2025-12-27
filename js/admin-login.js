function adminLogin() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "admin" && p === "admin123") {
    localStorage.setItem("adminLogin", "true");
    window.location.href = "admin-dashboard.html";
  } else {
    document.getElementById("err").innerText =
      "Invalid Admin ID or Password";
  }
}
