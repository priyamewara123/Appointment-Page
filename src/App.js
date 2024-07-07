// import { useState } from "react";
import "./App.css";

function App() {
 

    const fullname=""
    const email=""
    const department=""
    const time=""

  const handleSubmit =(e)=>{
    e.preventDefault();
  }

  return (
    <>
      <div className="app">
        <div className="headings">
          <h4>Contact Us</h4>
          <h1> Make An Appointment</h1>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit}>
          <div className="inputs">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={fullname}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
          />
          </div>
          
          <div className="inputs">
          <select>
            <option value="">--Select--</option>
            <option value="CS">CS</option>
            <option value="IT">IT</option>
          </select>

          <select>
            <option value="">--select time--</option>
            <option value="4">4:00 Availabe</option>
            <option value="5">5:00 Availabe</option>
          </select>
          </div>
          <div className="message">
           <input
            type="text"
            name="message"
            placeholder="Message"
            // value={message}
          />
          </div>

            <button type="submit">Book Appointment</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
