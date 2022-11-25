function Btn ({btnStyle,btnType,btnClass,btnValue}) {

    return (
        <button  
        style={btnStyle}
        type={btnType}
        className={btnClass}
        
        > {btnValue}
        </button>
    )
}

export default Btn