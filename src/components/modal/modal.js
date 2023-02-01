function Modal(props) {
    return (
        <div className="modal" id={props.id}>
            <div className="modal_bg"></div>
            <div className="contents">
                <div className="title">
                    {props.title}
                </div>
                <div className="desc">
                    참가를 취소하시겠습니까? <br />
                    <span>(마루민)</span>님을 기다리고 있는데, 아쉬워요!
                </div>
                <div className="btn_wrapper">
                    <div className="btn" id='btn_join_cancel'>
                        참가 취소하기
                    </div>
                </div>
            </div>
            <div className="test"></div>
        </div>
    )
}

export default Modal;