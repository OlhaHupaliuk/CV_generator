
import FormField from "./FormField"
interface SkillsLanguages {
    label: string
}
const SkillsLanguages:React.FC<SkillsLanguages> = ({label}) => {
  return (
        <form action="" className="form col-8">
        <h2 className="title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_406_380)">
                <path d="M23 6.98627H16.272L14.046 0.0302734H9.954L7.728 6.98627H1L0 11.4533L5.1 15.1873L2.567 23.0473L6.892 24.0303L12 20.2623L17.112 24.0303L21.436 23.0433L18.9 15.1873L24 11.4533L23 6.98627ZM15.382 14.0413L17.482 20.5743L12 16.5293L6.513 20.5743L8.618 14.0413L3.094 9.99427H9.916L12 3.48127L14.084 9.99427H20.906L15.382 14.0413Z" fill="#4545d5"/>
            </g>
            <defs>
                <clipPath id="clip0_406_380">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
            </svg>
        {label}s</h2>
        <div className="FormFields__wrap">       
            <FormField flex='column' label={label} type="text" placeholder="E-Commerce platform"/>
            <FormField flex='column' label="Proficiency level" type="select" placeholder="Select"/>
        </div>
        <button className="col-3" style={{backgroundColor: '#4545d5', color: 'white'}}>+ Add {label}</button>
    </form>
  )
}

export default SkillsLanguages