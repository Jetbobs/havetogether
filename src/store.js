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
    subtitle : '이벤트 참가. 네트워킹에 필요한 추가 정보를 입력해주세요. \n 입력하신 정보는 커뮤니티 멤버들에게만 공개되며, 언제든지 업데이트 하실 수 있습니다.',
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

export default configureStore({
  reducer: { 
    loginHeader : loginHeader.reducer,
    loginHeaderNol : loginHeaderNol.reducer,
   }
}) 