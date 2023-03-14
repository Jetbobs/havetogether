import { createSlice } from "@reduxjs/toolkit";

let headerData = createSlice({
    name : 'headerData',
    initialState : [{
        id : 0,
        title : 'MARU 이벤트 정보',
        subtitle : '마루민들과 네트워킹・고민상담・취미 모임・동아리 등 다양한 형태로 자유롭게 만나세요! \n 마루민의 밋업을 응원하기 위해, 밋업 후기를 쓰신 분께 건당 5,000원 상당의 커피 쿠폰을 제공합니다. (월 최대 4회 지원)',
        look : '운영정책 살펴보기',
        page : 'event_info'
    },
    {
        id : 1,
        title : 'MARU 멤버 정보',
        subtitle : 'MARU 커뮤니티에는 NN명의 멤버, MM명의 알럼나이가 있습니다! 만나고 싶은 마루민을 찾아보세요! 😎 \n소개를 자세히 입력해주시면 서로를 알아가기 쉽겠죠?! 언제든지 편하게 정보를 업데이트 하실 수 있습니다.',
        look : '개인정보 이용약관 보기',
        page : 'member_info'
    }]
})
export default headerData;