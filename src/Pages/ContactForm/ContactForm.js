import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import swal from "sweetalert";
import './ContactForm.css';

const ContactForm = (e) => {
  const [state, handleSubmit] = useForm("mbjbnpqo");
  console.log(state, "check function");
  const form=e.target;
  if (state.succeeded) {
    form.reset();
    swal(
      "Thank You!",
      "I will Reply your message as soon as possible",
      "success"
    );
    console.log("object");
  }
  return (
    <div>
      <section className="py-6  bg-gray-800  text-gray-50 w-full">
        <div className="grid w-11/12 grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div data-aos="fade-right"  data-aos-duration="1500" className="py-6 md:py-0 md:px-6">
            <h1 className="text-5xl font-bold">Contact Me</h1>
            <p className="pt-2 pb-4 text-xl">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4 text-xl">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Patuakhali,Bangladesh</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+8801923588531</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>mmehedihasanjoyv@gmail.com</span>
              </p>
            </div>
          </div>
          <form
            data-aos="fade-left"
            data-aos-duration="1500"
            onSubmit={(e)=>handleSubmit}
            className="flex flex-col text-xl lg:p-10 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid bg-gray-700 rounded-lg"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400  bg-gray-600 p-2"
              />
              <ValidationError
                prefix="Email"
                field="name"
                errors={state.errors}
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
                          <input
                              id="email"
                              type="text"
                              name="email"
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400  bg-gray-600 p-2"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
                          <textarea
                              id="message" name="message"
                rows="3"
                className="block px-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  bg-gray-600"
                spellcheck="false"
                          />
                          <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
                          
            </label>
            <button
              type="submit"
              disabled={state.submitting}
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75  bg-violet-400  text-gray-900 focus:ring-violet-400 hover:ring-violet-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
