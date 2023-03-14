import { Link, useNavigate } from 'react-router-dom';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../css/pages/event_create/event_create_style.scss';
import { useSelector } from 'react-redux';
//components
import Input from '../../../components/input/input';
import CheckBox from '../../../components/common/check/check_box';
//data
import { inputData00, inputData01, inputData02, inputData03 } from '../../data/input/event_create/event_create_data';
import { useState } from 'react';
//modal
import ModalECConfirm from '../../../components/modal/modal_ec_confirm';
import ModalECConfirmMore from '../../../components/modal/modal_ec_confirm_more';
//jquery
import $ from 'jquery';


function EventCreateMore(props) {

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

  let [checkBox, checkBoxSet] = useState([
    {title : '참가목적', desc : '텍스트 박스(최대 500자'},
    {title : '참가 후기', desc : '텍스트 박스(최대 500자)'},
    {title : '한줄평', desc : '텍스트 박스(최대 100자)'},
    {title : '점수', desc : '10점 만점'},
    {title : '인증샷', desc : '이미지 파일 업로드 기능'}
  ])

  let[modalECConfirmMore, modalECConfirmMoreSet] = useState(false);

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
          <div className="contents_container" id='c_c_01'>
            <div className="title_wrapper">
              <div className="title">
                사전 등록 정보
                <div className="toggle">
                  <label htmlFor="">
                    <input role="switch" type="checkbox" />
                  </label>
                </div>
              </div>
              <div className="subtitle">
                모집기간과 참가자 정원을 추가로 입력하시면, 이벤트를 시작하기 전에 참가 희망자를 모집하고 팀 매칭을 진행할 수 있습니다.
              </div>
            </div>
            <div className="contents">
              <div className="input_container">
                {
                  inputData02.map((a, i) => {
                    return (
                      <Input inputData={inputData02} i={i}></Input>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="contents_container" id='c_c_02'>
            <div className="title_wrapper">
              <div className="title">
                후기 정보
                <div className="toggle">
                  <label htmlFor="">
                    <input role="switch" type="checkbox" />
                  </label>
                </div>
              </div>
              <div className="subtitle">
                이벤트가 종료된 이후 참가자에게 후기를 요청 할 수 있씁니다. 필요한 정보를 입력해주세요.
              </div>
            </div>
            <div className="contents">
              <div className="input_container">
                {
                  inputData03.map((a, i) => {
                    return (
                      <Input inputData={inputData03} i={i}></Input>
                    )
                  })
                }
                <div className="input">
                  <div className="text_container">
                    <div className="title">
                      수집할 데이터
                    </div>
                    <div className="desc">

                    </div>
                  </div>
                  <div className="checkbox_container">
                    {
                      checkBox.map((a,i)=>{
                        return(
                          <CheckBox checkBox={checkBox} i={i}></CheckBox>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_wrapper" onClick={()=>{modalECConfirmMoreSet(true)}}>
            <div className="btn">
              입력 완료
            </div>
          </div>
        </div>
      </div>
      {
        modalECConfirmMore == true ? <ModalECConfirmMore func00={()=>{modalECConfirmMoreSet(false)}} confirm_link={'/community/event_detail_00'}></ModalECConfirmMore> : null
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
export default EventCreateMore;