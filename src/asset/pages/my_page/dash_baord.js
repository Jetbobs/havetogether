import { Link, useNavigate } from "react-router-dom";
import $ from 'jquery';
import userPic from '../../img/pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../css/pages/my_page/dash_board_style.scss';
//modal
import ModalMuJoin from "../../../components/modal/modal_mu_join";
import { useEffect, useState } from "react";
//jquery
// import $ from 'jquery';
//data
import CardEventData from '../../data/card/card_event_data';
//components
import CardEvent from '../../../components/common/card/card_event';
import { useSelector } from "react-redux";

function DashBoard(props) {

  //state
  let [modalMuJoin, modalMuJoinSet] = useState(false);
  let [modalConfirm, modalConfirmSet] = useState(false);
  let [tagItem, tagItemSet] = useState(['기획', '브랜딩', '서비스 디자인']);
  let [belongGroup, belongGroupSet] = useState([{ id: 'maru180', title: 'MARU 180' }, { id: 'ict_coc', title: "ICT COC" }, { id: 'd_camp', title: 'D.camp' }])
  let [contactI, contactISet] = useState(['이메일 : hq@USNISTY.center', '연락처 : 010-2731-0705', '소속 단체']);
  let [dayWeek, dayWeekSet] = useState([
    { id: 'monday', title: '월요일' },
    { id: 'tuesday', title: '화요일' },
    { id: 'wednesday', title: '수요일' },
    { id: 'thursday', title: '목요일' },
    { id: 'friday', title: '금요일' }
  ])
  let [hobby, hobbySet] = useState(['운동','음악','자기계발','맛집']);
  let [currentJoin, currentJoinSet] = useState([
    {id : 'coming_event', title: '참가예정 이벤트'},
    {id : 'complete_event', title: '참가완료 이벤트'},
    {id : 'review', title: '작성한 후기'},
    {id : 'reward', title: '참가 리워드'},
    {id : 'met_ppl', title: '만난 사람들'}]);

    // let [CardEventD, CardEventDSet] = useState(CardEventData);
    let cardEventDataComing = useSelector((state)=>{
      return state.cardEventDataComing
    })
    let cardEventDataComplete = useSelector((state)=>{
      return state.cardEventDataComplete
    })

  //JS
  //참가현황 색변경

  useEffect(()=>{
    let smpArr = ['dash_board','event_state','my_info','wish_box','setting']
    // for(let i = 0; i < smpArr.length; i++){
    //   $(`#smp_${smpArr[i]}`).removeClass('active');
    // }
    $('#smp_dash_board').addClass('active');
  
    $('#hi_community').removeClass('active');
    $('#hi_my_page').removeClass('active');
    $('#hi_my_page').addClass('active');
  },[])
  

  console.log(document.querySelectorAll('.item'));

  return (
    <>
      <div id="dash_board">
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
                    <img src={userPic} alt="" />
                  </div>
                  <div className="name_wrapper">
                    <div className="name">
                      TOMAS
                    </div>
                    <div className="sub">
                      UNISTY CEO
                    </div>
                  </div>
                </div>
                <div className="intro">
                  IT 커뮤니티와 IT 기업을 연결하는 일을 하고 있습니다.
                </div>
                <div className="tag">
                  {
                    tagItem.map((a, e) => {
                      return (
                        <div className="item">
                          <span>{a}</span>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="line"></div>
                <div className="contact">
                  {
                    contactI.map((a, e) => {
                      return (
                        <div className="contact_i">
                          {a}
                        </div>
                      )
                    })
                  }
                  <div className="belong_group">
                    {
                      belongGroup.map((a, e) => {
                        return (
                          <span className="b_g_i" id={a.id}>
                            {a.title}
                          </span>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="contents" id='setting_info'>
                <div className="title">
                  설정 정보
                </div>
                <div className="info" id='time'>
                  <div className="title">
                    선택하신 요일, 시간
                  </div>
                  <div className="day_week_wrapper">
                    {
                      dayWeek.map((a, e) => {
                        return (
                          <div className="day_week" id={a.id}>
                            <div className="text_wrapper">
                              MM.DD <br /> {a.title}
                            </div>
                            <div className="item active">
                              11:30
                            </div>
                            <div className="item">
                              12:00
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="info" id='hobby'>
                  <div className="title">
                    선택하신 관심사, 취미
                  </div>
                  <div className="item_wrapper">
                    {
                      hobby.map((a,i)=>{
                        return(
                          <div className="item active">
                          {a}
                        </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="update_wrapper">
                  <div className="text" id='update'>
                    *<span>2022. 10. 20(목)</span> 업데이트
                  </div>
                  <div className="text" id='edit' onClick={() => { modalMuJoinSet(true) }}>
                    수정하기
                  </div>
                </div>
              </div>
              <div className="contents" id='current_join'>
                <div className="title">
                  참가 현황
                </div>
                <div className="item_wrapper">
                  {
                    currentJoin.map((a,e)=>{
                      return(
                        <div className="item" id={a.id}>
                        <div className="title">
                          {a.title}
                        </div>
                        <div className="desc">
                          NN개
                        </div>
                      </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="event_container">
            <div className="title">
              참가예정 이벤트 <span>NN개</span>
            </div>
            <div className="card_container">
              {
                cardEventDataComing.map((a,i)=>{
                  return(
                    <CardEvent CardEvent={cardEventDataComing} i={i}></CardEvent>
                  )
                })
              }
            </div>
          </div>
          <div className="event_container">
            <div className="title">
              참가완료 이벤트 <span>NN개</span>
            </div>
            <div className="card_container">
                            {
                cardEventDataComplete.map((a,i)=>{
                  return(
                    <CardEvent CardEvent={cardEventDataComplete} i={i}></CardEvent>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      {
        modalMuJoin == true ? <ModalMuJoin btn={[{ id: 'btn_cancel', name: '취소' }, { id: 'btn_join', name: '참가하기' }]} func={[() => { modalMuJoinSet(false) }, () => { modalMuJoinSet(false) }]}></ModalMuJoin> : null
      }
    </>
  )
}
$(function(){
  $('#coming_event .desc').addClass('orange');
  $('#review .desc').addClass('orange');
  $('#reward .desc').addClass('gray');

  document.querySelectorAll('.card_wrapper .desc').forEach(function(a,i){
    if(a.innerHTML == '오늘'){
      a.classList.add('orange')
    } else if(a.innerHTML == '후기 작성 필요'){
      a.classList.add('purple')
    } else if(a.innerHTML == '리워드 사용하기'){
      a.classList.add('green')
    }
  })


})

export default DashBoard;