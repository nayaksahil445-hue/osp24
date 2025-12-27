const agentId = localStorage.getItem("agentId") || "agent1";
const agentName = localStorage.getItem("loggedAgent") || "Rahul Kumar";

document.getElementById("agentName").innerText =
  "Welcome, " + agentName;

function loadTasks() {
  const data = JSON.parse(localStorage.getItem("requests")) || [];
  const table = document.getElementById("agentTable");
  table.innerHTML = "";

  const myTasks = data.filter(r => r.agent === agentId);

  if (myTasks.length === 0) {
    table.innerHTML = `<tr><td colspan="7">No assigned requests</td></tr>`;
    return;
  }

  myTasks.forEach((r, index) => {
    table.innerHTML += `
      <tr>
        <td>${r.id}</td>
        <td>${r.name}</td>
        <td>${r.service}</td>

        <td>
          <select onchange="updateStatus(${index}, this.value)">
            <option ${r.status==="Assigned"?"selected":""}>Assigned</option>
            <option ${r.status==="In Progress"?"selected":""}>In Progress</option>
            <option ${r.status==="Waiting for Docs"?"selected":""}>Waiting for Docs</option>
            <option ${r.status==="Completed"?"selected":""}>Completed</option>
          </select>
        </td>

        <td>
          <label><input type="checkbox" ${r.aadhaar?"checked":""}
            onchange="toggleDoc(${index}, 'aadhaar')"> Aadhaar</label><br>
          <label><input type="checkbox" ${r.bank?"checked":""}
            onchange="toggleDoc(${index}, 'bank')"> Bank</label><br>
          <label><input type="checkbox" ${r.photo?"checked":""}
            onchange="toggleDoc(${index}, 'photo')"> Photo</label>
        </td>

        <td>
          <textarea onblur="saveRemark(${index}, this.value)"
            placeholder="Enter remark">${r.remark || ""}</textarea>
        </td>

        <td>
          ${r.status !== "Completed"
            ? `<button onclick="markCompleted(${index})">Complete</button>`
            : `<span class="done">Done</span>`}
        </td>
      </tr>
    `;
  });
}

function updateStatus(index, value) {
  let data = JSON.parse(localStorage.getItem("requests"));
  data[index].status = value;
  localStorage.setItem("requests", JSON.stringify(data));
}

function toggleDoc(index, doc) {
  let data = JSON.parse(localStorage.getItem("requests"));
  data[index][doc] = !data[index][doc];
  localStorage.setItem("requests", JSON.stringify(data));
}

function saveRemark(index, text) {
  let data = JSON.parse(localStorage.getItem("requests"));
  data[index].remark = text;
  localStorage.setItem("requests", JSON.stringify(data));
}

function markCompleted(index) {
  let data = JSON.parse(localStorage.getItem("requests"));
  data[index].status = "Completed";
  localStorage.setItem("requests", JSON.stringify(data));
  loadTasks();
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

window.onload = loadTasks;
