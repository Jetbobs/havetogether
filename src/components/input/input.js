import '../../asset/css/components/input/input_style.scss';

function Input(props) {

    let id = props.inputData[props.i].id;
    let title = props.inputData[props.i].title;
    let desc = props.inputData[props.i].desc;
    let input_id = props.inputData[props.i].input_id;

    return (
        <div className="input" id={id}>
            <div className="text_container">
                <div className="title">
                    {title}
                </div>
                <div className="desc">
                {desc}
                </div>
            </div>
            <input type="text" />
        </div>
    )
}

export default Input;