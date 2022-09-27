import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiOutlineArrowRight} from "react-icons/ai"
import { Link } from "react-router-dom";
import "../styles/login.css"

const Login = () => {
    return (
        <section className='login'>
            <main className='page__bg'>
                <div className='page__title'>
                    Email Verification
                </div>

                <div className='page__content'>
                    <div className='mail__icon'>
                        <MdOutlineMarkEmailUnread className='icon'/>
                    </div>

                    <h3>Your email has not been verified</h3>

                    <h6>Send a verification email to ****@gmail.com</h6>

                    <div className='send__btn'>
                    <Link to="/verification"><button>Send verification mail</button></Link>

                    </div>

                     <div className='skip__btn'>
                     <a>Skip for now <AiOutlineArrowRight /></a>

                     </div>




                </div>
            </main>
        </section>
    )
}

export default Login
