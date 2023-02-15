import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SideMenuManager(props){

    let navigate = useNavigate();

    return(
      <div id="side_menu_mp">
      <div className="menu_container">
        <div className="container">
          <Link to='/manager/dash_board'><div className="menu" id="smm_dash_board" onClick={() => { navigate() }}>
            대시보드
          </div></Link>
          <Link to='/manager/current_event_state'><div className="menu" id="smm_event_state" onClick={() => { navigate() }}>
            이벤트 현황
          </div></Link>
          <Link to='/manager/activity_record'><div className="menu" id="smm_activity_record" onClick={() => { navigate() }}>
            활동 기록
          </div></Link>
          <Link to='/manager/member_info'><div className="menu" id="smm_member_info" onClick={() => { navigate() }}>
            멤버 정보
          </div></Link>
          <Link to='/manager/my_page_info'><div className="menu" id="smm_my_page_info" onClick={() => { navigate() }}>
            커뮤니티 정보
          </div></Link>
          <Link to='/manager/my_page_setting'><div className="menu" id="smm_setting" onClick={() => { navigate() }}>
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

export default SideMenuManager;