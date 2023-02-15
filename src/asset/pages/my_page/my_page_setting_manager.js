import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, Outlet } from '@fortawesome/react-fontawesome';
import '../../css/pages/my_page/my_page_setting_manager_style.scss';
//jquery
import $ from 'jquery';

function MyPageSettingManager(props){
    return(
        <div id="my_page_setting_manager">
        <div className="header">
          <div className="container">
            <div className="title">
              설정
            </div>
            <div className="subtitle">
              해당 페이지에서 설정할 수 없는 부분, 이용에 불편한 점들이 있다면, <br />
              10loco.official@gmail.com으로 연락주세요!
            </div>
          </div>
        </div>
        <div className="contents">
          
          <div className="title">
            푸시 알림 관리
            <div className="subtitle">
              수신하고 싶은 알림톡의 종류를 선택해주세요.
            </div>
          </div>
          <div className="checkbox_container">
                <div className="checkbox">
                  <input type="checkbox" id='check_00' />
                  <label htmlFor="check_00"></label>
                  <div className="text_wrapper">
                  <div className="text">
                    커뮤니티 매니저가 주최하는 이벤트 소식 - 수신 <strong></strong>
                  </div>
                  </div>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id='check_01' />
                  <label htmlFor="check_01"></label>
                  <div className="text_wrapper">
                  <div className="text">
                    멤버들이 주최하는 이벤트 소식(점심) - 수신<strong></strong>
                  </div>
                  </div>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id='check_02' />
                  <label htmlFor="check_02"></label>
                  <div className="text_wrapper">
                  <div className="text">
                    멤버들이 주최하는 이벤트 소식(저녁) - 수신 <strong></strong>
                  </div>
                  </div>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id='check_03' />
                  <label htmlFor="check_03"></label>
                  <div className="text_wrapper">
                  <div className="text">
                    Have Together의 기능 업데이트 정보 - 수신 <strong></strong>
                  </div>
                  </div>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id='check_04' />
                  <label htmlFor="check_04"></label>
                  <div className="text_wrapper">
                  <div className="text">
                    한 달 동안 방문하지 않은 멤버에게 프로필 업데이트 요청 - 발신 <strong></strong>
                  </div>
                  </div>
                </div>
              </div>
        </div>
        <div className="contents">
          <div className="title">
            계정 탈퇴
            <div className="subtitle">
            사용하고 계신 <span>관리자계정은</span> <span id='account'>maru180@asan-nanum.org</span>입니다 <br />
            연락처는 <span id='phone'>010-2731-0705</span>입니다.
          </div>
          <div className="sub_text">
            * <br />
            관리자 계정의 경우, 개별 삭제가 불가능합니다. <br />
            10loco.official@gmail.com으로 연락주세요!
          </div>
          </div>

        </div>
      </div>
    )
}

let smpArr = ['dash_board','event_state','my_info','wish_box','setting']
let location = window.location.pathname;
console.log(location)

if(location == '/manager/setting'){
  for(let i = 0; i < smpArr.length; i++){
    $(`smp_${smpArr[i]}`).removeClass('active');
  }
  $('#smm_setting').addClass('active');

  $('#hi_community').removeClass('active');
  $('#hi_my_page').removeClass('active');

  $('#hi_my_page').css('display','none');
  $('#hi_manager').css('display','block');
  $('#hi_manager').addClass('active');
}

export default MyPageSettingManager;