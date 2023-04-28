//import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Media from "react-media";
import { BsSunFill, BsMoonFill, BsGearFill } from 'react-icons/bs';

import Chat from "./components/Chat";
import UserInfo from './components/UserInfo';

import "./App.sass"

import useToggle from "./hooks/useToggle";
import classNames from 'classnames';

function App() {
  const [theme, toggleTheme] = useToggle(true)
  const userName = "Raphael Casimiro"
  const pageClass = classNames('page', {dark: theme})
  const buttonClass = classNames('toggle__button', {dark: theme})

  return (
    <div className={pageClass}>
      <header className="header">
        <UserInfo userName={userName}/>
        <div>
          <button className={buttonClass} onClick={() => toggleTheme()}>
            {theme?<BsMoonFill/>:<BsSunFill/>}
          </button>
          <button className={buttonClass}>
            <BsGearFill/>
          </button>
        </div>
      </header>
      <Chat theme={theme}/>
    </div>
  );
}

export default App;
