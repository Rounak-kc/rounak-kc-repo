import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hllf2hp',
      'template_2rsmbxq',
      form.current,
      'yrWpfkUPx4CMQZCyd'
    )
    .then((result) => {
        alert("Message sent successfully!");
        console.log(result.text);
        form.current.reset();
    }, (error) => {
        alert("Failed to send message. Please try again.");
        console.log(error.text);
    });
  };

  return (
    <div className="mb-5 p-2 flex flex-col items-center justify-center">
      <div className="border border-gray-400 pb-2 rounded-md w-full flex flex-col items-center">
        <h1 className="primary-heading">Have Question In Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" w-full flex flex-col gap-4 items-center justify-around"
        >

          <input id="nameInput" className="border border-gray-600 p-4 rounded-[1rem] flex items-center  relative
           w-[40%] h-10 outline-none" name="from_name" placeholder="Your Name" />
          <textarea
            id="messageInput"
            name="message"
            className="border border-gray-600 p-2 pl-5 rounded-[1rem] outline-none w-[40%] h-20"
            placeholder="message..."
            required
          />
          <input
              id="emailInput"
              className="border border-gray-600 p-2 pl-5 rounded-[1rem] outline-none w-[40%] h-10"
              type="email"
              placeholder="email@gmail.com"
              name="email"
              required
            />
            <button type="submit" className="secondary-button" >
              Submit
            </button>
          
        </form>
      </div>
    </div>
  );
}

export default Contact;
