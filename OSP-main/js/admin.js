function loadRequests() {
  let html="";
  requests.forEach(r=>{
    html+=`
    <tr>
      <td>${r.id}</td>
      <td>${r.user}</td>
      <td>${r.service}</td>
      <td style="color:${r.status=="Pending"?"orange":"green"}">${r.status}</td>
      <td>${r.agentId}</td>
      <td>${r.payment}</td>
      <td>
        <button onclick="blockAgent('${r.agentId}')">Block</button>
      </td>
    </tr>`;
  });
  document.getElementById("reqTable").innerHTML=html;
}

function loadComplaints(){
  let html="";
  complaints.forEach(c=>{
    html+=`
    <tr>
      <td>${c.id}</td>
      <td>${c.user}</td>
      <td>${c.agentId}</td>
      <td>${c.reason}</td>
      <td style="color:red">${c.status}</td>
    </tr>`;
  });
  document.getElementById("complaintTable").innerHTML=html;
}

function loadAnnouncements(){
  let html="";
  announcements.forEach(a=>{
    html+=`
    <div class="notice">
      <b>${a.title}</b>
      <p>${a.message}</p>
    </div>`;
  });
  document.getElementById("announceBox").innerHTML=html;
}

function updateStats(){
  document.getElementById("total").innerText=requests.length;
  document.getElementById("pending").innerText=requests.filter(r=>r.status=="Pending").length;
  document.getElementById("completed").innerText=requests.filter(r=>r.status=="Completed").length;
  document.getElementById("agents").innerText=agents.filter(a=>a.status=="ACTIVE").length;
}

function blockAgent(id){
  if(confirm("Block agent permanently?")){
    agents.find(a=>a.agentId==id).status="BLOCKED";
    logs.push("Agent blocked: "+id);
    alert("Agent blocked 🚫");
    updateStats();
  }
}

function logout(){
  alert("Logged out");
  location.href="admin-login.html";
}

/* INIT */
loadRequests();
loadComplaints();
loadAnnouncements();
updateStats();
