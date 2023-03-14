import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../css/pages/event_create/event_create_style.scss';
//components
import Input from '../../../components/input/input';
//data
import { inputData00, inputData01, inputData02, inputData03 } from '../../data/input/event_create/event_create_data';
import { useState } from 'react';
//modal
import ModalECConfirm from '../../../components/modal/modal_ec_confirm';
//jquery
import $ from 'jquery';


function EventCreate(props) {

  let input00 = useSelector((state)=>{
    return state.input00
  })
  let input01 = useSelector((state)=>{
    return state.input01
  })
  let input02 = useSelector((state)=>{
    return state.input02
  })
  let input03 = useSelector((state)=>{
    return state.input03
  })

  let[modalECConfirm, modalECConfirmSet] = useState(false);

  return (
    <>
      <div id="event_create">
        <div className="header" id='header'>
          <div className="container">
            <div className="title">
              이벤트 만들기
            </div>
            <div className="subtitle">
              네트워킹・고민상담・취미 모임・동아리 등의 멤버들과 함께 할 수 있는 이벤트를 만들어보세요.
            </div>
          </div>
          <Link>이벤트 만드는 방법 자세히 보기 <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
        </div>
        <div className="body" id='body'>
          <div className="contents_container">
            <div className="title">
              이벤트 필수 정보
            </div>
            <div className="contents">
              <div className="input_container">
                <Input inputData={inputData00} i={0}></Input>
                <div className="input">
                  <div className="text_container">
                    <div className="title">
                      커버 이미지
                    </div>
                    <div className="desc">

                    </div>
                  </div>
                  <div className="input_wrapper" id='input_upload'>
                    <input type="file" id='upload' />
                    <label htmlFor="upload"><span>Upload</span></label>
                    <div className="text">
                      *최소사이즈 776·180px
                    </div>
                  </div>

                </div>
                <div className="input">
                  <div className="text_container">
                    <div className="title">
                      간단한 이벤트 소개
                    </div>
                    <div className="desc">

                    </div>
                  </div>
                  <div className="input_wrapper" id='input_textarea'>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>

                </div>
                {
                  inputData01.map((a, i) => {
                    return (
                      <Input inputData={inputData01} i={i}></Input>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="btn_wrapper">
            <div className="btn" onClick={()=>{modalECConfirmSet(true)}}>
              입력 완료
            </div>
          </div>
        </div>
      </div>
      {
        modalECConfirm == true ? <ModalECConfirm func00={()=>{modalECConfirmSet(false)}}></ModalECConfirm> : null
      }
      <div className="modal" id='event_create_confirm_01'>
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
                <li>이벤트명 : MARU Meet up</li>
                <li>일자 : 2022. 10. 24(월) ~ 28일(금)</li>
                <li>참가 신청기간 : 2022. 10. 17(월) ~19(수)</li>
                <li>매칭결과 안내 : 2022. 10. 20(목)</li>
              </ul>
            </div>
            <div className="text yellow">
              * 이벤트 정보 수신동의를 한 멤버들에게 푸시 알림이 전송됩니다.
            </div>
          </div>
          <div className="btn_wrapper">
            <div className="btn" id='btn_re_check'>
              한번 더 검토하기
            </div>
            <div className="btn" id='btn_confirm'>
              확인
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

$(function(){
  $('#hi_community').addClass('active');
})
export default EventCreate;