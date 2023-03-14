import { createSlice } from "@reduxjs/toolkit";

let userCardData = createSlice({
    name : 'userCardData',
    initialState : [{
        id : 0,
        pic : 'process.env.PUBLIC_URL'+'http://localhost:3000/src/asset/img/pic.png',
        name : '마루요정',
        sub : 'ASAN NANUM Foundation',
        intro : '마루민들의 행복과 너강을 넘어 네트워킹을 만들어가는 마루요정이에요!',
        tag : ['아산','마루','커뮤니티']
    },
    {
        id : 1,
        pic : 'process.env.PUBLIC_URL'+'http://localhost:3000/src/asset/img/pic.png',
        name : 'TOMAS',
        sub : 'UNISTY CEO',
        intro : 'IT 커뮤니티와 IT 기업을 연결하는 일을 하고 있습니다.',
        tag : ['기획','브랜딩','서비스 디자인']
    },
    {
        id : 2,
        pic : 'process.env.PUBLIC_URL'+'http://localhost:3000/src/asset/img/pic.png',
        name : 'Brian',
        sub : 'Company Developer',
        intro : 'software like Aldus PageMaker including versions of Loem Ipsum',
        tag : ['기획','브랜딩','서비스 디자인']
    },
    {
        id : 3,
        pic : 'process.env.PUBLIC_URL'+'http://localhost:3000/src/asset/img/pic.png',
        name : 'Samanda',
        sub : 'SAM CEO',
        intro : 'It is a long established fact that a reader will be distracted',
        tag : ['기획','브랜딩','서비스 디자인']
    }]
})

export default userCardData;