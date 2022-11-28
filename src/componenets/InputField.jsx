function InputField ({inputId ,inputType,placeHolderType,inputValue}) {

    return (
        <input id={inputId} type= {inputType} placeholder={placeHolderType} value={inputValue}  />
    )
}

export default InputField