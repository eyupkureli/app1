import auth0 from "auth0-js";
import history from "./history";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "dev-utopsgvi.us.auth0.com",
    clientID: "PovvOUgxd7gnXIGM9ADP5k6OxYHINDus",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid profile email",
  });

  userProfile = {}; //we have to declare ir here for getProfile function

  login = () => {
    this.auth0.authorize();
  };
  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult) {
        console.log(authResult);
        localStorage.setItem("access_token", authResult.access_token);
        localStorage.setItem("id_token", authResult.id_token);

        let expiresAt = JSON.stringify(
          authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("expiresAt", expiresAt);
        this.getProfile();
        setTimeout(() => {
          history.replace("/authcheck");
        }, 2000);
      } else {
        console.log(err);
      }
    });
  };
  //get user's info for user profile: below 2 functions
  getAccessToken = () => {
    if (localStorage.getItem("access_token")) {
      const accessToken = localStorage.getItem("access_token");
      return accessToken;
    } else {
      return null;
    }
  };
  //it is a special method client.userInfo
  getProfile = () => {
    let accessToken = this.getAccessToken();
    if (accessToken) {
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (profile) {
          this.userProfile = { profile };
        }
      });
    }
  };

  logot = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expiresAt");
  };

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem("expiresAt"));
    return new Date().getTime() < expiresAt;
  };
}
