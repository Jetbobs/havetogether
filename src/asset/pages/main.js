import { useState } from 'react';
import '../css/pages/main_style.scss';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import $ from 'jquery';
//img
import sectionImg00 from '../img/main/section_00.png';
import sectionImg01 from '../img/main/section_01.png';
import sectionImg03 from '../img/main/section_03.png';
import sectionImg04 from '../img/main/section_04.png';
import sectionImg05 from '../img/main/section_05.png';
import sectionImg06 from '../img/main/section_06.png';
import sectionImg07 from '../img/main/section_07.png';
import sectionImg08 from '../img/main/section_08.png';

import checkImg from '../img/main/check.png';


function Main(props) {

    let [secText01, secText01Set] = useState(['커뮤니티 운영 담당자가 없어요', '프로그램 기획하는데 시간이 너무 많이 걸려요', '누가 누구를 만나는지 파악이 안 돼요', '멤버들끼리 좋은 협업 사례가 있길 바라요', '후기, 만족도 조사 수집이 잘 안 돼요']);
    let [secText03, secText03Set] = useState(['모두의 자유시간, 점심시간을 통해 다른 멤버들과 서로 알아가요!', '다음주에 가능한 점심시간대와 대화 관심사를 기반으로 매칭', '3~4인의 소모임으로 어색하지 않고 서로 집중할 수 있는 기회'])
    let [secText04, secText04Set] = useState(["'저기는 무슨일을 하지?' '저 분은 어떤일을 할까..?'", '먼저 대화를 시작하기 어려운 나를 위한, 주기적인 네트워킹', '이벤트나 모임 때, 어색하지 않고 서로 인사할 수 있는 사이를 만들어요'])
    let [secText05, secText05Set] = useState(['만족도 조사와 후기 참여율이 낮아 개선하기 어려웠던 고민 해결', '별도의 서베이 폼 들을 통한 수집이 아닌, 하나의 틀에서 작성!', '한 공간에서 작성하고 서로의 후기를 볼 수 있는 공간 제공']);
    let [secText06, secText06Set] = useState(['누가누구를 만나는지, 어떤 이벤트들이 진행되고 있는지 한 눈에', '효율적인 운영 보고서 작성을 위한 현황 Dashboard', '참여율을 높이기 위한 리워드 제공 및 리워드 현황 파악'])
    return (
        <div id="landing">
            <sectoion id='sec_00'>
                <div className="text_container">
                    <div className="subtitle">
                        함께 성장하는 커뮤니티를 <br></br>
                        만드는 효과적인 방법
                    </div>
                    <div className="title">
                        <span>커뮤니티 운영 솔루션</span>
                        <h2>Have Together</h2>
                    </div>
                    <div className="btn_container">
                        <div className="btn purple">
                            얼리 액세스 신청하기
                        </div>
                        {/* <div className="btn yellow">
                            문의하기
                        </div> */}
                    </div>
                </div>
                <div className="img_conainer">
                    <img src={sectionImg00} alt="" />
                </div>
            </sectoion>
            <sectoion id='sec_01'>
                <div className="img_container">
                    <img src={sectionImg01} alt="" />
                </div>
                <div className="text_container">
                    {
                        secText01.map((a, i) => {
                            return (
                                <div className="text">
                                    "{a}"
                                </div>
                            )
                        })
                    }
                </div>
            </sectoion>
            <sectoion id='sec_02'>
                <div className="text_container">
                    <div className="text">
                        <h3>Have Together의 기능을 소개합니다</h3>
                    </div>
                </div>
            </sectoion>
            <sectoion id='sec_03'>
                <div className="img_container">
                    <img src={sectionImg03} alt="" />
                </div>
                <div className="text_container">
                    <h3>멤버들이 서로 알아갈 수 있는 기회를 제공해보세요.</h3>
                    <div className="sub_text_container">
                        {
                            secText03.map((a, i) => {
                                return (
                                    <div className="sub_text">
                                        <img src={checkImg} alt="" />
                                        {a}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </sectoion>
            <sectoion id='sec_04'>
                <div className="text_container">
                    <h3>지속적으로 새로운 멤버들과 교류해 보아요</h3>
                    <div className="sub_text_container">
                        {
                            secText04.map((a, i) => {
                                return (
                                    <div className="sub_text">
                                        <img src={checkImg} alt="" />
                                        {a}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="img_container">
                    <img src={sectionImg04} alt="" />
                </div>
            </sectoion>
            <sectoion id='sec_05'>
                <div className="img_container">
                    <img src={sectionImg05} alt="" />
                </div>
                <div className="text_container">
                    <h3>지속적으로 새로운 멤버들과 교류해 보아요</h3>
                    <div className="sub_text_container">
                        {
                            secText05.map((a, i) => {
                                return (
                                    <div className="sub_text">
                                        <img src={checkImg} alt="" />
                                        {a}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </sectoion>
            <sectoion id='sec_06'>
                <div className="text_container">
                    <h3>지속적으로 새로운 멤버들과 교류해 보아요</h3>
                    <div className="sub_text_container">
                        {
                            secText06.map((a, i) => {
                                return (
                                    <div className="sub_text">
                                        <img src={checkImg} alt="" />
                                        {a}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="img_container">
                    <img src={sectionImg06} alt="" />
                </div>
            </sectoion>
            <sectoion id='sec_07'>
                <div className="text_container">
                    <h3>함께 성장하는 커뮤니티 문화를 만들어 가고 있습니다</h3>
                </div>
                <div className="img_container">
                    <img src={sectionImg07} alt="" />
                </div>
            </sectoion>
            <sectoion id='sec_08'>
                <div className="img_container">
                    <img src={sectionImg08} alt="" />
                </div>
                <div className="text_container">
                    <div className="subtitle">
                        독자적이고 성장하는 <br />
                        우리만의 커뮤니티를 원한다면
                    </div>
                    <div className="title">
                        Have Together
                    </div>
                    <div className="btn_container">
                    <div className="btn purple">
                        얼리 액세스 신청하기
                    </div>
                    </div>
                </div>
            </sectoion>
            <footer>
                <div className="footer_header">
                    <div className="text_container">
                        <div className="title">
                            주식회사 텐로코
                        </div>
                        <div className="subtitle">
                            사이트맵
                        </div>
                    </div>
                </div>
                <div className="contents">
                    <div className="sitemap">
                        <Link>사업자 정보</Link>
                        <Link>계정</Link>
                        <Link>주소</Link>
                    </div>
                    <div className="sitemap">
                        <Link>사업자 정보</Link>
                        <Link>계정</Link>
                        <Link>주소</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

// document.querySelector('#hi_my_page').style.display = "none";
$(function(){
    let location = window.location.pathname  ;
    if(location == '/'){
        $('#hi_community').css('display','none');
        $('#hi_my_page').css('display','none');
        $('#hi_my_ask').css('display','block');
        $('#hi_service').css('display','block');
        $('#hi_service').addClass('active');
    } else {
        $('#hi_community').css('display','block');
        $('#hi_my_page').css('display','block');
        $('#hi_my_ask').css('display','none');
        $('#hi_service').css('display','none');
    }
});

export default Main;