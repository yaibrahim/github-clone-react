import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function ReposCard({name, link, children, darkMode}) {
    console.log(darkMode)
    return(
        <div className={`p-4 rounded-lg border text-left ${darkMode ? 'bg-[#111827] text-white' : 'bg-white text-black'}`}>
            <h2 class="text-sm font-semibold mb-2">
                <FontAwesomeIcon icon={faBookBookmark} color="#626B76" /><FontAwesomeIcon /> <span className={`${darkMode ? 'bg-[#111827] text-white' : 'bg-white text-black'}`} ><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></span>
            </h2>
            {children}
        </div>
    );
}

export default ReposCard;
//style={{color: '#1F4CDC'}}