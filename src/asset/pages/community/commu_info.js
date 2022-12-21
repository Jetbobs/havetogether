import groupImg from '../../img/group_img_00.png';

function CommuInfo(props){
    return(
        <div id="commu_info">
        <div id="corp_info_title">
          <div className="bg"></div>
          <div className="corp_info">
            <div className="title">
              MARU 180 & 360
            </div>
            <div className="subtitle">
              MARU는 창업가, 창업생태계 구성원이 다양한 가능성을 펼치는 기회의 공간이자 그 자체로 작지만 강한 창업생태계입니다.
            </div>
            <div className="info">
              <ul>
                <li>주소 : 서울시 강남구 역삼로 180 MARU180, 역삼로 172 MARU360</li>
                <li>마루 홈페이지 : maru.org</li>
                <li>마루 위키(입주사 전용) : bit.ly/maru-wiki</li>
                <li>마루 슬랙 : </li>
                <li>문의 : maru180@asan-nanum.org</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="current_situation">
          <div className="title">
            MARU 한눈에 보기!
          </div>
          <div className="container">
            <div className="item" id='progressing_event'>
              <div className="title">
                진행중인 이벤트
              </div>
              <div className="count">
                NN개
              </div>
            </div>
            <div className="item" id='end_event'>
              <div className="title">
                종료됨 이벤트
              </div>
              <div className="count">
                NN개
              </div>
            </div>
            <div className="item" id='member_number'>
              <div className="title">
                함께하는 멤버
              </div>
              <div className="count">
                NN명
              </div>
            </div>
            <div className="item" id='alumni'>
              <div className="title">
                졸업한 알럼나이
              </div>
              <div className="count">
                NNN명
              </div>
            </div>
          </div>
        </div>
        <div id="event">
          <div className="title">
            진행중인 이벤트
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

export default CommuInfo;