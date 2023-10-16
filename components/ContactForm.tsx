import React from "react";
import Button from "./Button";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => (
  <div className={className}>
    <h3 className="text-2xl font-bold text-slate-900">
      Want to register or just have a question?
    </h3>
    <p className="mt-3 text-slate-500 max-w-md">
      Feel free to reach out! We will do our best to get back to you within 3
      business days.
    </p>
    <div className="mt-8 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-slate-500 font-medium">
          Name
        </label>
        <input
          className="px-6 py-4 w-full rounded-2xl border border-slate-200 focus:border-emerald-400 outline outline-transparent focus:outline-emerald-400 transition duration-200 placeholder-slate-400"
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-slate-500 font-medium">
          Email address
        </label>
        <input
          className="px-6 py-4 w-full rounded-2xl border border-slate-200 focus:border-emerald-400 outline outline-transparent focus:outline-emerald-400 transition duration-200 placeholder-slate-400"
          type="email"
          id="email"
          name="email"
          placeholder="me@example.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-slate-500 font-medium">
          Message
        </label>
        <textarea
          className="px-6 py-4 w-full rounded-2xl border border-slate-200 focus:border-emerald-400 outline outline-transparent focus:outline-emerald-400 transition duration-200 placeholder-slate-400"
          id="message"
          name="message"
          rows={5}
          placeholder="Any questions or comments are welcome!"
        />
      </div>
      <div className="flex justify-end">
        <Button
          type="button"
          onClick={() => {}}
          color="primary"
          size="md"
          icon="arrow-circle-right"
        >
          Send message
        </Button>
      </div>
    </div>
  </div>
);

export default ContactForm;
