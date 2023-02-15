import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser,faEllipsisVertical,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import userPic from '../../img/pic.png';

//components
import LoginHeader from '../../../components/login/login_header';
import BasicButton from '../../../components/common/basic_button';
import LoginInfoInput from '../../../components/login/login_input';
import LoginInfoInputFile from '../../../components/login/login_input_file';
import LoginInfoInputTextarea from '../../../components/login/login_input_textarea';
import LoginInfoButton from '../../../components/login/login_info_button';
import BtnGreen from '../../../components/common/btn_green';
//data
import infoInputData from '../../data/login/info_input/info_input_data';
import infoInputDataFile from '../../data/login/info_input/info_input_file_data';
import infoInputDataTextarea from '../../data/login/info_input/info_input_textarea_data';
import dateButtonData from '../../data/login/info_input_more/date_button_data';
import LoginDateButton from '../../../components/login/login_date_button';
import interestData from '../../data/login/info_input_more/info_interest_data';
import hobbyData from '../../data/login/info_input_more/info_hobby_data';
import talkTypeData from '../../data/login/info_input_more/info_talk_type_data';
//scss
import '../../css/pages/login/my_info_style.scss';
//jquery
import $ from 'jquery';

function MyInfo(props){

  let [button, buttonSet] = useState([{ 'name': '입력취소', 'id': 'cancel' },{ 'name': '회원가입', 'id': 'sign_up' }]);
  let input_array_0 = ['belong', 'work_location', 'work_position', 'phone'];
  let input_array_1 = ['u_email', 'u_pw']
  let input_file_array_0 = ['my_picture']
  let [inputData, inputDataSet] = useState(infoInputData);
  let [inputDataFile, inputDataFileSet] = useState(infoInputDataFile);
  let [inputDataTextarea, inputDataTextareaSet] = useState(infoInputDataTextarea);
  
  let [dateButton, dateButtonSet] = useState(dateButtonData);

  let [interest, interestSet] = useState(interestData);
  let [hobby, hobbytSet] = useState(hobbyData);
  let [talkType, talkTypeSet ] = useState(talkTypeData);

  let [inputBtnInfo, inputBtnInfoSet] = useState([{title : '관심사를 알려주세요.', data : interest},{title : '취미를 알려주세요.', data : hobby},{title : '대화 성향을 알려주세요.', data : talkType}])

    return(
        <div id="my_info">
          <LoginHeader n={3}></LoginHeader>
        <div className="" id='card_contents'>
          <div className="card">
          <div className="pic_name_container">
            <div className="pic" style={{backgroundImage: 'url('+userPic+')'}}>
  
            </div>
            <div className="name_container">
              <div className="name">
                TOMAS
              </div>
              <div className="job">
                UNISTY CEO
              </div>
            </div>
          </div>
          <div className="intro">
            IT 커뮤니티와 IT 기업을 연결하는 일을 하고 있습니다.
          </div>
          <div className="tag">
            <span className="tag_i">
              기획
            </span>
            <span className="tag_i">
              브랜딩
            </span>
            <span className="tag_i">
              서비스
            </span>
          </div>
          <div className="contact">
            <div className="contact_i">
              이메일: hq@UNISTY.center
            </div>
            <div className="contact_i">
              연락처 : 010-2731-0705
            </div>
            <div className="contact_i">
              소속단체
            </div>
            <div className="belong_group">
                <span className="b_g_i" id='maru180'>
                  MARU 180
                </span>
                <span className="b_g_i" id='ict_coc'>
                  ICT COC
                </span>
                <span className="b_g_i" id='d_camp'>
                  D.camp
                </span>
              </div>
          </div>
          </div>
        </div>
        <div className="contents" id='input_contents'>
        <div className="title">
          기본 정보
        </div>
        <div className="input_container">
          <LoginInfoInput i={0} infoInputData={inputData}></LoginInfoInput>
          {
            input_file_array_0.map((e, i) => {
              return (
                <LoginInfoInputFile infoInputDataFile={inputDataFile} i={i}></LoginInfoInputFile>
              )
            })
          }
          {
            input_array_0.map((e, i) => {
              return (
                <LoginInfoInput i={i + 1} infoInputData={inputData}></LoginInfoInput>
              )
            })
          }
          <LoginInfoInputTextarea infoInputTextarea={inputDataTextarea} i={0}></LoginInfoInputTextarea>
          <LoginInfoInput i={5} infoInputData={inputData}></LoginInfoInput>
        </div>
      </div>
      <div className="contents">
        <div className="title">
          계정 정보
        </div>
        <div className="input_container">
          {
            input_array_1.map((e, i) => {
              return (
                <LoginInfoInput i={i + 6} infoInputData={inputData}></LoginInfoInput>
              )
            })
          }
        </div>
      </div>
      <div className="contents">
        <div className="container">
          <div className="title">
            매칭정보
          </div>
          <div className="subtitle">
            입력하신 정보를 이벤트 매칭에 활용합니다. 언제든지 업데이트 하실 수 있습니다.
          </div>
          <div className="input_container">
            <div className="input_btn" id='week'>
              <div className="title">
                편하신 시간대를 알려주세요.
              </div>
              <div className="input_btn_container">
                {
                  dateButton.map((a,i) => {
                    return(
                      <LoginDateButton dateButton={dateButton} i={i}></LoginDateButton>
                    )
                  })
                }
              </div>
            </div>
            {
              inputBtnInfo.map((a,i)=>{
                return(
                  <LoginInfoButton title={inputBtnInfo[i].title} infoInput={inputBtnInfo[i].data}></LoginInfoButton>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="btn_container">
        {
          button.map((e, i) => {
            return (
              <BtnGreen button={button} i={i}></BtnGreen>
            )
          })
        }
      </div>
      </div>
    )
}

$(function(){
  let location = window.location.pathname;

  if(location == '/my_info'){
    $('#hi_my_page').addClass('active');
  }
})

export default MyInfo;