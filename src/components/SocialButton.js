import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialButton({ name, link, icon, style }) {
    return (
      <div className="pt-3">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="social-button" style={style}>
            <FontAwesomeIcon icon={icon} color="white" className="mr-2" /> {name}
          </button>
        </a>
      </div>
    );
  }

export default SocialButton;