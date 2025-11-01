import React, { useState } from "react";

const Jobsearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [searched, setSearched] = useState(false); // 👈 NEW state

  const handleSearch = async () => {
    if (!query) return;
    setSearched(true); // 👈 user has initiated search
    const res = await fetch(`http://localhost:5000/api/jobs?q=${query}`);
    const data = await res.json();
    console.log("API response:", data); // helpful debug log
    setJobs(data.data || []);
  };

  return (
    <div>
      <h2>Search openings</h2>

      <div>
        <input
          type="text"
          placeholder="Enter any role"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        {searched && jobs.length === 0 && (
          <p className="text-gray-500">No jobs found yet...</p>
        )}

        {jobs.length > 0 &&
          jobs.map((job, i) => (
            <div key={i}>
              <h3>{job.job_title}</h3>
              <p>{job.employer_name}</p>
              <p>
                {job.job_city}, {job.job_country}
              </p>
              <a
                href={job.job_apply_link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline mt-2 inline-block"
              >
                Apply Now →
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Jobsearch;
