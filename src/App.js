import './App.scss';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import logo from './asset/img/ht_logo_header.png';
import GlobalStyles from './components/GlobalStyles';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
//login
import LoginMain from './asset/pages/login/main';
import Terms from './asset/pages/login/terms';
import InfoInput from './asset/pages/login/info_input';
import InfoInputMore from './asset/pages/login/info_input_more';
import MyInfo from './asset/pages/login/my_info';
//community
import CommuInfo from './asset/pages/community/commu_info';
import CommuDetail from './asset/pages/community/commu_detail';
import EventInfo from './asset/pages/community/event_info';
import MemberInfo from './asset/pages/community/member_info';
//pic
import userPic from './asset/img/pic.png';
import groupImg from './asset/img/group_img_00.png';
import hostPic from './asset/img/host_img00.png';
//bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import ResponsiveExample from './asset/pages/test';
import AutoLayoutExample from './asset/pages/test2';

function App() {

  let navigate = useNavigate();

  return (
    <div className="App" id='app'>
      <>
        <GlobalStyles />
      </>
      <div className="main_container">
        <header>
          <div id="logo">
            <img src={logo} alt="" />
          </div>
          <div id="header_info">
            <div className="hi_community">
              커뮤니티
            </div>
            <div className="hi_my_page">
              마이 페이지
            </div>
            <div className="hi_user">
              <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
            </div>
            <div className="hi_menu">
              <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
            </div>
          </div>
        </header>
        <Routes>
          <Route path='/login' element={<LoginMain></LoginMain>}>
          </Route>
          <Route path='/terms' element={<Terms></Terms>}></Route>
          <Route path='/info_input' element={<InfoInput />}></Route>
          <Route path='/info_input_more' element={<InfoInputMore />}></Route>
          <Route path='/my_info' element={<MyInfo />}></Route>
          <Route path='/test' element={<ResponsiveExample />} />
          <Route path='/test2' element={<AutoLayoutExample />} />
        </Routes>
        <Routes>
          <Route path='/community' element={<>
            <div id="main">
              <div id="side_menu">
                <div className="menu_container">
                  <div className="container">
                    <div className="menu" onClick={() => { navigate() }}>
                      커뮤니티 정보
                    </div>
                    <div className="menu" onClick={() => { navigate() }}>
                      이벤트 정보
                    </div>
                    <div className="menu" onClick={() => { navigate() }}>
                      멤버 보기
                    </div>
                  </div>
                </div>
                <div className="btn">
                  이벤트 만들기
                </div>
              </div>
              <Outlet></Outlet>
            </div>
          </>}>
            <Route path='commu_info' element={<CommuInfo />}></Route>
            <Route path='commu_detail' element={<CommuDetail/>}></Route>
            <Route path='event_info' element={<EventInfo />}></Route>
            <Route path='member_info' element={<MemberInfo />}></Route>
          </Route>
        </Routes>
        {/* <div id="main">
          <div id="side_menu">
            <div className="menu_container">
              <div className="container">
                <div className="menu" onClick={() => { navigate() }}>
                  커뮤니티 정보
                </div>
                <div className="menu" onClick={() => { navigate() }}>
                  이벤트 정보
                </div>
                <div className="menu" onClick={() => { navigate() }}>
                  멤버 보기
                </div>
              </div>
            </div>
            <div className="btn">
              이벤트 만들기
            </div>
          </div>
          <div id="meetup_detail">
            <div id="meetup_info_title">
              <div className="bg"></div>
              <div className="corp_info">
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
        </div> */}
      </div>
    </div>
  );
}

export default App;
