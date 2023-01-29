//css
import '../../asset/css/components/common/current_state_style.scss';

function CurrentState(props) {

    let currentState = props.currentState;

    return (
        <div className="container">
            {/* <div className="item" id='progressing_event'>
                <div className="title">
                    진행중인 이벤트
                </div>
                <div className="count">
                    NN개
                </div>
            </div> */}
            {
                currentState.map((a, i) => {
                    return (
                        <div className="item" id={props.currentState[i].id}>
                            <div className="title">
                                {props.currentState[i].title}
                            </div>
                            <div className="count">
                                {props.currentState[i].count}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CurrentState;