function LoginDateButton(props){

    let id = props.dateButton[props.i].id;
    let title = props.dateButton[props.i].title;

    return(
        <div className="input_btn_d" id={id}>
        <div className="title">
          {title}
        </div>
        <div className="input_time">
          <span>11:30</span>
        </div>
        <div className="input_time">
          <span>12:00</span>
        </div>
      </div>
    )
}

export default LoginDateButton;