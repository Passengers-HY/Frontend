import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { outputPill } from "../../_actions/pill_action";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Checkbox from "@material-ui/core/Checkbox";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import Typography from "@material-ui/core/Typography";
import { FiChevronDown } from "react-icons/fi";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

function MediForm(props) {
  const dispatch = useDispatch();
  const [isColor, setColor] = useState("");
  const [isState, setState] = useState("");

  const onColorHandler = (event) => {
    setColor(event.currentTarget.value);
  };
  const onStateHandler = (event) => {
    setState(event.currentTarget.value);
  };
  const onClickHandler = (event) => {
    dispatch(outputPill()).then((response) => {
      console.log("백에서 get으로 받은거 출력", response.payload);
      if (response.payload != "입력된 피임약 정보 없음") {
        props.history.push("/health_show/" + props.match.params.name +"/" + props.match.params.id);
      } else {
        props.history.push("/health/" + props.match.params.name +"/" + props.match.params.id);
      }
    });
  };
  const vagiDisplay = () => {
    if (document.getElementById("vaginitis").style.display === "none") {
      document.getElementById("vaginitis").style.display = "block";
    } else {
      document.getElementById("vaginitis").style.display = "none";
    }
  };
  const bleedDisplay = () => {
    if (document.getElementById("bleedcolor").style.display === "none") {
      document.getElementById("bleedcolor").style.display = "block";
    } else {
      document.getElementById("bleedcolor").style.display = "none";
    }
  };
  const myomaDisplay = () => {
    if (document.getElementById("myoma").style.display === "none") {
      document.getElementById("myoma").style.display = "block";
    } else {
      document.getElementById("myoma").style.display = "none";
    }
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  function findBleed() {
    var bleed = document.getElementsByName("checkbleed");
    var cnt = 0;

    for (var i = 0; i < bleed.length; i++) {
      if (bleed[i].checked) {
        cnt = cnt + Number(bleed[i].value);
      }
    }

    if (cnt === 1) {
      document.getElementById("color1").style.display = "block";
    } else if (cnt === 2) {
      document.getElementById("color2").style.display = "block";
    } else if (cnt === 3) {
      document.getElementById("color3").style.display = "block";
    } else if (cnt === 4) {
      document.getElementById("color4").style.display = "block";
    } else if (cnt === 5) {
      document.getElementById("color5").style.display = "block";
    } else if (cnt === 6) {
      document.getElementById("color6").style.display = "block";
    }
  }
  function findState() {
    var state = document.getElementsByName("checkstate");
    var cnt = 0;

    for (var i = 0; i < state.length; i++) {
      if (state[i].checked) {
        cnt = cnt + Number(state[i].value);
      }
    }

    if (cnt === 1) {
      document.getElementById("state1").style.display = "block";
    } else if (cnt === 2) {
      document.getElementById("state2").style.display = "block";
    } else if (cnt === 3) {
      document.getElementById("state3").style.display = "block";
    }
  }
  function findVagi() {
    var vaginitis = document.getElementsByName("checkvagi");
    var cnt = 0;
    for (var i = 0; i < vaginitis.length; i++) {
      if (vaginitis[i].checked) {
        cnt = cnt + Number(vaginitis[i].value);
      }
    }

    if (cnt >= 0 && cnt <= 5) {
      document.getElementById("cnt1").style.display = "block";
    } else if (cnt >= 6 && cnt <= 10) {
      document.getElementById("cnt2").style.display = "block";
      /*alert(
        "당신의 질염 점수는 " +
          cnt +
          "점 입니다. 질염 진행이 의심됩니다. 아랫배를 따뜻하게 해주면 증상 개선에 도움이 됩니다. 증상이 심해진다고 판단될 경우, 가까운 병원에 내원하시길 권해드립니다."
      );*/
      console.log("점수 체크 완료");
    } else {
      document.getElementById("cnt3").style.display = "block";
      /* alert(
        "당신의 질염 점수는 " +
          cnt +
          "점 입니다. 질염 경고 단계입니다. 가까운 산부인과에 내원해 치료를 받으시길 권해드립니다."
      );*/
      console.log("점수 체크 완료");
    }
  }
  function findMyoma() {
    var myoma = document.getElementsByName("checkmyoma");
    var cnt = 0;
    for (var i = 0; i < myoma.length; i++) {
      if (myoma[i].checked) {
        cnt = cnt + Number(myoma[i].value);
      }
    }

    if (cnt >= 5) {
      document.getElementById("warning").style.display = "block";
    } else {
      document.getElementById("pass").style.display = "block";
    }
  }

  const [open, setOpen] = React.useState(true);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#28293c",
      },
      secondary: {
        main: "#c8bbb3",
      },
    },
  });

  const theme2 = createMuiTheme({
    palette: {
      primary: {
        main: "#f8bbd0",
      },
      secondary: {
        main: "#d50000",
      },
    },
  });

  const theme3 = createMuiTheme({
    palette: {
      primary: {
        main: "#880e4f",
      },
      secondary: {
        main: "#bf360c",
      },
    },
  });
  const theme4 = createMuiTheme({
    palette: {
      primary: {
        main: "#4e342e",
      },
      secondary: {
        main: "#212121",
      },
    },
  });

  return (
    <div style={{position:'relative', paddingBottom:'1px'}}>
      <Collapse
        in={open}
        id="cnt1"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("cnt1").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          질염 증상은 없지만, 앞으로도 잘 관리하시길 권해드립니다.
        </Alert>
      </Collapse>
      <Collapse
        in={open}
        id="cnt2"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="info"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("cnt2").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          질염 진행이 의심됩니다. 아랫배를 따뜻하게 해주면 증상 개선에 도움이
          됩니다. 증상이 심해진다고 판단될 경우, 가까운 병원에 내원하시길
          권해드립니다.
        </Alert>
      </Collapse>
      <Collapse
        in={open}
        id="cnt3"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="warning"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("cnt3").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          질염 경고 단계입니다. 가까운 산부인과에 내원해 치료를 받으시길
          권해드립니다.
        </Alert>
      </Collapse>
      <Collapse
        in={open}
        id="color1"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="info"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("color1").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          생리 초기에는 생리혈이 선분홍색을 띌 수 있지만 생리 기간 중 핑크빛을
          보인다면 내부손상, 성병 또는 호르몬 변화 등 건강 상의 문제가 있을 수
          있으므로 산부인과 진단이 필요해요. 또한, 생리 기간 외 이러한 출혈이
          있다면 자궁염증 혹은 임신 가능성이 있으므로 정확한 검사를 위해 병원을
          꼭 방문해주세요!
        </Alert>
      </Collapse>
      <Collapse
        in={open}
        id="color2"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="info"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("color2").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          흔한 생리혈 색깔로, 호르몬 수치가 적당하고 혈액순환이 원활할 경우 밝은
          빨간색의 생리혈이 나타나요. 그러나 지나치게 밝은 분홍빛을 띈다면
          에스트로겐 수치의 문제일수도 있어요. 다이어트 또한 과도한 알코올
          섭취로도 나타날 수 있어요.
        </Alert>
      </Collapse>
      <Collapse
        in={open}
        id="color3"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="info"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("color3").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          생리량이 많을 경우 어두운 자주색의 덩어리 혈로 보일 수 있어요. 그러나
          타인과 비교했을 때, 자주 생리대를 교체해야할 정도로 생리혈이
          배출된다면 자궁근종, 자궁선근증 등 여성 질환의 신호일 수 있으므로
          주의해주세요!
        </Alert>
      </Collapse>
      <Collapse
        in={open}
        id="color4"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="info"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("color4").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          질염에 감염되었을 가능성이 높다고 볼 수 있어요. 질염은 흔한 질병이지만
          방치하게 되면 더 큰 질병 또는 다른 질병을 야기하고 확대시킬 수
          있답니다! 질염이 심각하지 않다고 가볍게 생각하지 말고 초기에 병원을
          찾는 것이 좋아요.
        </Alert>
      </Collapse>
      <Collapse
        in={open}
        id="color5"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="info"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("color5").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          오래된 생리혈이 나오는 것일 수 있으므로 생리 첫날 또는 끝자락 즈음
          이라면 걱정하지 않아도 돼요! 그러나 생리 기간 중 진한 갈색의 생리혈이
          나온다면 이는 부정출혈로 자궁근종 또는 자궁내막증일 수 있어요.
        </Alert>
      </Collapse>
      <Collapse
        in={open}
        id="color6"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="info"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("color6").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          생리가 끝나갈 때쯤, 또는 생리양이 많은 3-4일 경에 검은색을 띄는
          생리혈이 나올 수 있어요. 그러나 이 상태가 오래 지속된다면 자궁근종을
          의심해 볼 수 있어요.
        </Alert>
      </Collapse>

      <Collapse
        in={open}
        id="state1"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="info"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("state1").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          생리량이 갑자기 늘었을 경우, 스트레스가 심했나 보다, 하고 넘어가서는
          안됩니다! 생리량이 급격하게 많이 늘었다면, 자궁근종을 의심해볼 수
          있습니다. 그냥 넘겼다가 병을 키울 수도 있으니 꼭 산부인과에 방문하여
          검사를 받아보시는 것이 좋습니다!
        </Alert>
      </Collapse>

      <Collapse
        in={open}
        id="state2"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="info"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("state2").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          배란기가 지나면 자궁내막의 두께는 8mm 이상으로 두꺼워져야 하는데
          그렇지 않은 경우에는 생리량이 적어지게 됩니다. 자궁내막이 8mm 이상으로
          성장하지 않으면 수정 후 착상에 지장을 줄 수 있기 때문에 임신에 안 좋은
          영향을 끼칠 수 있으니 꼭 기억해 주세요!
        </Alert>
      </Collapse>

      <Collapse
        in={open}
        id="state3"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="info"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("state3").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          생리할 때 나오는 핏덩이를 한방에서는 어혈이라고 불러요. 심한 스트레스
          등으로 혈액과 기 순환이 잘 되지 않아서 생기는 것으로 핏덩이가 많이
          나오는 분들은 하복냉증이나 생리통이 심할 가능성이 커요. 몸을 따뜻하게
          해주고 혈액순환이 잘 되도록 스트레칭이나 가벼운 산책 등 규칙적으로
          운동하는 것이 자궁건강과 내 몸 건강에 좋아요!
        </Alert>
      </Collapse>

      <Collapse
        in={open}
        id="warning"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          severity="warning"
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("warning").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          자궁근종 자가 진단 항목에서 다섯 개 이상 해당된다면 자궁근종이나 그 외
          자궁질환이 있을 가능성이 크며 이런 경우에는 반드시 빠른 시일 내에
          병원을 찾아 자궁질환이 있지는 않은지 검진 후 적절한 치료를 받아야
          해요. 평소 자궁 건강을 지키고 싶다면 하복부를 따뜻하게 하고, 짧거나
          타이트한 하의는 되도록 피하는 것이 좋아요. 또한 평소에도 차가운
          음식보다는 따뜻한 음식을 섭취하도록 하며, 꾸준히 운동을 하되 수영은
          되도록 피해야해요.
        </Alert>
      </Collapse>

      <Collapse
        in={open}
        id="pass"
        style={{
          position: "fixed",
          width: "100%",
          display: "none",
          zIndex: "50",
          top: "0",
        }}
      >
        <Alert
          style={{ margin: "5px" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                document.getElementById("pass").style.display = "none";
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          자궁근종 자가진단에서 5개 미만이 해당된다면 자궁근종이 아닐 확률이
          높아요. 그러나 보다 정확한 판단을 위해 다른 증세가 생길 시 병원에서
          검진을 받으시길 권해드려요.
        </Alert>
      </Collapse>

      <div style={{ margin: "auto", width: "80%" }}>
        <div
          style={{
            position: "relative",
            zIndex: "2",
            marginTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "60%",
            height: "50px",
            // textAlign:'center',
            lineHeight: "50px",
          }}
        >
          <span
            onClick={onClickHandler}
            style={{
              borderTopLeftRadius: "23px",
              borderBottomLeftRadius: "23px",
              display: "block",
              float: "left",
              width: "50%",
              textAlign: "center",
              border: "solid 1px #707070",
              backgroundColor: "#ffffff",
              fontSize: "17px",
              boxSizing: "border-box",
            }}
          >
            약
          </span>
          <span
            style={{
              borderTopRightRadius: "23px",
              borderBottomRightRadius: "23px",
              display: "block",
              float: "right",
              width: "50%",
              textAlign: "center",
              border: "solid 1px #707070",
              fontSize: "17px",
              color: "#ffffff",
              backgroundColor: "#28293c",
              boxSizing: "border-box",
            }}
          >
            자가 진단
          </span>
        </div>
        <div
          style={{
            padding: "20px",
            paddingTop: "40px",
            position: "relative",
            top: "-29px",
            zIndex: "1",
            borderRadius: "30px",
            boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
            backgroudnColor: "#f9f7f7",
            backgroundColor: "#eeeeee",
            marginBottom: "100px",
            fontSize: "17px",
            lineHeight: "2",
          }}
        >
          <div
            style={{
              lineHeight: "1.5",
              fontSize: "15px",
              color: "gray",
              marginBottom: "1rem",
            }}
          >
            보름달에서 제공하는 자가 진단법은 비교적 정확하지만, 자가진단만으로
            질병의 유무는 100% 확신할 수 없어요. 이에 평소와 다른 이상 증세나
            통증이 느껴진다면 산부인과나 내과에 직접 찾아 전문의에게 진료를 받는
            것이 좋아요.
          </div>
          <ThemeProvider theme={theme}>
            <div>
              <span onClick={vagiDisplay}>
              👩‍⚕️ 질염 자가 진단
                <FiChevronDown />
              </span>

              <div id="vaginitis" style={{ display: "none" }}>
                <form onSubmit={onSubmitHandler}>
                  <Checkbox
                    name="checkvagi"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  평상시보다 분비물의 양이 눈에 띄게 늘었다. <br />
                  <Checkbox
                    name="checkvagi"
                    value={2}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  평소와 다른 냄새가 나는 것 같아 신경이 쓰인다. <br />
                  <Checkbox
                    name="checkvagi"
                    value={2}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  색깔이 평소와 다른 분비물이 나온다. <br />
                  <Checkbox
                    name="checkvagi"
                    value={3}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  자주 가렵거나 따갑다. <br />
                  <Checkbox
                    name="checkvagi"
                    value={4}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  소변 볼 때나 성관계시 통증을 느낀다. <br />
                  <Checkbox
                    name="checkvagi"
                    value={5}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  때로 심한 냄새가 난다. <br />
                  <Checkbox
                    name="checkvagi"
                    value={5}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  화끈거리는 느낌이 날 때가 있다. <br />
                  <Checkbox
                    name="checkvagi"
                    value={2}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  가렵거나 따가운 증상을 이전에 경험해본 적이 있다. <br />
                  <div style={{ textAlign: "center" }}>
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={findVagi}
                      color="primary"
                      size="small"
                      style={{
                        width: "40%",
                        marginTop: "1rem",
                        fontFamily: "IBMPlexSansKR-Regular",
                      }}
                    >
                      결과확인
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </ThemeProvider>

          <div style={{ marginTop: "1rem" }}>
            <span onClick={bleedDisplay}>
            👩‍⚕️ 생리혈 자가 진단
              <FiChevronDown />
            </span>
            <div id="bleedcolor" style={{ display: "none" }}>
              <form onSubmit={onSubmitHandler}>
                <FormControl component="fieldset">
                  <ThemeProvider theme={theme}>
                    <FormLabel
                      color="primary"
                      component="legend"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    >
                      생리혈 색깔
                    </FormLabel>
                  </ThemeProvider>
                  <RadioGroup
                    row
                    aria-label="protection"
                    name="checkbleed"
                    defaultValue="top"
                    onChange={onColorHandler}
                  >
                    <ThemeProvider theme={theme2}>
                      <FormControlLabel
                        value="1"
                        control={<Radio size="small" color="primary" />}
                        label="선분홍색"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio size="small" color="secondary" />}
                        label="밝은 빨간색"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                    </ThemeProvider>
                    <ThemeProvider theme={theme3}>
                      <FormControlLabel
                        value="3"
                        control={<Radio size="small" color="primary" />}
                        label="어두운 자주색"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio size="small" color="secondary" />}
                        label="주황빛"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                    </ThemeProvider>
                    <ThemeProvider theme={theme4}>
                      <FormControlLabel
                        value="5"
                        control={<Radio size="small" color="primary" />}
                        label="진한 갈색"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="6"
                        control={<Radio size="small" color="secondary" />}
                        label="검은색"
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                    </ThemeProvider>
                  </RadioGroup>
                </FormControl>

                <div style={{ textAlign: "center" }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={findBleed}
                      color="primary"
                      size="small"
                      style={{
                        width: "40%",
                        marginTop: "1rem",
                        fontFamily: "IBMPlexSansKR-Regular",
                        marginBottom: "2rem",
                      }}
                    >
                      결과확인
                    </Button>
                  </ThemeProvider>
                </div>
              </form>

              <form onSubmit={onSubmitHandler}>
                <ThemeProvider theme={theme}>
                  <FormControl component="fieldset">
                    <FormLabel
                      color="primary"
                      component="legend"
                      style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                    >
                      생리혈 상태
                      <p>
                        생리대 양으로 따져보면, 하루에 생리대 5개 정도를
                        사용하는 것이 정상적인 생리의 양이라고 볼 수 있습니다.
                      </p>
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="protection"
                      name="checkstate"
                      defaultValue="top"
                      onChange={onStateHandler}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio size="small" color="primary" />}
                        label="생리량이 갑자기 많아졌다."
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio size="small" color="primary" />}
                        label="생리량이 너무 적다."
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio size="small" color="primary" />}
                        label="생리할 때 핏덩어리가 나온다."
                        style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                      />
                    </RadioGroup>
                  </FormControl>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={findState}
                      color="primary"
                      size="small"
                      style={{
                        width: "40%",
                        marginTop: "1rem",
                        fontFamily: "IBMPlexSansKR-Regular",
                        marginBottom: "2rem",
                      }}
                    >
                      결과확인
                    </Button>
                  </div>
                </ThemeProvider>
              </form>
            </div>
          </div>

          <ThemeProvider theme={theme}>
            <div style={{ marginTop: "1rem" }}>
              <span onClick={myomaDisplay}>
                👩‍⚕️ 자궁근종 자가 진단
                <FiChevronDown />
              </span>

              <div id="myoma" style={{ display: "none" }}>
                <form onSubmit={onSubmitHandler}>
                  <FormLabel
                    color="primary"
                    component="legend"
                    style={{ fontFamily: "IBMPlexSansKR-Regular" }}
                  >
                    <p>
                      자궁근종은 가임기 여성 누구에게나 생길 수 있는
                      양성종양으로 반드시 치료가 필요한 질병은 아니예요. 하지만
                      발생위치와 근종 크기에 따라 여러 가지 불편한 증상들을
                      유발해요. 또, 최악의 경우, 자궁근종을 방치하게 되면 임신
                      후 유산의 확률을 높일 수 있으며, 크기가 크거나 위치가 좋지
                      않을 경우에는 자궁을 적출하는 수술을 받아야하는 가능성도
                      염두에 두어야해요.
                    </p>
                  </FormLabel>
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  생리통이 있거나 점차 심해진다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  생리통의 기간이 점점 길어진다. (생리 전 혹은 생리 후까지
                  통증이 이어지는 경우)
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  생리량이 많아지고 큰 덩어리가 보인다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  아랫배가 묵직하고 가스가 잘 차는 편이다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  변비가 있거나 잔뇨감이 있고 소변을 자주 본다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  생리 기간 외에 골반통이나 요통이 있다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  식사량에 상관없이 하복부에 살이 찐 편이다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  결혼 후 특별한 피임 없이도 임신이 어렵다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  임신 후 유산이 된 경험이 있다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  인터넷 사용이 많은 편이다. (하루 4시간 이상)
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  40대 이상이며 성경험이 없다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  성생활을 일찍 시작한 편이다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  어깨 통증이 잦고 몸이 쑤시고 아프다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  생리전후에 피부 트러블이 심하다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  임의로 피임약이나 진통제 등을 보름 이상 복용한 경험이 있다.
                  <br />
                  <Checkbox
                    name="checkmyoma"
                    value={1}
                    color="primary"
                    size="small"
                    style={{ padding: "0", marginRight: "10px" }}
                  />
                  스트레스를 많이 받고 예민한 편이다.
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={findMyoma}
                      color="primary"
                      size="small"
                      style={{
                        width: "40%",
                        marginTop: "1rem",
                        fontFamily: "IBMPlexSansKR-Regular",
                      }}
                    >
                      결과확인
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MediForm);

//성병 자가 진단 넣을건지...
/*<div>
          <span onClick={venerealDisplay}>🩹 성병 자가 진단</span>
          <div id="venereal" style={{ display: "none" }}>
            <form>
              <input type="radio" />
              성병
              <br />
              <input type="radio" />
              성병
              <br />
              <input type="radio" />
              성병
              <br />
              <input type="radio" />
              성병
              <br />
              <button type="submit" >하이</button>
            </form>
          </div>
        </div>*/
