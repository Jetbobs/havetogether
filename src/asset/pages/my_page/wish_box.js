import { faCircleUser, faEllipsisVertical, faArrowRight, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, Outlet } from '@fortawesome/react-fontawesome';
import '../../css/pages/my_page/wish_box_style.scss';

function WishBox(props) {
  return (
    <>
      <div id="wish_box">
        <div className="header">
          <div className="container">
            <div className="title">
              소망 상자
            </div>
            <div className="subtitle">
              멤버 각자가 겪고 있는 어려운 점을 기록하는 공간입니다. <br />
              기록한 정보는 작성자와 커뮤니티 매니저만 열람할 수 있습니다.
            </div>
          </div>
          <Link>커뮤니티 멤버들에게 드리는 혜택 보기 <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
        </div>
        <div className="contents">

          <div className="title">
            문제해결
            <div className="subtitle">
              입력하신 정보를 확인하고, 문제 해결에 조금이라도 도움을 드릴 수 있도록 고민하겠습니다.
            </div>
          </div>
          <div className="input_container">
            <div className="input">
              <div className="input_title">
                최근 겪은 개인적인 어려움이 있나요?
              </div>
              <div className="input_textarea">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className="input">
              <div className="input_title">
                해결하고 싶은 문제를 알려주세요!
              </div>
              <div className="input_textarea">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="contents">

          <div className="title">
            네트워킹
            <div className="subtitle">
              입력하신 정보는 커뮤니티 운영, 이벤트 진행 및 매칭시에 참고합니다.
            </div>
          </div>
          <div className="input_container">
            <div className="input">
              <div className="input_title">
                최근 겪은 개인적인 어려움이 있나요?
              </div>
              <div className="input_textarea">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className="input">
              <div className="input_title">
                해결하고 싶은 문제를 알려주세요!
              </div>
              <div className="input_textarea">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_wrapper">
          <div className="btn_container" id='enter'>
            <div className="btn">
              입력하기
            </div>
          </div>
          <div className="btn_container" id='complete'>
            <div className="btn">
              입력 완료
            </div>
          </div>
          <div className="btn_container" id='cancel'>
            <div className="btn">
              입력 취소
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id='enter_cancel'>
        <div className="modal_bg"></div>
        <div className="contents">
          <div className="title">
            입력 취소
          </div>
          <div className="desc">
            작성하신 정보를 반영하지 않고, 입력을 취소할까요 ?
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
          </div>
          <div className="btn_wrapper">
            <div className="btn" id='btn_join_cancel'>
              아니오
            </div>
            <div className="btn" id='btn_join_cancel'>
              예
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WishBox;