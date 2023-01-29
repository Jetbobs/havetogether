//css
import '../../asset/css/components/login/login_input_style.scss';

function LoginInfoInputTextarea(props){

    let id = props.infoInputTextarea[props.i].id;
    let title = props.infoInputTextarea[props.i].title;
    let desc = props.infoInputTextarea[props.i].desc;
    
    return(
        <div className="input" id={id}>
        <div className="input_title">
          <p>{title}</p>
          <div className="input_desc">
            {desc}
          </div>
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    )
}

export default LoginInfoInputTextarea;