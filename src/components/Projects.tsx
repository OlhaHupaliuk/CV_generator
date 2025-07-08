import FormField from "./FormField"
import { Code } from "lucide-react";

const Projects = () => {
  return (
    <form action="" className="form col-8">
        <h2 className="title">
        <div className="d-flex">
            <Code size={24} color="#4545d5" />
        </div>
        Projects
        </h2>
        <div className="FormFields__wrap">       
            <FormField flex='column' label="Project Name" type="text" placeholder="E-Commerce platform"/>
            <FormField flex='column' label="Technologies used" type="text" placeholder="React, Node.JS, Mongo.DB"/>
        </div>
        <FormField flex='column' label="Project link" type="text" placeholder="http://example.com"/>
        <label htmlFor="summary">Description</label>
        <textarea className="p-2 my-3 pb-3" name="profSummary" placeholder="Brief description of project, key features, your role in development..."/>
        <button className="col-3" style={{backgroundColor: '#4545d5', color: 'white'}}>+ Add Project</button>
    </form>
  ) 
}

export default Projects