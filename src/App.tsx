import { useState } from "react"
import { DownloadIcon } from "lucide-react";
import './App.css'
import Header from './components/Header'
import PersonalInformation from './components/PersonalInformation'
import WorkExperience from './components/WorkExperience'
import Education from "./components/Education"
import SkillsLanguages from "./components/SkillsLanguages"
import Projects from "./components/Projects"
function App() {
    const [activeTab, setActiveTab] = useState('edit');
    let editing = activeTab === 'edit';
    const toggleActiveTab = () => {
        setActiveTab(prev => {
            if(prev === 'edit'){
                return 'preview'
            } else {
                return 'edit'
            }
        })
    }
  return (
      <>
        <Header activeTab={activeTab} toggleActiveTab={toggleActiveTab} />
        {editing && <main>
              <PersonalInformation />
              <WorkExperience />
              <Education />
              <Projects />
              <SkillsLanguages label='Skill'/>
              <SkillsLanguages label='Language'/>
              <button className="downloadBtn"><DownloadIcon />Download PDF</button>
          </main>}
      </>

  )
}

export default App
