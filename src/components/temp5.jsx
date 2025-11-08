// Template5.jsx
export const Template5 = ({ basicInfo, skills, education, projects }) => (
  <div
    style={{
      width: "210mm",
      minHeight: "297mm",
      margin: "20px auto",
      padding: "30px",
      border: "1px solid #000",
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#fff",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      color: "#333",
    }}
  >
    {/* Sidebar */}
    <div style={{ width: "30%", padding: "20px", backgroundColor: "#f7f7f7", borderRight: "2px solid #007BFF" }}>
      <h2 style={{ textAlign: "center", color: "#007BFF", marginBottom: "20px" }}>{basicInfo.name}</h2>
      <p style={{ textAlign: "center", fontStyle: "italic" }}>{basicInfo.tagline}</p>

      <section style={{ marginTop: "20px" }}>
        <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>Contact</h3>
        <p style={{ fontSize: "14px", marginTop: "5px" }}>
          {basicInfo.portfolio}<br />
          {basicInfo.mobile}<br />
          {basicInfo.address}
        </p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>Skills</h3>
        <ul style={{ paddingLeft: "20px", marginTop: "5px" }}>
          {skills.map((s, i) => (
            <li key={i} style={{ marginBottom: "5px", fontSize: "14px" }}>{s}</li>
          ))}
        </ul>
      </section>
    </div>

    {/* Main Content */}
    <div style={{ width: "70%", padding: "20px" }}>
      <section>
        <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>Objective</h3>
        <p style={{ marginTop: "10px", fontSize: "14px" }}>{basicInfo.objective}</p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>Education</h3>
        {education.map((edu, i) => (
          <div key={i} style={{ marginTop: "10px", fontSize: "14px" }}>
            <strong>{edu.school}</strong> | {edu.degree} | {edu.cgpa}
          </div>
        ))}
      </section>

      <section style={{ marginTop: "20px" }}>
        <h3 style={{ borderBottom: "1px solid #ccc", paddingBottom: "5px" }}>Projects / Experience</h3>
        {projects.map((p, i) => (
          <div key={i} style={{ marginTop: "10px", fontSize: "14px" }}>
            <strong>{p.title}</strong>
            <p style={{ margin: "3px 0" }}>{p.desc}</p>
          </div>
        ))}
      </section>
    </div>
  </div>
);
