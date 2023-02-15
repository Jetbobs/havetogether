import { Link, useNavigate } from "react-router-dom";
import hostPic from '../../img/host_img00.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import '../../css/pages/my_page/dash_board_manager_style.scss';
//css
import '../../css/pages/my_page/dash_board_manager_style.scss';
//jquery
import $ from 'jquery';

function DashBoardManager(props) {
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
        <div className="event_container" id='progress_event_board'>
          <div className="title">
            진행예정 이벤트 <span>NN개</span>
          </div>
          <div className="card_container">
            <div className="card">
              <div className="card_wrapper">
                <div className="title">
                  MARU Meet Up
                </div>
                <div className="desc light_green">
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
                <div className="desc light_green">
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
        <div className="event_container" id='comeplte_event_board'>
          <div className="title">
            종료된 이벤트 <span>NN개</span>
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
  )
}

export default DashBoardManager;