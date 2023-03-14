import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight } from '@fortawesome/free-solid-svg-icons';
//scss
import '../../css/pages/login/info_input_more_style.scss';
//components
import LoginHeader from '../../../components/login/login_header';
import LoginInfoInput from '../../../components/login/login_input';
import LoginInfoButton from '../../../components/login/login_info_button';
import BasicButton from '../../../components/common/basic_button';
import DateTimeBtn from '../../../components/common/check_btn/date_time_btn';
import CheckBoxBtn from '../../../components/common/check/check_box_btn';
// import CheckInputTime from '../../../components/common/check_btn/date_time_btn';
//data
import infoInputData from '../../data/login/info_input_more/info_input_data';
import dateButtonData from '../../data/login/info_input_more/date_button_data';
import LoginDateButton from '../../../components/login/login_date_button';
import interestData from '../../data/login/info_input_more/info_interest_data';
import hobbyData from '../../data/login/info_input_more/info_hobby_data';
import talkTypeData from '../../data/login/info_input_more/info_talk_type_data';
//jquery
import $ from 'jquery';
import { useSelector } from 'react-redux';

function InfoInputMore(props) {

  let [button, buttonSet] = useState([{ 'name': '입력완료', 'id': 'complete' }]);
  let input_array_0 = ['email', 'pw_change'];

  // let [inputData, inputDataSet] = useState(infoInputData);
  // let [dateButton, dateButtonSet] = useState(dateButtonData);

  // let [interest, interestSet] = useState(interestData);
  // let [hobby, hobbytSet] = useState(hobbyData);
  // let [talkType, talkTypeSet] = useState(talkTypeData);

  let inputData = useSelector((state)=>{
    return state.infoInputDataM
  })
  let dateButton = useSelector((state)=>{
    return state.dateButtonData
  })
  let interest = useSelector((state)=>{
    return state.interestData
  })
  let hobby = useSelector((state) => {
    return state.hobbyData
  })
  let talkType = useSelector((state)=>{
    return state.talkTypeData
  })
  let hobbyArr = useSelector((state)=>{
    return state.hobbyArrData
  })

  let [inputBtnInfo, inputBtnInfoSet] = useState([
    { title: '관심사를 알려주세요.', data: interest }, 
    { title: '취미를 알려주세요.', data: hobby }, 
    { title: '대화 성향을 알려주세요.', data: talkType }])
  // let [hobbyArr, hobbyArrSet] = useState([
  // { id: 'new_tech', title: '신문물' },
  // { id: 'excercise', title: '운동' },
  // { id: 'pet', title: '반려 동물' },
  // { id: 'reading', title: '독서' },
  // { id: 'self_development', title: '자기계발' },
  // { id: 'foreign_lang', title: '외국어' },
  // { id: 'hot_restaurant', title: '맛집' },
  // { id: 'trip', title: '여행' },
  // { id: 'music', title: '음악' },
  // { id: 'consert', title: '공연' },
  // { id: 'movie', title: '영화' },
  // { id: 'coffee', title: '커피' },
  // { id: 'hot_restaurant_01', title: '맛집' },
  // { id: 'stock', title: '주식' },
  // { id: 'investment', title: '투자' }])



  // date 
  let [dateTime, dateTimeSet] = useState([{ id: 'm_11', time: '11:30' }])
  console.log(dateButton);
  return (
    <div id="info_input_more">
      <LoginHeader n={2}></LoginHeader>
      <div className="contents">
        <div className="title">
          계정 정보
        </div>
        <div className="input_container">
          {
            input_array_0.map((e, i) => {
              return (
                <LoginInfoInput i={i} infoInputData={inputData}></LoginInfoInput>
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
                  dateButton.map((a, i) => {
                    return (
                      <DateTimeBtn dateButton={dateButton} i={i}></DateTimeBtn>
                    )
                  })
                }

              </div>
            </div>
            {
              inputBtnInfo.map((a, i) => {
                return (
                  <LoginInfoButton title={inputBtnInfo[i].title} infoInput={inputBtnInfo[i].data}></LoginInfoButton>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="btn_container">
        <div className="btn">
          입력 완료
        </div>
      </div>
    </div>
  )
}

$(function () {
  let location = window.location.pathname;

  if (location == '/info_input_more') {
    $('#hi_my_page').addClass('active');
  }
})

export default InfoInputMore;