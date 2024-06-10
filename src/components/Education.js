function Education({degree, institute, date}) {
    return(
        <div className="pb-4">
            <div className="justify-between flex">
            <h2 className="text-base font-semibold mb-3">
                {degree}
            </h2>
            <h2 className="text-sm font-semibold mb-3 text-gray-600">
                {date}
            </h2>
            </div>
            <h2 className="text-sm mb-2 text-gray-800">
                {institute}
            </h2>
        </div>
    );
}

export default Education;