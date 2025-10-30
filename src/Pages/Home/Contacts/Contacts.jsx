import "./Contacts.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { RiSendPlaneLine } from "@remixicon/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Show loading toast
    const loadingToast = toast.loading("Sending message...");

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          // Dismiss loading and show success
          toast.dismiss(loadingToast);
          toast.success(
            "Message sent successfully! We'll get back to you soon.",
            {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
          // Reset form after successful submission
          e.target.reset();
        },
        (error) => {
          // Dismiss loading and show error
          toast.dismiss(loadingToast);
          toast.error(`Failed to send message: ${error.text}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="home_contacts_section section">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="home_contacts_container container">
        <div className="home_contacts_headers section_headers">
          <strong className="title_top title_top_faint">get in touch</strong>
          <h2 className="section_title">
            Reach out to us for a prayer request or any inquiries
          </h2>
        </div>

        <div className="home_contacts_contents grid_container">
          <form className="home_contacts_form" ref={form} onSubmit={sendEmail}>
            <div className="home_contact_names">
              <input
                type="text"
                id="first_name"
                placeholder="First name"
                required
                name="first_name"
              />
              <input
                type="text"
                id="last_name"
                placeholder="Last name"
                required
                name="last_name"
              />
            </div>

            <div className="home_contact_contacts">
              <input
                type="tel"
                id="contact"
                placeholder="Phone Number"
                required
                name="contact"
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                name="email"
              />
            </div>

            <div className="home_contact_subject">
              <input
                type="text"
                id="subject"
                placeholder="Prayer Item..."
                required
                name="subject"
              />
            </div>

            <div className="home_contact_names">
              <textarea
                id="content"
                placeholder="Prayer for ..."
                required
                name="content"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn_purple">
              Send message <RiSendPlaneLine size={15} />
            </button>
          </form>
          <div className="home_contacts__map">
            <iframe
              title="Google Maps location of Revival Wave Church"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8990225418943!2d36.9192241!3d-1.2299784999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1572fdbd17e9%3A0x928ea601b7b9255d!2sRivival%20Wave%20Church!5e0!3m2!1sen!2ske!4v1733331807916!5m2!1sen!2ske"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
