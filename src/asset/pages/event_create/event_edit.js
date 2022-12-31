import {Link, useNavigate} from 'react-router-dom';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser,faEllipsisVertical,faArrowRight} from '@fortawesome/free-solid-svg-icons';

function EventEdit(props){
    return(
        <>
                      <div id="event_edit">
            <div className="header" id='header'>
              <div className="container">
                <div className="title">
                  이벤트 정보 수정
                </div>
                <div className="subtitle">
                이벤트 일자, 참가자 정원 이외의 정보를 수정하실 수 있습니다. 
                </div>
              </div>
              <Link>이벤트 만드는 방법 자세히 보기 <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
            </div>
            <div className="body" id='body'>
              <div className="contents_container" id='c_c_00'>
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
                  <div className="text">
                    *최소사이즈 776·180px
                  </div>
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
              <div className="contents_container" id='c_c_01'>
                <div className="title_wrapper">
                <div className="title">
                사전 등록 정보
                <div className="toggle">
                  <label htmlFor="">
                  <input role="switch" type="checkbox" />
                  </label>
                </div>
              </div>
              <div className="subtitle">
                모집기간과 참가자 정원을 추가로 입력하시면, 이벤트를 시작하기 전에 참가 희망자를 모집하고 팀 매칭을 진행할 수 있습니다.
              </div>
                </div>
              <div className="contents">
                <div className="input_container">
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    모집기간
                  </div>
                  <div className="desc">

                  </div>
                  </div>
                  <input type="text" />
                </div>
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    팀 매칭 결과 안내 일자
                  </div>
                  <div className="desc">

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
                    
                  </div>
                  </div>
                  <input type="text" />
                </div>
                </div>
              </div>
              </div>
              <div className="contents_container" id='c_c_02'>
                <div className="title_wrapper">
                <div className="title">
                후기 정보
                <div className="toggle">
                  <label htmlFor="">
                  <input role="switch" type="checkbox" />
                  </label>
                </div>
              </div>
              <div className="subtitle">
                이벤트가 종료된 이후 참가자에게 후기를 요청 할 수 있씁니다. 필요한 정보를 입력해주세요.
              </div>
                </div>
              <div className="contents">
                <div className="input_container">
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    후기 작성 안내글
                  </div>
                  <div className="desc">

                  </div>
                  </div>
                  <input type="text" />
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
                    작성 기한
                  </div>
                  <div className="desc">
                    
                  </div>
                  </div>
                  <input type="text" />
                </div>
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    수집할 데이터
                  </div>
                  <div className="desc">
                    
                  </div>
                  </div>
                  <div className="checkbox_container">
                    <div className="checkbox">
                      <input type="checkbox" id='check_00' />
                      <label htmlFor="check_00"></label>
                      <div className="text_wrapper">
                      <div className="text">
                        참가 목적 <strong>/ 텍스트 박스(최대 500자)</strong>
                      </div>
                      </div>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id='check_01' />
                      <label htmlFor="check_01"></label>
                      <div className="text_wrapper">
                      <div className="text">
                        참가 후기 <strong>/ 텍스트 박스(최대 500자)</strong>
                      </div>
                      </div>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id='check_02' />
                      <label htmlFor="check_02"></label>
                      <div className="text_wrapper">
                      <div className="text">
                        한줄평 <strong>/ 텍스트 박스(최대 100자)</strong>
                      </div>
                      </div>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id='check_03' />
                      <label htmlFor="check_03"></label>
                      <div className="text_wrapper">
                      <div className="text">
                        점수 <strong>/ 10점 만점</strong>
                      </div>
                      </div>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id='check_04' />
                      <label htmlFor="check_04"></label>
                      <div className="text_wrapper">
                      <div className="text">
                        인증샷 <strong>/ 이미지 파일 업로드 기능</strong>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              </div>
              <div className="btn_container">
              <div className="btn_wrapper">
                <div className="btn" id='btn_complete'>
                  수정 완료
                </div>
              </div>
              <div className="btn_wrapper"  id='btn_enter_complete'>
                <div className="btn">
                  입력 완료
                </div>
              </div>
              <div className="btn_wrapper">
              <div className="btn" id='btn_cancel'>
                  이벤트 취소하기
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="modal" id='event_edit_confirm'>
            <div className="modal_bg">
            </div>
            <div className="contents">
              <div className="title">
                이벤트 정보 수정
              </div>
              <div className="desc">
                정보 수정을 완료할까요? <br />
                 완료 후 이벤트 상세보기 페이지로 이동합니다.
                <div className="time">
                
              </div>
              </div>
              <div className="btn_wrapper">
                <div className="btn" id='btn_continue'>수정 계속하기</div>
                <div className="btn" id='btn_complete'>수정 완료</div>
              </div>
            </div>
          </div>
        </>
    )
}

export default EventEdit;