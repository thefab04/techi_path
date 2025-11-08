// Template4.jsx
export const Template4 = ({ basicInfo, skills, education, projects }) => (
  <div
    style={{
      width: "210mm",
      minHeight: "297mm",
      margin: "20px auto",
      padding: "30px",
      border: "1px solid #000",
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#fff",
      color: "#333",
      boxSizing: "border-box",
    }}
  >
    {/* Header */}
    <div style={{ textAlign: "center", marginBottom: "30px", borderBottom: "2px solid #007BFF", paddingBottom: "10px" }}>
      <h1 style={{ margin: 0, fontSize: "28px", color: "#007BFF" }}>{basicInfo.name}</h1>
      <p style={{ margin: "5px 0", fontStyle: "italic", fontSize: "16px" }}>{basicInfo.tagline}</p>
      <p style={{ margin: "3px 0", fontSize: "14px" }}>{basicInfo.portfolio} | {basicInfo.mobile}</p>
    </div>

    {/* Skills */}
    <section style={{ marginBottom: "20px" }}>
      <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>Skills</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
        {skills.map((s, i) => (
          <span
            key={i}
            style={{
              padding: "5px 10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              borderRadius: "20px",
              fontSize: "13px",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </section>

    {/* Objective */}
    <section style={{ marginBottom: "20px" }}>
      <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>Objective</h2>
      <p style={{ marginTop: "10px", fontSize: "14px" }}>{basicInfo.objective}</p>
    </section>

    {/* Education */}
    <section style={{ marginBottom: "20px" }}>
      <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>Education</h2>
      {education.map((edu, i) => (
        <div key={i} style={{ marginTop: "10px", fontSize: "14px" }}>
          <strong>{edu.school}</strong> | {edu.degree} | {edu.cgpa}
        </div>
      ))}
    </section>

    {/* Projects / Experience */}
    <section>
      <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>Projects / Experience</h2>
      {projects.map((p, i) => (
        <div key={i} style={{ marginTop: "10px", fontSize: "14px" }}>
          <strong>{p.title}</strong>
          <p style={{ margin: "3px 0" }}>{p.desc}</p>
        </div>
      ))}
    </section>
  </div>
);
