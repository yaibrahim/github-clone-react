import ExperienceTab from "../components/ExperienceTab";
import {ProjectSouthville, ProjectDevntech, ProjectWorldSrc} from '../components/Projects'

export default function Experiences() {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4 text-left pt-3">Experience</h1>
            <div className="bg-white p-4 rounded-lg border text-left">
                <ExperienceTab designation="Software Engineer" company="Southville Solutions" date="July 2022 - Present" description={<ProjectSouthville />} />
                <ExperienceTab designation="Associate Software Engineer" company="Devntech Pvt Ltd" date="Jan 2022 - Jun 2022" description={<ProjectDevntech />} />
                <ExperienceTab designation="Software Developer" company="WorldSrc (Freelance - Remote)" date="Nov 2020 - Nov 2021" description={<ProjectWorldSrc />} />
            </div>
        </>
    );
}