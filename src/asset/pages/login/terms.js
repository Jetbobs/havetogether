import {Link, useNavigate} from 'react-router-dom';
import '../../css/pages/login/terms_style.scss';

function Terms(props){
    
    let navigate = useNavigate();

    return(
        <div id="terms">
        <div className="header">
          <div className="container">
            <div className="title">
              회원가입
            </div>
            <div className="subtitle">
              Have Together 서비스 이용약관을 확인해주세요.
            </div>
          </div>
        </div>
        <div className="contents">
          <div className="container">
          <div className="c_header">
            <p>Have Together 이용약관</p> 
          </div>
          <div className="c_terms">
            <div className="c_terms_title">
              전체 동의하기
            </div>
            <div className="c_terms_subtitle"></div>
            <div className="c_terms_text">
            전체동의는 카카오 및 퍼블리의 서비스 동의를 포함하고 있습니다. 전체동의는 선택목적에 대한 동의를 포함하고 있으며, 선택목적에 대한 동의를 거부해도 서비스 이용이 가능합니다.
            </div>
          </div>
          <div className="c_terms">
            <div className="c_terms_title">
              <p>카카오 개인정보 제3자 제공 동의</p>
              <div className="c_terms_detail" onClick={()=>{navigate()}}>
                보기
              </div>
            </div>
            <div className="c_terms_subtitle">
              [필수] 필수 제공 항목
            </div>
            <div className="c_terms_text">
            카카오계정(이메일), 프로필 정보(닉네임/프로필 사진), 카카오톡 채널 추가 상태 및 내역, 카카오계정(전화번호)
            </div>
          </div>
          <div className="c_terms">
            <div className="c_terms_title">
              <p>카카오 개인정보 제3자 제공 동의</p>
              <div className="c_terms_detail" onClick={()=>{navigate()}}>
                보기
              </div>
            </div>
            <div className="c_terms_subtitle">
            [필수] 필수 제공 항목
            </div>
            <div className="c_terms_text">
            카카오계정(이메일), 프로필 정보(닉네임/프로필 사진), 카카오톡 채널 추가 상태 및 내역, 카카오계정(전화번호)
            </div>
          </div>
          </div>
          <div className="btn">
            동의하고 계속하기
          </div>
        </div>
      </div>
    )
}

export default Terms;