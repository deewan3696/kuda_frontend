import "../css/index.css"
import Label from "./Label"
import InputField from "./InputField"
import Button from "./Button"
import Paragraph from "./Paragraph"

function Register() {

 const submitForm =() => {
    alert ("welcome to deewan clean")
 }


    return (
        <div>
            <Paragraph>This is deewan cleaning services frontend</Paragraph> <br />
            <form action="">
            
            <Label htmlFor="surname">Surname :</Label>
            <InputField type="text" id="surname" placeholder="input your surname" required/>
            <br />
            <Label htmlFor="othernames">Othername:</Label>
            <InputField type="text" id="othernames" placeholder="input your othernames" required/>
            <br />
             <Paragraph>Select your Sex</Paragraph>
             <Label htmlFor="male">Male</Label>
             <InputField type="radio" id="male" value="Male"/>
             <Label htmlFor="female">Female</Label>
             <InputField type="radio" id="female" vlaue = "Female"/> 
             <br />
             <Button onClick={submitForm}>Submit</Button>
            
            </form>
            
        </div>
    )
}

export default Register

