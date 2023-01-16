import {Link, useNavigate} from 'react-router-dom';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser,faEllipsisVertical,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import hostPic from '../../img/host_img00.png';
import '../../css/pages/my_page/my_page_info_manager_style.scss';

function MyPageInfoManager(props){
    return(
        <div id="my_page_info_manager">
        <div id="corp_info_title">
        <div className="bg"></div>
        <div className="corp_info">
          <div className="title">
            MARU 180 & 360
          </div>
          <div className="subtitle">
            MARU는 창업가, 창업생태계 구성원이 다양한 가능성을 펼치는 기회의 공간이자 그 자체로 작지만 강한 창업생태계입니다.
          </div>
          <div className="info">
            <ul>
              <li>주소 : 서울시 강남구 역삼로 180 MARU180, 역삼로 172 MARU360</li>
              <li>마루 홈페이지 : maru.org</li>
              <li>마루 위키(입주사 전용) : bit.ly/maru-wiki</li>
              <li>마루 슬랙 : </li>
              <li>문의 : maru180@asan-nanum.org</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="pic_name_container">
          <div className="pic" style={{ backgroundImage: 'url(' + hostPic + ')' }}>

          </div>
          <div className="name_container">
            <div className="name">
              마루요정
            </div>
            <div className="sub">
              ASAN NANUM Foundation
            </div>
          </div>
        </div>
        <div className="intro">
        마루민들의 행복과 건강을 넘어 네트워킹을 만들어가는 마루요정이에요!
        </div>
        <div className="tag">
          <span className="tag_i">
            아산
          </span>
          <span className="tag_i">
            마루
          </span>
          <span className="tag_i">
            커뮤니티
          </span>
        </div>
        <div className="contact">
                <div className="contact_i" id='c_email'>
                  이메일: maru180@asan_nanum.org
                </div>
                <div className="contact_i" id='c_phone'>
                  연락처 : 010-2731-0705
                </div>
                <div className="belong_group">
                  <span className="b_g_i" id='maru180'>
                    MARU 180 / 관리자 계정
                  </span>
                </div>
              </div>
      </div>
      <div className="contents">
        <div className="title">
          커뮤니티 정보
        </div>
        <div className="input_container">
          <div className="input">
            <div className="input_title">
              <p>기업 / 기관명</p>
              <div className="input_desc">

              </div>
            </div>
            <input type="text" id='my_name' />
          </div>
          <div className="input" id='corp_picture'>
            <div className="input_title">
              <p>이미지</p>
            </div>
            <div className="btn_upload">
              <input type="file" id='upload' />
              <label htmlFor="upload">Upload</label>
              <div className="input_desc pl_50">
                *최소사이즈 1800 · 1000px
              </div>
            </div>
          </div>
          <div className="input" id='corp_belong'>
            <div className="input_title">
              <p>기업 / 기관 소재지</p>
              <div className="input_desc">
                * 매칭시에만 활용합니다.
              </div>
            </div>
            <input type="text" />
          </div>
          <div className="input" id='corp_email'>
            <div className="input_title">
              <p>기업 / 기관 이메일</p>
              <div className="input_desc">
                * 매칭시에만 활용합니다.
              </div>
            </div>
            <input type="text" />
          </div>
          <div className="input" id='corp_phone'>
            <div className="input_title">
              <p>기업 / 기관 연락처</p>
              <div className="input_desc">
              </div>
            </div>
            <input type="text" />
          </div>
          <div className="input" id='corp_introduce'>
            <div className="input_title">
              <p>기업 / 기관 소개</p>
              <div className="input_desc">

              </div>
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="input" id='url_0'>
            <div className="input_title">
              <p>소개 URL 1</p>
              <div className="input_desc">

              </div>
            </div>
            <input type="text" />
          </div>
          <div className="input" id='url_1'>
            <div className="input_title">
              <p>소개 URL 2</p>
              <div className="input_desc">

              </div>
            </div>
            <input type="text" />
          </div>
          <div className="input" id='url_2'>
            <div className="input_title">
              <p>소개 URL 3</p>
              <div className="input_desc">

              </div>
            </div>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="contents" id='profile_info'>
        <div className="title">
          프로필 정보
        </div>
        <div className="input_container">
          <div className="input">
            <div className="input_title">
              <p>이름 *</p>
              <div className="input_desc">

              </div>
            </div>
            <input type="text" id='my_name' />
          </div>
          <div className="input" id='my_picture'>
            <div className="input_title">
              <p>내 사진</p>
            </div>
            <div className="btn_upload">
              <input type="file" id='upload' />
              <label htmlFor="upload">Upload</label>
              <div className="input_desc pl_50">
                *최소사이즈 200px · 200px
              </div>
            </div>
          </div>
          <div className="input" id='email'>
            <div className="input_title">
              <p>이메일</p>
              <div className="input_desc">
                * 매칭시에만 활용합니다.
              </div>
            </div>
            <input type="text" />
          </div>
          <div className="input" id='phone'>
            <div className="input_title">
              <p>연락처</p>
              <div className="input_desc">
                * 입력하신 연락처로 푸시 알림(알림톡)을 전송합니다.
              </div>
            </div>
            <input type="text" />
          </div>
          <div className="input" id='introduce'>
            <div className="input_title">
              <p>자기소개</p>
              <div className="input_desc">

              </div>
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="input_btn">
        <div className="title">
          관심사를 알려주세요.
        </div>
        <div className="input_btn_container">
          <div className="input_btn_i">
            <span>
            스타트업
            </span>
          </div>
          <div className="input_btn_i">
            <span>
            반려동물
            </span>
          </div>
          <div className="input_btn_i">
            <span>
            재테크
            </span>
          </div>
          <div className="input_btn_i">
            <span>
            IT 기술
            </span>
          </div>
          <div className="input_btn_i">
            <span>
            여행
            </span>
          </div>
          <div className="input_btn_i">
            <span>
            시사, 이슈
            </span>
          </div>
          <div className="input_btn_i">
            <span>
            사람과 문화
            </span>
          </div>
          <div className="input_btn_i">
            <span>
            건강
            </span>
          </div>
        </div>
      </div>
      <div className="input_btn">
        <div className="title">
          취미를 알려주세요.
        </div>
        <div className="input_btn_container">
          <div className="input_btn_i">
            <span>
            운동
            </span>
          </div>
          <div className="input_btn_i">
            <span>
            요리
            </span>
          </div>
          <div className="input_btn_i">
            <span>
            맛집
            </span>
          </div>
          <div className="input_btn_i">
            <span>
            게임
            </span>
          </div>
          <div className="input_btn_i">
            <span>
            독서
            </span>
          </div>
          <div className="input_btn_i">
            <span>
            영화, 드라마
            </span>
          </div>
        </div>
      </div>
        </div>
      </div>
      <div className="contents_more">
    <div className="title">
      계정 정보
    </div>
    <div className="input_container">
    <div className="input">
          <div className="input_title" id='email'>
              <p>이메일</p>
              <div className="input_desc">
                  *입력하신 이메일 계정이 ID가 됩니다.
              </div>
          </div>
          <input type="text" id='my_name' />
        </div>
        <div className="input">
          <div className="input_title">
              <p>비밀번호 변경</p>
              <div className="input_desc">
                  
              </div>
          </div>
          <input type="text" id='my_name' />
        </div>
    </div>
  </div>
  <div className="btn_wrapper">
  <div className="btn_container" id='edit'>
        <div className="btn">
          수정하기
        </div>
      </div>
      <div className="btn_container" id='edit'>
        <div className="btn">
          수정하기
        </div>
      </div>
  </div>
      <div className="modal" id='event_edit_confirm'>
        <div className="modal_bg">
        </div>
        <div className="contents">
          <div className="title">
            이벤트 정보 수정
          </div>
          <div className="desc">
            정보 수정을 완료할까요? <br />
            완료 후 이벤트 상세보기 페이지로 이동합니다.
            <div className="time">

            </div>
          </div>
          <div className="btn_wrapper">
            <div className="btn" id='btn_continue'>수정 계속하기</div>
            <div className="btn" id='btn_complete'>수정 완료</div>
          </div>
        </div>
      </div>
      <div className="modal" id='meetup_join'>
        <div className="modal_bg">
        </div>
        <div className="contents">
          <div className="title">
            MARU Meet Up
          </div>
          <div className="time">
            <div className="period">
              참가 신청기간 : 2022. 10. 17(월) ~19(수)
            </div>
            <div className="result">
              매칭결과 안내 : 2022. 10. 20(목)
            </div>
          </div>
          <div className="line">

          </div>
          <div className="desc">
            입력하신 관심사 정보를 기반으로 매칭을 진행합니다.
          </div>
          <div className="content_title" id='mj_ct_00'>
            만나고 싶은 시간을 알려주세요.
          </div>
          <div className="day_week_wrapper">
            <div className="day_week" id='monday'>
              MM.DD
              <span>월요일</span>
            </div>
            <div className="day_week" id='tuesday'>
              MM.DD
              <span>화요일</span>
            </div>
            <div className="day_week" id='wednesday'>
              MM.DD
              <span>수요일</span>
            </div>
            <div className="day_week" id='thursday'>
              MM.DD
              <span>목요일</span>
            </div>
            <div className="day_week" id='friday'>
              MM.DD
              <span>금요일</span>
            </div>
          </div>
          <div className="time_week_wrapper">
            <div className="time_week" id='m_11'>
              11:30
            </div>
            <div className="time_week" id='m_12'>
              12:00
            </div>
            <div className="time_week" id='t_11'>
              11:30
            </div>
            <div className="time_week" id='t_12'>
              12:00
            </div>
            <div className="time_week" id='w_11'>
              11:30
            </div>
            <div className="time_week" id='w_12'>
              12:00
            </div>
            <div className="time_week" id='th_11'>
              11:30
            </div>
            <div className="time_week" id='th_12'>
              12:00
            </div>
            <div className="time_week" id='f_11'>
              11:30
            </div>
            <div className="time_week" id='f_12'>
              12:00
            </div>
          </div>
          <div className="content_title" id='mj_ct_01'>
            관심사, 취미를 알려주세요
          </div>
          <div className="hobbies_wrapper">
            <div className="hobby_wrapper" id='mj_hw_00'>
              <span className="hobby">
                신문물
              </span>
              <span className="hobby">
                운동
              </span>
              <span className="hobby">
                반려동물
              </span>
              <span className="hobby">
                독서
              </span>
              <span className="hobby">
                자기계발
              </span>
            </div>
            <div className="hobby_wrapper" id='mj_hw_01'>
              <span className="hobby">
                외국어
              </span>
              <span className="hobby">
                맛집
              </span>
              <span className="hobby">
                여행
              </span>
              <span className="hobby">
                음악
              </span>
              <span className="hobby">
                공연
              </span>
              <span className="hobby">
                영화
              </span>
            </div>
            <div className="hobby_wrapper" id='mj_hw_02'>
              <span className="hobby">
                커피
              </span>
              <span className="hobby">
                맛집
              </span>
              <span className="hobby">
                주식
              </span>
              <span className="hobby">
                투자
              </span>
            </div>
          </div>
          <div className="guide">
            회원가입시 입력하신 관심사를 표기했습니다. <br />
            변경하신 정보는 저장되며 다음 참가신청시에 표기됩니다.
          </div>
          <div className="btn_wrapper">
            <div className="btn" id='btn_cancel'>취소</div>
            <div className="btn" id='btn_join'>참가하기</div>
          </div>
        </div>
      </div>
      <div className="modal" id='meetup_confirm'>
        <div className="modal_bg"></div>
        <div className="contents">
          <div className="title">
            MARU Meet Up
          </div>
          <div className="desc">
            참가신청을 완료했습니다. 매칭이 완료되면 안내드리겠습니다. <br />
            * 매칭결과 안내 : <span>2022. 10. 20(목)</span>
          </div>
          <div className="line"></div>
          <div className="content_title" id='mc_ct_00'>
            선택하신 요일, 시간
          </div>
          <div className="day_week_wrapper">
            <div className="day_week" id='monday'>
              MM.DD
              <span>월요일</span>
            </div>
            <div className="day_week" id='tuesday'>
              MM.DD
              <span>화요일</span>
            </div>
            <div className="day_week" id='wednesday'>
              MM.DD
              <span>수요일</span>
            </div>
            <div className="day_week" id='thursday'>
              MM.DD
              <span>목요일</span>
            </div>
            <div className="day_week" id='friday'>
              MM.DD
              <span>금요일</span>
            </div>
          </div>
          <div className="time_week_wrapper">
            <div className="time_week active" id='m_11'>
              11:30
            </div>
            <div className="time_week" id='m_12'>
              12:00
            </div>
            <div className="time_week" id='t_11'>
              11:30
            </div>
            <div className="time_week" id='t_12'>
              12:00
            </div>
            <div className="time_week" id='w_11'>
              11:30
            </div>
            <div className="time_week active" id='w_12'>
              12:00
            </div>
            <div className="time_week" id='th_11'>
              11:30
            </div>
            <div className="time_week" id='th_12'>
              12:00
            </div>
            <div className="time_week" id='f_11'>
              11:30
            </div>
            <div className="time_week" id='f_12'>
              12:00
            </div>
          </div>
          <div className="content_title" id='mc_ct_01'>
            선택하신 관심사, 취미
          </div>
          <div className="hobbies_wrapper">
            <div className="hobby_wrapper" id='mc_hw_00'>
              <span className="hobby">
                운동
              </span>
              <span className="hobby">
                음악
              </span>
              <span className="hobby">
                자기계발
              </span>
              <span className="hobby">
                맛집
              </span>
            </div>
          </div>
          <div className="btn_wrapper">
            <div className="btn">
              수정하기
            </div>
            <div className="btn">
              확인
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id='meetup_cancel'>
        <div className="modal_bg"></div>
        <div className="contents">
          <div className="title">
            MARU Meet Up
          </div>
          <div className="desc">
            참가를 취소하시겠습니까? <br />
            <span>(마루민)</span>님을 기다리고 있는데, 아쉬워요!
          </div>
          <div className="btn_wrapper">
            <div className="btn" id='btn_join_cancel'>
              참가 취소하기
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id='meetup_fail'>
        <div className="modal_bg"></div>
        <div className="contents">
          <div className="title">
            매칭 결과 안내
          </div>
          <div className="desc">
            비슷한 시간대, 관심사로 매칭할 수 있는 멤버가 없어 매칭하지 못했습니다. <br />
            아쉬운 소식을 전해드려 죄송합니다
          </div>
          <div className="btn_wrapper">
            <div className="btn" id='btn_join_cancel'>
              확인
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default MyPageInfoManager;