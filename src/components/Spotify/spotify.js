export const authEndpoint = "https://accounts.spotify.com/authorize"
// const redirectURI = "http://localhost:3000/"
const redirectURI = "https://spotify-clone-pi-ivory.vercel.app/"
const clientID = process.env.REACT_APP_CLIENT_ID
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-library-read",
    "user-library-modify",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
  ]

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split("&").reduce((initial, item) =>{
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {})
}