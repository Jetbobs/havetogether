
import {Link, useNavigate} from 'react-router-dom';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser,faEllipsisVertical,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import meetUp from '../../asset/data/meetup';
import { useDispatch, useSelector } from 'react-redux';

function LoginHeaderNol(props){

    let state = useSelector((state) => {return state});

    let dispatch = useDispatch();

    let title = state.loginHeaderNol[props.n].title;
    let subtitle = state.loginHeaderNol[props.n].subtitle;
    // let title = 'test';
    // let subtitle = 'test2';

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
      </section>
    )
}

export default LoginHeaderNol;