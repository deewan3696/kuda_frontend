function Button ({btnStyle,btnType,btnClass,btnValue}) {

    return (
        <button  
            style={btnStyle}
            type={btnType}
            className={btnClass}
        > 
        
        {btnValue}
        
        </button>
    )
}

export default Button