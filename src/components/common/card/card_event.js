function CardEvent(props) {

    let title = props.CardEvent[props.i].title;
    let desc = props.CardEvent[props.i].desc;
    let date = props.CardEvent[props.i].date;
    let writer = props.CardEvent[props.i].writer;


    return (
        <div className="card">
            <div className="card_wrapper">
                <div className="title">
                    {title}
                </div>
                <div className="desc">
                    {desc}
                </div>
            </div>
            <div className="card_wrapper">
                <div className="date">
                    {date}
                </div>
                <div className="writer">
                    {writer}
                </div>
            </div>
        </div>
    )
}

export default CardEvent;