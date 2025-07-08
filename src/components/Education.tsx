import { GraduationCap } from "lucide-react";
import FormField from "./FormField";

const Education = () => {
  return (
    <form action="" className="form col-8">
      <h2 className="title flex items-center gap-2">
        <GraduationCap size={30} color="#4545d5" />
        Education
      </h2>
      <div className="FormFields__wrap">
        <FormField flex="column" label="Degree" type="text" placeholder="Bachelor of Science" />
        <FormField flex="column" label="School/University" type="text" placeholder="University of Technology" />
        <FormField flex="column" label="Location" type="text" placeholder="Ukraine, Lviv" />
        <div className="FormFields__wrap">
          <FormField flex="column" label="Start Date" type="date" placeholder="---- ----р." />
          <FormField flex="column" label="End Date" type="date" placeholder="---- ----р." />
        </div>
      </div>
      <label htmlFor="summary">Description</label>
      <textarea
        className="p-2 my-3 pb-3"
        name="profSummary"
        placeholder="Relevant coursework, achievements, GPA, etc..."
      />
      <button className="col-3" style={{ backgroundColor: '#4545d5', color: 'white' }}>
        + Add Education
      </button>
    </form>
  );
};

export default Education;
