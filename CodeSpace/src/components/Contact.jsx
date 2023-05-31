import React from "react";

const Contact = () => {
  return (
    <div className="contact" style={{"backgroundImage":"linear-gradient(blue,rgba(255,255,255),rgba(100,200,250"}}>
      <main>
        <h1 style={{"textAlign":"center" , "fontSize":"3rem"}}>Contact Us</h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Abc" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="Abc@xyz.com" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;