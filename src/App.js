import "./App.css";
import Educations from "./main-components/Eductions";
import Buttons from "./main-components/Buttons";
import Experiences from "./main-components/Experiences";
import Repos from "./main-components/Repos";
import Skills from "./components/skills/Skills";
import avatar from "../src/assets/avatar2.jpeg";

import { Element } from "react-scroll";
import data from "./demoData";

function App() {
  return (
    <div className="flex flex-1">
      <main className="bg-white-300 flex-1 p-3 overflow-auto">
        <div className="text-center flex flex-col justify-center p-2 sm:flex-row">
          <div className="p-4 w-80 text-left relative">
            <img
              className="block mb-4"
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
            <Buttons />
            <Element name="skills" className="section">
              <div className="App bg-white rounded-lg border mt-4 p-2">
                <Skills />
              </div>
            </Element>
          </div>

          <div className="pt-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2">
            <Element name="aboutme" className="section">
              <div className="border h-auto rounded p-2 text-left">
                <p className="text-xs p-2 text-gray-500">
                  {" "}
                  yaibrahim/README.md{" "}
                </p>
                <p className="text-sm pb-4">{data.aboutme}</p>
              </div>
            </Element>
            <div className="container mx-auto">
              <Element name="repositories" className="section">
                <Repos />
              </Element>
              <Element name="experience" className="section">
                <Experiences />
              </Element>

              <Element name="education" className="section">
                <Educations />
              </Element>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
