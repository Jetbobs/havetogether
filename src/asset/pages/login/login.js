
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser,faEllipsisVertical,faArrowRight} from '@fortawesome/free-solid-svg-icons';
//scss
import '../../css/pages/login/login_style.scss';
//data
import meetUp from '../../data/meetup';
//components
import LoginHeader from '../../../components/login/login_header';
import BasicButton from '../../../components/common/basic_button';






function Login(){
    let [meetup] = useState(meetUp);
    console.log(meetup[0].link_icon)
    let navigate = useNavigate();
    let [buttonName, buttonNameSet] = useState(['로그인','회원가입']);
    let [buttonId, buttonIdSet] = useState(['login','signup']);
    console.log(buttonName)

    return(
        <div id='login'>
        <LoginHeader n={0}></LoginHeader>
        <section className='contents'>
          <div className="container">
          <div className="input" id='email'>
            <div className="title">
              이메일
            </div>
            <input type="text" placeholder='이메일 입력' />
          </div>
          <div className="input" id='pw'>
            <div className="title">
              비밀번호
            </div>
            <input type="text" placeholder='비밀번호 입력' />
          </div>
          </div>
          <div className="container">
            {/* <div className="btn" onClick={()=>{navigate()}} id='login'>
              로그인
            </div>
            <div className="btn" onClick={()=>{navigate()}} id='signup'>
              회원가입
            </div> */}
            {
              buttonName.map((e,i)=>{
                console.log(e);
                console.log(i);
                return(
                  <BasicButton buttonName={buttonName} buttonId={buttonId} i={i}></BasicButton>
                )
              })
            }
            <div className="find_container">
              <div className="find" onClick={()=>{navigate()}}>비밀번호 찾기</div>
              <div className="find" onClick={()=>{navigate()}}>아이디 찾기</div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Login;