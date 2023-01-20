function InputBtn(props){
    
    let title = props.infoInput[props.i].title;
    
    return(
    <div className="input_btn_i">
        <span>
          {title}
        </span>
      </div>
    )
}

export default InputBtn;