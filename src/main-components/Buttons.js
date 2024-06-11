import SocialButton from "../components/SocialButton";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Buttons() {
    return (
        <div className="flex flex-row">
              <SocialButton
                icon={faGoogle}
                link={`mailto:${"ibrahimazeem41@gmail.com"}?subject=${"Hello Ibrahim"}`}
                style={{ 
                  background: "linear-gradient(to right, #4285f4, #34a853 50%, #fbbc05 100%, #ea4335)" 
                }}
              />
              <SocialButton
                icon={faLinkedinIn}
                link="https://www.linkedin.com/in/ibrahim-cs1/"
                style={{ backgroundColor: "#0077b5" }}
              />
              <SocialButton
                icon={faInstagram}
                link="https://www.instagram.com/ya.xheikh/"
                style={{
                  background:
                    "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                }}
              />
              <SocialButton
                icon={faSnapchat}
                link="https://www.snapchat.com/add/ibrahimazeem41"
                style={{ backgroundColor: "#F6F11E", color: "black" }}
                color="black"
              />
            </div>
    );
}