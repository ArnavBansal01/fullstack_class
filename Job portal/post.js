var form = document.getElementById("jobForm");
var jobs = [];

form.onsubmit = function (event) {
  event.preventDefault();

  var company = document.getElementById("company").value;
  var details = document.getElementById("details").value;
  var category = document.getElementById("category").value;
  var jobType = document.getElementById("jobType").value;
  var experience = document.getElementById("experience").value;
  var minSalary = document.getElementById("minSalary").value;
  var maxSalary = document.getElementById("maxSalary").value;
  var description = document.getElementById("description").value;
  var deadline = document.getElementById("deadline").value;
  var email = document.getElementById("email").value;

  if (
    company === "" ||
    details === "" ||
    category === "" ||
    jobType === "" ||
    experience === "" ||
    description === "" ||
    email === ""
  ) {
    alert("Please fill all required fields!");
    return;
  }

  if (minSalary < 0 || maxSalary < 0) {
    alert("Salary cannot be negative!");
    return;
  }

  if (minSalary > maxSalary) {
    alert("Minimum salary cannot be greater than maximum salary!");
    return;
  }

  var job = {
    company,
    details,
    category,
    jobType,
    experience,
    minSalary,
    maxSalary,
    description,
    deadline,
    email,
  };

  jobs.push(job);
  displayJobs(jobs);
  form.reset();
};

function displayJobs(jobArray) {
  var jobList = document.getElementById("jobList");
  jobList.innerHTML = "";

  jobArray.forEach(function (job) {
    var jobCard = document.createElement("div");
    jobCard.style.border = "1px solid black";
    jobCard.style.padding = "15px";
    jobCard.style.margin = "15px";
    jobCard.style.borderRadius = "8px";

    jobCard.innerHTML =
      "<h3>" +
      job.details +
      "</h3>" +
      "<p><b>Company:</b> " +
      job.company +
      "</p>" +
      "<p><b>Category:</b> " +
      job.category +
      "</p>" +
      "<p><b>Job Type:</b> " +
      job.jobType +
      "</p>" +
      "<p><b>Experience:</b> " +
      job.experience +
      "</p>" +
      "<p><b>Salary:</b> ₹" +
      job.minSalary +
      " - ₹" +
      job.maxSalary +
      "</p>" +
      "<p><b>Description:</b> " +
      job.description +
      "</p>" +
      "<p><b>Deadline:</b> " +
      job.deadline +
      "</p>" +
      "<p><b>Email:</b> " +
      job.email +
      "</p>";

    jobList.appendChild(jobCard);
  });
}

document.getElementById("searchBtn").onclick = function () {
  var searchText = document.getElementById("searchInput").value.toLowerCase();

  var filteredJobs = jobs.filter(function (job) {
    return (
      job.details.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText)
    );
  });

  displayJobs(filteredJobs);
};
