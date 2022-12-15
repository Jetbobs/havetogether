import {Link, useNavigate} from 'react-router-dom';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser,faEllipsisVertical,faArrowRight} from '@fortawesome/free-solid-svg-icons';


function InfoInput(){
    return(
        <div id="info_input">
        <div className="header">
          <div className="container">
          <div className="title">
            기본 회원정보 입력
          </div>
          <div className="subtitle">
            회원가입에 필요한 정보를 입력해주세요!
          </div>
          </div>
          <Link>이용약관 살펴보기 <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
        </div>
        <div className="contents">
          <div className="title">
            기본 정보
          </div>
          <div className="input_container">
          <div className="input">
              <div className="input_title">
                  <p>이름 *</p>
                  <div className="input_desc">
                    
                  </div>
              </div>
              <input type="text" id='my_name' />
            </div>
          <div className="input" id='my_picture'>
              <div className="input_title">
                <p>내 사진</p>
              </div>
              <div className="btn_upload">
                  <input type="file" id='upload'/>
                  <label htmlFor="upload">Upload</label>
                  <div className="input_desc">
                    *최소사이즈 200 · 200px
                  </div>
                </div>
            </div>
          <div className="input" id='belong'>
              <div className="input_title">
                  <p>소속</p>
                  <div className="input_desc">
                    * 기업, 기관 이름을 입력해주세요.
                  </div>
              </div>
              <input type="text" />
            </div>
          <div className="input" id='work_location'>
              <div className="input_title">
                  <p>근무자 위치</p>
                  <div className="input_desc">
                    * 매칭시에만 활용합니다.
                  </div>
              </div>
              <input type="text" />
            </div>
          <div className="input" id='work_position'>
              <div className="input_title">
                  <p>직무</p>
                  <div className="input_desc">
                  </div>
              </div>
              <input type="text" />
            </div>
          <div className="input" id='phone'>
              <div className="input_title">
                  <p>연락처</p>
                  <div className="input_desc">
                  * 입력하신 연락처로 푸시 알림[알림톡]을 전송합니다.
                  </div>
              </div>
              <input type="text" />
            </div>
            <div className="input" id='introduce'>
              <div className="input_title">
                  <p>자기소개</p>
                  <div className="input_desc">
                  
                  </div>
              </div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          <div className="input" id='url'>
              <div className="input_title">
                  <p>소개 URL</p>
                  <div className="input_desc">
                  
                  </div>
              </div>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="contents">
          <div className="title">
            계정 정보
          </div>
          <div className="input_container">
          <div className="input" id='u_email'>
              <div className="input_title">
                  <p>이메일</p>
                  <div className="input_desc">
                    * 입력하신 이메일 계정이 ID가 됩니다.
                  </div>
              </div>
              <input type="text" />
            </div>
            <div className="input" id='u_pw'>
              <div className="input_title">
                  <p>비밀번호 변경</p>
                  <div className="input_desc">
                    
                  </div>
              </div>
              <input type="text" />
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

export default InfoInput;