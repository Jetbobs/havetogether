import userPic from '../../img/pic.png';
import { Link } from 'react-router-dom';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function MemberInfo(props){
    return(
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
    )
}

export default MemberInfo;