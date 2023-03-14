import { createSlice } from "@reduxjs/toolkit";


let infoInputDataTextarea = createSlice(({
  name : 'infoInputDataTextarea',
  initialState : [{
    id : 'introduce',
    title : '자기소개',
    desc : ''
  }]
}))

  export default infoInputDataTextarea;