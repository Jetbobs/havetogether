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
import EventDetail01 from './asset/pages/community/event_detail_01';
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
            <Route path='event_detail01' element={<EventDetail01/>}></Route>
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
          <div id="event_detail">
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
          <div className="modal" id='member_detail'>
            <div className="modal_bg">
            </div>
            <div className="contents">
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
                      <div className="line"></div>
                      <div className="contact">
                        <div className="info" id='email'>
                          이메일 : hq@UNISTY.center
                        </div>
                        <div className="info" id='phone'>
                          연락처 : 010-2731-0705
                        </div>
                        <div className="belong">
                          <div className="item" id='maru180'>
                            <span>MARU 180</span>
                          </div>
                          <div className="item" id='ict_coc'>
                            <span>ICT COC</span>
                          </div>
                          <div className="item" id='d_camp'>
                            <span>d.camp</span>
                          </div>
                        </div>
                      </div>
                      <div className="line"></div>
                      <div className="title">
                        참가 예정인 이벤트
                      </div>
                      <div className="event_container">
                        <div className="event">
                          <div className="title_state">
                            <div className="title">
                              MARU Meet Up
                            </div>
                            <div className="state">
                              접수중 D-<span>3</span>
                            </div>
                          </div>
                          <div className="time_writer">
                            <div className="time">
                              2022. 10. 3(월) ~7(금)
                            </div>
                            <div className="writer">
                            마루 요정 🧚
                            </div>
                          </div>
                        </div>
                        <div className="event">
                          <div className="title_state">
                            <div className="title">
                              치맥하실 야근러 모집!!
                            </div>
                            <div className="state">
                              접수중 ,<span>오늘</span>
                            </div>
                          </div>
                          <div className="time_writer">
                            <div className="time">
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
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
