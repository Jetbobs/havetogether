import {Link, useNavigate} from 'react-router-dom';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser,faEllipsisVertical,faArrowRight} from '@fortawesome/free-solid-svg-icons';


function InfoInputMore(props){
    return(
        <div id="info_input_more">
        <div className="header">
          <div className="container">
          <div className="title">
            기본 회원정보 입력
          </div>
          <div className="subtitle">
            이벤트 참가, 네트워킹에 필요한추가 정보를 입력해주세요. <br /> 입력하신 정보는 커뮤니티 멤버들에게만 공개되며, 언제든지 업데이트 하실 수 있습니다.
          </div>
          </div>
          <Link>이용약관 살펴보기 <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
        </div>
        <div className="contents">
          <div className="title">
            계정 정보
          </div>
          <div className="input_container">
          <div className="input">
                <div className="input_title" id='email'>
                    <p>이메일</p>
                    <div className="input_desc">
                        *입력하신 이메일 계정이 ID가 됩니다.
                    </div>
                </div>
                <input type="text" id='my_name' />
              </div>
              <div className="input">
                <div className="input_title">
                    <p>비밀번호 변경</p>
                    <div className="input_desc">
                        
                    </div>
                </div>
                <input type="text" id='my_name' />
              </div>
          </div>
        </div>
        <div className="contents">
          <div className="container">
          <div className="title">
            매칭정보
          </div>
          <div className="subtitle">
            입력하신 정보를 이벤트 매칭에 활용합니다. 언제든지 업데이트 하실 수 있습니다.
          </div>
          <div className="input_container">
          <div className="input_btn" id='week'>
              <div className="title">
                편하신 시간대를 알려주세요.
              </div>
              <div className="input_btn_container">
                <div className="input_btn_d">
                  <div className="title">
                    월요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
                <div className="input_btn_d">
                  <div className="title">
                    화요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
                <div className="input_btn_d">
                  <div className="title">
                    수요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
                <div className="input_btn_d">
                  <div className="title">
                    목요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
                <div className="input_btn_d">
                  <div className="title">
                    금요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
                <div className="input_btn_d">
                  <div className="title">
                    토요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
                <div className="input_btn_d">
                  <div className="title">
                    일요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_btn">
              <div className="title">
                관심사를 알려주세요.
              </div>
              <div className="input_btn_container">
                <div className="input_btn_i">
                  <span>
                  스타트업
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  반려동물
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  재테크
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  IT 기술
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  여행
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  시사, 이슈
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  사람과 문화
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  건강
                  </span>
                </div>
              </div>
            </div>
            <div className="input_btn">
              <div className="title">
                취미를 알려주세요.
              </div>
              <div className="input_btn_container">
                <div className="input_btn_i">
                  <span>
                  운동
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  요리
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  맛집
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  게임
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  독서
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  영화, 드라마
                  </span>
                </div>
              </div>
            </div>
            <div className="input_btn">
              <div className="title">
                취미를 알려주세요.
              </div>
              <div className="input_btn_container">
                <div className="input_btn_i">
                  <span>
                  토커
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                  리스너
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="btn_container">
        <div className="btn">
          입력 완료
        </div>
        </div>
      </div>
    )
}

export default InfoInputMore;