import { Link, useNavigate } from 'react-router-dom';
import meetUp from '../../asset/data/meetup';
//scss
import '../../asset/css/components/common/btn_green_style.scss';

function BtnGreen(props) {
    let navigate = useNavigate();
    return (
        <div className="wrapper" id={props.button[props.i].id}>
            <div className="btn" onClick={() => { navigate() }} >
                {props.button[props.i].name}
            </div>
        </div>
    )
}

export default BtnGreen;