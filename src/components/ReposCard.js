import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function ReposCard({name, link, children}) {
    return(
        <div class="bg-white p-4 rounded-lg border text-left">
            <h2 class="text-sm font-semibold mb-2">
                <FontAwesomeIcon icon={faBookBookmark} color="#626B76" /><FontAwesomeIcon /> <span style={{color: '#1F4CDC'}}><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></span>
            </h2>
            {children}
        </div>
    );
}

export default ReposCard;