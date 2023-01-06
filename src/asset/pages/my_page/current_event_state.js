import groupImg from '../../img/group_img_00.png';

function CurrentEventState(props){
    return(
        <div id="current_event_state">
        <div id="info_title">
          <div className="container">
            <div className="title">
              이벤트 참가 현황
            </div>
            <div className="state_container">
              <div className="state">
                참가예정 이벤트
                <div className="count orange">
                  <span>NN</span>개
                </div>
              </div>
              <div className="state">
                참가완료 이벤트
                <div className="count green">
                  <span>NN</span>개
                </div>
              </div>
              <div className="state">
                작성한 후기
                <div className="count green">
                  <span>NN</span>개
                </div>
              </div>
              <div className="state">
                참가 리워드
                <div className="count green">
                  <span>NN</span>개
                </div>
              </div>
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
            <div className="event" id='event_card_01'>
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
                  참가 취소
                  <strong>
                    <span></span>
                  </strong>
                </div>
              </div>
            </div>
            <div className="event" id='event_card_02'>
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
                  <div className="btn">
                    참가취소
                    <strong>
                      <span></span>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='event_container' id="complete_event">
          <div className="title">
            종료된 이벤트
          </div>
          <div className="container">
            <div className="event" id='event_card_00'>
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
            </div>
            <div className="event" id='event_card_01'>
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
            </div>
            <div className="event" id='event_card_02'>
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
            </div>
            <div className="event" id='event_card_03'>
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
            </div>
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

export default CurrentEventState;