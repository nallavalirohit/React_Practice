import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { injectStyle } from "react-toastify/dist/inject-style";

const notify = () => {
    toast('📨 Message Sent!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        injectStyle();
}

const Contact = () => {
  const form = useRef();

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="spacer w-full">&#160;</div>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Don't feel shy to reach out!</p>
        </div>

        <div className="flex justify-center items-center">
          <form ref={form} onSubmit={sendEmail} action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name..."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="user_email"
              placeholder="Enter your email..."
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Please type here..."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button onClick={notify} value="Send" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
