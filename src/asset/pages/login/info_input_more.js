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
//data
import infoInputData from '../../data/login/info_input_more/info_input_data';
import dateButtonData from '../../data/login/info_input_more/date_button_data';
import LoginDateButton from '../../../components/login/login_date_button';
import interestData from '../../data/login/info_input_more/info_interest_data';
import hobbyData from '../../data/login/info_input_more/info_hobby_data';
import talkTypeData from '../../data/login/info_input_more/info_talk_type_data';

function InfoInputMore(props) {

  let [button, buttonSet] = useState([{ 'name': '입력완료', 'id': 'complete' }]);
  let input_array_0 = ['email', 'pw_change'];
  
  let [inputData, inputDataSet] = useState(infoInputData);
  let [dateButton, dateButtonSet] = useState(dateButtonData);

  let [interest, interestSet] = useState(interestData);
  let [hobby, hobbytSet] = useState(hobbyData);
  let [talkType, talkTypeSet ] = useState(talkTypeData);

  let [inputBtnInfo, inputBtnInfoSet] = useState([{title : '관심사를 알려주세요.', data : interest},{title : '취미를 알려주세요.', data : hobby},{title : '대화 성향을 알려주세요.', data : talkType}])

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
        <div className="btn">
          입력 완료
        </div>
      </div>
    </div>
  )
}

export default InfoInputMore;