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
import EventDetail00 from './asset/pages/community/commu_detail';
import EventDetail01 from './asset/pages/community/event_detail_01';
import EventInfo from './asset/pages/community/event_info';
import MemberInfo from './asset/pages/community/member_info';
import Matching from './asset/pages/community/matching';
//event_create
import EventCreate from './asset/pages/event_create/event_create';
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
          <div id="event_create">
            <div className="header" id='header'>
              <div className="container">
                <div className="title">
                  이벤트 만들기
                </div>
                <div className="subtitle">
                네트워킹・고민상담・취미 모임・동아리 등의 멤버들과 함께 할 수 있는 이벤트를 만들어보세요. 
                </div>
              </div>
              <Link>이벤트 만드는 방법 자세히 보기 <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
            </div>
            <div className="body" id='body'>
              <div className="contents_container">
              <div className="title">
                이벤트 필수 정보
              </div>
              <div className="contents">
                <div className="input_container">
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    행사명
                  </div>
                  <div className="desc">

                  </div>
                  </div>
                  <input type="text" />
                </div>
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    커버 이미지
                  </div>
                  <div className="desc">

                  </div>
                  </div>
                  <div className="input_wrapper" id='input_upload'>
                  <input type="file" id='upload' />
                  <label htmlFor="upload"><span>Upload</span></label>
                  </div>
                  
                </div>
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    간단한 이벤트 소개
                  </div>
                  <div className="desc">

                  </div>
                  </div>
                  <div className="input_wrapper" id='input_textarea'>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                  
                </div>
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    관련 URL
                  </div>
                  <div className="desc">

                  </div>
                  </div>
                  <input type="text" />
                </div>
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    이벤트 일자
                  </div>
                  <div className="desc">
                    * 이벤트 만들기 이후에는 수정 불가능
                  </div>
                  </div>
                  <input type="text" />
                </div>
                <div className="input">
                  <div className="text_container">
                  <div className="title">
                    참가자 정원
                  </div>
                  <div className="desc">
                      *이벤트 만들기 이후에는 수정 불가능
                  </div>
                  </div>
                  <input type="text" />
                </div>
                </div>
              </div>
              </div>
              <div className="btn_wrapper">
                <div className="btn">
                  입력 완료
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
        </div> */}
      </div>
    </div>
  );
}

export default App;
