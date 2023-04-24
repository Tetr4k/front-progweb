import { BrowserRouter, Route, Routes } from "react-router-dom";
import Media from "react-media";
import Chat from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
      {/* Para celular */}
      <Media query="(max-width: 1080px)">
        <Routes>
          <Route exact path="/"/>
          <Route path="/cadastro"/>
          <Route path="/history"/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </Media>

      {/* Para pc */}
      <Media query="(min-width: 1081px)">
        <Routes>
          <Route exact path="/"/>
          <Route path="/cadastro"/>
          <Route path="/chat" element={/*historico*/<Chat/>}/>
        </Routes>
      </Media>
    </BrowserRouter>
  );
}

export default App;
