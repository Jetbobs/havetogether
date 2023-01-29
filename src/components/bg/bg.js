import '../../asset/css/components/bg/bg_style.scss';

function Bg(props) {

    let title = props.bg[props.i].title;
    let subtitle = props.bg[props.i].subtitle;
    let info = props.bg[props.i].info;
    console.log(info);

    return (
        <div id="corp_info_title">
            <div className="bg"></div>
            <div className="corp_info">
                <div className="title">
                    {/* MARU 180 & 360 */}
                    {title}
                </div>
                <div className="subtitle">
                    {/* MARU는 창업가, 창업생태계 구성원이 다양한 가능성을 펼치는 기회의 공간이자 그 자체로 작지만 강한 창업생태계입니다. */}
                    {subtitle}
                </div>
                <div className="info">
                    <ul>
                        {/* <li>주소 : 서울시 강남구 역삼로 180 MARU180, 역삼로 172 MARU360</li>
                        <li>마루 홈페이지 : maru.org</li>
                        <li>마루 위키(입주사 전용) : bit.ly/maru-wiki</li>
                        <li>마루 슬랙 : </li>
                        <li>문의 : maru180@asan-nanum.org</li> */}
                        {
                            info.map((a,i)=>{
                                return(
                                    <li>{a}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Bg;