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
import EventInfo from './asset/pages/community/event_info';
import MemberInfo from './asset/pages/community/member_info';
//pic
import userPic from './asset/img/pic.png';
import groupImg from './asset/img/group_img_00.png';
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
            <Route path='commu_info' element={<CommuInfo/>}></Route>
            <Route path='event_info' element={<EventInfo/>}></Route>
            <Route path='member_info' element={<MemberInfo/>}></Route>
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
          <div id="member_info">
            <div id="info_title">
              <div className="container">
                <div className="title">
                  MARU 멤버 정보
                </div>
                <div className="subtitle">
                  MARU 커뮤니티에는 NN명의 멤버, MM명의 알럼나이가 있습니다! 만나고 싶은 마루민을 찾아보세요! 😎 <br />
                  소개를 자세히 입력해주시면 서로를 알아가기 쉽겠죠?! 언제든지 편하게 정보를 업데이트 하실 수 있습니다.
                </div>
              </div>
              <div className="look">
              <Link>개인정보 이용약관 보기 <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
              </div>
            </div>
            <div id="contents">
              <div id="header">
                <div id="tab">
                  <div className="tab active" id='t_member'>
                    멤버 정보(<span>NN</span>명)
                  </div>
                  <div className="tab" id='t_alumni'>
                    알럼나이 정보(<span>MM</span>명)
                  </div>
                </div>
                <div id="search">
                  검색 <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </div>
              <div id="tab_member">
                <div className="member">
                  <div className="pic_name">
                    <div className="pic">
                      <img src={userPic} alt="" />
                    </div>
                    <div className="container">
                      <div className="name">
                        TOMAS
                      </div>
                      <div className="job">
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
                <div className="member">
                  <div className="pic_name">
                    <div className="pic">
                      <img src={userPic} alt="" />
                    </div>
                    <div className="container">
                      <div className="name">
                        TOMAS
                      </div>
                      <div className="job">
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
                <div className="member">
                  <div className="pic_name">
                    <div className="pic">
                      <img src={userPic} alt="" />
                    </div>
                    <div className="container">
                      <div className="name">
                        TOMAS
                      </div>
                      <div className="job">
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
                <div className="member">
                  <div className="pic_name">
                    <div className="pic">
                      <img src={userPic} alt="" />
                    </div>
                    <div className="container">
                      <div className="name">
                        TOMAS
                      </div>
                      <div className="job">
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
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
