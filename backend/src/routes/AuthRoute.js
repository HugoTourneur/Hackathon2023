import {collection, getDocs, getFirestore} from "firebase/firestore"

import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"



import {isLogged} from "../middleware/session.js"

import {getAuth as getAdminAuth} from "firebase-admin/auth"

/**
 * AuthRoute
 * @param {Express} app
 * @param {FirebaseApp} firebase
 */
const AuthRoute = ({app, firebase}) => {
    const auth = getAuth(firebase)
    const adminAuth = getAdminAuth()

    app.post("/api/sign-in", async (req, res) => {
        const {email, password} = req.body
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const {user} = userCredential
            const token = await user.getIdToken()
            res.cookie('Authorization', token)
            res.send('Sign in successful')
        } catch (error) {
            console.log(error)
            res.status(400).json({message: "Invalid credentials"})
        }
    })

    app.get("/api/sign-out", async (req, res) => {
        try {
            await auth.signOut()
            res.json({message: "Sign out successful"})

        } catch (error) {
            console.log(error)
            res.status(400).json({message: "An error occurred"})
        }
    })

    app.post('/api/sign-up', async (req, res) => {
        const {email, password} = req.body
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const { user} = userCredential

            await getAdminAuth().setCustomUserClaims(user.uid, { roles: ['member'] })
            await user.getIdToken(true)
            const token = await user.getIdToken()
            res.cookie('Authorization', token)
            res.send('Sign up successful')
        } catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    res.send({ message: `Email address already in use.`});
                    break;
                case 'auth/invalid-email':
                    res.send({ message: `Email address is invalid.`});
                    break;
                default:
                    res.send({ message: `An error occurred.`})
                    console.log(error)
                    break;
            }
        }
    })

    app.get('/api/users', isLogged, async (req, res) => {
        const db = getFirestore(firebase)
        const usersRef = collection(db, 'users');
        const usersSnapshot = await getDocs(usersRef);
        const usersList = usersSnapshot.docs.map(doc => doc.data());
        res.json(usersList)
    })
}

export default AuthRoute