 function Paragraph (text,sizeVal="15px"){

    return(
        <p style= {{ frontSize: {sizeVal}}}> {text} </p>
    )
 }

 export default Paragraph