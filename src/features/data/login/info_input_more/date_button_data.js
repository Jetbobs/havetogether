import { createSlice } from "@reduxjs/toolkit";

let dateButtonData = createSlice({
    name : 'dateButtonData',
    initialState : [{
        n: '0',
        id: 'monday',
        title: '월요일',
        i_id: 'm'
    },
    {
        n: '1',
        id: 'tuesday',
        title: '화요일',
        i_id: 't'
    },{
        n: '2',
        id: 'wednesday',
        title: '수요일',
        i_id: 'w'
    },{
        n: '3',
        id: 'thursday',
        title: '목요일',
        i_id: 'th'
    },{
        n: '4',
        id: 'friday',
        title: '금요일',
        i_id: 'f'
    }]
})

export default dateButtonData;