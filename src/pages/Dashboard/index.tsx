import React, { useState, useEffect, FormEvent} from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles'

interface Repositoy {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repositoy[]>(() => {
    const storagedRepositorio = localStorage.getItem(
      '@GithubExplorer:repositories'
    );

    if (storagedRepositorio) {
      return JSON.parse(storagedRepositorio);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories', 
      JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositorio');
      return;
    }

    try {
      // Consumir Api do Github
      const response =  await api.get<Repositoy>(`repos/${newRepo}`);
      
      // Adicão de um novo repositório
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo(''); // para limpar o input
      setInputError(''); // para retirar menssage de erro
      // Salvar novo repositório no estado
    } catch {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo} 
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório" 
        />
        <button type="submit">Pesquisar</button>
      </Form>

      { inputError && <Error>{ inputError }</Error> }

      <Repositories>
        {repositories.map(repository => (
            <Link key={repository.full_name} to="/repository">
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
          
              <FiChevronRight size={20}/>
            </Link>
          
          ))}
      </Repositories>
    </>
  );
};

export default Dashboard;