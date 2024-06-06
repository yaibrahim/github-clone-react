import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialButton({ name, link, icon, style, color }) {

    const handleClick = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
      <div className="pt-3">
          <button className="social-button" style={style} onClick={handleClick}>
            <FontAwesomeIcon icon={icon} color={color ? color : "white"} className="mr-2" /> {name}
          </button>
      </div>
    );
  }

export default SocialButton;