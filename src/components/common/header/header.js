
import { Link } from "react-router-dom";
//css
import '../../../asset/css/components/header/header_style.scss';

function Header(props){

    let title = props.header[props.i].title;
    let subtitle = props.header[props.i].subtitle;
    let look = props.header[props.i].look;

    return(
        <div id="info_title">
        <div className="container">
          <div className="title">
            {/* MARU 이벤트 정보 */}
            {title}
          </div>
          <div className="subtitle">
            {/* 마루민들과 네트워킹・고민상담・취미 모임・동아리 등 다양한 형태로 자유롭게 만나세요! <br />
            마루민의 밋업을 응원하기 위해, 밋업 후기를 쓰신 분께 건당 5,000원 상당의 커피 쿠폰을 제공합니다. (월 최대 4회 지원) */}
            {subtitle}
          </div>
        </div>
        <div className="look">
        {/* <Link>운영정책 살펴보기</Link> */}
        <Link>{look}</Link>
        </div>
      </div>
    )
}

export default Header;