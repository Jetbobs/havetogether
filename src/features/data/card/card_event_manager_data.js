import { createSlice } from "@reduxjs/toolkit";

let cardEventDataComingM = createSlice({
    name : 'cardEventDataComingM',
    initialState : [{
        id : 0,
        title : 'MARU Meet Up',
        desc : '접수중 D-3',
        date : '2022. 10. 3(월) ~7(금)',
        writer : '마루 요정 🧚'
    },
    {
        id : 1,
        title : '치맥하실 야근러 모집!!',
        desc : '접수중, 오늘',
        date : '2022. 9. 30(금) 오후 7시',
        writer : 'UNISTY TOMAS'
    }]
})

let cardEventDataOnM = createSlice({
    name : 'cardEventDataOnM',
    initialState : [{
        id : 0,
        title : 'MARU Meet Up',
        desc : '진행중',
        date : '2022. 10. 3(월) ~7(금)',
        writer : '마루 요정 🧚'
    },
    {
        id : 1,
        title : '치맥하실 야근러 모집!!',
        desc : '진행중',
        date : '2022. 9. 30(금) 오후 7시',
        writer : 'UNISTY TOMAS'
    }]
})


let cardEventDataCompleteM = createSlice({
    name : 'cardEventDataCompleteM',
    initialState : [{
        id : 0,
        title : '개발 스터디원 모집',
        desc : '후기 작성 필요',
        date : '2022. 10. 3(월) ~7(금)',
        writer : '마루 요정 🧚'
    },
    {
        id : 1,
        title : '개발 스터디원 모집',
        desc : '후기 작성 필요',
        date : '2022. 10. 3(월) ~7(금)',
        writer : '마루 요정 🧚'
    },
    {
        id : 2,
        title : '치맥하실 야근러 모집!!',
        desc : '리워드 사용하기',
        date : '2022. 9. 30(금) 오후 7시',
        writer : 'UNISTY TOMAS'
    },
    {
        id : 3,
        title : '치맥하실 야근러 모집!!',
        desc : '리워드 사용하기',
        date : '2022. 9. 30(금) 오후 7시',
        writer : 'UNISTY TOMAS'
    }]
})

export {cardEventDataComingM, cardEventDataCompleteM, cardEventDataOnM};