



function Img (props){
   const newUrl=props.Url
   const newAlt=props.alt
    return (
        <img
        
        src={newUrl}
        alt={newAlt}
        width="400px"
        height="400px"
        />
    )
}

export default Img