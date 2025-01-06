import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { formDetailsData, talToMeDetailsData } from "../../Data/ContactData";

const talToMeDetails = talToMeDetailsData;
const formDetails = formDetailsData;

const Contact = () => {
  const formData = useRef();

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
      <div className=" mx-auto w-11/12 md:px-10 md:mt-28 mt-20 py-8 rounded-lg bg-bgPrimary bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-borderColor">
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
            className="border-2 m-auto px-10 my-10 py-2 rounded-xl font-bold bg-btnColor "
          />
        </form>
      </div>

      <div className=" mx-auto w-11/12 md:px-10 mt-10  py-8 mb-20 bg-bgPrimary rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-borderColor">
        <h2 className="font-mono text-xl text-center subpixel-antialiased font-bold">
          Talk to me!
        </h2>

        <div className="mt-5 flex flex-wrap justify-center align-middle  p-5">
          {talToMeDetails.map((tmd) => (
            <div className="my-4 py-4 px-10 mx-5 w-80 flex flex-col justify-center align-middle text-center border-2 border-borderColor rounded-3xl">
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
