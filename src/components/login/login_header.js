
import {Link, useNavigate} from 'react-router-dom';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser,faEllipsisVertical,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import meetUp from '../../asset/data/meetup';
import { useDispatch, useSelector } from 'react-redux';

function LoginHeader(props){

    let state = useSelector((state) => {return state})

    let dispatch = useDispatch();
    console.log(state)
    let title = state.loginHeader[props.n].title;
    let subtitle = state.loginHeader[props.n].subtitle;
    let link_title = state.loginHeader[props.n].link_title;
    let link_icon = state.loginHeader[props.n].link_icon;

    return(
        <section className="header">
        <div className="container">
        <div className="title">
          {title}
        </div>
        <div className="subtitle">
          {subtitle}
        </div>
        </div>
        <Link>{link_title} <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
      </section>
    )
}

export default LoginHeader;