import { Link, useNavigate } from 'react-router-dom';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import userPic from '../../img/pic.png';
import '../../css/pages/my_page/my_page_info_style.scss';
import { useState } from 'react';
//data
import userCardData from '../../data/card/user_card_data';
//components
import Modal from '../../../components/modal/modal';
import UserCard from '../../../components/common/card/user_card';
//jquery
import $ from 'jquery';

function MyPageInfo(props) {

  let [editBtn, editBtnSet] = useState(false);
  let [modalEnterCancel, modalEnterCancelSet] = useState(false);
  let [user, userSet] = useState(userCardData);

  return (
    <div id="my_page_info">
      <div className="header">
        <div className="container">
          <div className="title">
            내 정보
          </div>
          <div className="subtitle">
            이벤트 참가, 네트워킹에 필요한 정보를 입력해주세요. <br />
            입력하신 정보는 커뮤니티 멤버들에게만 공개되며, 언제든지 업데이트 하실 수 있습니다.
          </div>
        </div>
        <Link>이벤트 만드는 방법 자세히 보기 <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
      </div>
      <div className="profile">
        <div className="pic_name_container">
          <div className="pic" style={{ backgroundImage: 'url(' + userPic + ')' }}>

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
      {/* <UserCard user={user} i={1}></UserCard> */}
      <div className="contents">
        <div className="title">
          기본 정보
        </div>
        <div className="input_container">
          <div className="input">
            <div className="input_title">
              <p>이름 *</p>
              <div className="input_desc">

              </div>
            </div>
            <input type="text" id='my_name' />
          </div>
          <div className="input" id='my_picture'>
            <div className="input_title">
              <p>내 사진</p>
            </div>
            <div className="btn_upload">
              <input type="file" id='upload' />
              <label htmlFor="upload">Upload</label>
              <div className="input_desc">
                *최소사이즈 200 · 200px
              </div>
            </div>
          </div>
          <div className="input" id='belong'>
            <div className="input_title">
              <p>소속</p>
              <div className="input_desc">
                * 기업, 기관 이름을 입력해주세요.
              </div>
            </div>
            <input type="text" />
          </div>
          <div className="input" id='work_location'>
            <div className="input_title">
              <p>근무자 위치</p>
              <div className="input_desc">
                * 매칭시에만 활용합니다.
              </div>
            </div>
            <input type="text" />
          </div>
          <div className="input" id='work_position'>
            <div className="input_title">
              <p>직무</p>
              <div className="input_desc">
              </div>
            </div>
            <input type="text" />
          </div>
          <div className="input" id='phone'>
            <div className="input_title">
              <p>연락처</p>
              <div className="input_desc">
                * 입력하신 연락처로 푸시 알림[알림톡]을 전송합니다.
              </div>
            </div>
            <input type="text" />
          </div>
          <div className="input" id='introduce'>
            <div className="input_title">
              <p>자기소개</p>
              <div className="input_desc">

              </div>
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="input" id='url'>
            <div className="input_title">
              <p>소개 URL</p>
              <div className="input_desc">

              </div>
            </div>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="contents">
        <div className="title">
          계정 정보
        </div>
        <div className="input_container">
          <div className="input" id='u_email'>
            <div className="input_title">
              <p>이메일</p>
              <div className="input_desc">
                * 입력하신 이메일 계정이 ID가 됩니다.
              </div>
            </div>
            <input type="text" />
          </div>
          <div className="input" id='u_pw'>
            <div className="input_title">
              <p>비밀번호 변경</p>
              <div className="input_desc">

              </div>
            </div>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="contents_more">
        <div className="title">
          계정 정보
        </div>
        <div className="input_container">
          <div className="input">
            <div className="input_title" id='email'>
              <p>이메일</p>
              <div className="input_desc">
                *입력하신 이메일 계정이 ID가 됩니다.
              </div>
            </div>
            <input type="text" id='my_name' />
          </div>
          <div className="input">
            <div className="input_title">
              <p>비밀번호 변경</p>
              <div className="input_desc">

              </div>
            </div>
            <input type="text" id='my_name' />
          </div>
        </div>
      </div>
      <div className="contents_more">
        <div className="container">
          <div className="title">
            매칭정보
          </div>
          <div className="subtitle">
            입력하신 정보를 이벤트 매칭에 활용합니다. 언제든지 업데이트 하실 수 있습니다.
          </div>
          <div className="input_container">
            <div className="input_btn" id='week'>
              <div className="title">
                편하신 시간대를 알려주세요.
              </div>
              <div className="input_btn_container">
                <div className="input_btn_d">
                  <div className="title">
                    월요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
                <div className="input_btn_d">
                  <div className="title">
                    화요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
                <div className="input_btn_d">
                  <div className="title">
                    수요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
                <div className="input_btn_d">
                  <div className="title">
                    목요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
                <div className="input_btn_d">
                  <div className="title">
                    금요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
                <div className="input_btn_d">
                  <div className="title">
                    토요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
                <div className="input_btn_d">
                  <div className="title">
                    일요일
                  </div>
                  <div className="input_time">
                    <span>11:30</span>
                  </div>
                  <div className="input_time">
                    <span>12:00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_btn">
              <div className="title">
                관심사를 알려주세요.
              </div>
              <div className="input_btn_container">
                <div className="input_btn_i">
                  <span>
                    스타트업
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    반려동물
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    재테크
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    IT 기술
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    여행
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    시사, 이슈
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    사람과 문화
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    건강
                  </span>
                </div>
              </div>
            </div>
            <div className="input_btn">
              <div className="title">
                취미를 알려주세요.
              </div>
              <div className="input_btn_container">
                <div className="input_btn_i">
                  <span>
                    운동
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    요리
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    맛집
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    게임
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    독서
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    영화, 드라마
                  </span>
                </div>
              </div>
            </div>
            <div className="input_btn">
              <div className="title">
                대화성향을 알려주세요.
              </div>
              <div className="input_btn_container">
                <div className="input_btn_i">
                  <span>
                    토커
                  </span>
                </div>
                <div className="input_btn_i">
                  <span>
                    리스너
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn_wrapper">
        {
          editBtn == false ? <div className="btn_container" id='edit' onClick={() => { editBtnSet(true) }}>
          <div className="btn">
            수정하기
          </div>
        </div> : null
        }
        {
          editBtn == true ? <>
          <div className="btn_container" id='complete' onClick={()=>{editBtnSet(false)}}>
            <div className="btn">
              입력 완료
            </div>
          </div>
            <div className="btn_container" id='cancel' onClick={()=>{modalEnterCancelSet(true)}}>
              <div className="btn">
                입력 취소
              </div>
            </div></> : null
        }
      </div>
      {
        modalEnterCancel == true ? <Modal id={'enter_cancel'} title={'입력 취소'} desc={'작성하신 정보를 반영하지 않고, 입력을 취소할까요 ?'} btn={[{id : 'btn_continue', name : '수정 계속하기'},{id : 'btn_enter_y', name : '확인'}]} func={[()=>{modalEnterCancelSet(false)},()=>{modalEnterCancelSet(false); editBtnSet(false)}]}>
        </Modal> : null
      }
    </div>
  )
}

let location = window.location.pathname;

let smpArr = ['dash_board','event_state','my_info','wish_box','setting']


$(function(){
  if(location == '/my_page/my_page_info'){
    for(let i = 0; i < smpArr.length; i++){
      $(`smp_${smpArr[i]}`).removeClass('active');
    }
  
  
    $('#hi_community').removeClass('active');
    $('#hi_my_page').removeClass('active');
  
    $('#hi_my_page').addClass('active');
    
    $('#smp_my_info').addClass('active');
  }
})


export default MyPageInfo;