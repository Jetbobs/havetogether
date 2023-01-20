import { useDispatch, useSelector } from 'react-redux'; 

function LoginInfoInputFile(props) {

    let state = useSelector((state) => { return state });

    let dispatch = useDispatch();


    let id = props.infoInputDataFile[props.i].id;
    let title = props.infoInputDataFile[props.i].title;
    let desc = props.infoInputDataFile[props.i].desc;
    let fileId = props.infoInputDataFile[props.i].fileId;
    let label_name = props.infoInputDataFile[props.i].label_name;

    return (
        <div className="input" id={id}>
            <div className="input_title">
                <p>{title}</p>
            </div>
            <div className="btn_upload">
                <input type="file" id={fileId} />
                <label htmlFor="upload">{label_name}</label>
                <div className="input_desc">
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default LoginInfoInputFile;