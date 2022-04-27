import { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss'

interface Repository{
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {

  const [respositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('http://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])


  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {
          respositories.length > 0 ?
            respositories.map(item => (
              <RepositoryItem key={item.name} repository={item} />
            ))
            :
           <h1>Carregando...</h1>
        }

      </ul>
    </section>
  )
}