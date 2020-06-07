import React from 'react';
import {FiCheckCircle} from 'react-icons/fi';

import './styles.css';

const Success = () => {
  return (
    <div id="page-success">
      <div className="content">
        <FiCheckCircle color="#34CB79" size="50px"/>
        <h1>Cadastro concluído!</h1>
      </div>
    </div>
  )
}

export default Success