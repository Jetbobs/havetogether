import {Link, useNavigate} from 'react-router-dom';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser,faEllipsisVertical,faArrowRight} from '@fortawesome/free-solid-svg-icons';


function EventCreate(props){
    return(
        <>
                  <div id="event_create">
            <div className="header" id='header'>
              <div className="container">
                <div className="title">
                  이벤트 만들기
                </div>
                <div className="subtitle">
                네트워킹・고민상담・취미 모임・동아리 등의 멤버들과 함께 할 수 있는 이벤트를 만들어보세요. 
                </div>
              </div>
              <Link>이벤트 만드는 방법 자세히 보기 <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
            </div>
            <div className="body" id='body'>
              <div className="contents_container">
              <div className="title">
                이벤트 필수 정보
              </div>
              <div className="contents">
                <div className="input_container">
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    행사명
                  </div>
                  <div className="desc">

                  </div>
                  </div>
                  <input type="text" />
                </div>
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    커버 이미지
                  </div>
                  <div className="desc">

                  </div>
                  </div>
                  <div className="input_wrapper" id='input_upload'>
                  <input type="file" id='upload' />
                  <label htmlFor="upload"><span>Upload</span></label>
                  </div>
                  
                </div>
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    간단한 이벤트 소개
                  </div>
                  <div className="desc">

                  </div>
                  </div>
                  <div className="input_wrapper" id='input_textarea'>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                  
                </div>
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    관련 URL
                  </div>
                  <div className="desc">

                  </div>
                  </div>
                  <input type="text" />
                </div>
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    이벤트 일자
                  </div>
                  <div className="desc">
                    * 이벤트 만들기 이후에는 수정 불가능
                  </div>
                  </div>
                  <input type="text" />
                </div>
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    참가자 정원
                  </div>
                  <div className="desc">
                      *이벤트 만들기 이후에는 수정 불가능
                  </div>
                  </div>
                  <input type="text" />
                </div>
                </div>
              </div>
              </div>
              <div className="btn_wrapper">
                <div className="btn">
                  입력 완료
                </div>
              </div>
            </div>
          </div>
                      <div className="modal" id='event_create_confirm'>
            <div className="modal_bg"></div>
            <div className="contents">
              <div className="title">
                이벤트 만들기 최종확인
              </div>
              <div className="desc">
                <div className="text">
                  아래의 정보로 이벤트를 생성할까요?
                </div>
                <div className="text">
                  <ul>
                    <li>이벤트명 : 치맥하실 야근러 모집!!</li>
                    <li>일자 : 2022. 9. 30(금) 오후 7시</li>
                    <li>참가자 정원 : 8명</li>
                  </ul>
                </div>
                <div className="text yellow">
                  * 이벤트 정보 수신동의를 한 멤버들에게 푸시 알림이 전송됩니다.
                </div>
              </div>
              <div className="btn_wrapper">
                <div className="btn" id='btn_re_check'>
                  한번 더 검토하기
                </div>
                <div className="btn" id='btn_confirm'>
                  확인
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default EventCreate;