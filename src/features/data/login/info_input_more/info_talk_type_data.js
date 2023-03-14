import { createSlice } from "@reduxjs/toolkit";

let talkTypeData = createSlice({
    name : 'talkTypeData',
    initialState : [{
        title : '토커',
        id : 'talker'
    },{
        title : '리스너',
        id : 'listener'
    },]
})

export default talkTypeData;