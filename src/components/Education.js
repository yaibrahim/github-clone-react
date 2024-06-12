function Education({degree, institute, date, darkMode}) {
    return(
        <div className="pb-4">
            <div className="justify-between flex">
            <h2 className={`text-base font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-600'}`}>
                {degree}
            </h2>
            <h2 className={`text-xs font-semibold mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                {date}
            </h2>
            </div>
            <h2 className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
                {institute}
            </h2>
        </div>
    );
}

export default Education;