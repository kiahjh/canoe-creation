import React from 'react';
import Chrome from '../components/Chrome';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <Chrome page="/contact">
      <section className="flex justify-center items-center relative py-12 md:py-20 px-6 xs:px-8 sm:px-12 md:px-20">
        <div className="w-full lg:w-3/4 h-1/2 absolute lg:rounded-3xl bg-emerald-50" />
        <ContactForm className="bg-slate-50 p-6 sm:p-8 w-full md:w-176 relative bg-opacity-80 backdrop-blur-3xl shadow-xl rounded-3xl" />
      </section>
    </Chrome>
  );
};

export default Contact;
