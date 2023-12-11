import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "./Button";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? ``,
  );
  return (
    <div className={className}>
      <h3 className="text-2xl font-bold text-slate-900">
        Want to reach out for any reason?
      </h3>
      <p className="mt-3 text-slate-500 max-w-md">
        Feel free to reach out! We will do our best to get back to you within 3
        business days.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
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
          <ValidationError prefix="Email" field="email" errors={state.errors} />
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
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        {state.succeeded ? (
          <div className="bg-emerald-100 p-6 rounded-3xl">
            <h2 className="font-bold text-lg text-emerald-800">
              Thanks for the message!
            </h2>
            <p className="text-emerald-800/60">
              We've recieved your message and will get back to you shortly.
            </p>
          </div>
        ) : (
          <div className="flex justify-end items-center h-12">
            {state.submitting ? (
              <i className="fa-solid fa-spinner self-center mr-12 text-xl animate-spin text-slate-600" />
            ) : (
              <Button
                type="submit"
                color="primary"
                size="md"
                icon="arrow-circle-right"
              >
                Send message
              </Button>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
