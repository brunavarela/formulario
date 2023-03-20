import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import ComputerImg from "../../assets/computer.png";

import "./styles.css";

function LandingPage() {
  const params = useParams();
  const history = useHistory();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <div className="main-container">
        <div className="main-container text--container">
          <h1>Boas vindas, {params.nome}!</h1>
          <button onClick={() => history.push("/")}>Voltar</button>
        </div>
        <div className="main-container image--container">
          <img src={ComputerImg} alt={ComputerImg} />
        </div>
      </div>
      <footer className="footer"><span>Bruna Varela ©2023</span></footer>
    </motion.div>
  );
}

export default LandingPage;
