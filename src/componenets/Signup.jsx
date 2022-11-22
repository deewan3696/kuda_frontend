//import React from 'react';
import "../css/index.css"
import Logo from '../images/Logo.svg'
import Unhidepw from '../images/Unhidepw.svg'




function Signup() {
    
    return (
        <section className='container-xlg'>
             <nav class="navbar bg-light">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand" href="https://kuda.com/">
                        <img src={Logo} alt="Bootstrap" width="90" height="24"/>
                    </a>
                    <button className="rounded fw-bolder openAccount">Open an Account</button>
                </div>
            </nav>
            <div>
            <div className="LinkOntopForm rounded my-5 fw-bold">Please check that you are visiting the correct URL <a className="theLink fw-bold" href='https://app.kuda.com/'>https://app.kuda.com</a></div>
                <div className="wholeTable">
                    <h4 className="fw-bold">Sign In to Kuda</h4>
                    <p>
                        To sign in, please type in the email address linked to <br/> your Kuda account.
                    </p>
                    <form>
                        <label htmlFor='email Address'>Email Address</label><br/>
                        <input type="text" placeholder="example@gmail.com"/><br/><br/>
                        <label htmlFor='Passowrd'>Passowrd</label><br/>
                        <input type="password" placeholder="••••••••••" /><img src={Unhidepw } alt="Bootstrap" width="20" height="20"/><br/><br/>
                        <p className='paragraphpasswordreset'>Forgot Password?<a className='passwordReset' href='https://app.kuda.com/reset'>Reset it</a></p>
                    </form>
                </div>
            </div>
        </section>
       
        
    )
}


export default Signup