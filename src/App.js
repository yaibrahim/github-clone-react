import './App.css';
import NavBar from "./components/NavBar";
import avatar from '../src/assets/avatar2.jpeg'

function App(props) {
  return (
    <div class="mx-auto bg-grey-400">
      <div class="min-h-screen flex flex-col">
        <NavBar />
        <div class="flex flex-1">
          <main class="bg-white-300 flex-1 p-3 overflow-hidden">
            <div class="text-center flex justify-center">
              <div class="p-4">
                 <img class="inline-block w-52" style={{borderRadius: '100%'}} src={avatar} alt="" />
              </div>
              <div class="text-center border rounded p-4">
                <p className=' text-xs'>
Software Engineer 🧑‍💻 • Snapchat👻: ibrahimazeem41 • Gym Freak 🔩 • Love Challenges • We create our own demons Instagram: @ya.xheikh </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
