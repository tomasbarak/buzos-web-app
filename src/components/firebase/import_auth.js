import * as firebaseApp from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js'
import * as auth from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'
export function configFirebase () {

    const { initializeApp } = firebaseApp;

    const firebaseConfig = {
        apiKey: "AIzaSyDV3N5bKrO8rncs1gtGBez9zkrS5KVXDgg",
        authDomain: "buzos-web-app.firebaseapp.com",
        projectId: "buzos-web-app",
        storageBucket: "buzos-web-app.appspot.com",
        messagingSenderId: "707258081917",
        appId: "1:707258081917:web:f080aba289f745c835c714",
        measurementId: "G-ZN372DPSSF"
    };

    const app = initializeApp(firebaseConfig)

    const { OAuthProvider } = auth;

    let Oauth_provider = new OAuthProvider('microsoft.com')

    Oauth_provider.setCustomParameters({
        tenant: 'a37514ff-9061-40b5-809b-002f4ef84cb4'
    });

    return {
        firebase_auth: auth,
        auth_provider: Oauth_provider
    }
}