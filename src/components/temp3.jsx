// Template3.jsx
export const Template3 = ({ basicInfo, skills, education, projects }) => (
  <div
    style={{
      width: "210mm",
      minHeight: "297mm",
      margin: "20px auto",
      padding: "0",
      border: "1px solid #000",
      display: "flex",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
      color: "#333",
    }}
  >
    {/* Left Sidebar */}
    <div
      style={{
        width: "30%",
        backgroundColor: "#2E3A59",
        color: "#fff",
        padding: "30px 20px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: "20px", borderBottom: "1px solid #fff", paddingBottom: "10px" }}>
        Skills
      </h2>
      <ul style={{ listStyle: "none", paddingLeft: "0", marginTop: "10px" }}>
        {skills.map((s, i) => (
          <li key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>{s}</li>
        ))}
      </ul>

      <h2 style={{ fontSize: "20px", borderBottom: "1px solid #fff", paddingBottom: "10px", marginTop: "30px" }}>
        Education
      </h2>
      <ul style={{ listStyle: "none", paddingLeft: "0", marginTop: "10px", fontSize: "14px" }}>
        {education.map((edu, i) => (
          <li key={i} style={{ marginBottom: "15px" }}>
            <strong>{edu.school}</strong><br />
            {edu.degree}<br />
            {edu.cgpa}
          </li>
        ))}
      </ul>
    </div>

    {/* Main Content */}
    <div style={{ width: "70%", padding: "30px", boxSizing: "border-box" }}>
      {/* Header */}
      <div style={{ borderBottom: "2px solid #2E3A59", paddingBottom: "10px", marginBottom: "20px" }}>
        <h1 style={{ margin: 0, fontSize: "28px", color: "#2E3A59" }}>{basicInfo.name}</h1>
        <p style={{ margin: "5px 0", fontStyle: "italic", fontSize: "16px", color: "#555" }}>{basicInfo.tagline}</p>
        <p style={{ margin: "3px 0", fontSize: "14px" }}>{basicInfo.portfolio} | {basicInfo.mobile}</p>
        <p style={{ margin: "3px 0", fontSize: "14px" }}>{basicInfo.dob} | {basicInfo.address}</p>
      </div>

      {/* Objective */}
      <section style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>Objective</h2>
        <p style={{ marginTop: "10px", fontSize: "14px" }}>{basicInfo.objective}</p>
      </section>

      {/* Projects */}
      <section>
        <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", paddingBottom: "5px", marginBottom: "10px" }}>
          Projects / Experience
        </h2>
        <ul style={{ paddingLeft: "20px", fontSize: "14px" }}>
          {projects.map((p, i) => (
            <li key={i} style={{ marginBottom: "15px" }}>
              <strong>{p.title}</strong>
              <p style={{ margin: "3px 0" }}>{p.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);
