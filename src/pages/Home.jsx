import React from "react";
import { useNavigate } from "react-router-dom";
import RoadmapCard from "../components/RoadmapCard"; //  import the component
import { Cloud, Cybersecurity, DataAI, Design, DevRoles, Testing} from "../components/Roles"; // import the roles
import { dev } from "../data/developer_data";
import Jobsearch from "../components/jobsearchbox";

function Home() {


    const navigate = useNavigate();

  const handleClick = (role) => {
    navigate(`/roadmap/${role}`);
  };

 
  return (

    <section className="main-grid">


     

<jobpart className="jobspart">
  <div className="glass3">
      <Jobsearch />
      </div>
</jobpart>


<rolespart className="rolespart">

  <h2 id="rolehead">Roles</h2>

<div className="glass2">
<h2 id="role-heading">DEVELOPER ROLES</h2>
      <div className="roadmap-container">
        {DevRoles.map((item, index) => (
          <div 
            key={index}
            className="role-card-wrapper"
            onClick={() => handleClick(item.title)}
            style={{cursor: "pointer"}} >

              <RoadmapCard title={item.title}/>
              </div>
        ))}
      </div>
</div>

<br />

<div className="glass2">
      <h2 id="role-heading">CLOUD & DEVOPS ROLES</h2>
      <div className="roadmap-container">
        {Cloud.map((item, index) => (

          <div 
            key={index}
            className="role-card-wrapper"
            onClick={() => handleClick(item.title)}
            style={{cursor: "pointer"}} >

              <RoadmapCard title={item.title}/>
              </div>
        ))}
      </div>
</div>

<br />

<div className="glass2">
        <h2 id="role-heading">CYBER SECURITY ROLES</h2>
      <div className="roadmap-container">
        {Cybersecurity.map((item, index) => (

          <div 
            key={index}
            className="role-card-wrapper"
            onClick={() => handleClick(item.title)}
            style={{cursor: "pointer"}} >

              <RoadmapCard title={item.title}/>
              </div>
        ))}
      </div>
</div>

<br />

<div className="glass2">
      <h2 id="role-heading">DATA SCIENCE ROLES</h2>
      <div className="roadmap-container">
        {DataAI.map((item, index) => (

          <div 
            key={index}
            className="role-card-wrapper"
            onClick={() => handleClick(item.title)}
            style={{cursor: "pointer"}} >

              <RoadmapCard title={item.title}/>
              </div>
        ))}
      </div>
</div>

<br />

<div className="glass2">
        <h2 id="role-heading">TESTING ROLES</h2>
      <div className="roadmap-container">
        {Testing.map((item, index) => (

          <div 
            key={index}
            className="role-card-wrapper"
            onClick={() => handleClick(item.title)}
            style={{cursor: "pointer"}} >

              <RoadmapCard title={item.title}/>
              </div>
        ))}
      </div>
</div>

<br />

<div className="glass2">
    <h2 id="role-heading">DESIGNER ROLES</h2>
      <div className="roadmap-container">
        {Design.map((item, index) => (

          <div 
            key={index}
            className="role-card-wrapper"
            onClick={() => handleClick(item.title)}
            style={{cursor: "pointer"}} >

              <RoadmapCard title={item.title}/>
              </div>
        ))}
      </div>
</div>
</rolespart>


    </section>
  );
}
export default Home;
