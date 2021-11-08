
import './app-info.css';
                                //Header - Заголовок

const AppInfo = ({employees,increase}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудником в компании N</h1>
            <h2>Общее число сотрудником: {employees}</h2>
            <h2>Премию получат: {increase}</h2>
        </div>
    )
}

export default AppInfo;