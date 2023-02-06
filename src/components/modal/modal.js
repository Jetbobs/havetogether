import { Link } from "react-router-dom";

function Modal(props) {
    return (
        <div className="modal" id={props.id}>
            <div className="modal_bg"></div>
            <div className="contents">
                <div className="text_container">
                <div className="title">
                    {props.title}
                </div>
                <div className="desc">
                    {/* 참가를 취소하시겠습니까? <br />
                    <span>(마루민)</span>님을 기다리고 있는데, 아쉬워요! */}
                    {props.desc}
                </div>
                </div>

                {/* <div className="btn_wrapper">
                    <div className="btn" id='btn_join_cancel'>
                        참가 취소하기
                    </div>
                </div> */}
                <div className="btn_container">
                {props.btn.map((a, i) => {

                    return (
                        <Link to={a.link}><div className="btn_wrapper" onClick={props.func[i]}>
                            <div className="btn" id={a.id}>
                                {a.name}
                            </div>
                        </div>
                        </Link>
                    )
                })}
                </div>
            </div>
            <div className="test"></div>
        </div>
    )
}

export default Modal;