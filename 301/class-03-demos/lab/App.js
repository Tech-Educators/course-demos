import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast";

import data from "./data.json";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  // const [beastData, setBeastData] = useState(data);

  function handleModal(beast) {
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  return (
    <div className="App">
      <Header />
      <Main data={data} handleModal={handleModal} />
      {modal && <SelectedBeast modalContent={modalContent} closeModal={closeModal} />}
      <Footer />
    </div>
  );
}

export default App;
