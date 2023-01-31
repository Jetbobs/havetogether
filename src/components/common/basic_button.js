import {Link, useNavigate} from 'react-router-dom';
import meetUp from '../../asset/data/meetup';

function BasicButton(props){
    let navigate = useNavigate();
    console.log(props.button[props.i].link)
    return(
      <Link to={props.button[props.i].link}><div className="btn" onClick={()=>{navigate()}} id={props.button[props.i].id}>
        {props.button[props.i].name}
      </div></Link>
    )
}

export default BasicButton;