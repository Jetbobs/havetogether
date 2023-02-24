function InputBtn(props){
    
    let title = props.infoInput[props.i].title;
    let id = props.infoInput[props.i].id;
    
    return(
    <div className="input_btn_i" id={id+'_i'}>
        {/* <span>
          {title}
        </span> */}
        <input type="checkbox" id={id}/>
        <label htmlFor={id}>{title}</label>
      </div>
    )
}

export default InputBtn;