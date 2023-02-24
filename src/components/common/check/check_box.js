import '../../../asset/css/components/check/check_box_style.scss';

function CheckBox(props) {

    let i = props.i;
    let title = props.checkBox[props.i].title;
    let desc = props.checkBox[props.i].desc;

    return (
        <div className="checkbox">
            <input type="checkbox" id={'check_0'+i} />
            <label htmlFor={'check_0'+i}></label>
            <div className="text_wrapper">
                <div className="text">
                    {title} <strong>/ {desc}</strong>
                </div>
            </div>
        </div>
    )
}

export default CheckBox;