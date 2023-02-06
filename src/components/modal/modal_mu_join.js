import { useState } from "react";
import { Link } from "react-router-dom";
//css
import '../../asset/css/components/modal/meetup_join_style.scss';

function ModalMuJoin(props) {

    console.log(props.modalConfirmSet)
    // let [modalJoin, modalJoinSet] = useState(false);

    return (
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
                    {props.btn.map((a, i) => {

                        return (
                            <div className="btn" onClick={props.func[i]}>
                                <div className="btn" id={a.id}>
                                    {a.name}
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="btn" id='btn_cancel' onClick={()=>{props.modalJoinSet(false)}}>취소</div>
                    <div className="btn" id='btn_join' onClick={()=>{props.modalConfirmSet(true); props.modalJoinSet(false)}}>참가하기</div> */}
                </div>
            </div>
        </div>
    )
}

export default ModalMuJoin;