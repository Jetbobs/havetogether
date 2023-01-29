import '../../asset/css/components/bg/bg_w_btn_style.scss';
import { Link } from 'react-router-dom';

function BgWBtn(props) {

    let title = props.bg[props.i].title;
    let subtitle = props.bg[props.i].subtitle;
    let info = props.bg[props.i].info;
    console.log(info);

    return (
        <div id="meetup_info_title">
            <div className="bg"></div>
            <div className="corp_info">
                <div className="title">
                    {title}
                    <Link>마루밋업 더 자세히 알아보기</Link>
                </div>
                <div className="subtitle">
                    {subtitle}
                </div>
                <div className="info">
                    <ul>
                        {
                            info.map((a,u)=> {
                                return(
                                    <li>- {a}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="btn_wrapper">
                    <div className="btn" id='btn_join'>
                        참가하기 <strong>D-<span>3</span></strong>
                    </div>
                    <div className="btn" id='btn_cancel'>
                        참가 취소
                    </div>
                    <div className="btn" id='btn_progress'>
                        매칭 진행 중
                    </div>
                    <div className="btn" id='btn_event_cancel'>
                        이벤트 취소하기
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgWBtn;