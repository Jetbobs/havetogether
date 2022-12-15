import './App.scss';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import logo from './asset/img/ht_logo_header.png';
import GlobalStyles from './components/GlobalStyles';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser,faEllipsisVertical,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import LoginMain from './asset/pages/login/main';
import Terms from './asset/pages/login/terms';
import InfoInput from './asset/pages/login/info_input';
import InfoInputMore from './asset/pages/login/info_input_more';
import MyInfo from './asset/pages/login/my_info';
//pic
import userPic from './asset/img/pic.png'

function App() {

  let navigate = useNavigate();

  return (
    <div className="App" id='app'>
      <>
        <GlobalStyles/>
      </>
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
      <Route path='/info_input' element={<InfoInput/>}></Route>
      <Route path='/info_input_more' element={<InfoInputMore/>}></Route>
      <Route path='/my_info' element={<MyInfo/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
