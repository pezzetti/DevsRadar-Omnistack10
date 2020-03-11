import React from 'react';
import './styles.css';

function DevItem(props) {
    const { dev }= props;
    return (
    <li className="dev-item" >
        <header>
        <img src={dev.avatar_url} alt={dev.name}></img>
        <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>                
        </div>             
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.githubUsername}`}>Acessar o perfil</a>
      </li>
  )
}

export default DevItem;