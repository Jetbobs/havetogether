import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, Outlet } from '@fortawesome/react-fontawesome';
import '../../css/pages/my_page/my_page_setting_style.scss';
//components
import Modal from '../../../components/modal/modal';
import { useEffect, useState } from 'react';
//jquery
import $ from 'jquery';

function MyPageSetting(props) {

  let [modalAD, modalADSet] = useState(false);

  useEffect(()=>{
    $('#hi_community').removeClass('active');
    $('#hi_my_page').removeClass('active');
  
    $('#hi_my_page').addClass('active');
    
    $('#smp_setting').addClass('active');
  })

  return (
    <>
      <div id="my_page_setting">
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
                  커뮤니티 매니저가 주최하는 이벤트 소식 <strong></strong>
                </div>
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" id='check_01' />
              <label htmlFor="check_01"></label>
              <div className="text_wrapper">
                <div className="text">
                  멤버들이 주최하는 이벤트 소식(점심) <strong></strong>
                </div>
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" id='check_02' />
              <label htmlFor="check_02"></label>
              <div className="text_wrapper">
                <div className="text">
                  멤버들이 주최하는 이벤트 소식(저녁) <strong></strong>
                </div>
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" id='check_03' />
              <label htmlFor="check_03"></label>
              <div className="text_wrapper">
                <div className="text">
                  Have Together의 기능 업데이트 정보 <strong></strong>
                </div>
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" id='check_04' />
              <label htmlFor="check_04"></label>
              <div className="text_wrapper">
                <div className="text">
                  이벤트 참가, 네트워킹을 위한 프로필 업데이트 입력 요청 <strong></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contents">
          <div className="title">
            계정 탈퇴
            <div className="subtitle">
              사용하고 계신 계정은 <span id='account'>contact@UNISTY.center</span>입니다 <br />
              연락처는 <span id='phone'>010-2731-0705</span>입니다.
            </div>
            <div className="sub_text" onClick={()=>{modalADSet(true)}}>
              계정을 탈퇴하겠습니다.
            </div>
          </div>

        </div>
      </div>
      {
        modalAD == true ? <Modal id={'account_delete'} title={'계정 탈퇴'} desc={' Have Together를 탈퇴하고, 해당 계정 정보를 삭제할까요?'} btn={[{ id: 'btn_cancel', name: '취소'}, { id: 'btn_delete', name: '계정 탈퇴', link: '/'  }]} func={[() => {modalADSet(false)}, () => { }]}>
        </Modal> : null
            }
    </>
  )
}

// let location = window.location.pathname;

// let smpArr = ['dash_board','event_state','my_info','wish_box','setting']

// $(function(){
//   if(location == '/my_page/my_page_setting'){
//     for(let i = 0; i < smpArr.length; i++){
//       $(`smp_${smpArr[i]}`).removeClass('active');
//     }
  
  
//     $('#hi_community').removeClass('active');
//     $('#hi_my_page').removeClass('active');
  
//     $('#hi_my_page').addClass('active');
    
//     $('#smp_setting').addClass('active');
//   }
// })

export default MyPageSetting;