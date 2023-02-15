
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
//jquery
import $ from 'jquery';






function Login(){
    let [meetup] = useState(meetUp);

    let navigate = useNavigate();
    let [button, buttonSet] = useState([{ name : '로그인', id : 'login', link : ''},{ name : '회원가입', id : 'signup', link : '/terms'}]);
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
            {
              button.map((e,i)=>{
                return(
                  <BasicButton button={button} i={i}></BasicButton>
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
$(function(){
  let location = window.location.pathname;

  if(location == '/login'){
    $('#hi_my_page').addClass('active');
  }
})

export default Login;