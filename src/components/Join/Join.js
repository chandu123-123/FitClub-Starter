import React, { useRef } from "react";
import "./join.css";
import emailjs from '@emailjs/browser';
export default function Join() {
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_04z6zom', 'template_8yxlkh4', form.current, 'BWHyELs8K-YFHWyq4')
          .then((result) => {
              console.log(result.text);
              console.log(form.current)
       
          }, (error) => {
              console.log(error.text);
      
          });
      };
  return (
    <div className="join">
      
        <div className="left-j">
            
            <div>
                <span className="stroke">ready to </span>
                <span>level up</span>
            </div>

            <div>
                <span>your body</span>
                <span className="stroke"> with us ?</span>
            </div>
        </div>
       <div className="right-j"  style={{backgroundColor:"transparent"}}>
        <form action="" ref={form} onSubmit={sendEmail}>
            <input type="email" name="user-email" id="" placeholder="Enter your email"/>
           <button>JOIN</button>
        </form>
       </div>
    </div>
  );
}
