/* ai-data.js
   Large Odisha-focused scheme dataset (Odia language)
   Use with ai-engine.js and ai-ui.js
*/

const AI_SCHEMES = [

/* -------------------- 1 - Farmer & Agriculture -------------------- */
{
  name: "PM-KISAN (ପ୍ରଧାନମନ୍ତ୍ରୀ କିସାନ୍ ସମ୍ମାନ ନିଧି)",
  minAge: 18,
  maxIncome: 250000,
  caste: "ALL",
  occupation: "Farmer",
  explain: `
ଏହା କୃଷକଙ୍କ ପାଇଁ ଏକ ଜାତୀୟ ସହାୟତା ଯୋଜନା । 
ପ୍ରତି ବର୍ଷ ₹6000 ଟଙ୍କା ଭୁଗତାନ ହୁଏ (କିଛି ଅବସରରେ ଅଦ୍ୟାବଧି)। 
ତୁମର ଜମି/ଭୂମି ରେକର୍ଡ ଯଦି ସଠିକ୍ ଅଛି ଏବଂ ବ୍ୟାଙ୍କ ବିବରଣୀ ମ୍ୟାଚ୍ ହେଲେ ସହଜରେ ମିଳିବ।
  `,
  docs: ["ଆଧାର କାର୍ଡ","ଭୂମି ରେକର୍ଡ (RoR)","ବ୍ୟାଙ୍କ ଖାତା/Cancelled Cheque"],
  steps: [
    "pmkisan.gov.in ଯାଆନ୍ତୁ",
    "New Farmer Registration କରନ୍ତୁ",
    "ଆଧାର OTP ଭେରିଫାଇ କରନ୍ତୁ",
    "ଭୂମି ଓ ବ୍ୟାଙ୍କ ସୂଚନା ଦିଅନ୍ତୁ",
    "Submit କରି acknowledgement ରଖନ୍ତୁ"
  ],
  aiNote: "ଯଦି ତୁମର ଭୂମି ନାମ ଲେନ୍ ରେ ନଥାଏ ତେବେ CSC ମାଧ୍ୟମରେ ସହଯୋଗ ନିଅ।"
},

{
  name: "KALIA Yojana (କାଲିଆ ଯୋଜନା)",
  minAge: 18,
  maxIncome: 200000,
  caste: "ALL",
  occupation: "Farmer",
  explain: `
ଓଡିଶା ସରକାରଙ୍କ ଏକ ପ୍ରধান କୃଷକ ସହାୟତା ଯୋଜନା ।
ଛୋଟ ଓ ତିନି ରୂପର କୃଷକଙ୍କୁ ଆର୍ଥିକ ସହାୟତା, ଇନପୁଟ ସହାୟତା ମିଳେ ।
  `,
  docs: ["ଆଧାର","ରେସନ୍ କାର୍ଡ/ଭୂମି ପ୍ରମାଣ","ବ୍ୟାଙ୍କ ଖାତା"],
  steps: [
    "kalia.odisha.gov.in କୁ ଯାଆନ୍ତୁ",
    "Beneficiary List ଚେକ୍ କରନ୍ତୁ",
    "নାମ ନାହିଁ ହେଲେ CSC ରେ ପଚାରନ୍ତୁ"
  ],
  aiNote: "ଗ୍ରାମ ବ୍ୟବସ୍ଥା ପ୍ରଚଳନ ଦ୍ଵାରା ବହୁତ ସମୟରେ ସହାୟତା ମିଳିଥାଏ।"
},

{
  name: "PMFBY - Crop Insurance (କୃଷି ବୀମା)",
  minAge: 18,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "Farmer",
  explain: `
ପ୍ରଧାନମନ୍ତ୍ରୀ ଫସଲ ବୀମା ଯୋଜନା (PMFBY) ଫସଲ କ୍ଷୟ ହେଲେ କଭର ପ୍ରଦାନ କରେ।
ଫର୍ମର୍ ସଂରକ୍ଷା ପାଇଁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ।
  `,
  docs: ["ଫାର୍ମର୍ ପରିଚୟ","ଖେତି ଟିକେଟ/ଦାଖଲ","ଆଧାର","ବ୍ୟାଙ୍କ ଖାତା"],
  steps: ["PMFBY ପ୍ଲାଟଫର୍ମ କିମ୍ବା ଆପଣଙ୍କ ନିକଟ ଇନ୍ସୁରେନ୍ସ ଏଜେଣ୍ଟ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ","ଅନଲାଇନ୍/ଆଫ୍ଲାଇନ୍ ରେ ପ୍ରିମିୟମ ଦାନ କରନ୍ତୁ"],
  aiNote: "ଜନମାନ୍ୟ ଅବସ୍ଥାରେ ଅନଲାଇନ୍ ଟ୍ରାନ୍ଜାକସନ କରାଇବାରୁ CSC ଆସିଷ୍ଟ କରେ।"
},

/* -------------------- 2 - Student Scholarships -------------------- */
{
  name: "Post Matric Scholarship (SC/ST) - Odisha",
  minAge: 14,
  maxIncome: 250000,
  caste: "SC",
  occupation: "Student",
  explain: `
SC/ST ଛାତ୍ରଛାତ୍ରୀଙ୍କ ପାଇଁ Post Matric ଟଙ୍କା ସହାୟତା । ଏହା ଶିକ୍ଷା ଜାରି ରଖିବାକୁ ମଦଦ କରେ ।
  `,
  docs: ["ଆଧାର","ଜାତି ପ୍ରମାଣପତ୍ର","କଲେଜ ରସିଦ","ଇନକମ୍ ସର୍ଟିଫିକେଟ"],
  steps: ["scholarship.odisha.gov.in ଯାଆନ୍ତୁ","Post Matric ବିଭାଗ ବାଛନ୍ତୁ","Fresh/renewal ପଞ୍ଜୀକରଣ କରନ୍ତୁ","ଡକ୍ୟୁମେଣ୍ଟ ଅପଲୋଡ କରନ୍ତୁ"],
  aiNote: "Document ସଠିକ୍ ମଧ୍ୟରେ ରଖନ୍ତୁ; ବ୍ୟାଙ୍କ ଏକ୍ସାକ୍ ଦିଛିକୁ ଯାଞ୍ଚ କରନ୍ତୁ।"
},

{
  name: "Prerana Scholarship (OBC/SEBC) - Odisha",
  minAge: 14,
  maxIncome: 150000,
  caste: "OBC",
  occupation: "Student",
  explain: `
OBC/SEBC ଛାତ୍ରଛାତ୍ରୀଙ୍କ ପାଇଁ ଓଡ଼ିଶା ସରକାରଙ୍କର ସହାୟତା।
ବିଦ୍ୟାର୍ଥୀଙ୍କ ଆର୍ଥିକ ସହାୟତା ହୋଇଥାଏ।
  `,
  docs: ["ଆଧାର","OBC ସର୍ଟିଫିକେଟ","କଲେଜ ରସିଦ","ଇନକମ୍ ସର୍ଟିଫିକେଟ"],
  steps: ["Prerana portal ଉପରେ ଆବେଦନ କରନ୍ତୁ","ଡକ୍ୟୁମେଣ୍ଟ ଅପଲୋଡ୍ କରନ୍ତୁ","Acknowledgement ପ୍ରିଣ୍ଟ କରନ୍ତୁ"],
  aiNote: "ନିୟମ ମାନନ୍ତୁ; renewal ସମୟରେ ଶିକ୍ଷା ରେକର୍ଡ ଦେଖାଉଥାଏ।"
},

{
  name: "Merit-cum-Means Scholarship (Central / Odisha)",
  minAge: 14,
  maxIncome: 80000,
  caste: "ALL",
  occupation: "Student",
  explain: `
ନୀତି ଅନୁଯାୟୀ ମେରିଟ ଏବଂ ଆର୍ଥିକ ଆଧାରରେ ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ସହାୟତା।
  `,
  docs: ["Marksheet","Aadhar","Income Certificate","College Admission Proof"],
  steps: ["Official scholarship portal ରେ apply କରନ୍ତୁ","Documents upload କରନ୍ତୁ","Verification ପ୍ରକ୍ରିୟା ହେବ"],
  aiNote: "Marksheet ଓ income doc ସଠିକ୍ ରଖନ୍ତୁ — ଏହାରେ merit check ହୁଏ।"
},

/* -------------------- 3 - Women & Child -------------------- */
{
  name: "Mo Sishu Pustika / Mother & Child Support (ଓଡ଼ିଶା)",
  minAge: 18,
  maxIncome: 250000,
  caste: "ALL",
  occupation: "All",
  explain: `
ସ୍ତ୍ରୀ ଓ ସିଶୁ ସୁରକ୍ଷା ପାଇଁ ଓଡ଼ିଶା ସରକାରର କିଛି ସହାୟତା ପ୍ରୋଗ୍ରାମ | ଟୀକା, ନୁତ୍ରିସନ୍ ସହାୟତା ଓ ମାଟର୍ନିଟି ଲାଭ ମିଳେ |
  `,
  docs: ["ଆଧାର","ମେଡିକାଲ ରେକର୍ଡ","ବ୍ୟାଙ୍କ ଖାତା"],
  steps: ["ନିକଟ ହେଲ୍ଥ ସେଣ୍ଟରକୁ ଯାଆନ୍ତୁ","ସଂପୂର୍ଣ୍ଣ ଡକ୍ୟୁମେଣ୍ଟ ଦିଅନ୍ତୁ","ଆସିଷ୍ଟାନ୍ସ ନିଅନ୍ତୁ"],
  aiNote: "ନିର୍ଦ୍ଦିଷ୍ଟ କେସଠାରେ ଅଧିକ ସହାୟତା ମିଳିପାରେ।"
},

{
  name: "Mission Shakti - Women Self Help (ମିଶନ୍ ଶକ୍ତି)",
  minAge: 18,
  maxIncome: 500000,
  caste: "ALL",
  occupation: "Self-employed",
  explain: `
ଓଡ଼ିଶାର Mission Shakti ମହିଳା ସଶକ୍ତିକରଣ ପ୍ରୟାସ । 
Self Help Groups (SHGs) ଓ ନିଜ ବ୍ୟବସାୟ ଶୁରୁ କରିବାରେ ସହାୟତା ଦିଆଯାଏ।
  `,
  docs: ["ଆଧାର","ଫୋଟୋ","ବ୍ୟାପାର ପ୍ଲାନ/ଭିବରଣୀ"],
  steps: ["ଶ୍ରେନୀକୃତ SHG କୁ ଯୋଗଦିଅନ୍ତୁ","Training ଓ loan assistance ପାଇଁ apply କରନ୍ତୁ"],
  aiNote: "SHG ଲିଡ୍ ଯଦି ଅଛନ୍ତି ତେବେ ଆରମ୍ଭ ସହଜ।"
},

/* -------------------- 4 - Social Security / Pension -------------------- */
{
  name: "Old Age Pension (ବୃଦ୍ଧାପ୍ରାପ୍ତ ପେନସନ୍)",
  minAge: 60,
  maxIncome: 100000,
  caste: "ALL",
  occupation: "All",
  explain: `
ବୃଦ୍ଧ ନागରିକଙ୍କୁ ଓଡ଼ିଶା ସରକାର ଦ୍ଵାରା ନିୟମିତ ପେନସନ୍ । 
Eligibility ଏବଂ ରାଶି scheme ଉପରେ ଆଧାରିତ ।
  `,
  docs: ["ଆଧାର","ଇନକମ୍ ସର୍ଟିଫିକେଟ୍","ଜନମ ପ୍ରମାଣପତ୍ର"],
  steps: ["ଜିଲ୍ଲା କାର୍ଯ୍ୟାଳୟରେ ଆବେଦନ କରନ୍ତୁ","ସମସ୍ତ ଡକ୍ୟୁମେଣ୍ଟ ଦିଅନ୍ତୁ","ଵେରିଫିକେସନ୍ ପରେ ପେନସନ୍ ଲଗେଇଦିଆଯିବ"],
  aiNote: "Local BDO/GP ସହ ଯାଞ୍ଚ କରିବା ଉପକାରୀ।"
},

{
  name: "Disability Pension (ଦିବ୍ୟାଙ୍ଗ ପେନସନ୍)",
  minAge: 18,
  maxIncome: 200000,
  caste: "ALL",
  occupation: "All",
  explain: `
ଦିବ୍ୟାଙ୍ଗ ନାଗରିକଙ୍କୁ ଓଡ଼ିଶା ପେନସନ୍/ସହାୟତା । 
Disability certificate ଦ୍ଵାରା ସହାୟତା ମିଳେ।
  `,
  docs: ["ଦିବ୍ୟାଙ୍ଗ ପ୍ରମାଣପତ୍ର","ଆଧାର","ଇନକମ୍ ସର୍ଟିଫିକେଟ"],
  steps: ["ନିକଟ ବିଶେଷ ସୁପର୍-ସ୍ପେସିଆଲିସ୍ଟ ସହ ପରୀକ୍ଷା","ଡିସେବିଲିଟି ସର୍ଟିଫିକେଟ ପ୍ରାପ୍ତ","ଜିଲ୍ଲା କାର୍ଯ୍ୟାଳୟରେ ଆବେଦନ"],
  aiNote: "ମେଡିକାଲ ରିପୋର୍ଟ ଭଲ ଭାବେ ସଜାଇ ରଖନ୍ତୁ।"
},

/* -------------------- 5 - Health -------------------- */
{
  name: "Biju Swasthya Kalyan Yojana (Odisha Health)",
  minAge: 0,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "All",
  explain: `
ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଳ୍ୟାଣ ଯୋଜନା — ରୋଗୀଙ୍କୁ ଉଚ୍ଚ ମାନର ସ୍ୱାସ୍ଥ୍ୟ ସେବା ଦେଉଛି । 
ରୋଗାଳୟ ପେଙ୍କରେ ଫାଇନାନ୍ସିଆଲ୍ ସହାୟତା ମିଳେ।
  `,
  docs: ["ଆଧାର","ରୋଗୀର ପ୍ରସ୍ତାବନା","ବ୍ୟାଙ୍କ ଖାତା"],
  steps: ["Public hospital ଯାଆନ୍ତୁ","ନିର୍ଦ୍ଦିଷ୍ଟ ଫର୍ମ ପୂରଣ କରନ୍ତୁ","Claim ପାଇଁ ପ୍ରକ୍ରିୟା ଅନୁସରଣ କରନ୍ତୁ"],
  aiNote: "Emergency caseରେ hospital ତୁରନ୍ତ যোগাযোগ କରନ୍ତୁ।"
},

/* -------------------- 6 - Housing -------------------- */
{
  name: "Pradhan Mantri Awas Yojana (PMAY) - Urban/Rural",
  minAge: 18,
  maxIncome: 500000,
  caste: "ALL",
  occupation: "All",
  explain: `
PMAY ଘର ମିଳିବା ପାଇଁ ସହାୟତା । ଗରିବ/ମଧ୍ୟମ ବର୍ଗକୁ ଲାଭ ମିଳେ ।
  `,
  docs: ["ଆଧାର","ଆଇଡି ପ୍ରୁଫ/ରେନ୍ଟହାଉସ","ଇନକମ୍ ସର୍ଟିଫିକେଟ"],
  steps: ["pmay.gov.in ରେ ଆବେଦନ କରନ୍ତୁ","State portal ରେ ଅନୁସରଣ କରନ୍ତୁ","Verification ପରେ subsidy ମିଳିପାରେ"],
  aiNote: "Title clear ହେବା ଜରୁରୀ; local municipal/GP ସହ ସମ୍ପର୍କ କରନ୍ତୁ।"
},

{
  name: "IAY / PMAY-Gramin (ଗ୍ରାମୀଣ ଆବାସ)",
  minAge: 18,
  maxIncome: 250000,
  caste: "ALL",
  occupation: "All",
  explain: `
ଗ୍ରାମୀଣ ଲୋକଙ୍କ ପାଇଁ ଘର ନିର୍ମାଣ ସହାୟତା । ଓଡ଼ିଶାରେ ଗ୍ରାମ ଅଧିକାରୀ ମାଧ୍ୟମରେ ପ୍ରକ୍ରିୟା ।
  `,
  docs: ["ଆଧାର","ରିଟ୍ ଡକ୍ୟୁମେଣ୍ଟ","ଇନକମ୍ ସର୍ଟିଫିକେଟ"],
  steps: ["GP କାର୍ଯ୍ୟାଳୟକୁ ଯାଆନ୍ତୁ","ଆବେଦନ ଫର୍ମ ପୂରଣ କରନ୍ତୁ","ଆସେସ୍ମେଣ୍ଟ ପରେ ଟିକେଟ ମିଳିବ"],
  aiNote: "ଲୋକାଲ ଅଧିକାରୀଙ୍କ ସହ ଭଲ ସଂପର୍କ ଲଗାଇବା ଉପକାରୀ।"
},

/* -------------------- 7 - Skill & Employment -------------------- */
{
  name: "Skill Development (Kaushal Vikash) - Odisha",
  minAge: 16,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "Unemployed",
  explain: `
କୌଶଳ ଅନୁଷ୍ଠାନ/ପ୍ରଶିକ୍ଷଣ ଭିତ୍ତିକ କାର୍ଯ୍ୟକ୍ରମ । ଯୁବକ/ୟୁବତୀଙ୍କୁ ନିଜ ଦକ୍ଷତା ବୃଦ୍ଧି ପାଇଁ training ମିଳେ ।
  `,
  docs: ["ଆଧାର","ଶିକ୍ଷା ପ୍ରମାଣପତ୍ର (ଯଦି ଅଛି)","ଫୋଟୋ"],
  steps: ["skillmissionodisha.gov.in କୁ ଯାଆନ୍ତୁ","Course ଚୟନ କରନ୍ତୁ","Apply କରି training ନିଅନ୍ତୁ"],
  aiNote: "Free training slot ପାଇଁ CSC କେନ୍ଦ୍ରରେ register କରନ୍ତୁ।"
},

{
  name: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
  minAge: 18,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "Unemployed",
  explain: `
MGNREGA ଗ୍ରାମ ମଜୁରଙ୍କୁ ଜୀବିକା ସୁରକ୍ଷା ପାଇଁ 100 ଦିନ ଚାକିରି ସୁନିଶ୍ଚିତ କରେ।
  `,
  docs: ["ଆଧାର","ରେସିଡେନସି ପ୍ରମାଣ"],
  steps: ["GP କାର୍ଯ୍ୟାଳୟରେ job card ପାଇଁ apply କରନ୍ତୁ","ରୋଜଗାର ଅନୁରୋଧ ଦିଅନ୍ତୁ"],
  aiNote: "Local Gram Panchayat ଏହାର implementation ନିୟନ୍ତ୍ରଣ କରେ।"
},

/* -------------------- 8 - MSME & Self Employment -------------------- */
{
  name: "MSME Udyam Registration (ଉଦ୍ୟମ)",
  minAge: 18,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "Self-employed",
  explain: `
Udyam registration ଦ୍ଵାରା ଛୋଟ ବ୍ୟବସାୟ ପାଇଁ ସରକାରୀ ସହାୟତା ଓ ଲୋନ୍ ସୁବିଧା ମିଳେ ।
  `,
  docs: ["Aadhar","Pan (if available)","Business Address proof","Bank details"],
  steps: ["udyamregistration.gov.in ରେ ଅନଲାଇନ୍ ରେଜିଷ୍ଟ୍ରେସନ୍ କରନ୍ତୁ","Udyam certificate download କରନ୍ତୁ"],
  aiNote: "Registration ସିଘ୍ର ଏବଂ ସରଳ — CSC ରେ assistance ମିଳିପାରେ।"
},

{
  name: "Mudra Loan (PMMY)",
  minAge: 18,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "Self-employed",
  explain: `
PM Mudra Loan ଛୋଟ ବ୍ୟବସାୟ ପାଇଁ କରଜ ଦିଏ;karoon ସହଜ ଇଂଟରେଷ୍ଟ ଏବଂ repayment plan। 
  `,
  docs: ["Aadhar","Business Proof","Bank Statement","KYC"],
  steps: ["Bank / CSC ମାଧ୍ୟମରେ apply କରନ୍ତୁ","Business plan ଦିଅନ୍ତୁ","Loan approval ପାଇଁ follow-up କରନ୍ତୁ"],
  aiNote: "Micro loan ପାଇଁ local bank ସହିତ negotiate କରନ୍ତୁ।"
},

/* -------------------- 9 - Fisheries & Animal Husbandry -------------------- */
{
  name: "Fisheries Assistance (Machhimar Sahayata)",
  minAge: 18,
  maxIncome: 250000,
  caste: "ALL",
  occupation: "Fisherman",
  explain: `
Machhimar (ମାଛମାଛ) କୁ fishing gear, boat subsidy ଓ training ମିଳେ ।
  `,
  docs: ["Fishing License/Community proof","Aadhar","Bank details"],
  steps: ["State fisheries office କୁ application କରନ୍ତୁ","Required documents ଦିଅନ୍ତୁ","Subsidy ଲାଭ ନିଅନ୍ତୁ"],
  aiNote: "Local fisheries office ରେ checklist ମାଗନ୍ତୁ।"
},

{
  name: "Livestock Insurance / Animal Husbandry Subsidy",
  minAge: 18,
  maxIncome: 300000,
  caste: "ALL",
  occupation: "Farmer",
  explain: `
ପଶୁସଂପଦ ସୁରକ୍ଷା ପାଇଁ ବୀମା ଓ ସହାୟତା । ଆପଣଙ୍କ ପଶୁ ଧାରଣ କୁ ସେକ୍ୟୁର କରେ ।
  `,
  docs: ["Animal ownership proof","Aadhar","Veterinary certificate"],
  steps: ["Animal husbandry office କୁ ଯାଆନ୍ତୁ","Apply କରନ୍ତୁ","Insurance premium/claim ପ୍ରକ୍ରିୟା ଅନୁସରଣ କରନ୍ତୁ"],
  aiNote: "ଏହି ସେବା ଖେତିକୁ ସୁରକ୍ଷିତ ରଖେ।"
},

/* -------------------- 10 - Renewable Energy -------------------- */
{
  name: "Solar Pump & Rooftop Subsidy (Odisha)",
  minAge: 18,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "Farmer",
  explain: `
Solar pump ଓ rooftop solar ଲାଗି subsidy ଓ technical assistance ମିଳେ । ଜଳସଂରକ୍ଷଣ ଓ energy savings ହୁଏ ।
  `,
  docs: ["Aadhar","Land proof/house proof","Bank details"],
  steps: ["State renewable energy portal କୁ ଯାଆନ୍ତୁ","Apply form ଭରନ୍ତୁ","Inspection ପରେ subsidy sanction ହୁଏ"],
  aiNote: "Installation partners ସହ CSC ମାଧ୍ୟମରେ ସମ୍ପର୍କ କରନ୍ତୁ।"
},

/* -------------------- 11 - Social Welfare / Grants -------------------- */
{
  name: "Biju Krushak Kalyan Yojana (BKKS)",
  minAge: 18,
  maxIncome: 250000,
  caste: "ALL",
  occupation: "Farmer",
  explain: `
ଓଡ଼ିଶା ନିଜସ୍ୱ କୃଷକ କଲ୍ୟାଣ ପ୍ରୋଗ୍ରାମ | ଆର୍ଥିକ ସହାୟତା ଓ ସସ୍ତା ଦାନା ଅନୁଷ୍ଠାନ |
  `,
  docs: ["Aadhar","Land Record","Bank Details"],
  steps: ["State agriculture portal କୁ check କରନ୍ତୁ","Local agriculture office କୁ ପଚାରନ୍ତୁ"],
  aiNote: "Seed subsidy ଓ other benefits ମଧ୍ୟ ମିଳିପାରେ।"
},

/* -------------------- 12 - Transport & Travel -------------------- */
{
  name: "Subsidized Bus Pass for Students (State)",
  minAge: 14,
  maxIncome: 200000,
  caste: "ALL",
  occupation: "Student",
  explain: `
ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ସସ୍ତା bus pass ମିଳେ । ଏହା ପଢ଼ାକୁ ସହାୟକ ।
  `,
  docs: ["Student ID","Aadhar","Residence proof"],
  steps: ["Local transport office କୁ apply କରନ୍ତୁ","Student ID ଦରକାର"],
  aiNote: "School/college authority ଠାରୁ certificate ଲାଗିପାରେ।"
},

/* -------------------- 13 - Disaster Relief -------------------- */
{
  name: "Disaster Relief / Cyclone Assistance (State Relief Fund)",
  minAge: 0,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "All",
  explain: `
ପ୍ରାକୃତିକ ଆପଦ (ସାଇକ୍ଲୋନ, ବନ୍ୟା) ସମୟରେ ଓଡିଶାର immediate relief packages ଦିଆଯାଏ ।
  `,
  docs: ["Damage proof photographs","Aadhar","Ration card"],
  steps: ["Local relief camp/GP କୁ report କରନ୍ତୁ","Damage assessment ପରେ assistance ମିଳିବ"],
  aiNote: "ଅତି ଶୀଘ୍ର ସମୟରେ local authority ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।"
},

/* -------------------- 14 - Minority Welfare -------------------- */
{
  name: "Minority Scholarship (State / Central)",
  minAge: 14,
  maxIncome: 150000,
  caste: "ALL",
  occupation: "Student",
  explain: `
ମାଇନୋରିଟି ଛାତ୍ରଛାତ୍ରୀଙ୍କ ପାଇଁ କିଛି ଶିକ୍ଷା ସହାୟତା । ହଜାର ଶିକ୍ଷା ସହାୟକ ।
  `,
  docs: ["Aadhar","Minority Certificate","College admission proof","Income certificate"],
  steps: ["State minority welfare portal କୁ apply କରନ୍ତୁ","Document upload କରନ୍ତୁ"],
  aiNote: "Eligibility ଓ income limit ଖୁବ ଜାଣିବା ଆବଶ୍ୟକ।"
},

/* -------------------- 15 - Urban Welfare -------------------- */
{
  name: "Urban Street Vendor Scheme (PM SVANidhi)",
  minAge: 18,
  maxIncome: 250000,
  caste: "ALL",
  occupation: "Vendor",
  explain: `
Street vendors ପାଇଁ working capital loan ଓ subsidy ପ୍ରଦାନ କରାଯାଏ।
  `,
  docs: ["Aadhar","Vendor ID/Photo proof","Business proof","Bank details"],
  steps: ["PM SVANidhi portal କୁ ଯାଆନ୍ତୁ","Apply କରନ୍ତୁ","Loan & incentivization ପାଇଁ follow-up କରନ୍ତୁ"],
  aiNote: "Daily incentive schemes ମଧ୍ୟ ଉପଲବ୍ଧ।"
},

/* -------------------- 16 - Tourism & Culture -------------------- */
{
  name: "Tourism Micro-Enterprise Support",
  minAge: 18,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "Self-employed",
  explain: `
Tourism-based craft/enterprise ପାଇଁ training ଓ small grants ମିଳେ ।
  `,
  docs: ["Id proof","Business proof","Skill certificate"],
  steps: ["State tourism department କୁ contact କରନ୍ତୁ","Micro-enterprise scheme ରେ apply କରନ୍ତୁ"],
  aiNote: "Handicraft/heritage tourism ଲାଗି ଉଚିତ।"
},

/* -------------------- 17 - Women Empowerment: Maternity / Nutrition -------------------- */
{
  name: "Janani Shishu Suraksha Karyakram (JSSK) - Maternity Benefits",
  minAge: 18,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "All",
  explain: `
ଗର୍ଭାବସ୍ଥା ଓ ଶିଶୁ ସୁରକ୍ଷା ପାଇଁ ହସ୍ପିଟାଲରେ ନି:ଶୁଳ୍କ ସେବା ଦିଆଯାଏ।
  `,
  docs: ["ଆଧାର","ହସ୍ପିଟାଲ ରେଜିଷ୍ଟ୍ରେସନ୍"],
  steps: ["ସରକାରୀ ହସ୍ପିଟାଲରେ ଯାଆନ୍ତୁ","ଜନାନୀ ସୁରକ୍ଷା benefits ନିଅନ୍ତୁ"],
  aiNote: "Emergency delivery ପାଇଁ ତୁରନ୍ତ ସମ୍ପର୍କ କରନ୍ତୁ।"
},

/* -------------------- 18 - Tribal Development -------------------- */
{
  name: "Tribal Livelihood Programme (OGS/State Tribal Schemes)",
  minAge: 18,
  maxIncome: 250000,
  caste: "ST",
  occupation: "All",
  explain: `
ଜନଜାତିୟ ସମୁଦାୟ ପାଇଁ livelihood, training, ଏବଂ subsidy schemes । 
Local tribal welfare office ମାଧ୍ୟମରେ implementation ହୁଏ।
  `,
  docs: ["Tribal certificate","Aadhar","Residence proof"],
  steps: ["Tribal welfare office କୁ ପଚାରନ୍ତୁ","Scheme ଲିସ୍ଟ Check କରନ୍ତୁ","Apply କରନ୍ତୁ"],
  aiNote: "Local tribal leaders ଘଟଣାରେ ବହୁତ ସାହାୟକ।"
},

/* -------------------- 19 - Child / Nutrition -------------------- */
{
  name: "Integrated Child Development Services (ICDS) - Anganwadi",
  minAge: 0,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "All",
  explain: `
ICDS ଦ୍ଵାରା ଶିଶୁଗୁଡ଼ିକୁ nutrition, immunization ଓ early childhood care ମିଳେ ।
  `,
  docs: ["Mother\'s Aadhar","Child\'s birth certificate / immunization card"],
  steps: ["ନିକଟ ଆଙ୍ଗନବାଡ଼ୀ କେନ୍ଦ୍ରକୁ ଯାଆନ୍ତୁ","Registration କରନ୍ତୁ","Benefits ନିଅନ୍ତୁ"],
  aiNote: "Anganwadi ମାମଲାରେ local worker ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।"
},

/* -------------------- 20 - Energy / LPG -------------------- */
{
  name: "Ujjwala / LPG Connection Subsidy",
  minAge: 18,
  maxIncome: 250000,
  caste: "ALL",
  occupation: "All",
  explain: `
ଗରିବ ପରିବାରଙ୍କୁ LPG connection ସବସିଡି ଦିଆଯାଏ (Ujjwala) । ସୁରକ୍ଷିତ cook fuel ପ୍ରଦାନ କରେ।
  `,
  docs: ["Aadhar","Ration Card / Income proof","Bank details"],
  steps: ["Ujjwala portal / CSC ମୋଦ୍ୟମରେ apply କରନ୍ତୁ","Document ଦିଅନ୍ତୁ","Connection installation ଲାଭ ନିଅନ୍ତୁ"],
  aiNote: "Ration card ଥାଏ ତେବେ ସହଜ।"
},

/* -------------------- 21 - Financial Inclusion -------------------- */
{
  name: "Jan Dhan Yojana (Basic Bank Account)",
  minAge: 10,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "All",
  explain: `
Basic banking account ଓ financial inclusion ପାଇଁ Jan Dhan। Aadhaar linkage ଓ RuPay card ମିଳେ।
  `,
  docs: ["Aadhar","Residence proof"],
  steps: ["Nearest bank / CSC କୁ ଯାଆନ୍ତୁ","KYC କରାନ୍ତୁ","Jan Dhan account open କରନ୍ତୁ"],
  aiNote: "Bank ସହ ଲିଙ୍କ୍ ହୋଇନଥିଲେ CSC ମଧ୍ୟମରେ ସହଜ।"
},

/* -------------------- 22 - Sanitation -------------------- */
{
  name: "Swachh Bharat Mission - Toilet Subsidy (SBM)",
  minAge: 18,
  maxIncome: 250000,
  caste: "ALL",
  occupation: "All",
  explain: `
Household toilet subsidy ଦ୍ଵାରା sanitation ବୃଦ୍ଧି । ଗ୍ରାମୀଣ ଏବଂ ଶହରୀ regions ରେ ଯୋଗାଯୋଗ।
  `,
  docs: ["Aadhar","Household proof","Ration card"],
  steps: ["SBM portal କିମ୍ବା GP office କୁ apply କରନ୍ତୁ","Inspection ପରେ subsidy sanction ହେବ"],
  aiNote: "Toilet construction ମାଗଣା ତଥ୍ୟ ସଂଗ୍ରହ ଲାଗେ।"
},

/* -------------------- 23 - Entrepreneurship / Startups -------------------- */
{
  name: "Startup Odisha Support",
  minAge: 18,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "Entrepreneur",
  explain: `
Startup Odisha ଓ state incubation centers ଛୋଟ ଚଲେଣ୍ଜର ପାଇଁ mentorship ଓ seed funding ସହାୟତା କରନ୍ତି।
  `,
  docs: ["Business plan","Founders ID","Bank details"],
  steps: ["Startup Odisha portal କୁ ଯାଆନ୍ତୁ","Apply for incubation / funding","Pitch ରେଶିଉମେ ପ୍ରସ୍ତୁତ କରନ୍ତୁ"],
  aiNote: "Prototype ଦେଖାଇଲେ advantages ମିଳିପାରେ।"
},

/* -------------------- 24 - Cottage Industry / Crafts -------------------- */
{
  name: "Handloom & Handicraft Support (Odisha)",
  minAge: 18,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "Artisan",
  explain: `
Weaver/Artisan ମାନେ training, market linkages ଓ subsidy ପାଇପାରିବେ । Odisha ର heritage craft ପାଇଁ support ।
  `,
  docs: ["Aadhar","Artisan ID (if any)","Samples/Photos"],
  steps: ["State handloom office କୁ apply କରନ୍ତୁ","Training/Market support ନିଅନ୍ତୁ"],
  aiNote: "Fair/market ରେ participation ସହ sales ବଢ଼ୁଛି।"
},

/* -------------------- 25 - Minority / Special Grants -------------------- */
{
  name: "Scholarship for Girl Students (Beti Bachao / State Schemes)",
  minAge: 14,
  maxIncome: 200000,
  caste: "ALL",
  occupation: "Student",
  explain: `
Girl students ପାଇଁ special scholarship/encouragement schemes । ଶିକ୍ଷା ଭିତ୍ତିକ ସହାୟତା ମିଳେ।
  `,
  docs: ["Aadhar","School ID","Parent income proof"],
  steps: ["State education portal କୁ apply କରନ୍ତୁ","Document upload କରନ୍ତୁ"],
  aiNote: "Early application କରିଲେ advantage ମିଳେ।"
},

/* -------------------- 26 - Digital / Citizen Services -------------------- */
{
  name: "Digital Saksharta / CSC Training",
  minAge: 10,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "All",
  explain: `
Digital literacy training ମାଧ୍ୟମରେ basic internet, banking, government portal usage କୁ ଶିଖାଯାଏ।
  `,
  docs: ["Aadhar"],
  steps: ["Nearest CSC କେନ୍ଦ୍ରରେ registration କରନ୍ତୁ","Training session ନେଇ ଦକ୍ଷତା ଅର୍ଜନ କରନ୍ତୁ"],
  aiNote: "OSP ମାଧ୍ୟମରେ ଏହି training promote କର।"
},

/* -------------------- 27 - Environment / Forestry -------------------- */
{
  name: "Tree Plantation / Green Odisha Grants",
  minAge: 10,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "All",
  explain: `
Environment conservation initiatives ପାଇଁ grants ଓ support । Community plantation schemes ଅଛି ।
  `,
  docs: ["Community proof / NGO registration (if any)","Project proposal"],
  steps: ["State forest department କୁ project propose କରନ୍ତୁ","Approval ପରେ grant ମିଳିପାରେ"],
  aiNote: "Local youth groups ମାଧ୍ୟମରେ participation ଭଲ ହୁଏ।"
},

/* -------------------- 28 - Legal Aid -------------------- */
{
  name: "Free Legal Aid (State Legal Services Authority)",
  minAge: 18,
  maxIncome: 250000,
  caste: "ALL",
  occupation: "All",
  explain: `
Garib ଲୋକଙ୍କ ପାଇଁ free legal aid ଓ counselling । Cases ରେ legal support ମିଳେ ।
  `,
  docs: ["Aadhar","Income proof","Case related docs"],
  steps: ["State legal services office କୁ contact କରନ୍ତୁ","Free legal aid application ପୂରଣ କରନ୍ତୁ"],
  aiNote: "Minor cases ପାଇଁ mediation ବିକଳ୍ପ ମିଳିପାରେ।"
},

/* -------------------- 29 - Sports & Youth -------------------- */
{
  name: "Youth Sports Scholarship / Talent Support",
  minAge: 10,
  maxIncome: 200000,
  caste: "ALL",
  occupation: "Student",
  explain: `
Young athletes ପାଇଁ training ଓ financial support । Talent identification camps ହୁଏ।
  `,
  docs: ["Participation certificates","Aadhar","Coach recommendation"],
  steps: ["State sports council କୁ contact କରନ୍ତୁ","Trials/Selection process ଅନୁସରଣ କରନ୍ତୁ"],
  aiNote: "Local district sports office ରେ enquiry କର।"
},

/* -------------------- 30 - Elder Care / Senior Citizen Support -------------------- */
{
  name: "Senior Citizen Health & Welfare Schemes",
  minAge: 60,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "All",
  explain: `
Senior citizens ପାଇଁ health camps, pension enhancement ଓ social support । State schemes ଅନେକ ପାଇଁ।
  `,
  docs: ["Aadhar","Age proof","Income proof"],
  steps: ["Zilla social welfare office କୁ contact କରନ୍ତୁ","Required form ପୂରଣ କରନ୍ତୁ"],
  aiNote: "Local NGO/volunteer groups ରେ assistance ମିଳିପାରେ।"
},

/* -------------------- 31 - Road / Infrastructure Assistance -------------------- */
{
  name: "Rural Roads & Infrastructure Grants (PMGSY)",
  minAge: 0,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "All",
  explain: `
PMGSY ଗ୍ରାମୀଣ ସଂଯୋଗ ବୃଦ୍ଧି ପାଇଁ funding ଦିଏ । ରାସ୍ତା ଓ ସଂଯୋଗୀ ସଂରଚନାରେ investment ହୁଏ।
  `,
  docs: ["Project proposal / Gram Panchayat approval"],
  steps: ["GP office ରେ proposal lodge କରନ୍ତୁ","District authorities ଦ୍ଵାରା approval ପାଇଁ ଅନୁସରଣ"],
  aiNote: "Infrastructure projects GH ଏବଂ local development ରେ ଭଲ ହୁଏ।"
},

/* -------------------- 32 - Culture / Heritage Grants -------------------- */
{
  name: "Odisha Cultural Preservation Grants",
  minAge: 18,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "All",
  explain: `
Heritage preservation, festivals, craft promotion ପାଇଁ grants ମିଳେ । Local cultural groups ଲାଭାନ୍ଭୀ।
  `,
  docs: ["NGO/association registration (if any)","Project plan","Photos"],
  steps: ["State culture department କୁ proposal ଦିଅନ୍ତୁ","Approval ପରେ fund release ହୁଏ"],
  aiNote: "Local artists ଓ groups ଏହି scheme ରେ active ଅଛନ୍ତି।"
},

/* -------------------- 33 - Consumer Protection -------------------- */
{
  name: "Consumer Grievance Redressal (State)",
  minAge: 18,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "All",
  explain: `
Consumer complaints ପାଇଁ state consumer forum ରେ free redressal । Goods/Service related issues ନିମିତ୍ତ।
  `,
  docs: ["Bill/Invoice","Aadhar","Complaint details"],
  steps: ["Consumer forum website କୁ ଯାଆନ୍ତୁ","Complaint lodge କରନ୍ତୁ","Hearing ଅନୁସରଣ କରନ୍ତୁ"],
  aiNote: "Small claims ପାଇଁ mediation ବିକଳ୍ପ ମିଳେ।"
},

/* -------------------- 34 - Safe Drinking Water -------------------- */
{
  name: "Har Ghar Jal / Safe Drinking Water Schemes",
  minAge: 0,
  maxIncome: 99999999,
  caste: "ALL",
  occupation: "All",
  explain: `
Safe drinking water access ପାଇଁ piped water, community tap installation schemes ଅଛି ।
  `,
  docs: ["Residence proof","GP certificate"],
  steps: ["GP/Water department କୁ request କରନ୍ତୁ","Infrastructure work ପରେ supply ଲାଗିବ"],
  aiNote: "Community level maintenance plan ତିଆରି କରନ୍ତୁ।"
},

/* -------------------- 35 - Other Central Schemes (Applicable in Odisha) -------------------- */
{
  name: "Ayushman Bharat (Health Insurance)",
  minAge: 0,
  maxIncome: 200000,
  caste: "ALL",
  occupation: "All",
  explain: `
Ayushman Bharat ଦ୍ଵାରା eligible families କୁ hospitalization cover ଦିଆଯାଏ ।
  `,
  docs: ["Aadhar","Ration Card / SECC data proof"],
  steps: ["PMJAY portal କିମ୍ବା empanelled hospital ରେ check କରନ୍ତୁ","Beneficiary list ମଧ୍ୟରେ ନାମ ଅଛି କି ନାହିଁ ଦେଖନ୍ତୁ"],
  aiNote: "Serious illness/operation ମାମଲାରେ claim ଫାଇଲ କରନ୍ତୁ।"
},

{
  name: "Pradhan Mantri Awas Yojana (PMAY) - (repeat ref for urban/rural applicability)",
  minAge: 18,
  maxIncome: 500000,
  caste: "ALL",
  occupation: "All",
  explain: `
(Repeat entry to increase realistic coverage across rural & urban contexts in Odisha)
  `,
  docs: ["Aadhar","Income certificate","Residence proof"],
  steps: ["Portal apply","Local authority verification"],
  aiNote: "Check city/rural specific portal section."
}

/* -------------------- END OF LIST (35 entries here) -------------------- */
];