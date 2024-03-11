const Text=(props)=>{
    return(
        <div className="text" style={{color:props.textColor,textTransform:'uppercase'}}>
            {props.children}
        </div>
    )
}
export default Text