import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const MailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Message Sent Successfully");
        },
        (error) => {
          toast.error("Message Can't Send");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="py-10 px-5">
        <form ref={form} onSubmit={sendEmail}>
          <label className="block mb-5">
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Name" className="mt-1 block w-full px-3 py-2 bg-white border border-light dark:border-dark rounded-md text-sm shadow-sm placeholder-slate" />
          </label>
          <label className="block mb-5">
            <input type="text" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" className="mt-1 block w-full px-3 py-2 bg-white border border-light dark:border-dark rounded-md text-sm shadow-sm placeholder-slate" />
          </label>
          <label className="block mb-5">
            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Subject" className="mt-1 block w-full px-3 py-2 bg-white border border-light dark:border-dark rounded-md text-sm shadow-sm placeholder-slate" />
          </label>
          <label className="block mb-5">
            <textarea required name="message" value={formData.message} onChange={handleInputChange} rows={10} placeholder="Message" className="mt-1 block w-full px-3 py-2 bg-white border border-light dark:border-dark rounded-md text-sm shadow-sm placeholder-slate" />
          </label>
          <div className=" text-center">
            <button className="rounded text-xl font-normal text-white bg-light px-5 py-2 dark:bg-darksec" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
