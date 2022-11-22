import "../css/index.css"


function Register() {

 const submitForm =() => {
    alert ("welcome to deewan clean")
 }


    return (
        <div>
            <h1>This is deewan cleaning services frontend</h1> <br />
            <form action="">
            
            <label htmlFor="surname">Surname :</label>
            <input type="text" id="surname" placeholder="input your surname" required/>
            <br />
            <label htmlFor="othernames">Othername:</label>
            <input type="text" id="othernames" placeholder="input your othernames" required/>
            <br />
             <h3>Select your Sex</h3>
             <label htmlFor="male">Male</label>
             <input type="radio" id="male" value="Male"/>
             <label htmlFor="female">Female</label>
             <input type="radio" id="female" vlaue = "Female"/> 
             <br />
             <button onClick={submitForm}>Submit</button>
            
            </form>
            
        </div>
    )
}

export default Register

