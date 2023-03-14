import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../css/pages/event_create/event_edit_style.scss';
//data
import { inputData00, inputData01, inputData02, inputData03 } from '../../data/input/event_create/event_create_data';
//jquery
import $ from 'jquery';
//component
import Input from '../../../components/input/input';
import CheckBox from '../../../components/common/check/check_box';

function EventEditMore(props) {

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
    { title: '참가목적', desc: '텍스트 박스(최대 500자' },
    { title: '참가 후기', desc: '텍스트 박스(최대 500자)' },
    { title: '한줄평', desc: '텍스트 박스(최대 100자)' },
    { title: '점수', desc: '10점 만점' },
    { title: '인증샷', desc: '이미지 파일 업로드 기능' }
  ])
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
                      checkBox.map((a, i) => {
                        return (
                          <CheckBox checkBox={checkBox} i={i}></CheckBox>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_container">
            <div className="btn_wrapper">
              <div className="btn" id='btn_complete'>
                수정 완료
              </div>
            </div>
            <div className="btn_wrapper" id='btn_enter_complete'>
              <div className="btn">
                입력 완료
              </div>
            </div>
            <div className="btn_wrapper">
              <div className="btn" id='btn_cancel'>
                이벤트 취소하기
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

$(function () {
  $('#hi_community').addClass('active');
})

export default EventEditMore;