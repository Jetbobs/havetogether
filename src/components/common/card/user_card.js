//css
import '../../../asset/css/components/card/user_card_style.scss';

function UserCard(props) {

    let pic = props.user[props.i].pic;
    let name = props.user[props.i].name;
    let sub = props.user[props.i].sub;
    let intro = props.user[props.i].intro;
    let tag = props.user[props.i].tag;


    return (
        <div className="card">
            <div className="pic_name">
                <div className="pic">
                    <img src={pic} alt="" />
                </div>
                <div className="name_wrapper">
                    <div className="name">
                        {name}
                    </div>
                    <div className="sub">
                        {sub}
                    </div>
                </div>
            </div>
            <div className="intro">
                {intro}
            </div>
            <div className="tag">
                {/* <div className="item">
                    <span>아산</span>
                </div>
                <div className="item">
                    <span>마루</span>
                </div>
                <div className="item">
                    <span>커뮤니티</span>
                </div> */}
                {
                    tag.map((a, i) => {
                        return (
                            <div className="item">
                                <span>{a}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserCard;