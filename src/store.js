import { configureStore,createSlice } from '@reduxjs/toolkit';

let loginHeader = createSlice({
  name : 'loginHeader',
  initialState : [{
    page : 'login.js',
    id : 0,
    title : '스타트업 점심시간 네트워킹',
    subtitle : '다양한 이벤트에 참여하시고, 다채로운 분들과 네트워킹하실 수 있습니다!\n지금 Have Together에 가입하세요 :)',
    link_title : 'Have Together 서비스 소개서 보기',
  },
  {
    id : 1,
    title : '기본 회원정보 입력',
    subtitle : '회원가입에 필요한 정보를 입력해주세요!',
    link_title : '이용약관 살펴보기',
  },
  {
    id : 2,
    title : '기본 회원정보 입력',
    subtitle : '이벤트 참가. 네트워킹에 필요한 추가 정보를 입력해주세요. \n입력하신 정보는 커뮤니티 멤버들에게만 공개되며, 언제든지 업데이트 하실 수 있습니다.',
    link_title : '이용약관 살펴보기',
  },
  {
    id : 3,
    title : '내정보',
    subtitle : '이벤트 참가, 네트워킹에 필요한 정보를 입력해주세요. \n 입력하신 정보는 커뮤니티 멤버들에게만 공개되며, 언제든지 업데이트 하실 수 있습니다.',
    link_title : '이벤트 만드는 방법 자세히 보기',
  }
]
})

let loginHeaderNol = createSlice({
  name : 'loginHeaderNol',
  initialState : [{
    page : 'terms.js',
    id : 0,
    title : '회원가입',
    subtitle : 'Have Together 서비스 이용약관을 확인해주세요.'
  }]

})

// let inputInfoInput = createSlice({
//   name : 'inputInfoInput',
//   initialState : [{
//     n : '0',
//     id: 'name',
//     title : '이름 *',
//     desc : '',
//     input_id: 'input_name',
//   },
//   {
//     n : '1',
//     id: 'belong',
//     title : '소속',
//     desc : '* 기업, 기관 이름을 입력해주세요.',
//     input_id: 'input_belong',
//   },
//   {
//     n : '2',
//     id: 'work_location',
//     title : '근무자 위치',
//     desc : '* 매칭시에만 활용합니다.',
//     input_id: 'input_work_location',
//   },{
//     n : '3',
//     id: 'work_position',
//     title : '직무',
//     desc : '',
//     input_id: 'input_work_position',
//   },{
//     n : '4',
//     id: 'phone',
//     title : '연락처',
//     desc : '* 입력하신 연락처로 푸시 알림[알림톡]을 전송합니다.',
//     input_id: 'input_phone',
//   },{
//     n : '5',
//     id: 'url',
//     title : '소개 URL',
//     desc : '',
//     input_id: 'input_url',
//   },{
//     n : '6',
//     id: 'u_email',
//     title : '이메일',
//     desc : '* 입력하신 이메일 계정이 ID가 됩니다.',
//     input_id: 'input_u_email',
//   },{
//     n : '7',
//     id: 'u_pw',
//     title : '소개 URL',
//     desc : '비밀번호 변경',
//     input_id: 'input_u_pw',
//   }]
// })
let inputInfoInputFile = createSlice({
  name : 'inputInfoInputFile',
  initialState : [{
    id : 'my_picture',
    title : '내 사진',
    desc : '*최소사이즈 200 · 200px',
    fileId : 'upload',
    label_name : 'Upload'
  }]
})

let intputInfoInputTextarea = createSlice({
  name : 'intputInfoInputTextarea',
  initialState : [{
    id : 'introduce',
    title : '자기소개',
    desc : ''
  }]

})

export default configureStore({
  reducer: { 
    loginHeader : loginHeader.reducer,
    loginHeaderNol : loginHeaderNol.reducer,
    inputInfoInputFile : inputInfoInputFile.reducer,
    intputInfoInputTextarea : intputInfoInputTextarea.reducer,
   }
}) 