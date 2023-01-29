import { useDispatch, useSelector } from 'react-redux';
//css
import '../../asset/css/components/login/login_input_style.scss';

function LoginInfoInput(props) {

    let state = useSelector((state) => {return state});

    let dispatch = useDispatch();

    // let id = state.inputInfoInput[props.n].id;
    // let title = state.inputInfoInput[props.n].title;
    // let desc = state.inputInfoInput[props.n].desc;
    // let input_id = state.inputInfoInput[props.n].input_id;

    let id = props.infoInputData[props.i].id;
    let title = props.infoInputData[props.i].title;
    let desc = props.infoInputData[props.i].desc;
    let input_id = props.infoInputData[props.i].input_id;




    return (
        <div className="input" id={id}>
            <div className="input_title">
                <p>{title}</p>
                <div className="input_desc">
                        {desc}
                </div>
            </div>
            <input type="text" id={input_id} />
        </div>
    )
}

export default LoginInfoInput;