import groupImg from '../../img/group_img_00.png';
//scss
import '../../css/pages/community/commu_info_style.scss';
//data
import bgData from '../../data/bg/bg_data';
import { useState } from 'react';
import cardData from '../../data/card/card_data';
//components
import Bg from '../../../components/bg/bg';
import CurrentState from '../../../components/common/current_state';
import EventCard00 from '../../../components/common/card/event_card_00';
import EventCard01 from '../../../components/common/card/event_card_01';
import EventCard02 from '../../../components/common/card/event_card_02';
//jquery
import $ from 'jquery';

function CommuInfo(props) {
  let [currentState, currentStateSet] = useState([
    { id: 'progressing_event', title: '진행중인 이벤트', count: 'NN개' },
    { id: 'end_event', title: '종료됨 이벤트', count: 'NN개' }, 
    { id: 'member_number', title: '함께하는 멤버', count: 'NN명' }, 
    { id: 'alumni', title: '졸업한 알럼나이', count: 'NNN' + '명' }]);
  let [bg, bgSet] = useState(bgData);
  let [card, cardSet] = useState(cardData);

  return (
    <div id="commu_info">
      <Bg bg={bg} i={0}></Bg>
      <div id="current_situation">
        <div className="title">
          MARU 한눈에 보기!
        </div>
        <CurrentState currentState = {currentState}></CurrentState>
      </div>
      <div id="event">
        <div className="title">
          진행중인 이벤트
        </div>
        <div className="container">
          <EventCard00 card={card} i={0}></EventCard00>
          <EventCard01 card={card} i={0}></EventCard01>
          <EventCard02 card={card} i={0}></EventCard02>
        </div>
      </div>
    </div>
  )
}

$(function(){
  let location = window.location.pathname;

  if(location == ('/community/commu_info')){
    let smArr = ['community','event','member'];
    $('#sm_community').removeClass('active');

    for(let i = 0; i < smArr.length; i++){
      $(`#sm_${smArr[i]}`).removeClass('active');
    }
    $('#hi_community').addClass('active');
    $('#sm_community').addClass('active');
  }
});

export default CommuInfo;