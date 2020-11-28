import React from 'react';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

function AlarmForm(props) {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var Time;

    if (min<10) {
      min = '0'+min;
    }
    
    if ( hour <= 12  &&  hour  >= 6 ) {

      Time= '오전 ' + hour + ':' + min;

    } else if (  hour >= 12  &&  hour  < 22  ) {
      hour=hour-12;
      Time='오후 ' + hour + ':' + min;

    } else if ( hour >= 22  &&  hour  <= 24  ) {
      hour=hour-12;
      Time='밤 ' + hour + ':' + min;

    } else {

      Time='새벽 '+ hour + ':' + min;

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
    return(
        <ThemeProvider theme={theme}>
        <div className="page"
        style={{
            width:'100%', 
            height:'100%'
        }}>
          
        <div style={{textAlign:'center', position: "absolute",
          top: "30%",
          bottom: "0",
          right: "0",
          left: "0",}}>
            <div style={{fontSize:'60px'}}>{Time}</div>
            {props.match.params.name}님, 피임약 복용할 시간입니다. <br/>
            <br/>
            <Button variant="contained" color="primary" size="big" style={{width:'40%', borderRadius:'40px'}}>
        중단
      </Button>
        </div>
        </div>
        </ThemeProvider>
    );
}
export default withRouter(AlarmForm);