import React, { Component, useRef } from 'react'
import './ContactForm.css'

const ContactForm = () => {
    const contactForm = useRef(null)
    const handleClickEvent = () => {
        const form = contactForm.current

        window.open('mailto:test@example.com?subject=New Drone Quote for ' + `${form['name'].value}` + ' With Phone number: '+ `${form['phoneNumber'].value}` + '&body=' + `${form['text'].value}`);
        
    }

    return (
        <>
        <h2 className="h2Contact">Book a Shoot Now, Contact us using the form below or call (xxx)xxx-xxxx </h2>
            <form style={{padding:"10px"}} ref={contactForm}>
                <input   name="name" type="text" className="feedback-input" placeholder="Name" />
                <input name="phoneNumber" type="tel" className="feedback-input" placeholder="Phone Number (optional)" />
                <textarea name="text" className="feedback-input" placeholder="Got a question? Place it here!"></textarea>
                <input type="submit" value="SUBMIT" onClick={handleClickEvent} />
            </form>
        </>
    )
};

export default ContactForm

