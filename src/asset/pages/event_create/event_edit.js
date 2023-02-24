import { Link, useNavigate } from 'react-router-dom';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../css/pages/event_create/event_edit_style.scss';
//components
import Modal from "../../../components/modal/modal";
import Input from '../../../components/input/input';
import { useState } from "react";
//data
import { inputData00, inputData01, inputData02, inputData03 } from '../../data/input/event_create/event_create_data';
//jquery
import $ from 'jquery';

function EventEdit(props) {

  let [modalECancel, modalECancelSet] = useState(false);
  let [modalEditConfirm, modalEditConfirmSet] = useState(false);

  let [input00, input00Set] = useState(inputData00);
  let [input01, input01Set] = useState(inputData01);
  let [input02, input02Set] = useState(inputData02);
  let [input03, input03Set] = useState(inputData03);
  return (
    <>
      <div id="event_edit">
        <div className="header" id='header'>
          <div className="container">
            <div className="title">
              이벤트 정보 수정
            </div>
            <div className="subtitle">
              이벤트 일자, 참가자 정원 이외의 정보를 수정하실 수 있습니다.
            </div>
          </div>
          <Link>이벤트 만드는 방법 자세히 보기 <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
        </div>
        <div className="body" id='body'>
          <div className="contents_container" id='c_c_00'>
            <div className="title">
              이벤트 필수 정보
            </div>
            <div className="contents">
              <div className="input_container">
                <div className="input">
                  <div className="text_container">
                    <div className="title">
                      행사명
                    </div>
                    <div className="desc">

                    </div>
                  </div>
                  <input type="text" />
                </div>
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
          <div className="btn_container">
            <div className="btn_wrapper">
              <div className="btn" id='btn_complete' onClick={() => { modalEditConfirmSet(true) }}>
                수정 완료
              </div>
            </div>
            <div className="btn_wrapper" id='btn_enter_complete'>
              <div className="btn">
                입력 완료
              </div>
            </div>
            <div className="btn_wrapper">
              <div className="btn" id='btn_cancel' onClick={() => { modalECancelSet(true) }}>
                이벤트 취소하기
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        modalECancel == true ? <Modal id={'event_cancel_01'} title={'이벤트 취소'} desc={'정말로 이벤트를 취소할까요? 확인을 선택하시면 이벤트가 취소되며, \n참가신청한 멤버들에게 푸시 알림이 전송됩니다.'} btn={[{ id: 'btn_ec_01_n', name: '아니요' }, { id: 'btn_ec_01_y', name: '확인' }]} func={[() => { modalECancelSet(false) }, () => { modalECancelSet(true) }]}></Modal> : null
      }
      {
        modalEditConfirm == true ? <Modal id={'event_edit_confirm'} title={'이벤트 정보 수정'} desc={'정보 수정을 완료할까요?\n완료 후 이벤트 상세보기 페이지로 이동합니다.'} btn={[{ id: 'btn_continue', name: '수정 계속하기' }, { id: 'btn_complete', name: '수정 완료' }]} func={[() => { modalEditConfirmSet(false) }, () => { modalEditConfirmSet(true) }]}></Modal> : null
      }
    </>
  )
}
$(function () {
  $('#hi_community').addClass('active');
})
export default EventEdit;