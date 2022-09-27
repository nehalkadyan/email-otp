import React from 'react'
import { TbBrandTelegram } from "react-icons/tb"
import "../styles/verification.css"

const Verification = () => {
  return (
     <section className="verification">

        <main className="page__background">
            <div className="page__content">
            <div className="telegram__icon">
            <TbBrandTelegram className="icon" />
            </div>

            <h3>An email has been sent to you.</h3>
            <h6>Check the email that's associated with your account 
                for the verification code.
            </h6>
            </div>

           

            <div className="column__content">
            <label>Verification code</label>
            <input type="text" />
            <button>Verify</button>

            <a> Send me another Code</a>

            <a>Skip for now </a>

            </div>

            
        </main>
     </section>
  )
}

export default Verification;
