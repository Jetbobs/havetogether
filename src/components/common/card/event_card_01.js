import groupImg from '../../../asset/img/group_img_00.png';
//css
import '../../../asset/css/components/card/card_style.scss';

function EventCard01(props) {

    let title = props.card[props.i].title;
    let state = props.card[props.i].state;
    let contents = props.card[props.i].contents;
    let writer = props.card[props.i].writer;
    let period = props.card[props.i].period;
    let count = props.card[props.i].count;
    let d_day = props.card[props.i].d_day;  

    return (
        <div className="event event_01">
        <div className="wrapper wrapper_h">
          <div className="title title_h">
          {title}
          </div>
          <div className="state state_h">
            <span>{state}</span>
          </div>
        </div>
        <div className="contents_wrapper">
          <div className="contents">
            {/* <span>39</span>주차 마루 밋업 진행합니다! <br />
            관심사, 직군을 기반으로 점심식사를 <br />
            함께할 마루민을 매칭해드립니다. <br />
            커피도 제공하니 많은 참가 바랍니다! */}
            {contents}
          </div>
          <div className="writer">
          {writer}
          </div>
          <div className="period">
            <span>{period}</span>
          </div>
          <div className="wrapper">
            <div className="group">
              <img src={groupImg} alt="" />
            </div>
            <div className="apply_number">
              <span>{count}</span>명 참가신청
            </div>
          </div>
          <div className="btn">
            신청하기
            <strong>
              D-<span>{d_day}</span>
            </strong>
          </div>
        </div>
      </div>
    )
}

export default EventCard01;