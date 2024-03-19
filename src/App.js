import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState()

  console.log('env', process.env.REACT_APP_CLIENT_ID)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if(_token) {
      setToken(_token)
      spotify.setAccessToken(_token)
    }

    console.log("token", token)
  }, [])

  if (token) {
    fetch(`https://api.spotify.com/v1/playlists/${process.env.REACT_APP_PLAYLIST}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log('error', err))
  }

  return (
    <div className="App">
      {token ? <h1>Logged in</h1> : <Login />}
    </div>
  );
}

export default App;
