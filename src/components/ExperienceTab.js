function ExperienceTab({designation, company, date, description, darkMode}) {
    return(
        <div className="pb-4">
            <div className="justify-between flex">
            <h2 className={`text-base font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-600'}`}>
                {designation}
            </h2>
            <h2 className={`text-xs font-semibold mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                {date}
            </h2>
            </div>
            <h2 className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
                {company}
            </h2>
            <div className={`p-2 text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}> {description} </div>
            <hr style={{ borderTop: "1px solid lightgrey" }}></hr>
        </div>
    );
}

export default ExperienceTab;