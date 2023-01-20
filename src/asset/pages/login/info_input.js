import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEllipsisVertical, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../css/pages/login/info_input_style.scss';
//components
import LoginHeader from '../../../components/login/login_header';
import BasicButton from '../../../components/common/basic_button';
import LoginInfoInput from '../../../components/login/login_input';
import LoginInfoInputFile from '../../../components/login/login_input_file';
import LoginInfoInputTextarea from '../../../components/login/login_input_textarea';
//data
import infoInputData from '../../data/login/info_input/info_input_data';
import infoInputDataFile from '../../data/login/info_input/info_input_file_data';
import infoInputDataTextarea from '../../data/login/info_input/info_input_textarea_data';


function InfoInput() {
  let [button, buttonSet] = useState([{ 'name': '입력완료', 'id': 'complete' }]);
  let input_array_0 = ['belong', 'work_location', 'work_position', 'phone'];
  let input_array_1 = ['u_email', 'u_pw']
  let input_file_array_0 = ['my_picture']
  let [inputData, inputDataSet] = useState(infoInputData);
  let [inputDataFile, inputDataFileSet] = useState(infoInputDataFile);
  let [inputDataTextarea, inputDataTextareaSet] = useState(infoInputDataTextarea);
  console.log(inputData[0].title)

  return (
    <div id="info_input">
      <LoginHeader n={1}></LoginHeader>
      <div className="contents">
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
      <div className="btn_container">
        {
          button.map((e, i) => {
            return (
              <BasicButton button={button} i={i}></BasicButton>
            )
          })
        }
      </div>
    </div>
  )
}

export default InfoInput;