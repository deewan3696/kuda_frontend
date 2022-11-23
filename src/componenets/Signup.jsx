//import React from 'react';
import "../css/index.css"
import Logo from '../images/Logo.svg'
import Unhidepw from '../images/Unhidepw.svg'
//import Logo2 from '../images/Logo.svg'




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
            <div className="CheckUrl rounded my-5 fw-bold">Please check that you are visiting the correct URL <a className="anchorLink fw-bold" href='https://app.kuda.com/'>https://app.kuda.com</a></div>
                <div className="kudaCont">
                    <h4 className="fw-bold">Sign In to Kuda</h4>
                    <p id="para">
                        To sign in, please type in the email address linked to <br/> your Kuda account.
                    </p>
                    <form>
                        <label htmlFor='email Address'>Email Address</label><br/>
                        <input id="kudaInput1" type="text" placeholder="example@gmail.com"/><br/><br/>
                        <label htmlFor='Passowrd'>Passowrd</label><br/>
                        <input id="kudaInput1" type="password" placeholder="------------" /><img src={Unhidepw } alt="Bootstrap" width="20" height="20"/><br/><br/>
                        <p className='resetPw'  id="para">Forgot Password?<a className='pwordReset' href='https://app.kuda.com/reset'>Reset it</a></p>
                    </form>
                  <button className="kuda-btn">Sign In</button>
                  <p className="p-text">if you dont have a kuda account,download the app  <br /> <a href="https://bit.ly/getkuda">here</a>  and open an account in a few minutes </p>
                </div>
            </div>
         
        
        </section>
       
        
    )
}


export default Signup