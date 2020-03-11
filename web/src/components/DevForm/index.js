import React, { useState, useEffect  } from 'react';
import './styles.css'

function DevForm({ onSubmit }) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [techs, setTechs] = useState('');
    const [githubUsername, setGithubUsername] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        }, (err) => {
          console.log(err);
        },{ timeout: 3000 });
      }, []);

    async function handleSubmit(e) {
        e.preventDefault();
       await onSubmit({
            githubUsername, 
            techs,
            latitude,
            longitude
          });
              
        setGithubUsername('');
        setTechs('');
    }
    
  
    return (
        <form onSubmit={handleSubmit}>
         <div className="input-block">
          <label htmlFor="">Usuário github</label>
          <input 
            name="githubUsername" 
            id="githubUsername"
            value={githubUsername}
            onChange={e => setGithubUsername(e.target.value)}
            required />
         </div>   

         <div className="input-block">
          <label htmlFor="">Techs</label>
          <input 
            name="techs" 
            id="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            required />
         </div>         

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="">Latitude</label>
            <input 
              type="number"
              onChange={e => setLatitude(e.target.value)}
              name="latitude"
              id="latitude" 
              value={latitude} required />
          </div> 
          <div className="input-block">
            <label htmlFor="">Longetude</label>
            <input 
              type="number" 
              onChange={e => setLongitude(e.target.value)}
              name="longitude" 
              id="longitude" 
              value={longitude} required />
          </div> 
        </div>         
        <button type="submit">Salvar</button>
                 
       </form>
    )
}

export default DevForm