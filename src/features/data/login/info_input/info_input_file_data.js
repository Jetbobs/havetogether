import { createSlice } from "@reduxjs/toolkit";


let infoInputDataFile = createSlice({
  name : 'infoInputDataFile',
  initialState : [{
    id : 'my_picture',
    title : '내 사진',
    desc : '*최소사이즈 200 · 200px',
    fileId : 'upload',
    label_name : 'Upload'
  }]
})

export default infoInputDataFile;