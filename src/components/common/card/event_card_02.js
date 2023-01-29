import groupImg from '../../../asset/img/group_img_00.png';
//css
import '../../../asset/css/components/card/card_style.scss';

function EventCard02(props) {

  let title = props.card[props.i].title;
  let state = props.card[props.i].state;
  let contents = props.card[props.i].contents;
  let writer = props.card[props.i].writer;
  let period = props.card[props.i].period;
  let count = props.card[props.i].count;
  let d_day = props.card[props.i].d_day;

    return (
      <div className="event">
      <div className="wrapper" style={{ padding: '32px 18px 0px 18px' }}>
        <div className="title">
        {title}
        </div>
        <div className="state dp_n">
          <span>{state}</span>
        </div>
      </div>
      <div className="contents_wrapper">
        <div className="text_wrapper">
          <div className="contents">
          {contents}
          </div>
          <div className="writer" style={{ marginBottom: '88px' }}>
          {writer}
          </div>
        </div>
        <div className="etc_wrapper">
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
    </div>
    )
}

export default EventCard02;