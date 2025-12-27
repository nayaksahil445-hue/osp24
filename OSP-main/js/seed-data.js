// Agent pannel code seed data
function seedDemoData() {
  const demoRequests = [
    {id:"OSP101",name:"Ramesh Behera",mobile:"9876543210",village:"Balianta",service:"Scholarship",status:"Assigned",agent:"agent1"},
    {id:"OSP102",name:"Sita Nayak",mobile:"9123456780",village:"Jatni",service:"Document Apply",status:"New",agent:""},
    {id:"OSP103",name:"Manoj Sahoo",mobile:"9988776655",village:"Balipatna",service:"Farmer Scheme",status:"Assigned",agent:"agent1"},
    {id:"OSP104",name:"Laxmi Pradhan",mobile:"9012345678",village:"Khordha",service:"PM-KISAN",status:"Completed",agent:"agent1"},
    {id:"OSP105",name:"Bikash Rout",mobile:"8899776655",village:"Begunia",service:"Job Assistance",status:"New",agent:""},
    {id:"OSP106",name:"Anita Das",mobile:"9345678901",village:"Banapur",service:"Scholarship",status:"Assigned",agent:"agent1"},
    {id:"OSP107",name:"Kailash Mohanty",mobile:"9871203456",village:"Bolagarh",service:"CSC Service",status:"Completed",agent:"agent1"},
    {id:"OSP108",name:"Sunita Jena",mobile:"9011122233",village:"Tangi",service:"Document Apply",status:"New",agent:""},
    {id:"OSP109",name:"Prakash Barik",mobile:"9887766554",village:"Chilika",service:"Farmer Subsidy",status:"Assigned",agent:"agent1"},
    {id:"OSP110",name:"Meena Sethi",mobile:"9776655443",village:"Nirakarpur",service:"Scholarship",status:"Completed",agent:"agent1"},

    {id:"OSP111",name:"Sanjay Panda",mobile:"9090909090",village:"Bhubaneswar",service:"Document Apply",status:"New",agent:""},
    {id:"OSP112",name:"Rekha Patra",mobile:"9191919191",village:"Pipili",service:"Job Assistance",status:"Assigned",agent:"agent1"},
    {id:"OSP113",name:"Narayan Samal",mobile:"9292929292",village:"Delang",service:"CSC Service",status:"Completed",agent:"agent1"},
    {id:"OSP114",name:"Kalpana Rout",mobile:"9393939393",village:"Satyabadi",service:"Scholarship",status:"New",agent:""},
    {id:"OSP115",name:"Ajay Behera",mobile:"9494949494",village:"Kanas",service:"Farmer Scheme",status:"Assigned",agent:"agent1"},
    {id:"OSP116",name:"Sasmita Mishra",mobile:"9595959595",village:"Gop",service:"Document Apply",status:"Completed",agent:"agent1"},
    {id:"OSP117",name:"Ranjit Das",mobile:"9696969696",village:"Astaranga",service:"PMFBY",status:"Assigned",agent:"agent1"},
    {id:"OSP118",name:"Puja Mohapatra",mobile:"9797979797",village:"Sakhigopal",service:"Scholarship",status:"New",agent:""},
    {id:"OSP119",name:"Dipak Jena",mobile:"9898989898",village:"Konark",service:"CSC Service",status:"Assigned",agent:"agent1"},
    {id:"OSP120",name:"Mamata Swain",mobile:"9999999999",village:"Puri",service:"Document Apply",status:"Completed",agent:"agent1"}
  ];

  localStorage.setItem("requests", JSON.stringify(demoRequests));
  alert("✅ Demo data (20 records) added successfully!");
}

// admin pannel code seed data
/* =================================================
   OSP DEMO DATA LOADER (LOCAL STORAGE)
================================================= */

function loadDemoDataIfEmpty() {

  /* ===== AGENTS ===== */
  if (!localStorage.getItem("agents")) {
    const agents = [
      {
        agentId: "AGT-1001",
        name: "Rakesh Sahu",
        phone: "63709xxxxx",
        area: "Khordha",
        status: "ACTIVE",
        totalRequests: 12
      },
      {
        agentId: "AGT-1002",
        name: "Sunita Naik",
        phone: "8249xxxxx",
        area: "Cuttack",
        status: "ACTIVE",
        totalRequests: 8
      },
      {
        agentId: "AGT-1003",
        name: "Amit Barik",
        phone: "9438xxxxx",
        area: "Puri",
        status: "BLOCKED",
        totalRequests: 3
      }
    ];
    localStorage.setItem("agents", JSON.stringify(agents));
  }

  /* ===== REQUESTS ===== */
  if (!localStorage.getItem("requests")) {
    const services = [
      "Scholarship",
      "Caste Certificate",
      "Income Certificate",
      "Farmer Scheme",
      "Job Registration"
    ];

    const requests = [];

    for (let i = 1; i <= 25; i++) {
      requests.push({
        id: "OSP-" + (1000 + i),
        user: "Citizen " + i,
        mobile: "9XXXXXXX" + i,
        village: "Village " + ((i % 6) + 1),
        service: services[i % services.length],
        status: i % 4 === 0 ? "Completed" : "Pending",
        agentId: i % 3 === 0 ? "AGT-1003" : i % 2 === 0 ? "AGT-1002" : "AGT-1001",
        payment: i % 5 === 0 ? "Paid" : "Unpaid",
        blocked: false,
        remark: ""
      });
    }

    localStorage.setItem("requests", JSON.stringify(requests));
  }

  /* ===== COMPLAINTS ===== */
  if (!localStorage.getItem("complaints")) {
    const complaints = [
      {
        id: "CMP-001",
        userName: "Citizen 4",
        agentId: "AGT-1003",
        reason: "Extra money demanded",
        status: "NEW",
        date: "2025-03-10"
      },
      {
        id: "CMP-002",
        userName: "Citizen 9",
        agentId: "AGT-1003",
        reason: "Work not completed",
        status: "UNDER REVIEW",
        date: "2025-03-11"
      }
    ];
    localStorage.setItem("complaints", JSON.stringify(complaints));
  }

  /* ===== ANNOUNCEMENTS ===== */
  if (!localStorage.getItem("announcements")) {
    const announcements = [
      {
        title: "Fraud Alert",
        message: "OSP never asks for OTP or bank details.",
        date: "2025-03-12"
      },
      {
        title: "New Service Added",
        message: "Online Farmer Scheme application now available.",
        date: "2025-03-14"
      }
    ];
    localStorage.setItem("announcements", JSON.stringify(announcements));
  }

  /* ===== LOGS ===== */
  if (!localStorage.getItem("logs")) {
    localStorage.setItem("logs", JSON.stringify([]));
  }
}

/* ===== LOAD DATA ===== */
loadDemoDataIfEmpty();

/* ===== EXPORT DATA TO JS ===== */
let agents = JSON.parse(localStorage.getItem("agents"));
let requests = JSON.parse(localStorage.getItem("requests"));
let complaints = JSON.parse(localStorage.getItem("complaints"));
let announcements = JSON.parse(localStorage.getItem("announcements"));
let logs = JSON.parse(localStorage.getItem("logs"));