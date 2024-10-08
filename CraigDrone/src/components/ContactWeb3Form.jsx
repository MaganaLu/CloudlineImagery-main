import { useState, useEffect, React } from 'react';

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "11f04745-bf7e-4711-9f42-83fe3d782501");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Submitted Successfully");
            event.target.reset();
        } else {
            setResult(data.message);
        }
    };

    return (
        <div>

            <h2 className="h2Contact">Book a Shoot Now, Contact us using the form below or call (253)389-8009 </h2>
            
            <form style={{ padding: "10px" }} onSubmit={onSubmit}>
                <input type="text" className="feedback-input" name="name" placeholder="Name" required />
                <input type="email" name="email" className="feedback-input" placeholder="Email" required />
                <textarea name="message" className="feedback-input" required placeholder="Got a question or inquiry? Place it here!"></textarea>

                <button type="submit">Submit</button>
                <p style={{ textAlign:"center" }}>{result}</p>
            </form>


        </div>
    );
}