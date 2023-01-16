import { Link } from "react-router-dom";
import userPic from '../../img/pic.png';
import '../../css/pages/community/matching_style.scss';

function Matching(props){
    return(
        <>
                  <div id="meetup_matching">
            <div id="meetup_info_title">
              <div className="bg"></div>
              <div className="corp_info">
                <div className="info_wrapper">
                  <div className="title">
                    MARU Meet Up
                    <Link>마루밋업 더 자세히 알아보기</Link>
                  </div>
                  <div className="subtitle">
                    <span>39</span>주차 마루 밋업 진행합니다! 관심사, 직군을 기반으로 점심식사를 함께할 마루민을 매칭해드립니다. <br />
                    밋업 이후 바로 드실 수 있도록 커피도 제공하니 많은 참가 바랍니다!
                  </div>
                  <div className="info">
                    <ul>
                      <li>- 일자 : 2022. 10. 24(월) ~ 28(금)</li>
                      <li>- 신청기간 : 2022. 10. 17(월) ~ 19(수)</li>
                      <li>- 매칭결과 안내 : 2022. 10. 20(목)</li>
                    </ul>
                  </div>
                </div>
                <div className="btn_wrapper">
                  <div className="btn">
                    이벤트 취소하기
                  </div>
                </div>
              </div>
            </div>
            <div className="contents">
              <div className="step_wrapper">
                <div id="step_01">
                  <div className="text_wrapper">
                    <div className="title">
                      매칭 - step 1
                    </div>
                    <div className="desc">
                      사전등록 멤버들을 매칭하기에 앞서, 멤버들을 편성할 그룹을 생성하고 정보를 입력합니다. <br />
                      이번 이벤트의 참여인원은 <span>N</span>명이므로, 적정 그룹의 수는 <span>P</span>개 입니다.
                    </div>
                  </div>
                  <div className="group_wrapper">
                    <div className="group" id='group_00'>
                      <div className="title">
                        그룹 <span>A</span>
                      </div>
                      <select name="" id="day_00">
                        <option value="">일자</option>
                      </select>
                      <select name="" id="time_00">
                        <option value="">시간</option>
                      </select>
                    </div>
                    <div className="group" id='group_01'>
                      <div className="title">
                        그룹 <span>B</span>
                      </div>
                      <select name="" id="day_01">
                        <option value="">일자</option>
                      </select>
                      <select name="" id="time_01">
                        <option value="">시간</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div id="step_02">
                  <div className="text_container">
                    <div className="text_wrapper">
                      <div className="title">
                        매칭 - step 2
                      </div>
                      <div className="desc">
                        사전등록 멤버들이 입력한 매칭정보를 확인하고, 생성한 그룹에 편성합니다. <br />
                        각 멤버들을 클릭하시면 추가정보를 확인하실 수 있습니다.
                      </div>
                    </div>
                  </div>
                  <div className="category_container">
                    <div className="wrapper" id='cat_wrapper_00'>
                      <div className="category" id='cat_00'>
                        <div className="item">
                          이름
                        </div>
                        <div className="item">
                          소속
                        </div>
                        <div className="item">
                          직무
                        </div>
                      </div>
                      <div className="category">
                        그룹
                      </div>
                    </div>
                    <div className="wrapper">
                      <div className="category">
                        참가 가능시간
                      </div>
                    </div>
                    <div className="wrapper">
                      <div className="category">
                        관심사, 취미
                      </div>
                    </div>
                  </div>
                  <div className="user_container">
                    <div className="user">
                      <div className="pic_name_group_wrapper">
                        <div className="pic_name">
                          <img src={userPic} alt="" />
                          <div className="name">
                            TOMAS
                          </div>
                          <div className="sub">
                            UNISTY CEO
                          </div>
                        </div>
                        <div className="group">
                          <select name="" id="">
                            <option value="">그룹</option>
                          </select>
                        </div>
                      </div>
                      <div className="time_container">
                        <div className="time_wrapper">
                          <div className="time active">

                          </div>
                          <div className="time"></div>
                        </div>
                        <div className="time_wrapper">
                          <div className="time">

                          </div>
                          <div className="time active"></div>
                        </div>
                        <div className="time_wrapper">
                          <div className="time">

                          </div>
                          <div className="time active"></div>
                        </div>
                        <div className="time_wrapper">
                          <div className="time">

                          </div>
                          <div className="time"></div>
                        </div>
                        <div className="time_wrapper">
                          <div className="time active">

                          </div>
                          <div className="time"></div>
                        </div>
                      </div>
                      <div className="tag_container">
                        <div className="tag">
                          <div className="item">
                            신문물
                          </div>
                          <div className="item">
                            운동
                          </div>
                          <div className="item">
                            반려동물
                          </div>
                          <div className="item">
                            독서
                          </div>
                          <div className="item">
                            자기계발
                          </div>
                        </div>
                        <div className="tag">
                          <div className="item">
                            커피
                          </div>
                          <div className="item">
                            맛집
                          </div>
                          <div className="item">
                            주식
                          </div>
                          <div className="item">
                            투자
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="user">
                      <div className="pic_name_group_wrapper">
                        <div className="pic_name">
                          <img src={userPic} alt="" />
                          <div className="name">
                            TOMAS
                          </div>
                          <div className="sub">
                            UNISTY CEO
                          </div>
                        </div>
                        <div className="group">
                          <select name="" id="">
                            <option value="">그룹</option>
                          </select>
                        </div>
                      </div>
                      <div className="time_container">
                        <div className="time_wrapper">
                          <div className="time active">

                          </div>
                          <div className="time"></div>
                        </div>
                        <div className="time_wrapper">
                          <div className="time">

                          </div>
                          <div className="time active"></div>
                        </div>
                        <div className="time_wrapper">
                          <div className="time">

                          </div>
                          <div className="time active"></div>
                        </div>
                        <div className="time_wrapper">
                          <div className="time">

                          </div>
                          <div className="time"></div>
                        </div>
                        <div className="time_wrapper">
                          <div className="time active">

                          </div>
                          <div className="time"></div>
                        </div>
                      </div>
                      <div className="tag_container">
                        <div className="tag">
                          <div className="item">
                            신문물
                          </div>
                          <div className="item">
                            운동
                          </div>
                          <div className="item">
                            반려동물
                          </div>
                          <div className="item">
                            독서
                          </div>
                          <div className="item">
                            자기계발
                          </div>
                        </div>
                        <div className="tag">
                          <div className="item">
                            커피
                          </div>
                          <div className="item">
                            맛집
                          </div>
                          <div className="item">
                            주식
                          </div>
                          <div className="item">
                            투자
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="user">
                      <div className="pic_name_group_wrapper">
                        <div className="pic_name">
                          <img src={userPic} alt="" />
                          <div className="name">
                            TOMAS
                          </div>
                          <div className="sub">
                            UNISTY CEO
                          </div>
                        </div>
                        <div className="group">
                          <select name="" id="">
                            <option value="">그룹</option>
                          </select>
                        </div>
                      </div>
                      <div className="time_container">
                        <div className="time_wrapper">
                          <div className="time active">

                          </div>
                          <div className="time"></div>
                        </div>
                        <div className="time_wrapper">
                          <div className="time">

                          </div>
                          <div className="time active"></div>
                        </div>
                        <div className="time_wrapper">
                          <div className="time">

                          </div>
                          <div className="time active"></div>
                        </div>
                        <div className="time_wrapper">
                          <div className="time">

                          </div>
                          <div className="time"></div>
                        </div>
                        <div className="time_wrapper">
                          <div className="time active">

                          </div>
                          <div className="time"></div>
                        </div>
                      </div>
                      <div className="tag_container">
                        <div className="tag">
                          <div className="item">
                            신문물
                          </div>
                          <div className="item">
                            운동
                          </div>
                          <div className="item">
                            반려동물
                          </div>
                          <div className="item">
                            독서
                          </div>
                          <div className="item">
                            자기계발
                          </div>
                        </div>
                        <div className="tag">
                          <div className="item">
                            커피
                          </div>
                          <div className="item">
                            맛집
                          </div>
                          <div className="item">
                            주식
                          </div>
                          <div className="item">
                            투자
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="ps_msg">
                  <div className="text_wrapper">
                    <div className="title">
                      추가메시지
                    </div>
                    <div className="desc">
                      매칭 결과와 함께 전달할 메시지입니다.
                    </div>
                  </div>
                  <div className="msg_wrapper">
                    <div className="msg" id='common_msg'>
                      <div className="title">
                        공통 메시지
                      </div>
                      <input type="text" />
                    </div>
                    <div className="msg" id='no_matching_msg'>
                      <div className="title">
                        매칭이 안된 멤버에게 전달하는 안내 메시지
                      </div>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="btn_wrapper">
                  <div className="btn">
                    매칭 확정하기
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="modal" id='matching_confirm'>
        <div className="modal_bg"></div>
        <div className="contents">
          <div className="title">
            매칭 확정 안내
          </div>
          <div className="desc">
            <div className="text">
              아래와 같은 이벤트 <span>2</span> 개를 생성합니다.
            </div>
            <div className="text">
              <ul>
                <li>이벤트명 : MARU Meet up - 그룹 A</li>
                <li>일자 : 2022. 10. 24(월) ~ 28(금)</li>
                <li>참가자 : 김선생, 이작가, 박대표</li>
              </ul>
            </div>
            <div className="text">
              <ul>
                <li>이벤트명 : MARU Meet up - 그룹 B</li>
                <li>일자 : 2022. 10. 24(월) ~ 28(금)</li>
                <li>참가자 : 윤부장, 최과장, 한이사</li>
              </ul>
            </div>
            <div className="text">
              <li>추가 메시지 : 관심사 기반으로 이벤트 그룹 매칭을 완료했습니다.</li>
            </div>
            <div className="text yellow">
              * 이벤트 정보 수신동의를 한 멤버들에게 푸시 알림이 전송됩니다.
            </div>
          </div>
          <div className="btn_wrapper">
            <div className="btn" id='btn_re_check'>
              한번 더 검토하기
            </div>
            <div className="btn" id='matching_confirm'>
              확인
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id='matching_result'>
        <div className="modal_bg"></div>
        <div className="contents">
          <div className="title">
            매칭 결과 안내
          </div>
          <div className="desc">
            <div className="text">
              매칭이 안된 멤버에게 아래와 같은 안내 메시지를 전달합니다.
            </div>
            <div className="text">
              <li>안내 메시지 : 비슷한 시간대, 관심사로 매칭할 수 있는 멤버가 없어 매칭하지 못했습니다 .아쉬운 소식을 전해드려 죄송합니다.</li>
            </div>
            <div className="text yellow">
              * 이벤트 정보 수신동의를 한 멤버들에게 푸시알림이 전송됩니다.
            </div>
          </div>
          <div className="btn_wrapper">
            <div className="btn" id='btn_re_check'>
              한번 더 검토하기
            </div>
            <div className="btn" id='matching_confirm'>
              확인
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Matching;