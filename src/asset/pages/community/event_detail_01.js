import { Link, useNavigate } from "react-router-dom";
import hostPic from '../../img/host_img00.png';
import userPic from '../../img/pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function EventDetail01(props){
  let navigate = useNavigate();
    return(
        <>
      <div id="event_detail">
        <div className="detail">
          <div className="text">
            이벤트 상세정보
          </div>
          <div className="text" onClick={()=>{navigate()}}>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> 이벤트 목록
          </div>
        </div>
          <div id="info_title">
          <div className="container">
            <div className="title">
              치맥하실 야근러 모집!!
              <div className="look">
          <Link>운영정책 살펴보기</Link>
          </div>
            </div>
            <div className="subtitle">
              야근합니다! 신난다 야호 <br />
              루프탑에서 치킨 함께 드실 분 구합니다! 청년치킨에서 픽업할 거에요!!!
            </div>
            <div className="time">
              2022. 9. 30(금) 오후 7시
            </div>
          </div>
          <div className="btn">
            참가하기<strong>D-day</strong>
          </div>
        </div>
        <div className="contents">
        <div className="info_container" id='host_info'>
                  <div className="title">
                    개최자 정보
                    <span></span>
                  </div>
                  <div className="card_container">
                    <div className="card">
                      <div className="pic_name">
                        <div className="pic">
                          <img src={userPic} alt="" />
                        </div>
                        <div className="name_wrapper">
                          <div className="name">
                            TOMAS
                          </div>
                          <div className="sub">
                            UNISTY CEO
                          </div>
                        </div>
                      </div>
                      <div className="intro">
                        IT 커뮤니티와 IT 기업을 연결하는 일을 하고 있습니다.
                      </div>
                      <div className="tag">
                        <div className="item">
                          <span>기획</span>
                        </div>
                        <div className="item">
                          <span>브랜딩</span>
                        </div>
                        <div className="item">
                          <span>서비스 디자인</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="info_container" id='participant_info'>
                  <div className="title">
                    참가자 정보
                    <span>가장 먼저 참가신청 해보세요!</span>
                  </div>
                  <div className="card_container">
                    <div className="card">
                      <div className="pic_name">
                        <div className="pic">
                          <img src={hostPic} alt="" />
                        </div>
                        <div className="name_wrapper">
                          <div className="name">
                            마루요정
                          </div>
                          <div className="sub">
                            ASAN NANUM Foundation
                          </div>
                        </div>
                      </div>
                      <div className="intro">
                        마루민들의 행복과 너강을 넘어 네트워킹을 만들어가는 마루요정이에요!
                      </div>
                      <div className="tag">
                        <div className="item">
                          <span>아산</span>
                        </div>
                        <div className="item">
                          <span>마루</span>
                        </div>
                        <div className="item">
                          <span>커뮤니티</span>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="pic_name">
                        <div className="pic">
                          <img src={hostPic} alt="" />
                        </div>
                        <div className="name_wrapper">
                          <div className="name">
                            마루요정
                          </div>
                          <div className="sub">
                            ASAN NANUM Foundation
                          </div>
                        </div>
                      </div>
                      <div className="intro">
                        마루민들의 행복과 너강을 넘어 네트워킹을 만들어가는 마루요정이에요!
                      </div>
                      <div className="tag">
                        <div className="item">
                          <span>아산</span>
                        </div>
                        <div className="item">
                          <span>마루</span>
                        </div>
                        <div className="item">
                          <span>커뮤니티</span>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="pic_name">
                        <div className="pic">
                          <img src={hostPic} alt="" />
                        </div>
                        <div className="name_wrapper">
                          <div className="name">
                            마루요정
                          </div>
                          <div className="sub">
                            ASAN NANUM Foundation
                          </div>
                        </div>
                      </div>
                      <div className="intro">
                        마루민들의 행복과 너강을 넘어 네트워킹을 만들어가는 마루요정이에요!
                      </div>
                      <div className="tag">
                        <div className="item">
                          <span>아산</span>
                        </div>
                        <div className="item">
                          <span>마루</span>
                        </div>
                        <div className="item">
                          <span>커뮤니티</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
        </div>
          </div>
          <div className="modal" id='event_join'>
            <div className="modal_bg">
            </div>
            <div className="contents">
              <div className="title">
                치맥하실 야근러 모집!!
              </div>
              <div className="desc">
                참가 신청을 완료했습니다. 일정을 확인해주세요!
                <div className="time">
                *2022.9.30(금) 오후7시
              </div>
              </div>
              <div className="btn_wrapper">
                <div className="btn" id='btn_confirm'>확인</div>
              </div>
            </div>
          </div>
          <div className="modal" id='event_cancel'>
            <div className="modal_bg">
            </div>
            <div className="contents">
              <div className="title">
                MARU Meet Up
              </div>
              <div className="desc">
                참가를 취소하시겠습니까? <br />
                (마루민)님을 기다리고 있는데, 아쉬워요!
                <div className="time">
                
              </div>
              </div>
              <div className="btn_wrapper">
                <div className="btn" id='btn_not_join'>참가 취소하기</div>
              </div>
            </div>
          </div>
          <div className="modal" id='event_cancel_01'>
            <div className="modal_bg">
            </div>
            <div className="contents">
              <div className="title">
                이벤트 취소
              </div>
              <div className="desc">
                정말로 이벤트를 취소할까요? 확인을 선택하시면 이벤트가 취소되며, <br />
                 참가신청한 멤버들에게 푸시 알림이 전송됩니다.
                <div className="time">
                
              </div>
              </div>
              <div className="btn_wrapper">
                <div className="btn" id='btn_no'>아니요</div>
                <div className="btn" id='btn_yes'>확인</div>
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

export default EventDetail01;