import { useState } from "react";
import { Link } from "react-router-dom";
//css
import '../../asset/css/components/modal/meetup_join_style.scss';
//components
import CheckBoxBtn from "../common/check/check_box_btn";

function ModalMuJoin(props) {

    let [hobbyArr, hobbyArrSet] = useState([{id : 'new_tech', title : '신문물'},
    {id : 'excercise', title : '운동'},
    {id : 'pet', title : '반려 동물'},
    {id : 'reading', title : '독서'},
    {id : 'self_development', title : '자기계발'},
    {id : 'foreign_lang', title : '외국어'},
    {id : 'hot_restaurant', title : '맛집'},
    {id : 'trip', title : '여행'},
    {id : 'music', title : '음악'},
    {id : 'consert', title : '공연'},
    {id : 'movie', title : '영화'},
    {id : 'coffee', title : '커피'},
    {id : 'hot_restaurant_01', title : '맛집'},
    {id : 'stock', title : '주식'},
    {id : 'investment', title : '투자'}])

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
                    <div className="time_week" id=''>
                        <input type="checkbox" id="m_11_i" />
                        <label htmlFor="m_11_i" id="m_11">
                            11:30
                        </label>
                    </div>
                    <div className="time_week" id=''>
                        <input type="checkbox" id="m_12_i" />
                        <label htmlFor="m_12_i" id="m_12">
                            12:30
                        </label>
                    </div>
                    <div className="time_week" id=''>
                        <input type="checkbox" id="t_11_i" />
                        <label htmlFor="t_11_i" id="t_11">
                            11:30
                        </label>
                    </div>
                    <div className="time_week" id=''>
                        <input type="checkbox" id="t_12_i" />
                        <label htmlFor="t_12_i" id="t_12">
                            12:30
                        </label>
                    </div>
                    <div className="time_week" id=''>
                        <input type="checkbox" id="w_11_i" />
                        <label htmlFor="w_11_i" id="w_11">
                            11:30
                        </label>
                    </div>
                    <div className="time_week" id=''>
                        <input type="checkbox" id="w_12_i" />
                        <label htmlFor="w_12_i" id="w_12">
                            12:30
                        </label>
                    </div>
                    <div className="time_week" id=''>
                        <input type="checkbox" id="th_11_i" />
                        <label htmlFor="th_11_i" id="th_11">
                            11:30
                        </label>
                    </div>
                    <div className="time_week" id=''>
                        <input type="checkbox" id="th_12_i" />
                        <label htmlFor="th_12_i" id="th_12">
                            12:30
                        </label>
                    </div>
                    <div className="time_week" id=''>
                        <input type="checkbox" id="f_11_i" />
                        <label htmlFor="f_11_i" id="f_11">
                            11:30
                        </label>
                    </div>
                    <div className="time_week" id=''>
                        <input type="checkbox" id="f_12_i" />
                        <label htmlFor="f_12_i" id="f_12">
                            12:30
                        </label>
                    </div>
                </div>
                <div className="content_title" id='mj_ct_01'>
                    관심사, 취미를 알려주세요
                </div>
                <div className="hobbies_wrapper">
                    {/* <div className="hobby_wrapper" id='mj_hw_00'>
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
                    </div> */}
                    <div className="hobby_wrapper">
                        {
                            hobbyArr.map((a,i)=>{
                                return(
                                    <CheckBoxBtn id={a.id} title={a.title}></CheckBoxBtn>
                                )
                            })
                        }
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