import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getAuth as getAdminAuth } from "firebase-admin/auth";

/**
 * Endpoints for authentication
 *
 * @param {Express} app
 * @param {FirebaseApp} firebase
 */
const AuthRoute = ({ app, firebase }) => {
  const auth = getAuth(firebase);

  app.post("/api/sign-in", async (req, res) => {
    const { email, password } = req.body;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      const token = await user.getIdToken();
      res.cookie("Authorization", token);
      res.send("Sign in successful");
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Invalid credentials" });
    }
  });

  app.get("/api/sign-out", async (req, res) => {
    try {
      await auth.signOut();
      res.json({ message: "Sign out successful" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "An error occurred" });
    }
  });

  app.post("/api/sign-up", async (req, res) => {
    const { email, password } = req.body;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;

      await getAdminAuth().setCustomUserClaims(user.uid, { roles: ["member"] });
      await user.getIdToken(true);
      const token = await user.getIdToken();
      res.cookie("Authorization", token);
      res.send("Sign up successful");
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          res.send({ message: `Email address already in use.` });
          break;
        case "auth/invalid-email":
          res.send({ message: `Email address is invalid.` });
          break;
        default:
          res.send({ message: `An error occurred.` });
          console.log(error);
          break;
      }
    }
  });
};

export default AuthRoute;
