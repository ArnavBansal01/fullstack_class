var form = document.getElementById("jobForm");

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

  // Validation
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

  // Create job card
  var jobCard = document.createElement("div");
  jobCard.style.border = "1px solid black";
  jobCard.style.padding = "15px";
  jobCard.style.margin = "15px";
  jobCard.style.borderRadius = "8px";

  jobCard.innerHTML =
    "<h3>" + details + "</h3>" +
    "<p><b>Company:</b> " + company + "</p>" +
    "<p><b>Category:</b> " + category + "</p>" +
    "<p><b>Job Type:</b> " + jobType + "</p>" +
    "<p><b>Experience:</b> " + experience + "</p>" +
    "<p><b>Salary:</b> ₹" + minSalary + " - ₹" + maxSalary + "</p>" +
    "<p><b>Description:</b> " + description + "</p>" +
    "<p><b>Deadline:</b> " + deadline + "</p>" +
    "<p><b>Email:</b> " + email + "</p>";

  document.getElementById("jobList").appendChild(jobCard);

  form.reset();
};
