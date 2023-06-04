const clientId = "62918e7eef004fca8688c066a64082ef";
const code = undefined;

if(!code){
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAcccesToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
}

async function redirectToAuthCodeFlow(clientId){
    // TODO: Redirect to Spotify authorization page

}

async function getAcccesToken(clientId, code){
    // TODO: Get access token for code
}

async function fetchProfile(token){
    //TODO: Call Web API
}

function populateUI(profile){
    //TODO: update UI with profile data
}