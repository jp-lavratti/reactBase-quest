const Button=(props)=>{
    const getLabel=(buttonLabel)=>{
        window.alert(`A label desse botão é ${buttonLabel}`)
    }
    return(
        <button className="btn" onClick={()=>getLabel(props.label)}>
            {props.children}
        </button>
    )
}
export default Button