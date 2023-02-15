import { Link, useNavigate } from "react-router-dom";
import $ from 'jquery';
import userPic from '../../img/pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../css/pages/my_page/dash_board_style.scss';
//modal
import ModalMuJoin from "../../../components/modal/modal_mu_join";
import { useState } from "react";
//jquery
// import $ from 'jquery';

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

  //JS
  //참가현황 색변경
  

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
                  {/* <div className="item" id='coming_event'>
                    <div className="title">
                      참가예정 이벤트
                    </div>
                    <div className="desc orange">
                      NN개
                    </div>
                  </div>
                  <div className="item" id='complete_event'>
                    <div className="title">
                      참가완료 이벤트
                    </div>
                    <div className="desc">
                      NN개
                    </div>
                  </div>
                  <div className="item" id='review'>
                    <div className="title">
                      작성한 후기
                    </div>
                    <div className="desc orange">
                      NN개
                    </div>
                  </div>
                  <div className="item" id='reward'>
                    <div className="title">
                      참가 리워드
                    </div>
                    <div className="desc gray">
                      NN개
                    </div>
                  </div>
                  <div className="item" id='met_ppl'>
                    <div className="title">
                      만난 사람들
                    </div>
                    <div className="desc">
                      NN개
                    </div>
                  </div> */}
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
              <div className="card">
                <div className="card_wrapper">
                  <div className="title">
                    MARU Meet Up
                  </div>
                  <div className="desc orange">
                    오늘
                  </div>
                </div>
                <div className="card_wrapper">
                  <div className="date">
                    2022. 10. 3(월) ~7(금)
                  </div>
                  <div className="writer">
                    마루 요정 🧚
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card_wrapper">
                  <div className="title">
                    치맥하실 야근러 모집!!
                  </div>
                  <div className="desc orange">
                    오늘
                  </div>
                </div>
                <div className="card_wrapper">
                  <div className="date">
                    2022. 9. 30(금) 오후 7시
                  </div>
                  <div className="writer">
                    UNISTY TOMAS
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="event_container">
            <div className="title">
              참가완료 이벤트 <span>NN개</span>
            </div>
            <div className="card_container">
              <div className="card">
                <div className="card_wrapper">
                  <div className="title">
                    개발 스터디원 모집
                  </div>
                  <div className="desc purple">
                    후기 작성 필요
                  </div>
                </div>
                <div className="card_wrapper">
                  <div className="date">
                    2022. 10. 3(월) ~7(금)
                  </div>
                  <div className="writer">
                    마루 요정 🧚
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card_wrapper">
                  <div className="title">
                    개발 스터디원 모집
                  </div>
                  <div className="desc purple">
                    후기 작성 필요
                  </div>
                </div>
                <div className="card_wrapper">
                  <div className="date">
                    2022. 10. 3(월) ~7(금)
                  </div>
                  <div className="writer">
                    마루 요정 🧚
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card_wrapper">
                  <div className="title">
                    치맥하실 야근러 모집!!
                  </div>
                  <div className="desc green">
                    리워드 사용하기
                  </div>
                </div>
                <div className="card_wrapper">
                  <div className="date">
                    2022. 9. 30(금) 오후 7시
                  </div>
                  <div className="writer">
                    UNISTY TOMAS
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card_wrapper">
                  <div className="title">
                    치맥하실 야근러 모집!!
                  </div>
                  <div className="desc green">
                    리워드 사용하기
                  </div>
                </div>
                <div className="card_wrapper">
                  <div className="date">
                    2022. 9. 30(금) 오후 7시
                  </div>
                  <div className="writer">
                    UNISTY TOMAS
                  </div>
                </div>
              </div>
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
})

export default DashBoard;