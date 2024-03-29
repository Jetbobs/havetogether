import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import groupImg from '../../img/group_img_00.png';
import '../../css/pages/community/event_info_style.scss';
import $ from'jquery';
//components
import Header from "../../../components/common/header/header";
import EventCard00 from "../../../components/common/card/event_card_00";
import EventCard01 from "../../../components/common/card/event_card_01";
import EventCard02 from "../../../components/common/card/event_card_02";
//data
import headerData from "../../data/header/header_data";
import cardData from "../../data/card/card_data";
import { useEffect, useState } from "react";
//jquery
// import $ from 'jquery';

function EventInfo(props) {
  let header = useSelector((state)=>{
    return state.headerData
  })
  let card = useSelector((state)=>{
    return cardData
  })

  useEffect(()=>{

    $('#hi_community').addClass('active');
    $('#sm_event').addClass('active');
  },[])
  return (
    <div id="event_info">
      <Header header={header} i={0}></Header>
      <div id="progressing_event">
        <div className="title">
          진행중인 이벤트
          <strong><span>NN</span>개</strong>
        </div>
        <div className="container">
          <Link to='/community/event_detail_00'><EventCard00 card={card} i={0}></EventCard00></Link>
          <Link to='/community/event_detail_00'><EventCard01 card={card} i={0}></EventCard01></Link>
          <Link to='/community/event_detail_01'><EventCard02 card={card} i={1}></EventCard02></Link>
        </div>
      </div>
      <div id="end_event">
        <div className="title">
          종료된 이벤트
        </div>
        <div className="container">
        <Link to='/community/event_detail_00'><EventCard00 card={card} i={0}></EventCard00></Link>
        <Link to='/community/event_detail_00'><EventCard01 card={card} i={0}></EventCard01></Link>
        <Link to='/community/event_detail_01'><EventCard02 card={card} i={1}></EventCard02></Link>
        </div>
      </div>
    </div>
  )
}

$(function(){
  let location = window.location.pathname;

  if(location == ('/community/event_info')){

  }
});

export default EventInfo;