import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const talToMeDetailsData = [
  {
    name: "Email",
    icon: <FontAwesomeIcon icon={faEnvelope} inverse className="h-8 w-8" />,
    paraOne: "harsh726181@gmail.com",
    link: "mailto:harsh726181@gmail.com.com",
  },
  {
    name: "Whatsapp",
    icon: <FontAwesomeIcon icon={faWhatsapp} inverse className="h-8 w-8" />,
    paraOne: "+917261810781",
    link: "https://api.whatsapp.com/send?phone=+917261810781&text=Hello,%20I%20am%20here%20from%20your%20Portfolio.",
  },
  {
    name: "LinkeIn",
    icon: <FontAwesomeIcon icon={faLinkedin} inverse className="h-8 w-8" />,
    paraOne: "harshkrraj",
    link: "https://www.linkedin.com/in/harshkrraj/",
  },
];

export const formDetailsData = [
  {
    label: "Name",
    type: "text",
    name: "User_Name",
    placeHolder: "Insert Your Name",
  },

  {
    label: "Number",
    type: "text",
    name: "Phone_Number",
    placeHolder: "Insert Your Number",
  },

  {
    label: "Email",
    type: "email",
    name: "User_Mail",
    placeHolder: "Insert Your Mail",
  },
];
