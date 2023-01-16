
import {Link, useNavigate} from 'react-router-dom';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser,faEllipsisVertical,faArrowRight} from '@fortawesome/free-solid-svg-icons';
//scss
import '../../css/pages/login/main_style.scss';





function LoginMain(){

    let navigate = useNavigate();

    return(
        <div id='login'>
        <section className="header">
          <div className="container">
          <div className="title">
            스타트업 점심시간 네트워킹
          </div>
          <div className="subtitle">
            다양한 이벤트에 참여하시고, 다채로운 분들과 네트워킹하실 수 있습니다! <br /> 지금 Have Together에 가입하세요 :)
          </div>
          </div>
          <Link>Have Together 서비스 소개서 보기 <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
        </section>
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
            <div className="btn" onClick={()=>{navigate()}} id='login'>
              로그인
            </div>
            <div className="btn" onClick={()=>{navigate()}} id='signup'>
              회원가입
            </div>
            <div className="find_container">
              <div className="find" onClick={()=>{navigate()}}>비밀번호 찾기</div>
              <div className="find" onClick={()=>{navigate()}}>아이디 찾기</div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default LoginMain;