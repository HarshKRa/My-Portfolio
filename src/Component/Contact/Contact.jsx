import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// npm i @emailjs/browser

const Contact = () => {
  const talToMeDetails = [
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
  const formDetails = [
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="bg-[#1E293B] mx-auto w-11/12 md:px-10 md:mt-28 mt-20 py-8 border-white border-2 rounded-lg">
        <h1 className="font-mono text-2xl text-center subpixel-antialiased font-bold">
          Contact Me
        </h1>

        <h2 className="font-mono text-xl mt-5 text-center subpixel-antialiased font-bold">
          Write your masseage here
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col justify-center m-auto"
        >
          {formDetails.map((det) => (
            <div className="my-2 m-auto">
              <input
                type={det.type}
                name={det.name}
                placeholder={det.placeHolder}
                className="text-[#1E293B] px-2 py-1 rounded-xl h-14 md:w-80 text-center text-wrap m-auto"
              />
            </div>
          ))}
          <div className="my-4 m-auto">
            <textarea
              name="message"
              placeholder="Type Your Massage"
              className="text-[#1E293B] px-2 py-1 rounded-xl h-28 md:w-80 text-center border-0 align-middle"
            />
          </div>

          <input
            type="submit"
            value="Send"
            className="border-2 m-auto px-10 my-10 py-2 rounded-xl font-bold bg-[#191E26] "
          />
        </form>
      </div>

      <div className="bg-[#1E293B] mx-auto w-11/12 md:px-10 mt-10  py-8 border-white border-2 rounded-lg mb-20">
        <h2 className="font-mono text-xl text-center subpixel-antialiased font-bold">
          Talk to me!
        </h2>

        <div className="mt-5 flex flex-wrap justify-center align-middle  p-5">
          {talToMeDetails.map((tmd) => (
            <div className="my-4 py-4 px-10 mx-5 w-80 flex flex-col justify-center align-middle text-center border-2 rounded-3xl">
              <i>{tmd.icon}</i>
              <p>{tmd.name}</p>
              <p>{tmd.paraOne}</p>
              <a href={tmd.link} className="mt-5" target="_blank">
                Click Here{" "}
                <span>{<FontAwesomeIcon icon={faArrowRight} inverse />}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
