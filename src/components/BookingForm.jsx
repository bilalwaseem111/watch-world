"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const BookingForm = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Debugging log (can be removed in production)
      console.log("Sending these params:", {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_address: formData.address,
        product_name: product.company,
        product_price: product.price,
        order_time: new Date().toLocaleString(),
      });

      // Use environment variables for sensitive data
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Use environment variable for service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Use environment variable for template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_address: formData.address,
          product_name: product.company,
          product_price: product.price,
          order_time: new Date().toLocaleString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID // Use environment variable for user ID
      );

      console.log("EmailJS response:", response);
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Full email error:", error);
      alert("Order received but email failed. We'll contact you shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="success-message">
        <h2>Order Confirmed! ✅</h2>
        <p>We've sent details to {formData.email}</p>
        <p>Order Reference: ORD-{Date.now().toString().slice(-6)}</p>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="booking-modal">
      <div className="booking-form-container">
        <button className="close-btn" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2>Book Your {product.company}</h2>
        <p className="product-price">${product.price}</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1234567890"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Shipping Address *</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Street, City, Postal Code"
              rows={3}
            />
          </div>

          <div className="form-notice">
            <p>You'll complete payment on the next secure page</p>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span> Processing...
              </>
            ) : (
              "Complete Order"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
