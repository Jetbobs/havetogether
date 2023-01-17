import {Link, useNavigate} from 'react-router-dom';
import meetUp from '../../asset/data/meetup';

function BasicButton(props){
    let navigate = useNavigate();
    return(
        <div className="btn" onClick={()=>{navigate()}} id={props.buttonId[props.i]}>
        {props.buttonName[props.i]}
      </div>
    )
}

export default BasicButton;