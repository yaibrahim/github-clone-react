import ExperienceTab from "../components/ExperienceTab";
import {ProjectSouthville, ProjectDevntech, ProjectWorldSrc, ProjectBayt} from '../components/Projects'

export default function Experiences({darkMode}) {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4 text-left pt-3 text-black dark:text-white">Experience</h1>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border text-left">
                <ExperienceTab designation="Software Engineer - Level 2" company="Bayt.com" date="Aug 2024 - Present" description={<ProjectBayt />} darkMode={darkMode} />
                <ExperienceTab designation="Software Engineer" company="Southville Solutions" date="July 2022 - July 2024" description={<ProjectSouthville />} darkMode={darkMode} />
                <ExperienceTab designation="Associate Software Engineer" company="Devntech Pvt Ltd" date="Jan 2022 - Jun 2022" description={<ProjectDevntech />} darkMode={darkMode}/>
                <ExperienceTab designation="Software Developer" company="WorldSrc (Freelance - Remote)" date="Nov 2020 - Nov 2021" description={<ProjectWorldSrc />} darkMode={darkMode} />
            </div>
        </>
    );
}
