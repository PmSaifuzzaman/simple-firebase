import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    console.log(auth);
    const provider = new GoogleAuthProvider();

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessege = error.messege;
                console.log(errorMessege);
            })
    }
    return (
        <div>
            <button onClick={handleSignIn}>Login Google</button>
        </div>
    );
};

export default Login;