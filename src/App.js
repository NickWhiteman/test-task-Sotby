import "./App.css";
import { Route, Switch } from "react-router-dom";
import { TaskOne } from "./task-one-logo_yandex/TaskOne";
import { TaskTwo } from "./task-two-animation/TaskTwo";
import { TaskThree } from './task-three-api_request/TaskThree';
import { TaskFour } from './task-four-form/TaskFour';
import {ButtonNavigation} from './button-navigation/ButtonNavigation'

export default function App() {
  return (
    <div className="App">
      <div className='menu'>
        <ButtonNavigation 
          path='/'
          children='Главная' />
        <ButtonNavigation 
          path='/task-one'
          children='Логотип Яндекс' />
        <ButtonNavigation 
          path='/task-two'
          children='Анимация' />
        <ButtonNavigation 
          path='/task-three'
          children='API запрос' />
        <ButtonNavigation 
          path='/task-four'
          children='Форма' />
      </div>
      <Switch>
        <Route exact path="/">
          <div className="header-task">Test task Sotby</div>
        </Route>
        <Route path="/task-one">
          <TaskOne />
        </Route>
        <Route path="/task-two">
          <TaskTwo />
        </Route>
        <Route path="/task-three">
          <TaskThree />
        </Route>
        <Route path="/task-four">
          <TaskFour />
        </Route>
      </Switch>
    </div>
  );
}
