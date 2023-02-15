import userPic from '../../img/pic.png';
import { Link } from 'react-router-dom';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../../css/pages/my_page/activity_record_manager_style.scss';
//jquery
import $ from 'jquery';


function ActivityRecordManager(props){
    return(
        <div id="activity_record_manager">
        <div id="info_title">
        <div className="container">
          <div className="title">
            활동 기록
          </div>
          <div className="state_container">
            <div className="state">
              전체 이벤트
              <div className="count">
                <span>NN</span>개
              </div>
            </div>
            <div className="state">
              전체 참가자 수
              <div className="count">
                <span>NN</span>개
              </div>
            </div>
            <div className="state">
              작성한 후기
              <div className="count orange">
                <span>NN</span>개
              </div>
            </div>
            <div className="state">
              참가 리워드 제공
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
          <div className="tab active" id='t_accept'>
              전체 이벤트
            </div>
            <div className="tab active orange" id='t_member'>
              작성한 후기-<strong><span>NN</span>개</strong>
            </div>
            <div className="tab" id='t_alumni'>
              알럼나이 정보<strong>(<span>NN</span>개)</strong>
            </div>
          </div>
          <div id="search">
            검색 <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="contents">
          <div className="event_review">
            <div className="event_title">
              <div className="title today">
                Maru Meet Up
                <span>오늘</span>
              </div>
              <div className="date_writer">
                <div className="date">
                  2022. 10. 28(금)
                </div>
                <div className="writer">
                  마루요정
                </div>
              </div>
            </div>
            <div className="event_review_writer">
              <div className="pic_name">
                <div className="pic">
                  <img src={userPic} alt="" />
                </div>
                <div className="name">
                  TOMAS
                </div>
                <div className="sub">
                  UNISTY CEO
                </div>
              </div>
              <div className="tag today">
                <span>오늘</span>
              </div>
            </div>
            <div className="event_review_text">
              <div className="text">
                "<span>커뮤니티 운영에 대한 노하우를 공유할 수 있는 의미있는 시간이었습니다!</span>"
              </div>
            </div>
          </div>
          <div className="event_review">
            <div className="event_title">
              <div className="title today">
                Maru Meet Up
                <span>오늘</span>
              </div>
              <div className="date_writer">
                <div className="date">
                  2022. 10. 28(금)
                </div>
                <div className="writer">
                  마루요정
                </div>
              </div>
            </div>
            <div className="event_review_writer">
              <div className="pic_name">
                <div className="pic">
                  <img src={userPic} alt="" />
                </div>
                <div className="name">
                  TOMAS
                </div>
                <div className="sub">
                  UNISTY CEO
                </div>
              </div>
              <div className="tag today">
                <span>오늘</span>
              </div>
            </div>
            <div className="event_review_text">
              <div className="text">
                "<span>커뮤니티 운영에 대한 노하우를 공유할 수 있는 의미있는 시간이었습니다!</span>"
              </div>
            </div>
          </div>
          <div className="event_review">
            <div className="event_title">
              <div className="title today">
                Maru Meet Up
                <span>오늘</span>
              </div>
              <div className="date_writer">
                <div className="date">
                  2022. 10. 28(금)
                </div>
                <div className="writer">
                  마루요정
                </div>
              </div>
            </div>
            <div className="event_review_writer">
              <div className="pic_name">
                <div className="pic">
                  <img src={userPic} alt="" />
                </div>
                <div className="name">
                  TOMAS
                </div>
                <div className="sub">
                  UNISTY CEO
                </div>
              </div>
              <div className="tag today">
                <span>오늘</span>
              </div>
            </div>
            <div className="event_review_text">
              <div className="text">
                "<span>커뮤니티 운영에 대한 노하우를 공유할 수 있는 의미있는 시간이었습니다!</span>"
              </div>
            </div>
          </div>
          <div className="event_review">
            <div className="event_title">
              <div className="title today">
                Maru Meet Up
                <span>오늘</span>
              </div>
              <div className="date_writer">
                <div className="date">
                  2022. 10. 28(금)
                </div>
                <div className="writer">
                  마루요정
                </div>
              </div>
            </div>
            <div className="event_review_writer">
              <div className="pic_name">
                <div className="pic">
                  <img src={userPic} alt="" />
                </div>
                <div className="name">
                  TOMAS
                </div>
                <div className="sub">
                  UNISTY CEO
                </div>
              </div>
              <div className="tag today">
                <span>오늘</span>
              </div>
            </div>
            <div className="event_review_text">
              <div className="text">
                "<span>커뮤니티 운영에 대한 노하우를 공유할 수 있는 의미있는 시간이었습니다!</span>"
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

let smpArr = ['dash_board','event_state','my_info','wish_box','setting']
let location = window.location.pathname;

if(location == '/manager/activity_record'){
  for(let i = 0; i < smpArr.length; i++){
    $(`smp_${smpArr[i]}`).removeClass('active');
  }
  $('#smm_activity_record').addClass('active');

  $('#hi_community').removeClass('active');
  $('#hi_my_page').removeClass('active');

  $('#hi_my_page').css('display','none');
  $('#hi_manager').css('display','block');
  $('#hi_manager').addClass('active');
}

export default ActivityRecordManager;