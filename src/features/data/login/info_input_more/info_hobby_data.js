import { createSlice } from "@reduxjs/toolkit";


let hobbyData = createSlice({
    name : 'hobbyData',
    initialState : [{
        title : '운동',
        id : 'excercise'
    },{
        title : '요리',
        id : 'cooking'
    },{
        title : '맛집',
        id : 'restaurant'
    },{
        title : '게임',
        id : 'game'
    },{
        title : '독서',
        id : 'reading'
    },{
        title : '영화, 드라마',
        id : 'movie'
    },]
})

export default hobbyData;