import {Link, useNavigate} from 'react-router-dom';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser,faEllipsisVertical,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import userPic from '../../img/pic.png';
import '../../css/pages/login/my_info_style.scss';

function MyInfo(props){
    return(
        <div id="my_info">
        <div className="contents">
          <div className="pic_name_container">
            <div className="pic" style={{backgroundImage: 'url('+userPic+')'}}>
  
            </div>
            <div className="name_container">
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
            <span className="tag_i">
              기획
            </span>
            <span className="tag_i">
              브랜딩
            </span>
            <span className="tag_i">
              서비스
            </span>
          </div>
          <div className="contact">
            <div className="contact_i">
              이메일: hq@UNISTY.center
            </div>
            <div className="contact_i">
              연락처 : 010-2731-0705
            </div>
            <div className="contact_i">
              소속단체
            </div>
            <div className="belong_group">
                <span className="b_g_i" id='maru180'>
                  MARU 180
                </span>
                <span className="b_g_i" id='ict_coc'>
                  ICT COC
                </span>
                <span className="b_g_i" id='d_camp'>
                  D.camp
                </span>
              </div>
          </div>
        </div>
      </div>
    )
}

export default MyInfo;