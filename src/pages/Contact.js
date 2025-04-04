import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="contact-wrapper">
            <h1 className="main-title">Let's Make Dreams Come True</h1>

            <div className="contact-page">
                <h3>Let's connect!</h3>

                {!submitted ? (
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required />
                        <button type="submit">Send</button>
                    </form>
                ) : (
                    <p className="thank-you">Thanks for reaching out! I'll get back to you soon.</p>
                )}
            </div>
        </div>
    );
};

export default Contact;
