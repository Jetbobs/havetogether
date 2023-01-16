import { Link } from "react-router-dom";
import groupImg from '../../img/group_img_00.png';
import '../../css/pages/community/event_info_style.scss';

function EventInfo(props){
    return(
        <div id="event_info">
        <div id="info_title">
          <div className="container">
            <div className="title">
              MARU 이벤트 정보
            </div>
            <div className="subtitle">
              마루민들과 네트워킹・고민상담・취미 모임・동아리 등 다양한 형태로 자유롭게 만나세요! <br />
              마루민의 밋업을 응원하기 위해, 밋업 후기를 쓰신 분께 건당 5,000원 상당의 커피 쿠폰을 제공합니다. (월 최대 4회 지원)
            </div>
          </div>
          <div className="look">
          <Link>운영정책 살펴보기</Link>
          </div>
        </div>
        <div id="progressing_event">
          <div className="title">
            진행중인 이벤트
            <strong><span>NN</span>개</strong>
          </div>
          <div className="container">
          <div className="event">
              <div className="wrapper w_p_32_18">
                <div className="title">
                  MARU Meet Up
                </div>
                <div className="state">
                  <span>접속중</span>
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
                <div className="btn">
                  신청하기
                  <strong>
                    D-<span>3</span>
                  </strong>
                </div>
              </div>
            </div>
            <div className="event">
              <div className="wrapper wrapper_h">
                <div className="title title_h">
                  MARU Meet Up
                </div>
                <div className="state state_h">
                  <span>접속중</span>
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
                <div className="btn">
                  신청하기
                  <strong>
                    D-<span>3</span>
                  </strong>
                </div>
              </div>
            </div>
            <div className="event">
              <div className="wrapper" style={{padding: '32px 18px 0px 18px'}}>
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
                <div className="writer" style={ {marginBottom: '88px'}}>
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
                <div className="btn">
                  신청하기
                  <strong>
                    D-<span>3</span>
                  </strong>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="end_event">
          <div className="title">
            종료된 이벤트
          </div>
          <div className="container">
          <div className="event">
              <div className="wrapper w_p_32_18">
                <div className="title">
                  MARU Meet Up
                </div>
                <div className="state">
                  <span>접속중</span>
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
                <div className="btn">
                  신청하기
                  <strong>
                    D-<span>3</span>
                  </strong>
                </div>
              </div>
            </div>
            <div className="event">
              <div className="wrapper wrapper_h">
                <div className="title title_h">
                  MARU Meet Up
                </div>
                <div className="state state_h">
                  <span>접속중</span>
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
                <div className="btn">
                  신청하기
                  <strong>
                    D-<span>3</span>
                  </strong>
                </div>
              </div>
            </div>
            <div className="event">
              <div className="wrapper" style={{padding: '32px 18px 0px 18px'}}>
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
                <div className="writer" style={ {marginBottom: '88px'}}>
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
                <div className="btn">
                  신청하기
                  <strong>
                    D-<span>3</span>
                  </strong>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default EventInfo;