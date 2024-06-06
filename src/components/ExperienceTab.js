function ExperienceTab({designation, company, date}) {
    return(
        <div class="pb-4">
            <div class="justify-between flex">
            <h2 class="text-base font-semibold mb-2">
                {designation}
            </h2>
            <h2 class="text-sm font-semibold mb-2 text-gray-600">
                {date}
            </h2>
            </div>
            <h2 class="text-sm mb-2 text-gray-800">
                {company}
            </h2>
        </div>
    );
}

export default ExperienceTab;