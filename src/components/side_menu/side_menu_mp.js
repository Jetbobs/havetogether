import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import $ from 'jquery';

function SideMenuMp(props){
  let location = window.location.pathname;
    let navigate = useNavigate();
    useEffect(()=>{
      let smpArr = ['dash_board','event_state','my_info','wish_box','setting']
      for(let i = 0; i < smpArr.length; i++){
        $(`#smp_${smpArr[i]}`).removeClass('active');
      }
    },[location])
    return(
      <div id="side_menu_mp">
      <div className="menu_container">
        <div className="container">
          <Link to='/my_page/dash_board' onClick={()=>{let smpArr = ['dash_board','event_state','my_info','wish_box','setting']
      for(let i = 0; i < smpArr.length; i++){
        $(`smp_${smpArr[i]}`).removeClass('active');
      }}}><div className="menu" id="smp_dash_board" onClick={() => {  }}>
            대시보드
          </div></Link>
          <Link to='/my_page/current_event_state'><div className="menu" id="smp_event_state" onClick={() => { navigate() }}>
            이벤트 참가 현황
          </div></Link>
          <Link to='/my_page/my_page_info'><div className="menu" id="smp_my_info" onClick={() => { navigate() }}>
            내 정보
          </div></Link>
          <Link to='/my_page/wish_box'><div className="menu" id="smp_wish_box" onClick={() => { navigate() }}>
            소망 상자
          </div></Link>
          <Link to='/my_page/my_page_setting'><div className="menu" id="smp_setting" onClick={() => { navigate() }}>
            설정
          </div></Link>
        </div>
      </div>
      <div className="btn">
        이벤트 만들기
      </div>
    </div>
    )
}

export default SideMenuMp;