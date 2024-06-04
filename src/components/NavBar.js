import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  return (
    <header style={{ backgroundColor: "#F6F8FA" }}>
      <div class="flex justify-between">
        <div class="p-1 mx-3 inline-flex items-center">
          <FontAwesomeIcon icon={faGithub} color="black" /><FontAwesomeIcon />
          <h1 class="text-black p-2 text-lg text-bold">
             Ibrahim Azeem
          </h1>
        </div>
        <div class="p-1 flex flex-row items-center">
          <div
            id="ProfileDropDown"
            class="rounded hidden shadow-md bg-white mt-30 absolute pin-t mr-1 pin-r w-28"
          ></div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
