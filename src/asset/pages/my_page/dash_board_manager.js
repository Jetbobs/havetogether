import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import hostPic from '../../img/host_img00.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import '../../css/pages/my_page/dash_board_manager_style.scss';
//css
import '../../css/pages/my_page/dash_board_manager_style.scss';
//jquery
import $ from 'jquery';
//data
import CardEventData from '../../data/card/card_event_manager_data';
//components
import CardEvent from '../../../components/common/card/card_event';
import { useSelector } from "react-redux";

function DashBoardManager(props) {
  let [CardEventD, CardEventDSet] = useState(CardEventData);

  let cardEventDataComingM = useSelector((state)=>{
    return state.cardEventDataComingM
  })

  let cardEventDataOnM = useSelector((state)=>{
    return state.cardEventDataOnM
  })

  let cardEventDataCompleteM = useSelector((state)=>{
    return state.cardEventDataCompleteM
  })

  useEffect(() => {
    $('#smm_dash_board').addClass('active');

    $('#hi_community').removeClass('active');
    $('#hi_my_page').removeClass('active');

    $('#hi_my_page').css('display', 'none');
    $('#hi_manager').css('display', 'block');
    $('#hi_manager').addClass('active');
  }, [])

  return (
    <div id="dash_board_manager">
      <div className="header" id='header'>
        <div className="container">
          <div className="title">
            TOMAS님의 대시보드
          </div>
          <div className="subtitle">
            최근 <span>6</span>명의 마루민들을 만나셨네요! 앞으로도 많은 활동 부탁드려요!
          </div>
        </div>
        <Link><FontAwesomeIcon></FontAwesomeIcon></Link>
      </div>
      <div className="body" id='body'>
        <div className="contents_container">
          <div className="dash_board_container">
            <div className="contents" id='profile'>
              <div className="pic_name">
                <div className="pic">
                  <img src={hostPic} alt="" />
                </div>
                <div className="name_wrapper">
                  <div className="name">
                    마루요정
                  </div>
                  <div className="sub">
                    ASAN NANUM Foundation
                  </div>
                </div>
              </div>
              <div className="intro">
                마루민들의 행복과 건강을 넘어 네트워킹을 만들어가는 마루요정이에요!
              </div>
              <div className="tag">
                <div className="item">
                  <span>아산</span>
                </div>
                <div className="item">
                  <span>마루</span>
                </div>
                <div className="item">
                  <span>커뮤니티</span>
                </div>
              </div>
              <div className="line"></div>
              <div className="contact">
                <div className="contact_i" id='c_email'>
                  이메일: maru180@asan_nanum.org
                </div>
                <div className="contact_i" id='c_phone'>
                  연락처 : 010-2731-0705
                </div>
                <div className="belong_group">
                  <span className="b_g_i" id='maru180'>
                    MARU 180 / 관리자 계정
                  </span>
                </div>
              </div>
            </div>
            <div id="current_state">
              <div className="container">
                <div className="title">
                  진행 현황
                </div>
                <div className="state_container">
                  <div className="state">
                    진행예정 이벤트
                    <div className="count orange">
                      <span>NN</span>개
                    </div>
                  </div>
                  <div className="state">
                    진행 중인 이벤트
                    <div className="count light_green">
                      <span>NN</span>개
                    </div>
                  </div>
                  <div className="state">
                    종료된 이벤트
                    <div className="count green">
                      <span>NN</span>개
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="state_container">
                  <div className="state">
                    작성한 후기
                    <div className="count orange">
                      <span>NN</span>개
                    </div>
                  </div>
                  <div className="state">
                    참가 리워드 제공
                    <div className="count light_green">
                      <span>NNN</span>개
                    </div>
                  </div>
                </div>
              </div>
              <div className="look">
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="event_container" id='coming_event_board'>
          <div className="title">
            진행예정 이벤트 <span>NN개</span>
          </div>
          <div className="card_container">
            {
              cardEventDataComingM.map((a, i) => {
                return (
                  <CardEvent CardEvent={cardEventDataComingM} i={i}></CardEvent>
                )
              })
            }
          </div>
        </div>
        <div className="event_container" id='progress_event_board'>
          <div className="title">
            진행중인 이벤트 <span>NN개</span>
          </div>
          <div className="card_container">
            {
              cardEventDataOnM.map((a, i) => {
                return (
                  <CardEvent CardEvent={cardEventDataOnM} i={i} />
                )
              })
            }
          </div>
        </div>
        <div className="event_container" id='comeplte_event_board'>
          <div className="title">
            종료된 이벤트 <span>NN개</span>
          </div>
          <div className="card_container">
            {
              cardEventDataCompleteM.map((a, i) => {
                return (
                  <CardEvent CardEvent={cardEventDataCompleteM} i={i}></CardEvent>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

let smpArr = ['dash_board', 'event_state', 'my_info', 'wish_box', 'setting']
let location = window.location.pathname;

if (location == '/manager/dash_board') {
  for (let i = 0; i < smpArr.length; i++) {
    $(`smp_${smpArr[i]}`).removeClass('active');
  }
  $('#smm_dash_board').addClass('active');

  $('#hi_community').removeClass('active');
  $('#hi_my_page').removeClass('active');

  $('#hi_my_page').css('display', 'none');
  $('#hi_manager').css('display', 'block');
  $('#hi_manager').addClass('active');

  document.querySelectorAll('.card_wrapper .desc').forEach(function(a,i){
    if(a.innerHTML.includes('접수중')){
      a.classList.add('orange')
    } else if(a.innerHTML == '후기 작성 필요'){
      a.classList.add('purple')
    } else if(a.innerHTML == '리워드 사용하기'){
      a.classList.add('green')
    } else if(a.innerHTML == '진행중'){
      a.classList.add('light_green')
    }
  })
}

export default DashBoardManager;