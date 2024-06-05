import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function ReposCard({name, children}) {
    return(
        <div class="bg-white p-4 rounded-lg border text-left">
            <h2 class="text-sm font-semibold mb-2 text-gray-800">
                <FontAwesomeIcon icon={faBookBookmark} color="gray-800" /><FontAwesomeIcon /> {name}
            </h2>
            {children}
        </div>
    );
}

export default ReposCard;