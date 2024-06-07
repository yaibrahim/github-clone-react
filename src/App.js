import "./App.css";
import ReposCard from "./components/ReposCard";
import SocialButton from "./components/SocialButton";
import ExperienceTab from "./components/ExperienceTab"
import { Element } from 'react-scroll';
import Skills from './components/skills/Skills';
import avatar from "../src/assets/avatar2.jpeg";
import data from './demoData';
import {ProjectSouthville, ProjectDevntech, ProjectWorldSrc} from './components/Projects'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="flex flex-1">
      <main className="bg-white-300 flex-1 p-3 overflow-auto">
        <div className="text-center flex flex-col justify-center p-2 sm:flex-row">
          <div className="p-4 text-left relative">
            <img
              className="block w-72 mb-4"
              style={{ borderRadius: "100%" }}
              src={avatar}
              alt=""
            />
            <h1 className="font-bold text-left text-3xl">{data.title}</h1>
            <h2 className="text-m text-left mb-3 text-gray-500">
              {data.sub_title}
            </h2>
            <p className="text-sm text-left">
              <div dangerouslySetInnerHTML={{ __html: data.bio }} />
            </p>
            <div className="flex flex-row">
              <SocialButton
                icon={faGoogle}
                link={`mailto:${"ibrahimazeem41@gmail.com"}?subject=${"Hello Ibrahim"}`}
                style={{ 
                  background: "linear-gradient(to right, #4285f4, #34a853 50%, #fbbc05 100%, #ea4335)" 
                }}
              />
              <SocialButton
                icon={faLinkedinIn}
                link="https://www.linkedin.com/in/ibrahim-cs1/"
                style={{ backgroundColor: "#0077b5" }}
              />
              <SocialButton
                icon={faInstagram}
                link="https://www.instagram.com/ya.xheikh/"
                style={{
                  background:
                    "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                }}
              />
              <SocialButton
                icon={faSnapchat}
                link="https://www.snapchat.com/add/ibrahimazeem41"
                style={{ backgroundColor: "#F6F11E", color: "black" }}
                color="black"
              />
            </div>
            <Element name="skills" className="section">
              <div className="App bg-white rounded-lg border mt-4 p-2">
                  <Skills />
              </div>
            </Element>
          </div>

          <div className="pt-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2">
            <Element name="aboutme" className="section">
              <div className="border h-auto rounded p-2 text-left">
                <p className="text-xs p-2 text-gray-500"> yaibrahim/README.md </p>
                <p className="text-sm pb-4">
                  {data.aboutme}
                </p>
              </div>
            </Element>
            <div className="container mx-auto">
              <Element name="repositories" className="section">
                <h1 className="text-xl font-bold mb-4 text-left pt-3">Repositories</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-auto">
                  <ReposCard
                    name={"BulkyBeastSite"}
                    link={"https://github.com/yaibrahim/BulkyBeastSIte"}
                  >
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                      HTML
                    </span>
                  </ReposCard>

                  <ReposCard
                    name={"eCommercioProject"}
                    link={"https://github.com/yaibrahim/eCommercioProject"}
                  >
                    <span className="inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded">
                      Ruby
                    </span>
                    <div className="mt-2">
                      <span className="text-gray-600 text-xs">⭐ 1</span>
                    </div>
                  </ReposCard>

                  <ReposCard
                    name={"at_your_doorstep-Ya_Ibrahim"}
                    link={
                      "https://github.com/atyourdoorstep/at_your_doorstep-Ya_Ibrahim"
                    }
                  >
                    <p className="text-gray-700 mb-2 text-xs">
                      Its an Flutter App Named At your Doorstep
                    </p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      Dart
                    </span>
                    <div className="mt-2 flex items-center">
                      <span className="text-gray-600 text-xs mr-4">⭐ 2</span>
                    </div>
                  </ReposCard>

                  <ReposCard
                    name={"work-shift-planning"}
                    link="https://github.com/yaibrahim/work-shift-planning"
                  >
                    <p className="text-gray-700 mb-2 text-xs">
                      Build a REST application from scratch that could serve as a
                      work planning service. Business requirements: A worker has
                      shifts A shift is 8 hours long A worker never has two shifts
                      on the same day It is a 24 hour timetable 0-8, 8-16, 16-24.
                    </p>
                    <span className="inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded">
                      Ruby
                    </span>
                    <div className="mt-2">
                      <span className="text-gray-600 text-xs">⭐ 1</span>
                    </div>
                  </ReposCard>

                  <ReposCard
                    name={"yaibrahim"}
                    link={"https://github.com/yaibrahim/yaibrahim"}
                  >
                    <p className="text-gray-700 mb-2 text-xs">
                      Config files for my GitHub profile.
                    </p>
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                      JavaScript
                    </span>
                  </ReposCard>

                  <ReposCard
                    name={"github-clone-react"}
                    link={"https://github.com/yaibrahim/github-clone-react"}
                  >
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                      JavaScript
                    </span>
                  </ReposCard>
                </div>
              </Element>
              <Element name="experience" className="section">
                <h1 className="text-xl font-bold mb-4 text-left pt-3">Experience</h1>
                <div className="bg-white p-4 rounded-lg border text-left">
                  <ExperienceTab designation="Software Engineer" company="Southville Solutions" date="July 2022 - Present" description={<ProjectSouthville />} />
                  <ExperienceTab designation="Associate Software Engineer" company="Devntech Pvt Ltd" date="Jan 2022 - Jun 2022" description={<ProjectDevntech />} />
                  <ExperienceTab designation="Software Developer" company="WorldSrc (Freelance - Remote)" date="Nov 2020 - Nov 2021" description={<ProjectWorldSrc />} />
                </div>
              </Element>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
