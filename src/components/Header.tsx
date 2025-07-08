import { FileText, Edit, Eye, EyeOff, Trash2 } from "lucide-react";

interface HeaderProps {
    activeTab: string,
    toggleActiveTab: () => void
}
const Header:React.FC<HeaderProps> = ({activeTab, toggleActiveTab}) => {
  return (
    <header>
        <h2 className="d-flex align-items-center gap-1">
            <FileText size={40} color="#4545d5" />
            CV Generator
        </h2>
        <nav>
        <div className="switcher d-flex gap-2">
            <button onClick={toggleActiveTab} className={activeTab === 'edit' ? 'editBtn toggledBtn' : 'editBtn'}>
            <Edit size={20} color="#4545d5" />
            Edit
            </button>
            <button onClick={toggleActiveTab} className={activeTab === 'preview' ? 'previewBtn toggledBtn' : 'previewBtn'}>
            {activeTab === 'preview' ? (
                <Eye size={20} color="#374957" />
            ) : (
                <EyeOff size={20} color="#374957" />
            )}
            Preview
            </button>
        </div>
        <button className="resetBtn my-1"> <Trash2 size={20} color="#de4343" /> Reset </button>
        </nav>
    </header>
  )
}

export default Header