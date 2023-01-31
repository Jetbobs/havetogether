import hostPic from '../../img/host_img00.png';
import userPic from '../../img/pic.png';
import userPic01 from '../../img/pic01.png';
import userPic02 from '../../img/pic02.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
//css
import '../../css/pages/community/event_detail_00_style.scss';
//components
import BgWBtn from '../../../components/bg/bg_w_btn';
import { useState } from 'react';
import UserCard from '../../../components/common/card/user_card';
//data
import bgWBtnData from '../../data/bg/bg_w_btn_data';
import userCardData from '../../data/card/user_card_data';



function EventDetail00(props) {

  let navigate = useNavigate();
  let [bg, bgSet] = useState(bgWBtnData);
  let [user, userSet] = useState(userCardData);

  return (
    <>
      <div id="meetup_detail">
        <div className="detail">
          <div className="text">
            이벤트 상세정보
          </div>
          <Link to='/community/event_info'><div className="text" onClick={() => { navigate() }}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> 이벤트 목록
          </div></Link>
        </div>
        <BgWBtn bg={bg} i={0}></BgWBtn>
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
              <UserCard user={user} i={0}></UserCard>
            </div>
          </div>
          <div className="info_container" id='participant_info'>
            <div className="title">
              참가자 정보
              <span>가장 먼저 참가신청 해보세요!</span>
            </div>
            <div className="card_container">
              <UserCard user={user} i={1}></UserCard>
              <UserCard user={user} i={2}></UserCard>
              <UserCard user={user} i={3}></UserCard>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id='meetup_join'>
        <div className="modal_bg">
        </div>
        <div className="contents">
          <div className="title">
            MARU Meet Up
          </div>
          <div className="time">
            <div className="period">
              참가 신청기간 : 2022. 10. 17(월) ~19(수)
            </div>
            <div className="result">
              매칭결과 안내 : 2022. 10. 20(목)
            </div>
          </div>
          <div className="line">

          </div>
          <div className="desc">
            입력하신 관심사 정보를 기반으로 매칭을 진행합니다.
          </div>
          <div className="content_title" id='mj_ct_00'>
            만나고 싶은 시간을 알려주세요.
          </div>
          <div className="day_week_wrapper">
            <div className="day_week" id='monday'>
              MM.DD
              <span>월요일</span>
            </div>
            <div className="day_week" id='tuesday'>
              MM.DD
              <span>화요일</span>
            </div>
            <div className="day_week" id='wednesday'>
              MM.DD
              <span>수요일</span>
            </div>
            <div className="day_week" id='thursday'>
              MM.DD
              <span>목요일</span>
            </div>
            <div className="day_week" id='friday'>
              MM.DD
              <span>금요일</span>
            </div>
          </div>
          <div className="time_week_wrapper">
            <div className="time_week" id='m_11'>
              11:30
            </div>
            <div className="time_week" id='m_12'>
              12:00
            </div>
            <div className="time_week" id='t_11'>
              11:30
            </div>
            <div className="time_week" id='t_12'>
              12:00
            </div>
            <div className="time_week" id='w_11'>
              11:30
            </div>
            <div className="time_week" id='w_12'>
              12:00
            </div>
            <div className="time_week" id='th_11'>
              11:30
            </div>
            <div className="time_week" id='th_12'>
              12:00
            </div>
            <div className="time_week" id='f_11'>
              11:30
            </div>
            <div className="time_week" id='f_12'>
              12:00
            </div>
          </div>
          <div className="content_title" id='mj_ct_01'>
            관심사, 취미를 알려주세요
          </div>
          <div className="hobbies_wrapper">
            <div className="hobby_wrapper" id='mj_hw_00'>
              <span className="hobby">
                신문물
              </span>
              <span className="hobby">
                운동
              </span>
              <span className="hobby">
                반려동물
              </span>
              <span className="hobby">
                독서
              </span>
              <span className="hobby">
                자기계발
              </span>
            </div>
            <div className="hobby_wrapper" id='mj_hw_01'>
              <span className="hobby">
                외국어
              </span>
              <span className="hobby">
                맛집
              </span>
              <span className="hobby">
                여행
              </span>
              <span className="hobby">
                음악
              </span>
              <span className="hobby">
                공연
              </span>
              <span className="hobby">
                영화
              </span>
            </div>
            <div className="hobby_wrapper" id='mj_hw_02'>
              <span className="hobby">
                커피
              </span>
              <span className="hobby">
                맛집
              </span>
              <span className="hobby">
                주식
              </span>
              <span className="hobby">
                투자
              </span>
            </div>
          </div>
          <div className="guide">
            회원가입시 입력하신 관심사를 표기했습니다. <br />
            변경하신 정보는 저장되며 다음 참가신청시에 표기됩니다.
          </div>
          <div className="btn_wrapper">
            <div className="btn" id='btn_cancel'>취소</div>
            <div className="btn" id='btn_join'>참가하기</div>
          </div>
        </div>
      </div>
      <div className="modal" id='meetup_confirm'>
        <div className="modal_bg"></div>
        <div className="contents">
          <div className="title">
            MARU Meet Up
          </div>
          <div className="desc">
            참가신청을 완료했습니다. 매칭이 완료되면 안내드리겠습니다. <br />
            * 매칭결과 안내 : <span>2022. 10. 20(목)</span>
          </div>
          <div className="line"></div>
          <div className="content_title" id='mc_ct_00'>
            선택하신 요일, 시간
          </div>
          <div className="day_week_wrapper">
            <div className="day_week" id='monday'>
              MM.DD
              <span>월요일</span>
            </div>
            <div className="day_week" id='tuesday'>
              MM.DD
              <span>화요일</span>
            </div>
            <div className="day_week" id='wednesday'>
              MM.DD
              <span>수요일</span>
            </div>
            <div className="day_week" id='thursday'>
              MM.DD
              <span>목요일</span>
            </div>
            <div className="day_week" id='friday'>
              MM.DD
              <span>금요일</span>
            </div>
          </div>
          <div className="time_week_wrapper">
            <div className="time_week active" id='m_11'>
              11:30
            </div>
            <div className="time_week" id='m_12'>
              12:00
            </div>
            <div className="time_week" id='t_11'>
              11:30
            </div>
            <div className="time_week" id='t_12'>
              12:00
            </div>
            <div className="time_week" id='w_11'>
              11:30
            </div>
            <div className="time_week active" id='w_12'>
              12:00
            </div>
            <div className="time_week" id='th_11'>
              11:30
            </div>
            <div className="time_week" id='th_12'>
              12:00
            </div>
            <div className="time_week" id='f_11'>
              11:30
            </div>
            <div className="time_week" id='f_12'>
              12:00
            </div>
          </div>
          <div className="content_title" id='mc_ct_01'>
            선택하신 관심사, 취미
          </div>
          <div className="hobbies_wrapper">
            <div className="hobby_wrapper" id='mc_hw_00'>
              <span className="hobby">
                운동
              </span>
              <span className="hobby">
                음악
              </span>
              <span className="hobby">
                자기계발
              </span>
              <span className="hobby">
                맛집
              </span>
            </div>
          </div>
          <div className="btn_wrapper">
            <div className="btn">
              수정하기
            </div>
            <div className="btn">
              확인
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id='meetup_cancel'>
        <div className="modal_bg"></div>
        <div className="contents">
          <div className="title">
            MARU Meet Up
          </div>
          <div className="desc">
            참가를 취소하시겠습니까? <br />
            <span>(마루민)</span>님을 기다리고 있는데, 아쉬워요!
          </div>
          <div className="btn_wrapper">
            <div className="btn" id='btn_join_cancel'>
              참가 취소하기
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id='meetup_fail'>
        <div className="modal_bg"></div>
        <div className="contents">
          <div className="title">
            매칭 결과 안내
          </div>
          <div className="desc">
            비슷한 시간대, 관심사로 매칭할 수 있는 멤버가 없어 매칭하지 못했습니다. <br />
            아쉬운 소식을 전해드려 죄송합니다
          </div>
          <div className="btn_wrapper">
            <div className="btn" id='btn_join_cancel'>
              확인
            </div>
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
export default EventDetail00;