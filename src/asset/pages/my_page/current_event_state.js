import groupImg from '../../img/group_img_00.png';
import $ from 'jquery';
import '../../css/pages/my_page/current_event_state_style.scss';
import { useState } from 'react';
import EventCard00 from '../../../components/common/card/event_card_00';
import EventCard01 from '../../../components/common/card/event_card_01';
import EventCard02 from '../../../components/common/card/event_card_02';
//data
import cardData from "../../data/card/card_data";
//jquery
// import $ from 'jquery';

function CurrentEventState(props){

  let [stateC, stateCSet] = useState([
    {id : 'coming_event', title: '참가예정 이벤트'},
    {id : 'complete_event', title: '참가완료 이벤트'},
    {id : 'review', title: '작성한 후기'},
    {id : 'reward', title: '참가 리워드'}]);

    let [card, cardSet] = useState(cardData);

    return(
        <div id="current_event_state">
        <div id="info_title">
          <div className="container">
            <div className="title">
              이벤트 참가 현황
            </div>
            <div className="state_container">
              {
                stateC.map((a,e)=>{
                  return(
                    <div className="state" id={a.id}>
                {a.title}
                <div className="count">
                  <span>NN</span>개
                </div>
              </div>
                  )
                })
              }
            </div>
          </div>
          <div className="look">
          </div>
        </div>
        <div className='event_container' id="coming_event">
          <div className="title">
            진행중인 이벤트
             <strong><span>NN</span>개</strong>
          </div>
          <div className="container">
          <EventCard01 card={card} i={0}></EventCard01>
          <EventCard02 card={card} i={1}></EventCard02>
          </div>
        </div>
        <div className='event_container' id="complete_event">
          <div className="title">
            종료된 이벤트
          </div>
          <div className="container">
            {/* <div className="event" id='event_card_00'>
              <div className="wrapper w_p_32_18">
                <div className="title">
                  MARU Meet Up
                </div>
                <div className="state black">
                  <span>종료</span>
                </div>
              </div>
              <div className="contents_wrapper">
                <div className="contents">
                  <span>39</span>주차 마루 밋업 진행합니다! <br />
                  관심사, 직군을 기반으로 점심식사를 <br />
                  함께할 마루민을 매칭해드립니다. <br />
                  커피도 제공하니 많은 참가 바랍니다!
                </div>
                <div className="writer">
                  마루 요정 🧚
                </div>
                <div className="period">
                  <span>2022. 10. 3(월)</span> ~<span>7(금)</span>
                </div>
                <div className="wrapper">
                  <div className="group">
                    <img src={groupImg} alt="" />
                  </div>
                  <div className="apply_number">
                    <span>4</span>명 참가신청
                  </div>
                </div>
                <div className="btn purple">
                  후기작성
                  <strong>
                    <span></span>
                  </strong>
                </div>
              </div>
            </div> */}
            {/* <div className="event" id='event_card_01'>
              <div className="wrapper wrapper_h">
                <div className="title title_h">
                  MARU Meet Up
                </div>
                <div className="state state_h black">
                  <span>종료</span>
                </div>
              </div>
              <div className="contents_wrapper">
                <div className="contents">
                  <span>39</span>주차 마루 밋업 진행합니다! <br />
                  관심사, 직군을 기반으로 점심식사를 <br />
                  함께할 마루민을 매칭해드립니다. <br />
                  커피도 제공하니 많은 참가 바랍니다!
                </div>
                <div className="writer">
                  마루 요정 🧚
                </div>
                <div className="period">
                  <span>2022. 10. 3(월)</span> ~<span>7(금)</span>
                </div>
                <div className="wrapper">
                  <div className="group">
                    <img src={groupImg} alt="" />
                  </div>
                  <div className="apply_number">
                    <span>4</span>명 참가신청
                  </div>
                </div>
                <div className="btn purple">
                  신청하기
                  <strong>
                    <span></span>
                  </strong>
                </div>
              </div>
            </div> */}
            <EventCard00 card={card} i={0}></EventCard00>
            {/* <div className="event" id='event_card_02'>
              <div className="wrapper" style={{ padding: '32px 18px 0px 18px' }}>
                <div className="title">
                  치맥하실 야근러 모집!!
                </div>
                <div className="state dp_n">
                  <span>접속중</span>
                </div>
              </div>
              <div className="contents_wrapper">
                <div className="text_wrapper">
                  <div className="contents">
                    야근합니다! 신난다 야호 <br />
                    루프탑에서 치킨 함께 드실 분 구합니다!<br />
                    청년치킨에서 픽업할 거에요!!!
                  </div>
                  <div className="writer" style={{ marginBottom: '88px' }}>
                    마루 요정 🧚
                  </div>
                </div>
                <div className="etc_wrapper">
                  <div className="period">
                    <span>2022. 10. 3(월)</span> ~<span>7(금)</span>
                  </div>
                  <div className="wrapper">
                    <div className="group">
                      <img src={groupImg} alt="" />
                    </div>
                    <div className="apply_number">
                      <span>4</span>명 참가신청
                    </div>
                  </div>
                  <div className="btn green">
                    리워드 사용
                    <strong>
                      <span></span>
                    </strong>
                  </div>
                </div>
              </div>
            </div> */}
            <EventCard01 card={card} i={0}></EventCard01>
            {/* <div className="event" id='event_card_03'>
              <div className="wrapper" style={{ padding: '32px 18px 0px 18px' }}>
                <div className="title">
                  개발 스터디원 모집
                </div>
                <div className="state dp_n">
                  <span>접속중</span>
                </div>
              </div>
              <div className="contents_wrapper">
                <div className="text_wrapper">
                  <div className="contents">
                    요즘 대세 리액트 네이티브 공부할 마루민 모집합니다. 심화과정 공부할 예정이에요!
                  </div>
                  <div className="writer" style={{ marginBottom: '88px' }}>
                    마루 요정 🧚
                  </div>
                </div>
                <div className="etc_wrapper">
                  <div className="period">
                    <span>2022. 10. 3(월)</span> ~<span>7(금)</span>
                  </div>
                  <div className="wrapper">
                    <div className="group">
                      <img src={groupImg} alt="" />
                    </div>
                    <div className="apply_number">
                      <span>4</span>명 참가신청
                    </div>
                  </div>
                  <div className="btn green">
                    리워드 사용
                    <strong>
                      <span></span>
                    </strong>
                  </div>
                </div>
              </div>
            </div> */}
            <EventCard02 card={card} i={0}></EventCard02>
            <div className="event disable" id='event_card_00'>
              <div className="wrapper w_p_32_18">
                <div className="title">
                  MARU Meet Up
                </div>
                <div className="state black">
                  <span>종료</span>
                </div>
              </div>
              <div className="contents_wrapper">
                <div className="contents">
                  <span>39</span>주차 마루 밋업 진행합니다! <br />
                  관심사, 직군을 기반으로 점심식사를 <br />
                  함께할 마루민을 매칭해드립니다. <br />
                  커피도 제공하니 많은 참가 바랍니다!
                </div>
                <div className="writer">
                  마루 요정 🧚
                </div>
                <div className="period">
                  <span>2022. 10. 3(월)</span> ~<span>7(금)</span>
                </div>
                <div className="wrapper">
                  <div className="group">
                    <img src={groupImg} alt="" />
                  </div>
                  <div className="apply_number">
                    <span>4</span>명 참가신청
                  </div>
                </div>
                <div className="btn green">
                  이벤트 상세정보
                  <strong>
                    <span></span>
                  </strong>
                </div>
              </div>
            </div>
            <div className="event disable" id='event_card_01'>
              <div className="wrapper wrapper_h">
                <div className="title title_h">
                  MARU Meet Up
                </div>
                <div className="state state_h black">
                  <span>종료</span>
                </div>
              </div>
              <div className="contents_wrapper">
                <div className="contents">
                  <span>39</span>주차 마루 밋업 진행합니다! <br />
                  관심사, 직군을 기반으로 점심식사를 <br />
                  함께할 마루민을 매칭해드립니다. <br />
                  커피도 제공하니 많은 참가 바랍니다!
                </div>
                <div className="writer">
                  마루 요정 🧚
                </div>
                <div className="period">
                  <span>2022. 10. 3(월)</span> ~<span>7(금)</span>
                </div>
                <div className="wrapper">
                  <div className="group">
                    <img src={groupImg} alt="" />
                  </div>
                  <div className="apply_number">
                    <span>4</span>명 참가신청
                  </div>
                </div>
                <div className="btn green">
                  이벤트 상세정보
                  <strong>
                    <span></span>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

$(function(){

  $('#complete_event .count').addClass('orange');

  let j_c = $('#coming_event .btn');

  for(let i = 0; i < j_c.length; i++){
    j_c[i].innerText = '참가 취소'
  }

  let state = $('#complete_event .event .state span');

  for(let i = 0; i < state.length; i++){
    state[i].innerText = '종료';
    state[i].style.backgroundColor = '#000';
  }
  let location = window.location.pathname;

  let smpArr = ['dash_board','event_state','my_info','wish_box','setting']

  if(location == '/my_page/current_event_state'){
    for(let i = 0; i < smpArr.length; i++){
      $(`smp_${smpArr[i]}`).removeClass('active');
    }
    $('#smp_event_state').addClass('active');
  
    $('#hi_community').removeClass('active');
    $('#hi_my_page').removeClass('active');
    $('#hi_my_page').addClass('active');
  }

})

export default CurrentEventState;