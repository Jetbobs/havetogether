//css
import '../../../asset/css/components/check/date_time_btn_style.scss';

function DateTimeBtn(props){

    let id = props.dateButton[props.i].id;
    let title = props.dateButton[props.i].title;
    let i_id = props.dateButton[props.i].i_id;
    console.log(i_id);

    return(
        <div className="time_week_wrapper" id={id}>
        <div className="title">
          {title}
        </div>
        <div className="time_week">
          <input type="checkbox"  id={i_id+'_11_i'}/>
          <label htmlFor={i_id+'_11_i'} id={i_id+'_11'}>
            11:30
          </label>
        </div>
        <div className="time_week">
        <input type="checkbox"  id={i_id+'_12_i'}/>
          <label htmlFor={i_id+'_12_i'} id={i_id+'_12'}>
            12:00
          </label>
        </div>
      </div>
    )
}

export default DateTimeBtn;