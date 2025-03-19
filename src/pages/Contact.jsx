import React from "react";
import ContactForm from "../components/ContactForm";
import Hero_About from "../components/Hero_About";

const Contact = () => {
  return (
    <div>
      <Hero_About bgImg={'https://www.magnet.co.za/news/cms-assets/inline-images/Pg-68-1.jpg'} heading={'Get in Touch with Us'}/>
      <ContactForm />
    </div>
  );
};

export default Contact;
