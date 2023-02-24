import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import $ from 'jquery';
function SideMenu(props){

    let navigate = useNavigate();
    let location = window.location.pathname;
    useEffect(()=>{
      let smArr = ['community','event','member'];
      for(let i = 0; i < smArr.length; i++){
        $(`#sm_${smArr[i]}`).removeClass('active');
      }
    },[location])
    return(
        <div id="side_menu">
        <div className="menu_container">
          <div className="container">
            <Link to='/community/commu_info'><div className="menu" id="sm_community" onClick={() => { navigate() }}>
              커뮤니티 정보
            </div></Link>
            <Link to='/community/event_info'><div className="menu" id="sm_event" onClick={() => { navigate() }}>
              이벤트 정보
            </div></Link>
            <Link to='/community/member_info'><div className="menu" id="sm_member" onClick={() => { navigate() }}>
              멤버 보기
            </div></Link>
          </div>
        </div>
        <Link  to="/event_create/create"><div className="btn">
          이벤트 만들기
        </div></Link>
      </div>
    )
}

export default SideMenu;