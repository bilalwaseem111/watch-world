"use client";
import React, { useState } from "react";
import "./modalForm.css";

const ModalForm = ({ isOpen, closeModal, product }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-labelledby="modal-header" aria-hidden={!isOpen}>
      <div className="modal-container">
        <div className="modal-header">
          <h2 id="modal-header">Buy {product.company}</h2>
          <button
            onClick={closeModal}
            className="close-btn"
            type="button"  // Prevents form submission
            aria-label="Close Modal"
          >
            X
          </button>
        </div>
        <form className="modal-form">
          <label htmlFor="name">
            Name:
            <input type="text" id="name" placeholder="Enter your name" required />
          </label>
          <label htmlFor="address">
            Address:
            <input type="text" id="address" placeholder="Enter your address" required />
          </label>
          <label htmlFor="phone">
            Phone:
            <input type="tel" id="phone" placeholder="Enter your phone number" required />
          </label>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
