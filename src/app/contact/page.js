"use client";
import { useState } from "react";
import "../contact/contact.css";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <main className="contact-main">
        <h1 className="contact-heading">Contact Us</h1>

        {submitted ? (
          <div className="success-message">
            <h2>Message Sent Successfully!</h2>
          </div>
        ) : (
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your Name"
                required
              />

              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Your Email"
                required
              />

              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        )}

        <div className="backss-to-home-container">
          <Link href="/">
            <button className="backss-to-home-button">Back to Home</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
