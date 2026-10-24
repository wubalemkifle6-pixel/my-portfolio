
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export default function ContactForm() {
  const formRef = useRef(null);

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = async (event) => {
    // Stop Chrome from opening a blank page
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("");
    setSuccess(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSuccess(true);
      setStatus("✅ Success! Your message has been sent. Thank you for contacting me!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setSuccess(false);
      setStatus(
        "❌ Sorry, your message could not be sent. Please check your connection and try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-description">
        Have a question or opportunity? Send me a message!
      </p>

      <form
        ref={formRef}
        className="contact-form"
        onSubmit={sendEmail}
      >
        <label htmlFor="user_name">Your Name</label>
        <input
          id="user_name"
          type="text"
          name="user_name"
          placeholder="Enter your name"
          autoComplete="name"
          required
        />

        <label htmlFor="user_email">Your Email</label>
        <input
          id="user_email"
          type="email"
          name="user_email"
          placeholder="Enter your email"
          autoComplete="email"
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Write your message here..."
          required
        />

        <button
          className="send-button"
          type="submit"
          disabled={sending}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            className={`form-status ${success ? "success" : "error"}`}
            role="status"
            aria-live="polite"
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
