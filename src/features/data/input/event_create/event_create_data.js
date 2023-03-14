import { createSlice } from "@reduxjs/toolkit"

const inputData00 = createSlice({
    name : 'inputData00',
    initialState : [{
        n: '0',
        id: 'name',
        title: '행사명',
        desc: '',
        input_id: 'input_name',
    }]
})

const inputData01 = createSlice({
    name : 'inputData01',
    initialState : [{
        n: '0',
        id: 'url',
        title: '관련 URL',
        desc: '',
        input_id: 'input_name',
    },
    {
        n: '1',
        id: 'date',
        title: '이벤트 일자',
        desc: '* 이벤트 만들기 이후에는 수정 불가능',
        input_id: 'input_date',
    },
    {
        n: '2',
        id: 'capacity',
        title: '참가자 정원',
        desc: '* 이벤트 만들기 이후에는 수정 불가능',
        input_id: 'input_capacity',
    }]
})

const inputData02 = createSlice({
    name : 'inputData02',
    initialState : [{
        n: '0',
        id: 'recruit',
        title: '모집기간',
        desc: '',
        input_id: 'input_recruit',
    },
    {
        n: '1',
        id: 'match_date',
        title: '팀 매칭 결과 안내 일자',
        desc: '',
        input_id: 'input_match_date',
    },
    {
        n: '2',
        id: 'pre_capacity',
        title: '참가자 정원',
        desc: '',
        input_id: 'input_pre_capacity',
    }]
})

const inputData03 = createSlice({
    name : 'inputData03',
    initialState : [{
        n: '0',
        id: 'review_notice',
        title: '후기 작성 안내글',
        desc: '',
        input_id: 'input_review_notice',
    },
    {
        n: '1',
        id: 'review_url',
        title: '관련 URL',
        desc: '',
        input_id: 'input_review_url',
    },
    {
        n: '2',
        id: 'review_d_date',
        title: '작성 기한',
        desc: '',
        input_id: 'input_review_d_date',
    }]
})

const checkData = createSlice({
    name : 'checkData',
    initialState : [{
        n : '0',
        id : '',
        label : '',
        title : '',
        desc : '',
    }]
})

export {inputData00,inputData01,inputData02,inputData03};