function ModalECConfirm(props) {
    return (
        <div className="modal" id='event_create_confirm'>
            <div className="modal_bg"></div>
            <div className="contents">
                <div className="title">
                    이벤트 만들기 최종확인
                </div>
                <div className="desc">
                    <div className="text">
                        아래의 정보로 이벤트를 생성할까요?
                    </div>
                    <div className="text">
                        <ul>
                            <li>이벤트명 : 치맥하실 야근러 모집!!</li>
                            <li>일자 : 2022. 9. 30(금) 오후 7시</li>
                            <li>참가자 정원 : 8명</li>
                        </ul>
                    </div>
                    <div className="text yellow">
                        * 이벤트 정보 수신동의를 한 멤버들에게 푸시 알림이 전송됩니다.
                    </div>
                </div>
                <div className="btn_wrapper">
                    <div className="btn" id='btn_re_check' onClick={props.func00}>
                        한번 더 검토하기
                    </div>
                    <div className="btn" id='btn_confirm' onClick={props.func01}>
                        확인
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalECConfirm;