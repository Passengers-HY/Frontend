import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { outputPill } from "../../_actions/pill_action";
import { withRouter } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import HealingRoundedIcon from '@material-ui/icons/HealingRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

function UnderbarForm(props) {
  const dispatch = useDispatch();

  const [value, setValue] = useState("Home");
  
  const onCalendarHandler = (event) => {
    props.history.push("/calendar/" + props.match.params.name);
  }
  const onHealthHandler = (event) => {
    dispatch(outputPill()).then((response) => {
      console.log("백에서 get으로 받은거 출력", response.payload);
      if (response.payload != "입력된 피임약 정보 없음") {
        props.history.push("/health_show/" + props.match.params.name);
      } else {
        props.history.push("/health/" + props.match.params.name);
      }
    });
  };
  const onShoppingHandler = (event) => {
    props.history.push("/shopping/" + props.match.params.name);
  }
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
  return (
    <div
      style={{
        zIndex: "4",
        position: "fixed",
        width: "100%",
        bottom: "0px",
        backgroundColor: "white",
      }}
    >
      <div style={{ zIndex: "5" }}>
      <ThemeProvider theme={theme}>

      <BottomNavigation
          value={value}
          color='primary'

          showLabels
        >
          <BottomNavigationAction
            label="홈"
            value="Home"
            icon={<HomeRoundedIcon/>}
          />
          <BottomNavigationAction
            label="달력"
            value="Calendar"
            onClick={onCalendarHandler}
            icon={<EventRoundedIcon />}
          />
          <BottomNavigationAction
            label="건강"
            value="Health"
            onClick={onHealthHandler}
            icon={<HealingRoundedIcon />}
          />
          <BottomNavigationAction
            label="쇼핑"
            value="Shopping"
            onClick={onShoppingHandler}
            icon={<ShoppingCartRoundedIcon />}
          />
        </BottomNavigation>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default withRouter(UnderbarForm);

/*

<Link to={"/main/" + props.match.params.name}>
          <img
            src={homeIMG}
            style={{
              position: "fixed",
              left: "10%",
              bottom: "22.2px",
              width: "30.1px",
              height: "34.8px",
            }}
          />
        </Link>
        <Link to={"/calendar/" + props.match.params.name}>
          <img
            src={scheduleIMG}
            style={{
              position: "fixed",
              left: "33%",
              bottom: "22.2px",
              width: "35px",
              height: "35px",
            }}
          />
        </Link>
        <Link to={"/health/" + props.match.params.name}>
          <img
            src={pillIMG}
            style={{
              position: "fixed",
              right: "33%",
              bottom: "22.2px",
              width: "34.9px",
              height: "34.8px",
            }}
          />
        </Link>
        <Link to={"/shopping/" + props.match.params.name}>
          <img
            src={shoppingIMG}
            style={{
              position: "fixed",
              right: "10%",
              bottom: "22px",
              width: "37.6px",
              height: "35px",
            }}
          />
        </Link>

*/