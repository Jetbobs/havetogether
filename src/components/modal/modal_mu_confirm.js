import { useState } from "react";
//css
import '../../asset/css/components/modal/meetup_confirm_style.scss';

function ModalMuConfirm(props) {

    let [modalJoin, modalJoinSet] = useState(false);

    return (
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
            <div className="btn" onClick={()=>{props.modalConfirmSet(false); props.modalJoinSet(true)}}>
              수정하기
            </div>
            <div className="btn" onClick={()=>{props.modalConfirmSet(false)}}>
              확인
            </div>
          </div>
        </div>
      </div>
    )
}

export default ModalMuConfirm;