import userPic from '../../img/pic.png';
import { Link } from 'react-router-dom';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../../css/pages/my_page/member_info_manager_style.scss';
//jquery
import $ from 'jquery';


function MemberInfoManager(props){
    return(
        <div id="member_info_manager">
        <div id="info_title">
        <div className="container">
          <div className="title">
            멤버 정보
          </div>
          <div className="state_container">
            <div className="state">
              승인 대기 중
              <div className="count orange">
                <span>NN</span>개
              </div>
            </div>
            <div className="state">
              함께하는 멤버
              <div className="count green">
                <span>NN</span>개
              </div>
            </div>
            <div className="state">
              졸업한 알럼나이
              <div className="count green">
                <span>NN</span>개
              </div>
            </div>
          </div>
        </div>
        <div className="look">
        </div>
      </div>
      <div id="contents">
        <div id="header">
          <div id="tab">
          <div className="tab" id='t_accept'>
              승인 대기<strong>(<span>MM</span>명)</strong>
            </div>
            <div className="tab active" id='t_member'>
              멤버 정보<strong>(<span>MM</span>명)</strong>
            </div>
            <div className="tab" id='t_alumni'>
              알럼나이 정보<strong>(<span>MM</span>명)</strong>
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
            <div className="btn_wrapper">
              <div className="btn green">가입 승인</div>
              <div className="btn white">거절</div>
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
            <div className="btn_wrapper">
              <div className="btn green">가입 승인</div>
              <div className="btn white">거절</div>
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
            <div className="btn_wrapper">
              <div className="btn green">가입 승인</div>
              <div className="btn white">거절</div>
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
            <div className="btn_wrapper">
              <div className="btn green">가입 승인</div>
              <div className="btn white">거절</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default MemberInfoManager;