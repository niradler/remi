import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyArxhdLzO4AUZ3962A7-LY4YjXphJaZz64",
    authDomain: "remi-server.firebaseapp.com",
    databaseURL: "https://remi-server.firebaseio.com",
    projectId: "remi-server",
    storageBucket: "remi-server.appspot.com",
    messagingSenderId: "943206202471"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    console.log('firebase initializeApp failed!')
}

class Server {
    constructor(config, firebase) {
        this.config = config;
        this.firebase = firebase;
        this.auth = firebase.auth();
        this.db = firebase.database();
    }
    createUser = async(name,email, password) => {
        try {
            const response = await this
                .auth
                .createUserWithEmailAndPassword(email, password);
                debugger;
            if (response) {
                db.ref(`users/${response.id}`).set({
                    name,
                    email,
                  });
            }
        } catch (error) {
            return error.message;
        }
    }

    login = (email, password) => this
        .auth
        .signInWithEmailAndPassword(email, password);

    logout = () => this
        .auth
        .signOut();

    passwordReset = (email) => this
        .auth
        .sendPasswordResetEmail(email);

    passwordUpdate = (password) => this
        .auth
        .currentUser
        .updatePassword(password);

}
const server = new Server(config, firebase)
export default server;