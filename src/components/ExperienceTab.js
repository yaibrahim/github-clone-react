function ExperienceTab({designation, company, date, description}) {
    return(
        <div className="pb-4">
            <div className="justify-between flex">
            <h2 className="text-base font-semibold mb-2">
                {designation}
            </h2>
            <h2 className="text-xs font-semibold mb-2 text-gray-600">
                {date}
            </h2>
            </div>
            <h2 className="text-sm mb-2 text-gray-800">
                {company}
            </h2>
            <div className="p-2 text-sm mb-3"> {description} </div>
            <hr style={{ borderTop: "1px solid lightgrey" }}></hr>
        </div>
    );
}

export default ExperienceTab;