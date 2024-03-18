export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectURI = "http://localhost:3000/"
const clientID = "0dce74fd4bcb4f80a6b05a486494463a"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ]

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split("&").reduce((initial, item) =>{
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {})
}