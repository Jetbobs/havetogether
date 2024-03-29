import { createSlice } from "@reduxjs/toolkit";


let bgWBtnData = createSlice({
    name : 'bgWBtnData',
    initialState : [{
        id : 'maru',
        title : 'MARU Meet Up',
        subtitle : '39주차 마루 밋업 진행합니다! 관심사, 직군을 기반으로 점심식사를 함께할 마루민을 매칭해드립니다. \n 밋업 이후 바로 드실 수 있또록 커피도 제공하니 많은 참가 바랍니다!',
        info : ['일자 : 2022. 10. 24(월) ~ 28(금)','신청기간 : 2022. 10. 17(월) ~ 19(수)','매칭결과 안내 : 2022. 10. 20(목)'],
    }]
})

export default bgWBtnData;