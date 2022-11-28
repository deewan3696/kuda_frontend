//import React from 'react';
import "../css/index.css"
import Logo from '../images/Logo.svg'
import Unhidepw from '../images/Unhidepw.svg'
import Button from "./Button"
import InputField from "./InputField"
import Label from "./Label"
import Paragraph from "./Paragraph"
//import Logo2 from '../images/Logo.svg'




function Signup() {
    
    return (
        <section className='container-xlg'>
             <nav class="navbar bg-light">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand" href="https://kuda.com/">
                        <img src={Logo} alt="Bootstrap" width="90" height="24"/>
                    </a>
                    <Button className="rounded fw-bolder openAccount" btnValue= "Open an Account" />
                </div>
            </nav>
            <div>
            <div className="CheckUrl rounded my-5 fw-bold">Please check that you are visiting the correct URL <a className="anchorLink fw-bold" href='https://app.kuda.com/'>https://app.kuda.com</a></div>
                <div className="kudaCont">
                    <h4 className="fw-bold">Sign In to Kuda</h4>
                    <Paragraph id="para" text="To sign in, please type in the email address linked to  your Kuda account."/><br/>
                   
                    <form>
                        <Label htmlFor='email Address' labelValue="Email Address"/><br/>
                        <InputField id="kudaInput1" type="text" placeholder="example@gmail.com"/><br/><br/>
                        <Label htmlFor='Passowrd' labelValue= "Passoword" /><br/>
                        <InputField id="kudaInput1" type="password" placeholder="------------" />
                        <img 
                        src={Unhidepw} 
                        alt="Bootstrap" 
                        width="20" 
                        height="20"
                        />
                        <br/><br/>
                        <Paragraph className='resetPw'  id="para">Forgot Password?<a className='pwordReset' href='https://app.kuda.com/reset'>Reset it</a></Paragraph>
                    </form>
                  <Button className="kuda-btn" btnValue= "Sign In" />
                  <Paragraph className="p-text"  text= "" />
                </div>
            </div>
         
        
        </section>
       
        
    )
}


export default Signup