import "./App.css";
import NavBar from "./components/NavBar";
import ReposCard from "./components/ReposCard";
import avatar from "../src/assets/avatar2.jpeg";

function App(props) {
  return (
    <div class="mx-auto bg-grey-400">
      <div class="min-h-screen flex flex-col">
        <NavBar />
        <div class="flex flex-1">
          <main class="bg-white-300 flex-1 p-3 overflow-hidden">
            <div class="text-center flex justify-center p-2">
              <div class="p-4">
                <img
                  class="inline-block w-72"
                  style={{ borderRadius: "100%" }}
                  src={avatar}
                  alt=""
                />
              </div>
              <div className="pt-5 w-1/2 h-32">
                <div className="border h-auto rounded p-2 text-left">
                  <p className="text-xs p-2 text-gray-500">
                    {" "}
                    yaibrahim/README.md{" "}
                  </p>
                  <p className="text-sm">
                    Software Engineer 🧑‍💻 <br />
                    • Snapchat👻: ibrahimazeem41 <br />
                    • Gym Freak 🔩 <br />
                    • Love Challenges <br />
                    • We create our own demons <br />
                    Instagram:{" "}
                    <span className="text-blue-500"><a
                      href="https://www.instagram.com/ya.xheikh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @ya.xheikh
                    </a> </span>
                  </p>
                </div>
                <div class="container mx-auto">
                  <h1 class="text-m font-bold mb-4 text-left pt-3">Pinned</h1>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ReposCard name={"BulkyBeastSite"}>
                      <span class="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                        HTML
                      </span>
                    </ReposCard>

                    <ReposCard name={"eCommercioProject"}>
                      <span class="inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded">
                        Ruby
                      </span>
                      <div class="mt-2">
                        <span class="text-gray-600 text-xs">⭐ 1</span>
                      </div>
                    </ReposCard>

                    <ReposCard name={"at_your_doorstep-Ya_Ibrahim"}>
                      <p class="text-gray-700 mb-2 text-xs">
                        Its an Flutter App Named At your Doorstep
                      </p>
                      <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        Dart
                      </span>
                      <div class="mt-2 flex items-center">
                        <span class="text-gray-600 text-xs mr-4">⭐ 2</span>
                        <span class="text-gray-600 text-xs">🍴 1</span>
                      </div>
                    </ReposCard>

                    <ReposCard name={"bcrypt-ruby"}>
                      <p class="text-gray-700 mb-2 text-xs">
                        Forked from bcrypt-ruby/bcrypt-ruby
                      </p>
                      <p class="text-gray-700 mb-2 text-xs">
                        bcrypt-ruby is a Ruby binding for the OpenBSD bcrypt()
                        password hashing algorithm...
                      </p>
                      <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                        C
                      </span>
                      <div class="mt-2">
                        <span class="text-gray-600 text-xs">⭐ 1</span>
                      </div>
                    </ReposCard>

                    <ReposCard name={"yaibrahim"}>
                      <p class="text-gray-700 mb-2 text-xs">
                        Config files for my GitHub profile.
                      </p>
                      <span class="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        JavaScript
                      </span>
                    </ReposCard>

                    <ReposCard name={"github-clone-react"}>
                      <span class="inline-block bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded">
                        JavaScript
                      </span>
                    </ReposCard>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
