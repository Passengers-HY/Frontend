# Frontend

#### 설치 방법
```
$ npm install
$ npm run build
```
build 파일 백엔드에 추가


* #### 초기 페이지
![](https://images.velog.io/images/passengers/post/a74d1fe0-9c30-4aca-b2fa-b6fb983cb7f6/image.png)
&nbsp;&nbsp;&nbsp;&nbsp;앱 아이콘을 클릭하면 1초 동안 진입 화면이 실행된 후 로그인 화면으로 이동한다. </br>
&nbsp;&nbsp;&nbsp;&nbsp;이미 계정이 있는 사람은 로그인 해서 서비스를 이용할 수 있고, 계정이 없는 사람은 회원가입 버튼을 통해 회원가입 페이지로 이동할 수 있다.</br>
&nbsp;&nbsp;&nbsp;&nbsp;아이디나 비밀번호를 잊은 사람은 하단의 '계정을 잊어버리셨나요?' 버튼을 눌러, 계정을 찾을 수 있다. 


* #### 회원가입 페이지
![](https://images.velog.io/images/passengers/post/719fbf7d-ef5f-4f83-8991-259dbc5dd358/image.png)
&nbsp;&nbsp;&nbsp;&nbsp;계정이 없는 사람이 새로 계정을 생성할 수 있는 회원가입 화면이다. 이름, 이메일, 비밀번호, 비밀번호 확인, 평균 주기가 필수 입력 요소이다. 생년월일은 달력 포맷에서 선택할 수 있으며, 키와 몸무게는 숫자만 입력할 수 있다. 사용자의 증상과 상태를 고려한 진통제 추천을 위해서 술을 즐기는지, 위장장애가 있는지도 확인한다. </br>
&nbsp;&nbsp;&nbsp;&nbsp;오류 없이 모든 필수 입력 요소를 채우고 회원가입 버튼을 누르면 알림과 함께 회원가입이 완료된다. </br>


* #### 메인 페이지 및 날짜 디테일 기록 페이지
![](https://images.velog.io/images/passengers/post/d1d73dfc-ee1d-4599-ac9f-e1bd5b94da8f/image.png)
&nbsp;&nbsp;&nbsp;&nbsp;로그인이 완료되면 생리 주기를 확인할 수 있는 메인 페이지로 이동한다. 큰 원에서 사용자는 다가오는 생리 주기, 진행중인 생리 주기, 다가오는 배란일 등을 확인할 수 있고, 큰 원을 클릭하면 날짜에 대한 자세한 기록을 할 수 있는 날짜 디테일 화면으로 이동한다.</br>
&nbsp;&nbsp;&nbsp;&nbsp;날짜 디테일 화면에서는 생리 여부, 피임약 복용 여부, 관계 여부, 몸 상태, 기분 등을 기록할 수 있고 메모란을 활용해 간단히 일기를 쓰는 등 기록을 남길 수 있다.</br>
&nbsp;&nbsp;&nbsp;&nbsp;원 밑에서는 사용자에게 도움이 되는 말 한 마디와, 누구스피커를 사용할 때 필요한 누구 스피커 아이디를 확인할 수 있다. </br> 
&nbsp;&nbsp;&nbsp;&nbsp;상단에서 로그인된 계정의 정보를 확인하거나, 우측의 버튼을 눌러 로그아웃 할 수 있다. 하단의 '홈' '달력' '건강' '쇼핑' 버튼을 클릭해 각각의 페이지로 이동할 수 있다.


* #### 달력 페이지
![](https://images.velog.io/images/passengers/post/39b55167-a9a0-4d8a-a4fc-fec76b089b0e/image.png)
&nbsp;&nbsp;&nbsp;&nbsp;사용자가 자신의 전체적인 생리 주기를 확인할 수 있는 달력 페이지이다. 이번달의 생리일은 빨간색으로, 배란일은 파란색으로 보여준다. 인공지능이 예상한 다음 생리 예정일은 핑크색으로 나타난다.  </br>
&nbsp;&nbsp;&nbsp;&nbsp;날짜를 선택해 해당 날짜의 디테일 페이지로 이동할 수 있다. 오늘 이후의 날은 디테일을 기록할 수 없다. 사용자가 날짜 디테일 페이지에서 기록한 '몸 상태'는 인공지능이 사용자에게 진통제를 추천해 주는 데 사용된다. 회원가입 시 입력한 음주 여부, 위장 장애 여부와 증상을 고려하여 가장 빨리 효과가 나타나고, 가장 부작용이 적은 진통제를 추천해준다. </br>
&nbsp;&nbsp;&nbsp;&nbsp;달력의 '월'이나 '년' 부분을 클릭하면 다른 월이나 연도로 편하게 이동할 수 있다. 달력은 1901년 부터 볼 수 있다.  


* #### 건강 페이지 중 약 페이지
![](https://images.velog.io/images/passengers/post/07d4d0dd-d536-47ea-89df-3364aa88d54d/image.png)
&nbsp;&nbsp;&nbsp;&nbsp;다음은 건강 페이지이다. 건강 페이지는 약, 자가진단 두 탭으로 이루어져 있는데 각 탭에서 사용자는 복용 중인 피임약을 설정하거나, 몇 가지 질병에 대한 간단한 자가진단을 실시할 수 있다.</br>
&nbsp;&nbsp;&nbsp;&nbsp;약 탭에서 사용자는 피임약 알람을 설정할 수 있다. 복용을 시작할 날짜, 종료할 날짜, 복용 시간을 설정하면 매일 설정한 시간에 약을 복용해야 한다고 알려준다. 복용 시작 날짜와 복용 시간은 필수 입력 요소이며, 복용 종료 날짜는 설정하지 않을 시 자동으로 180일 뒤로 설정된다. </br>
&nbsp;&nbsp;&nbsp;&nbsp;달력 디테일 페이지에서 입력한 복용 여부를 확인하여 오늘 피임약을 복용 했는지 여부도 확인할 수 있다. 복용 설정한 약이 없다면 '복용 중인 피임약이 없습니다' 라고만 알려준다.


* #### 건강 페이지 중 자가 진단 페이지 
![](https://images.velog.io/images/passengers/post/5395925c-d3ab-43fe-a453-345e5cb298c4/image.png)
&nbsp;&nbsp;&nbsp;&nbsp;자가 진단 탭에서 사용자는 질염, 자궁근종, 생리혈에 대한 자가진단을 할 수 있다. </br>
&nbsp;&nbsp;&nbsp;&nbsp;질염 자가진단은 총 8개의 질문으로 이루어져있는데, 각각의 질문은 1점부터 5점까지의 점수를 가지고, 점수의 총합으로 사용자의 질염 여부를 판단한다.</br>
&nbsp;&nbsp;&nbsp;&nbsp;자궁근종은 16개의 질문을 통해 사용자의 자궁근종 의심 여부를 검사한다. </br>
&nbsp;&nbsp;&nbsp;&nbsp;생리혈 자가진단은 식품의약품안전처의 기준에 따라 생리혈의 색이나 상태로 사용자의 건강상태를 확인한다.</br>
&nbsp;&nbsp;&nbsp;&nbsp;사용자가 의심 질병이 있다면, 병원에 내원하는 것이 가장 이상적이나 자가진단을 통해 사용자는 미리 자신의 상태를 알고 예방할 수 있다.  


* #### 11번가 쇼핑 페이지 
![](https://images.velog.io/images/passengers/post/18343e0b-6a0d-4c76-bcee-383b4ee209c9/%EC%BA%A1%EC%B2%98.PNG)
&nbsp;&nbsp;&nbsp;&nbsp;사용자는 보름달 어플리케이션에서 11번가에 접속해 쇼핑할 수 있다. 물론 생리대 등 생리 기간에 필요한 용품도 쇼핑할 수 있고, 모든 기능을 11번가 어플과 동일하게 사용 가능하다. 
