
import "./App.css";
import HappyTracker from "./HappyTracker";
import SadTracker from "./SadTracker";
import HappyIncremnetor from "./HappyIncremnet"; // ✅ corrected import spelling
import SadIncremnetor from "./SadIncremnetor";

function App() {
  return (
    <>
      <HappyTracker />
      <SadTracker />
      <HappyIncremnetor />
      <SadIncremnetor />
    </>
  );
}

export default App;
