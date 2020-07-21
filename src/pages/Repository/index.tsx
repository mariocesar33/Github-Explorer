import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16}/>
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img 
            src="https://avatars3.githubusercontent.com/u/24758286?s=460&u=d3b6fcc00916078ae870fd88b802b006b7c3ac72&v=4" 
            alt="mariocesa33" 
          />
          <div>
            <strong>mariocesa33/Github-Explorer</strong>
            <p>descricão do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="">
          <div>
            <strong>frggdsfsgdg</strong>
            <p>fhnfhfnhnhng</p>
          </div>
      
          <FiChevronRight size={20}/>
        </Link>
      </Issues>
    </>
  );
};

export default Repository