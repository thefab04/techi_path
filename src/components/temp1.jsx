// Template1.jsx
export const Template1 = ({ basicInfo, skills, education, projects }) => {
  return (
    <div style={{
      width: '210mm', // A4 width
      minHeight: '297mm', // A4 height
      margin: '20px auto',
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      background: 'white',
      color: '#333',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
    }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '28px', color: '#222' }}>{basicInfo.name}</h1>
          <p style={{ fontStyle: 'italic', color: '#555', margin: '5px 0' }}>{basicInfo.tagline}</p>
        </div>
        <div style={{ textAlign: 'right', fontSize: '12px', color: '#555' }}>
          <div>{basicInfo.portfolio}</div>
          <div>{basicInfo.mobile}</div>
          <div>{basicInfo.dob}</div>
          <div>{basicInfo.address}</div>
        </div>
      </div>

      {/* Objective */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '5px', color: '#007BFF' }}>Objective</h2>
        <p style={{ marginTop: '5px', lineHeight: '1.5' }}>{basicInfo.objective}</p>
      </section>

      {/* Skills */}
{/* Skills */}
<section style={{ marginBottom: '20px' }}>
  <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '5px', color: '#007BFF' }}>Skills</h2>
  <ul style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'disc', color: '#333' }}>
    {skills.map((s, i) => (
      <li key={i} style={{ marginBottom: '5px', fontSize: '14px' }}>
        {s}
      </li>
    ))}
  </ul>
</section>


      {/* Education */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '5px', color: '#007BFF' }}>Education</h2>
        <div style={{ marginTop: '10px' }}>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <h4 style={{ margin: '0 0 3px 0', fontSize: '16px', color: '#222' }}>{edu.school}</h4>
              <p style={{ margin: '0 0 3px 0', fontSize: '14px', fontWeight: 'bold' }}>{edu.degree}</p>
              <p style={{ margin: 0, fontSize: '12px', color: '#555' }}>{edu.cgpa}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 style={{ borderBottom: '2px solid #007BFF', paddingBottom: '5px', color: '#007BFF' }}>Projects / Experience</h2>
        <div style={{ marginTop: '10px' }}>
          {projects.map((p, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <h4 style={{ margin: '0 0 3px 0', fontSize: '16px', color: '#222' }}>{p.title}</h4>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.4', color: '#555' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
