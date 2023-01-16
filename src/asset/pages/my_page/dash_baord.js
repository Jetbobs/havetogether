import { Link, useNavigate } from "react-router-dom";
import userPic from '../../img/pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../css/pages/my_page/dash_board_style.scss';

function DashBoard(props){
    return(
        <>
                      <div id="dash_board">
            <div className="header" id='header'>
              <div className="container">
                <div className="title">
                  TOMAS님의 대시보드
                </div>
                <div className="subtitle">
                  최근 <span>6</span>명의 마루민들을 만나셨네요! 앞으로도 많은 활동 부탁드려요!
                </div>
              </div>
              <Link><FontAwesomeIcon></FontAwesomeIcon></Link>
            </div>
            <div className="body" id='body'>
              <div className="contents_container">
                <div className="dash_board_container">
                  <div className="contents" id='profile'>
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
                    <div className="line"></div>
                    <div className="contact">
                      <div className="contact_i">
                        이메일: hq@UNISTY.center
                      </div>
                      <div className="contact_i">
                        연락처 : 010-2731-0705
                      </div>
                      <div className="contact_i">
                        소속단체
                      </div>
                      <div className="belong_group">
                        <span className="b_g_i" id='maru180'>
                          MARU 180
                        </span>
                        <span className="b_g_i" id='ict_coc'>
                          ICT COC
                        </span>
                        <span className="b_g_i" id='d_camp'>
                          D.camp
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="contents" id='setting_info'>
                    <div className="title">
                      설정 정보
                    </div>
                    <div className="info" id='time'>
                      <div className="title">
                        선택하신 요일, 시간
                      </div>
                      <div className="day_week_wrapper">
                        <div className="day_week" id='monday'>
                          <div className="text_wrapper">
                            MM.DD <br /> 월요일
                          </div>
                            <div className="item active">
                              11:30
                            </div>
                            <div className="item">
                              12:00
                            </div>
                        </div>
                        <div className="day_week" id='tuesday'>
                          <div className="text_wrapper">
                            MM.DD <br /> 월요일
                          </div>
                            <div className="item active">
                              11:30
                            </div>
                            <div className="item">
                              12:00
                            </div>
                        </div>
                        <div className="day_week" id='wednesday'>
                          <div className="text_wrapper">
                            MM.DD <br /> 월요일
                          </div>
                            <div className="item active">
                              11:30
                            </div>
                            <div className="item">
                              12:00
                            </div>
                        </div>
                        <div className="day_week" id='thursday'>
                          <div className="text_wrapper">
                            MM.DD <br /> 월요일
                          </div>
                            <div className="item active">
                              11:30
                            </div>
                            <div className="item">
                              12:00
                            </div>
                        </div>
                        <div className="day_week" id='friday'>
                          <div className="text_wrapper">
                            MM.DD <br /> 월요일
                          </div>
                            <div className="item active">
                              11:30
                            </div>
                            <div className="item">
                              12:00
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="info" id='hobby'>
                      <div className="title">
                        선택하신 관심사, 취미
                      </div>
                      <div className="item_wrapper">
                        <div className="item active">
                          운동
                        </div>
                        <div className="item active">
                          음악
                        </div>
                        <div className="item active">
                          자기계발
                        </div>
                        <div className="item active">
                          맛집
                        </div>
                      </div>
                    </div>
                    <div className="update_wrapper">
                      <div className="text" id='update'>
                        *<span>2022. 10. 20(목)</span> 업데이트
                      </div>
                      <div className="text" id='edit'>
                        수정하기
                      </div>
                    </div>
                  </div>
                  <div className="contents" id='current_join'>
                    <div className="title">
                      참가 현황
                    </div>
                    <div className="item_wrapper">
                      <div className="item" id='coming_event'>
                        <div className="title">
                          참가예정 이벤트
                        </div>
                        <div className="desc orange">
                          NN개
                        </div>
                      </div>
                      <div className="item" id='complete_event'>
                        <div className="title">
                          참가완료 이벤트
                        </div>
                        <div className="desc">
                          NN개
                        </div>
                      </div>
                      <div className="item" id='review'>
                        <div className="title">
                          작성한 후기
                        </div>
                        <div className="desc orange">
                          NN개
                        </div>
                      </div>
                      <div className="item" id='reward'>
                        <div className="title">
                          참가 리워드
                        </div>
                        <div className="desc gray">
                          NN개
                        </div>
                      </div>
                      <div className="item" id='met_ppl'>
                        <div className="title">
                          만난 사람들
                        </div>
                        <div className="desc">
                          NN개
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <div className="event_container">
              <div className="title">
                참가예정 이벤트 <span>NN개</span>
              </div>
              <div className="card_container">
                <div className="card">
                  <div className="card_wrapper">
                    <div className="title">
                      MARU Meet Up
                    </div>
                    <div className="desc orange">
                      오늘
                    </div>
                  </div>
                  <div className="card_wrapper">
                    <div className="date">
                      2022. 10. 3(월) ~7(금)
                    </div>
                    <div className="writer">
                    마루 요정 🧚
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card_wrapper">
                    <div className="title">
                      치맥하실 야근러 모집!!
                    </div>
                    <div className="desc orange">
                      오늘
                    </div>
                  </div>
                  <div className="card_wrapper">
                    <div className="date">
                      2022. 9. 30(금) 오후 7시
                    </div>
                    <div className="writer">
                    UNISTY TOMAS
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="event_container">
              <div className="title">
                참가완료 이벤트 <span>NN개</span>
              </div>
              <div className="card_container">
                <div className="card">
                  <div className="card_wrapper">
                    <div className="title">
                      개발 스터디원 모집
                    </div>
                    <div className="desc purple">
                      후기 작성 필요
                    </div>
                  </div>
                  <div className="card_wrapper">
                    <div className="date">
                      2022. 10. 3(월) ~7(금)
                    </div>
                    <div className="writer">
                    마루 요정 🧚
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card_wrapper">
                    <div className="title">
                      개발 스터디원 모집
                    </div>
                    <div className="desc purple">
                      후기 작성 필요
                    </div>
                  </div>
                  <div className="card_wrapper">
                    <div className="date">
                      2022. 10. 3(월) ~7(금)
                    </div>
                    <div className="writer">
                    마루 요정 🧚
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card_wrapper">
                    <div className="title">
                      치맥하실 야근러 모집!!
                    </div>
                    <div className="desc green">
                      리워드 사용하기
                    </div>
                  </div>
                  <div className="card_wrapper">
                    <div className="date">
                      2022. 9. 30(금) 오후 7시
                    </div>
                    <div className="writer">
                    UNISTY TOMAS
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card_wrapper">
                    <div className="title">
                      치맥하실 야근러 모집!!
                    </div>
                    <div className="desc green">
                      리워드 사용하기
                    </div>
                  </div>
                  <div className="card_wrapper">
                    <div className="date">
                      2022. 9. 30(금) 오후 7시
                    </div>
                    <div className="writer">
                    UNISTY TOMAS
                    </div>
                  </div>
                </div>
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
        </>
    )
}

export default DashBoard;