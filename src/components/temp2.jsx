// Template2.jsx
export const Template2 = ({ basicInfo, skills, education, projects }) => (
  <div
    style={{
      width: "210mm",
      minHeight: "297mm",
      margin: "20px auto",
      padding: "30px",
      border: "1px solid black",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
      color: "#333",
      lineHeight: "1.4",
    }}
  >
    {/* Header */}
    <div style={{ borderBottom: "2px solid #000", paddingBottom: "10px", marginBottom: "20px" }}>
      <h1 style={{ margin: "0", fontSize: "28px" }}>{basicInfo.name}</h1>
      <p style={{ margin: "2px 0", fontStyle: "italic", fontSize: "16px", color: "#555" }}>{basicInfo.tagline}</p>
      <p style={{ margin: "2px 0", fontSize: "14px" }}>{basicInfo.portfolio} | {basicInfo.mobile}</p>
      <p style={{ margin: "2px 0", fontSize: "14px" }}>{basicInfo.dob} | {basicInfo.address}</p>
    </div>

    {/* Body */}
    <div style={{ display: "flex", gap: "30px" }}>
      {/* Left Column */}
      <div style={{ flex: 2 }}>
        {/* Objective */}
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #000", paddingBottom: "5px", fontSize: "18px" }}>Objective</h2>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>{basicInfo.objective}</p>
        </section>

        {/* Projects */}
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #000", paddingBottom: "5px", fontSize: "18px" }}>Projects / Experience</h2>
          <ul style={{ marginTop: "10px", paddingLeft: "20px", fontSize: "14px" }}>
            {projects.map((p, i) => (
              <li key={i} style={{ marginBottom: "10px" }}>
                <strong>{p.title}</strong>
                <p style={{ margin: "3px 0" }}>{p.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Right Column */}
      <div style={{ flex: 1 }}>
        {/* Skills */}
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #000", paddingBottom: "5px", fontSize: "16px" }}>Skills</h2>
          <ul style={{ marginTop: "10px", paddingLeft: "20px", fontSize: "14px" }}>
            {skills.map((s, i) => (
              <li key={i} style={{ marginBottom: "5px" }}>{s}</li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 style={{ borderBottom: "1px solid #000", paddingBottom: "5px", fontSize: "16px" }}>Education</h2>
          <ul style={{ marginTop: "10px", paddingLeft: "20px", fontSize: "14px" }}>
            {education.map((edu, i) => (
              <li key={i} style={{ marginBottom: "10px" }}>
                <strong>{edu.school}</strong> | {edu.degree}
                <p style={{ margin: "3px 0" }}>{edu.cgpa}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </div>
);
