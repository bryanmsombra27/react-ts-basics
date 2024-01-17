// import Container from "./components/Container";
import "./index.css";

//COMPONENTS
import Header from "./Header";
import AddTimer from "./AddTimer";
import Timers from "./Timers";
import { TimersContextProvider } from "./store/TimersContext";

const App = () => {
  return (
    <>
      <TimersContextProvider>
        <Header />
        <main>
          <AddTimer />
          <Timers />
        </main>
      </TimersContextProvider>
    </>
  );
};

export default App;
