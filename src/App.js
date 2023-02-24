import './App.scss';
import $ from 'jquery';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import logo from './asset/img/ht_logo_header.png';
import GlobalStyles from './components/GlobalStyles';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
//main
import Main from './asset/pages/main';
//login
import Login from './asset/pages/login/login';
import Terms from './asset/pages/login/terms';
import InfoInput from './asset/pages/login/info_input';
import InfoInputMore from './asset/pages/login/info_input_more';
import MyInfo from './asset/pages/login/my_info';
//community
import CommuInfo from './asset/pages/community/commu_info';
import EventDetail00 from './asset/pages/community/event_detail_00';
import EventDetail01 from './asset/pages/community/event_detail_01';
import EventInfo from './asset/pages/community/event_info';
import MemberInfo from './asset/pages/community/member_info';
import Matching from './asset/pages/community/matching';
//event_create
import EventCreate from './asset/pages/event_create/event_create';
import EventCreateMore from './asset/pages/event_create/event_create_more';
import EventEdit from './asset/pages/event_create/event_edit';
import EventEditMore from './asset/pages/event_create/event_edit_more';
//my_page
import DashBoard from './asset/pages/my_page/dash_baord';
import CurrentEventState from './asset/pages/my_page/current_event_state';
import MyPageInfo from './asset/pages/my_page/my_page_info';
import WishBox from './asset/pages/my_page/wish_box';
import MyPageSetting from './asset/pages/my_page/my_page_setting';
import DashBoardManager from './asset/pages/my_page/dash_board_manager';
import CurrentEventStateManager from './asset/pages/my_page/current_event_state_manager';
import MyPageInfoManager from './asset/pages/my_page/my_page_info_manager';
import MyPageSettingManager from './asset/pages/my_page/my_page_setting_manager';
import ActivityRecordManager from './asset/pages/my_page/activity_record_manager';
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
import MemberInfoManager from './asset/pages/my_page/member_info_manager';
//side_menu
import SideMenu from './components/side_menu/side_menu';
import SideMenuMp from './components/side_menu/side_menu_mp';
import SideMenuManager from './components/side_menu/side_menu_manager';
//jquery
import jQuery from 'jquery';

function App() {

  let navigate = useNavigate();

  return (
    <div className="App" id='app'>
      <>
        <GlobalStyles />
      </>
      <div className="main_container">
        {/* 헤더 */}
        <header>
          <div id="logo">
            <img src={logo} alt="" />
          </div>
          <div id="header_info">
            <div className="hi" id='hi_community'>
              <Link to='/community/commu_info'>커뮤니티</Link>
            </div>
            <div className="hi" id='hi_my_page'>
              <Link to='/my_page/dash_board'>마이 페이지</Link>
            </div>
            <div className="hi" id='hi_manager'>
              <Link to=''>관리자페이지</Link>
            </div>
            <div className="hi" id='hi_service'>
              <Link to=''>서비스 소개</Link>
            </div>
            <div className="hi" id='hi_my_ask'>
              <Link to=''>문의/협업</Link>
            </div>
            <div className="hi" id='hi_user'>
              <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
            </div>
            <div className="hi" id='hi_menu'>
              <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
            </div>
          </div>
        </header>

        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/login' element={<Login></Login>}>
          </Route>
          <Route path='/terms' element={<Terms></Terms>}></Route>
          <Route path='/info_input' element={<InfoInput />}></Route>
          <Route path='/info_input_more' element={<InfoInputMore />}></Route>
          <Route path='/my_info' element={<MyInfo />}></Route>
          <Route path='/test' element={<ResponsiveExample />} />
          <Route path='/test2' element={<AutoLayoutExample />} />
        </Routes>
        {/* 커뮤니티 */}
        <Routes>
          <Route path='/community' element={<>
            <div id="main">
              <SideMenu></SideMenu>
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
          {/* event_create */}
          <Route path='/event_create' element={<>
            <div id="main">
              <SideMenu></SideMenu>
              <Outlet></Outlet>
            </div>
          </>}>
            <Route path='create' element={<EventCreate></EventCreate>}></Route>
            <Route path='create_more' element={<EventCreateMore></EventCreateMore>}></Route>
            <Route path='edit' element={<EventEdit />}></Route>
            <Route path='edit_more' element={<EventEditMore />}></Route>
          </Route>
          {/* 마이페이지 */}
          <Route path='/my_page' element={<>
            <div id="main">
              <SideMenuMp></SideMenuMp>
              <Outlet></Outlet>
            </div>
          </>}>
            <Route path='dash_board' element={<DashBoard />}></Route>
            <Route path='current_event_state' element={<CurrentEventState />}></Route>
            <Route path='my_page_info' element={<MyPageInfo />}></Route>
            <Route path='wish_box' element={<WishBox />}></Route>
            <Route path='my_page_setting' element={<MyPageSetting />}></Route>
          </Route>
          {/* 관리자 */}
          <Route path='/manager' element={
            <div id="main">
              <SideMenuManager></SideMenuManager>
              <Outlet></Outlet>
            </div>
          }>
            <Route path='dash_board' element={<DashBoardManager />}></Route>
            <Route path='current_event_state' element={<CurrentEventStateManager />}></Route>
            <Route path='activity_record' element={<ActivityRecordManager />}></Route>
            <Route path='member_info' element={<MemberInfoManager />}></Route>
            <Route path='my_page_info' element={<MyPageInfoManager />}></Route>
            <Route path='my_page_setting' element={<MyPageSettingManager />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
