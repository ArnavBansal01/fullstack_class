import React from "react";
import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";

const linkButtonStyle = {
  display: "inline-block",
  backgroundColor: "rgb(255, 230, 3)",
  borderRadius: "20px",
  border: "2px solid #000000",
  fontWeight: "bold",
  padding: "10px 18px",
  textDecoration: "none",
  color: "black",
};

function HomePage() {
  const [applied, setApplied] = useState(false);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    alert("Searching for the job");
  };

  const handleApply = (event) => {
    event.preventDefault();
    alert("Applied");
    setApplied(true);
  };

  return (
    <div>
      <header>
        <h1 style={{ color: "rgb(159, 24, 24)", textAlign: "center" }}>
          JOBS ONLY
        </h1>
        <h3 style={{ color: "darkgoldenrod", textAlign: "center" }}>
          Connecting talent with opportunity
        </h3>
      </header>
      <hr />

      <nav>
        <Link to="/login" style={linkButtonStyle}>
          Login
        </Link>
        <Link to="/signup" style={linkButtonStyle}>
          Signup
        </Link>
        <Link to="/post" style={linkButtonStyle}>
          Post
        </Link>
      </nav>
      <hr />

      <main>
        <section
          style={{
            textAlign: "center",
            backgroundColor: "transparent",
            margin: 0,
          }}
        >
          <h2>From Dreams to reality</h2>
          <p>
            Find the job you love, and you will never work a day in your life.
          </p>
        </section>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <img src="/image.png" alt="Yaha pe image ayegi" height="300" />
        </div>
        <br />
        <br />
        <form onSubmit={handleSearchSubmit}>
          <div style={{ textAlign: "center" }}>
            <label
              style={{ fontSize: "25px", color: "#5a3e00" }}
              htmlFor="search"
            >
              Search
            </label>
            <input type="search" id="search" placeholder=" Search the jobs" />
            <br />
            <br />
          </div>
          <label htmlFor="location">Location</label>
          <select name="Location" id="location" defaultValue="">
            <option value="" disabled>
              Select Location
            </option>
            <option value="India">India</option>
            <option value="New York">New York</option>
          </select>
          <br />
          <br />
          <label htmlFor="experienceLevel">Experience</label>
          <select name="Experience" id="experienceLevel" defaultValue="">
            <option value="" disabled>
              Your Experience
            </option>
            <option value="Freelancer">Freelancer</option>
            <option value="Freseher">Fresher</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Skilled Worker">Skilled Worker</option>
          </select>

          <br />
          <br />
          <label htmlFor="salary">Salary Expectations</label>
          <input type="number" id="salary" />
          <br />
          <br />
          <div style={{ justifyContent: "center", display: "flex" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
        <hr />

        <h2 style={{ textAlign: "center" }}>Latest Job openings</h2>
        <hr />
        <section>
          <h1>1. Web Developer</h1>
          <h4>Company: TechCorp Solutions</h4>
          <h4>Location: Remote / Bangalore, India</h4>
          <b>Salary: 6-8 LPA</b>
          <b>Requirements:</b>
          <ul>
            <li>Proficiency in HTML, CSS, JavaScript</li>
            <li>Experience with React or Angular</li>
            <li>Strong problem-solving skills</li>
            <li>
              Description: Join our dynamic team to build responsive web
              applications and collaborate with designers to deliver seamless
              user experiences.
            </li>
            <li>Apply By: 15 Feb 2026</li>
          </ul>
          <button onClick={handleApply}>{applied ? "Applied" : "Apply"}</button>
          <button>Save for later</button>
        </section>

        <section>
          <h1>2. Data Analyst</h1>
          <h4>Company: Insight Analytics Pvt. Ltd.</h4>
          <h4>Location: Pune, India</h4>
          <b>Salary: 7-9 LPA</b>
          <br />
          <b>Requirements:</b>
          <ul>
            <li>Strong knowledge of SQL and Python</li>
            <li>
              Experience with data visualization tools (Power BI, Tableau)
            </li>
            <li>Ability to interpret complex datasets</li>
            <li>
              Description: Analyze business data to provide actionable insights
              and support decision-making across departments.
            </li>
            <li>Apply By: 20 Feb 2026</li>
          </ul>
          <button>Apply</button>
          <button>Save for later</button>
        </section>
        <hr />
        <footer>&copy; All the rights and copyrights reserved by me</footer>
      </main>
    </div>
  );
}

function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center" }}>Login to Jobs Only</h1>
        <h3 style={{ textAlign: "center" }}>
          Welcome back, Kindly login to your account
        </h3>
      </header>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
        <br />
        <br />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />
        <br />
        <br />

        <button type="submit">Login</button>

        <p style={{ textAlign: "center" }}>
          Don&apos;t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

function SignupPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center" }}>Sign up to Jobs Only</h1>
        <h3 style={{ textAlign: "center" }}>
          Welcome, Kindly Sign up to your account
        </h3>
      </header>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required />
        <br />
        <br />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
        <br />
        <br />

        <label>Password</label>
        <input type="password" placeholder="Create a password" required />
        <br />
        <br />

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm your password" required />
        <br />
        <br />

        <button type="submit">Sign Up</button>

        <p style={{ textAlign: "center" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

function PostPage() {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [visibleJobs, setVisibleJobs] = useState([]);
  const [formData, setFormData] = useState({
    company: "",
    details: "",
    category: "",
    jobType: "",
    experience: "",
    minSalary: "",
    maxSalary: "",
    description: "",
    deadline: "",
    email: "",
  });

  const onChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const {
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
    } = formData;

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

    if (Number(minSalary) < 0 || Number(maxSalary) < 0) {
      alert("Salary cannot be negative!");
      return;
    }

    if (Number(minSalary) > Number(maxSalary)) {
      alert("Minimum salary cannot be greater than maximum salary!");
      return;
    }

    const job = {
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

    setJobs((prev) => [...prev, job]);
    setFormData({
      company: "",
      details: "",
      category: "",
      jobType: "",
      experience: "",
      minSalary: "",
      maxSalary: "",
      description: "",
      deadline: "",
      email: "",
    });
  };

  const onReset = () => {
    setFormData({
      company: "",
      details: "",
      category: "",
      jobType: "",
      experience: "",
      minSalary: "",
      maxSalary: "",
      description: "",
      deadline: "",
      email: "",
    });
  };

  useEffect(() => {
    setVisibleJobs(jobs);
  }, [jobs]);

  const onSearch = () => {
    const query = searchText.toLowerCase();
    const filteredJobs = jobs.filter((job) => {
      return (
        job.details.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query)
      );
    });

    setVisibleJobs(filteredJobs);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Post a Job</h1>
        <p>Fill details to post job vacancy</p>
      </div>

      <hr />

      <form id="jobForm" onSubmit={onSubmit}>
        <h3 style={{ justifyContent: "center", display: "flex" }}>
          Company Info
        </h3>
        <input
          type="text"
          id="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={onChange}
        />
        <br />
        <br />
        <hr />
        <h3 style={{ justifyContent: "center", display: "flex" }}>
          Job Details
        </h3>
        <label htmlFor="details">Job Title</label>
        <br />
        <input
          type="text"
          id="details"
          value={formData.details}
          onChange={onChange}
        />
        <br />
        <br />
        Job Category
        <br />
        <select id="category" value={formData.category} onChange={onChange}>
          <option value="">Select</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="HR">HR</option>
        </select>
        <br />
        <br />
        Job Type
        <br />
        <select id="jobType" value={formData.jobType} onChange={onChange}>
          <option value="">Select</option>
          <option value="Onsite">Onsite</option>
          <option value="Remote">Remote</option>
        </select>
        <br />
        <br />
        Experience Required
        <br />
        <input
          type="text"
          id="experience"
          placeholder="Like 0-2 years"
          value={formData.experience}
          onChange={onChange}
        />
        <br />
        <br />
        Salary Range
        <br />
        <input
          type="number"
          id="minSalary"
          placeholder="Min"
          value={formData.minSalary}
          onChange={onChange}
        />
        <input
          type="number"
          id="maxSalary"
          placeholder="Max"
          value={formData.maxSalary}
          onChange={onChange}
        />
        <br />
        <br />
        <hr />
        <h3 style={{ justifyContent: "center", display: "flex" }}>
          Job Description
        </h3>
        Write Job Description
        <br />
        <textarea
          id="description"
          rows="5"
          cols="50"
          value={formData.description}
          onChange={onChange}
        ></textarea>
        <br />
        <br />
        <hr />
        <h3 style={{ justifyContent: "center", display: "flex" }}>
          Apply Details
        </h3>
        Last Date to Apply
        <br />
        <input
          type="date"
          id="deadline"
          value={formData.deadline}
          onChange={onChange}
        />
        <br />
        <br />
        Email to Receive Application
        <br />
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={onChange}
        />
        <br />
        <br />
        <hr />
        <button type="submit" style={{ marginTop: "12px" }}>
          Post Job
        </button>
        <button type="button" style={{ marginTop: "12px" }} onClick={onReset}>
          Reset
        </button>
      </form>

      <hr />
      <hr />

      <h3 style={{ textAlign: "center" }}>Search Jobs</h3>

      <input
        type="text"
        id="searchInput"
        placeholder="Search by title or company"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button id="searchBtn" type="button" onClick={onSearch}>
        Search
      </button>

      <hr />

      <div id="jobList">
        {visibleJobs.map((job, index) => (
          <div
            key={`${job.company}-${job.details}-${index}`}
            style={{
              border: "1px solid black",
              padding: "15px",
              margin: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{job.details}</h3>
            <p>
              <b>Company:</b> {job.company}
            </p>
            <p>
              <b>Category:</b> {job.category}
            </p>
            <p>
              <b>Job Type:</b> {job.jobType}
            </p>
            <p>
              <b>Experience:</b> {job.experience}
            </p>
            <p>
              <b>Salary:</b> {job.minSalary} - {job.maxSalary}
            </p>
            <p>
              <b>Description:</b> {job.description}
            </p>
            <p>
              <b>Deadline:</b> {job.deadline}
            </p>
            <p>
              <b>Email:</b> {job.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
