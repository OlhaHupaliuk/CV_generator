import { Briefcase } from "lucide-react";
import FormField from "./FormField";

const WorkExperience = () => {
  return (
    <form action="" className="form col-8">
      <h2 className="title d-flex align-items-center gap-2">
        <Briefcase size={30} color="#4545d5" />
        Work Experience
      </h2>
      <div className="FormFields__wrap">
        <FormField flex="column" label="Job Title" type="text" placeholder="Software Engineer" />
        <FormField flex="column" label="Company" type="text" placeholder="TechCompany inc" />
        <FormField flex="column" label="Location" type="text" placeholder="Ukraine, Lviv" />
        <div className="FormFields__wrap">
          <FormField flex="column" label="Start Date" type="date" placeholder="---- ----р." />
          <FormField flex="column" label="End Date" type="date" placeholder="---- ----р." />
        </div>
      </div>
      <FormField flex="row" label="Currently work here" type="checkbox" placeholder="" />
      <label htmlFor="summary">Job description</label>
      <textarea
        className="p-2 my-3 pb-3"
        name="profSummary"
        placeholder="Developed and maintained Web Application using React, Next.js..."
      />
      <button className="col-3" style={{ backgroundColor: "#4545d5", color: "white" }}>
        + Add Experience
      </button>
    </form>
  );
};

export default WorkExperience;
