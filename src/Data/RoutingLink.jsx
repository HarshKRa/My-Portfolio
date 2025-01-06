import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

export const routingLinks = [
  {
    name: "Home",
    icon: <FontAwesomeIcon icon={faHome} inverse />,
    link: "/",
  },
  {
    name: "About",
    icon: <FontAwesomeIcon icon={faUser} inverse />,
    link: "/About",
  },
  {
    name: "Contact",
    icon: <FontAwesomeIcon icon={faPhone} inverse />,
    link: "/Contact",
  },
];
