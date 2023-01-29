import InputBtn from "../common/input_btn";

//css
import '../../asset/css/components/login/login_info_button_style.scss';

function LoginInfoButton(props){
    console.log(props.infoInput)
    return(
        <div className="input_btn">
        <div className="title">
          {props.title}
        </div>
        <div className="input_btn_container">
            {
                props.infoInput.map((a,i) => {
                    return(
                        <InputBtn infoInput={props.infoInput} i={i}></InputBtn>
                    )
                })
            }
        </div>
      </div>
    )
}

export default LoginInfoButton;