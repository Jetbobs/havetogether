import './App.scss';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import logo from './asset/img/ht_logo_header.png';
import GlobalStyles from './components/GlobalStyles';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
//login
import LoginMain from './asset/pages/login/main';
import Terms from './asset/pages/login/terms';
import InfoInput from './asset/pages/login/info_input';
import InfoInputMore from './asset/pages/login/info_input_more';
import MyInfo from './asset/pages/login/my_info';
//community
import CommuInfo from './asset/pages/community/commu_info';
import EventDetail00 from './asset/pages/community/commu_detail';
import EventDetail01 from './asset/pages/community/event_detail_01';
import EventInfo from './asset/pages/community/event_info';
import MemberInfo from './asset/pages/community/member_info';
import Matching from './asset/pages/community/matching';
//event_create
import EventCreate from './asset/pages/event_create/event_create';
import EventEdit from './asset/pages/event_create/event_edit';
//my_page
import DashBoard from './asset/pages/my_page/dash_baord';
import CurrentEventState from './asset/pages/my_page/current_event_state';
import MyPageInfo from './asset/pages/my_page/my_page_info';
import WishBox from './asset/pages/my_page/wish_box';
import MyPageSetting from './asset/pages/my_page/my_page_setting';
//pic
import userPic from './asset/img/pic.png';
import userPic01 from './asset/img/pic01.png';
import userPic02 from './asset/img/pic02.png';
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
            <Route path='event_detail_00' element={<EventDetail00 />}></Route>
            <Route path='event_info' element={<EventInfo />}></Route>
            <Route path='member_info' element={<MemberInfo />}></Route>
            <Route path='event_detail_01' element={<EventDetail01 />}></Route>
            <Route path='matching' element={<Matching />}></Route>
          </Route>
          <Route path='/event_create' element={<>
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
            <Route path='create' element={<EventCreate></EventCreate>}></Route>
            <Route path='edit' element={<EventEdit />}></Route>
          </Route>
          <Route path='/my_page' element={<>
            <div id="main">
            <div id="side_menu_mp">
            <div className="menu_container">
              <div className="container">
                <div className="menu" onClick={() => { navigate() }}>
                  대시보드
                </div>
                <div className="menu" onClick={() => { navigate() }}>
                  이벤트 참가 현황
                </div>
                <div className="menu" onClick={() => { navigate() }}>
                  내 정보
                </div>
                <div className="menu" onClick={() => { navigate() }}>
                  소망 상자
                </div>
                <div className="menu" onClick={() => { navigate() }}>
                  설정
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
            <Route path='dash_board' element={<DashBoard />}></Route>
            <Route path='current_event_state' element={<CurrentEventState />}></Route>
            <Route path='my_page_info' element={<MyPageInfo/>}></Route>
            <Route path='wish_box' element={<WishBox/>}></Route>
            <Route path='my_page_setting' element={<MyPageSetting/>}></Route>
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
          <div id="side_menu_mp">
            <div className="menu_container">
              <div className="container">
                <div className="menu" onClick={() => { navigate() }}>
                  대시보드
                </div>
                <div className="menu" onClick={() => { navigate() }}>
                  이벤트 참가 현황
                </div>
                <div className="menu" onClick={() => { navigate() }}>
                  내 정보
                </div>
                <div className="menu" onClick={() => { navigate() }}>
                  소망 상자
                </div>
                <div className="menu" onClick={() => { navigate() }}>
                  설정
                </div>
              </div>
            </div>
            <div className="btn">
              이벤트 만들기
            </div>
          </div>
          <div id="my_page_setting">
            <div className="header">
              <div className="container">
                <div className="title">
                  설정
                </div>
                <div className="subtitle">
                  해당 페이지에서 설정할 수 없는 부분, 이용에 불편한 점들이 있다면, <br />
                  10loco.official@gmail.com으로 연락주세요!
                </div>
              </div>
            </div>
            <div className="contents">
              
              <div className="title">
                푸시 알림 관리
                <div className="subtitle">
                  수신하고 싶은 알림톡의 종류를 선택해주세요.
                </div>
              </div>
              <div className="checkbox_container">
                    <div className="checkbox">
                      <input type="checkbox" id='check_00' />
                      <label htmlFor="check_00"></label>
                      <div className="text_wrapper">
                      <div className="text">
                        커뮤니티 매니저가 주최하는 이벤트 소식 <strong></strong>
                      </div>
                      </div>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id='check_01' />
                      <label htmlFor="check_01"></label>
                      <div className="text_wrapper">
                      <div className="text">
                        멤버들이 주최하는 이벤트 소식(점심) <strong></strong>
                      </div>
                      </div>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id='check_02' />
                      <label htmlFor="check_02"></label>
                      <div className="text_wrapper">
                      <div className="text">
                        멤버들이 주최하는 이벤트 소식(저녁) <strong></strong>
                      </div>
                      </div>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id='check_03' />
                      <label htmlFor="check_03"></label>
                      <div className="text_wrapper">
                      <div className="text">
                        Have Together의 기능 업데이트 정보 <strong></strong>
                      </div>
                      </div>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id='check_04' />
                      <label htmlFor="check_04"></label>
                      <div className="text_wrapper">
                      <div className="text">
                        이벤트 참가, 네트워킹을 위한 프로필 업데이트 입력 요청 <strong></strong>
                      </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="contents">
              <div className="title">
                계정 탈퇴
                <div className="subtitle">
                사용하고 계신 계정은 <span id='account'>contact@UNISTY.center</span>입니다 <br />
                연락처는 <span id='phone'>010-2731-0705</span>입니다.
              </div>
              <div className="sub_text">
                계정을 탈퇴하겠습니다.
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
            <div className="modal" id='account_delete'>
              <div className="modal_bg"></div>
              <div className="contents">
                <div className="title">
                  계정 탈퇴
                  <div className="icon">
                <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                </div>
                </div>
                <div className="desc">
                  Have Together를 탈퇴하고, 해당 계정 정보를 삭제할까요?
                </div>
                <div className="btn_wrapper">
                  <div className="btn" id='btn_join_cancel'>
                    아니오
                  </div>
                  <div className="btn" id='btn_join_cancel'>
                    예
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
