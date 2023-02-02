import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SideMenu(props){

    let navigate = useNavigate();

    return(
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
        <Link  to="/event_create/create"><div className="btn">
          이벤트 만들기
        </div></Link>
      </div>
    )
}

export default SideMenu;