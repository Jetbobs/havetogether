import '../../../asset/css/components/check/check_box_btn_style.scss';

function CheckBoxBtn(props) {
    return (
        <div className="hobby_i">
            <input type="checkbox" id={'h_'+props.id} />
            <label htmlFor={'h_'+props.id}>{props.title}</label>
        </div>
    )
}

export default CheckBoxBtn;