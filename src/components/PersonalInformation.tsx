import { User } from "lucide-react";
import FormField from "./FormField";

const PersonalInformation: React.FC = () => {
  return (
    <form className="form col-8">
      <h2 className="title d-flex align-items-center gap-2">
        <User size={30} color="#4545d5" />
        Personal Information
      </h2>
      <div className="FormFields__wrap">
        <FormField flex="column" label="Full name" type="text" placeholder="John Green" />
        <FormField flex="column" label="Email" type="email" placeholder="example@gmail.com" />
        <FormField flex="column" label="Number" type="phone" placeholder="+38090123456" />
        <FormField flex="column" label="Location" type="text" placeholder="Ukraine, Lviv" />
      </div>
      <FormField
        flex="column"
        label="Website / Portfolio"
        type="text"
        placeholder="https://portfolio.com"
      />
      <label htmlFor="summary">Professional summary</label>
      <textarea
        className="p-2 mt-2 pb-3"
        name="profSummary"
        placeholder="Enter brief summary of your professional background and career objectives..."
      />
    </form>
  );
};

export default PersonalInformation;
