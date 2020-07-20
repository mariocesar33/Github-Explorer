import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img 
            src="https://avatars3.githubusercontent.com/u/24758286?s=460&u=d3b6fcc00916078ae870fd88b802b006b7c3ac72&v=4" 
            alt="Mário César"
          />
          <div>
            <strong>mariocesar33/the-box</strong>
            <p>design responsivo e assimétrico HTML e CSS</p>
          </div>

          <FiChevronRight size={20}/>
        </a>

        <a href="test">
          <img 
            src="https://avatars3.githubusercontent.com/u/24758286?s=460&u=d3b6fcc00916078ae870fd88b802b006b7c3ac72&v=4" 
            alt="Mário César"
          />
          <div>
            <strong>mariocesar33/the-box</strong>
            <p>design responsivo e assimétrico HTML e CSS</p>
          </div>

          <FiChevronRight size={20}/>
        </a>

        <a href="test">
          <img 
            src="https://avatars3.githubusercontent.com/u/24758286?s=460&u=d3b6fcc00916078ae870fd88b802b006b7c3ac72&v=4" 
            alt="Mário César"
          />
          <div>
            <strong>mariocesar33/the-box</strong>
            <p>design responsivo e assimétrico HTML e CSS</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;