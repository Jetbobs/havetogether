import hostPic from '../../img/host_img00.png';
import userPic from '../../img/pic.png';
import userPic01 from '../../img/pic01.png';
import userPic02 from '../../img/pic02.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
//css
import '../../css/pages/community/event_detail_00_style.scss';
//components
import BgWBtn from '../../../components/bg/bg_w_btn';
import { useState } from 'react';
import UserCard from '../../../components/common/card/user_card';
//data
import bgWBtnData from '../../data/bg/bg_w_btn_data';
import userCardData from '../../data/card/user_card_data';
//modal
import ModalMuJoin from '../../../components/modal/modal_mu_join';
import ModalMuConfirm from '../../../components/modal/modal_mu_confirm';
import Modal from '../../../components/modal/modal';
//jquery
import $ from 'jquery';



function EventDetail00(props) {

  let navigate = useNavigate();
  let [bg, bgSet] = useState(bgWBtnData);
  let [user, userSet] = useState(userCardData);
  // modal
  let [modalJoin, modalJoinSet] = useState(false);
  let [modalConfirm, modalConfirmSet] = useState(false);
  let [modalJC, modalJCSet] = useState(false);



  return (
    <>
      <div id="meetup_detail">
        <div className="detail">
          <div className="text">
            이벤트 상세정보
          </div>
          <Link to='/community/event_info'><div className="text" onClick={() => { navigate() }}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> 이벤트 목록
          </div></Link>
        </div>
        <BgWBtn bg={bg} i={0} modalJoinSet={modalJoinSet} modalConfirmSet={modalConfirmSet} modalJCSet={modalJCSet}></BgWBtn>
        <div className="contents">
          <div className="info_container" id='host_info'>
            <div className="title">
              개최자 정보
              <span></span>
            </div>
            <div className="card_container">
              <div className="card">
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
                  마루민들의 행복과 너강을 넘어 네트워킹을 만들어가는 마루요정이에요!
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
              </div>
              <UserCard user={user} i={0}></UserCard>
            </div>
          </div>
          <div className="info_container" id='participant_info'>
            <div className="title">
              참가자 정보
              <span>가장 먼저 참가신청 해보세요!</span>
            </div>
            <div className="card_container">
              <UserCard user={user} i={1}></UserCard>
              <UserCard user={user} i={2}></UserCard>
              <UserCard user={user} i={3}></UserCard>
            </div>
          </div>
        </div>
      </div>
      {
        modalJoin == true ? <ModalMuJoin btn={[{id : 'btn_cancel', name : '취소'},{id : 'btn_join', name : '참가하기'}]} func={[()=>{modalJoinSet(false)},()=>{modalConfirmSet(true); modalJoinSet(false)}]}></ModalMuJoin> : null
      }
      {
        modalConfirm == true ? <ModalMuConfirm modalConfirmSet={modalConfirmSet} modalJoinSet={modalJoinSet}></ModalMuConfirm> : null
      }
      {
        modalJC == true ? <Modal id={'meetup_cancel'} title={'MARU Meet Up'} desc={'참가를 취소하시겠습니까? \n (마루민)님을 기다리고 있는데, 아쉬워요!'} btn={[{id : 'btn_join_cancel', name : '참가 취소하기'}]} func={[()=>{modalJCSet(false)}]}>
        </Modal> : null
      }

    </>
  )
}
export default EventDetail00;