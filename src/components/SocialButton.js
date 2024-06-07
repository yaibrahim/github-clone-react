import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialButton({ name, link, icon, style, color }) {

    const handleClick = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
      <div className="p-2">
          <button className="social-button" style={style} onClick={handleClick}>
            <FontAwesomeIcon icon={icon} color={color ? color : "white"} className="" /> {name}
          </button>
      </div>
    );
  }

export default SocialButton;