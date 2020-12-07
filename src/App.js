import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CalendarPage from "./pages/CalendarPage";
import EntryPage from "./pages/EntryPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage"
import HealthPage from "./pages/HealthPage";
import ShoppingPage from "./pages/ShoppingPage";
import RegisterPage from "./pages/RegisterPage";
import CalendarPage_Detail from './pages/CalendarPage_Detail';
import HealthPage_Medi from './pages/HealthPage_Medi';
import AlarmPage from './pages/AlarmPage';
import CalendarPage_Today from './pages/CalendarPage_Today';
import CalendarPage_Show from './pages/CalendarPage_Show';
import CalendarPage_Edit from './pages/CalendarPage_Edit';
import HealthPage_Show from './pages/HealthPage_Show';

const App = () => {
  return (
      <>
      <Switch>
        <Route path="/calendar_edit/:name/:date/:id" component={CalendarPage_Edit} />
        <Route path="/calendar_edit" component={CalendarPage_Edit} />
        <Route path="/calendar_today/:name/:date/:id" component={CalendarPage_Today} />
        <Route path="/calendar_today" component={CalendarPage_Today} />
        <Route path="/calendar_show/:name/:date/:id" component={CalendarPage_Show} />
        <Route path="/calendar_show" component={CalendarPage_Show} />
        <Route path="/calendar_detail/:name/:date/:id" component={CalendarPage_Detail} />
        <Route path="/calendar_detail" component={CalendarPage_Detail} />
        <Route path="/calendar/:name/:id" component={CalendarPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/login" component={LoginPage}  />
        <Route path="/main/:name/:id" component={MainPage}  />
        <Route path="/main" component={MainPage} />
        <Route path="/health_medi/:name/:id" component={HealthPage_Medi} />
        <Route path="/health_medi" component={HealthPage_Medi} />
        <Route path="/health_show/:name/:id" component={HealthPage_Show}  />
        <Route path="/health_show" component={HealthPage_Show}  />
        <Route path="/health/:name/:id" component={HealthPage}  />
        <Route path="/health" component={HealthPage}  />
        <Route path="/shopping/:name/:id" component={ShoppingPage}  />
        <Route path="/shopping" component={ShoppingPage}  />
        <Route path="/register" component={RegisterPage}  />
        <Route path="/alarm/:name/:id" component={AlarmPage} />
        <Route exact path="/" component={EntryPage} />
        </Switch>
        </>
  );
};

export default App;
