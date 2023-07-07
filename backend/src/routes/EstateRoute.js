import {
  getFirestore,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
  doc,
  where,
  query,
} from "firebase/firestore";
import { isLogged } from "../middleware/session.js";

/**
 * Endpoint for estate
 *
 * @param {Express} app
 * @param {FirebaseApp} firebase
 * @constructor
 */
const EstateRoute = ({ app, firebase }) => {
  const db = getFirestore(firebase);

  app.get("/api/estates", async (req, res) => {
    try {
      const estates = await getDocs(collection(db, "estates"));
      const data = estates.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "An error occurred" });
    }
  });

  app.get("/api/estates/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const estate = await getDoc(doc(db, "estates", id));

      const queryNbParts = query(
        collection(db, "parts"),
        where("estate_id", "==", id)
      );
      const parts = await getDocs(queryNbParts);

      if (!estate.exists()) {
        return res.status(404).json({ message: "Estate not found" });
      }

      res.json({
        id: estate.id,
        ...estate.data(),
        parts_left:
          estate.data().max_shares -
          (parts.docs.length > 0
            ? parts.docs
                .map((p) => p.data().parts)
                .reduce(
                  (previousValue, currentValue) => previousValue + currentValue
                )
            : 0),
        single_value: estate.data().value / estate.data().max_shares,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "An error occurred" });
    }
  });

  app.post("/api/estates", async (req, res) => {
    const { title, location, value, type, max_shares, status, image, date } =
      req.body;
    try {
      const docRef = await addDoc(collection(db, "estates"), {
        title,
        location,
        value,
        type,
        max_shares,
        status,
        image,
        date
      });
      res.json({ id: docRef.id });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "An error occurred" });
    }
  });

  app.put("/api/estates/:id", async (req, res) => {
    const { title, location, value, type, max_shares, status, image, date } =
      req.body;
    const { id } = req.params;
    try {
      await updateDoc(doc(db, "estates", id), {
        title,
        location,
        value,
        type,
        max_shares,
        status,
        image,
        date
      });
      res.json({ id });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "An error occurred" });
    }
  });

  app.delete("/api/estates/:id", async (req, res) => {
    const id = req.params.id;
    try {
      await deleteDoc(doc(db, "estates", id));
      res.json({ id });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "An error occurred" });
    }
  });

  app.post("/api/estates/:id/buy-parts", isLogged, async (req, res) => {
    const { id } = req.params;
    const { parts } = req.body;
    const user_id = req.user;

    try {
      const partsQuery = await query(
        collection(db, "parts"),
        where("user_id", "==", user_id),
        where("estate_id", "==", id)
      );

      const user_part = await getDocs(partsQuery);

      if (user_part.size > 0) {
        console.log(user_part.docs);
        await updateDoc(doc(db, "parts", user_part.docs[0].id), { parts: parseInt(user_part.docs[0].data().parts) + parseInt(parts) });
        return res.json({ message: "Parts updated" });
      }

      const docRef = await addDoc(collection(db, "parts"), {
        parts,
        user_id,
        estate_id: id,
      });
      res.json({ id: docRef.id, message: "Parts added" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "An error occurred" });
    }
  });

  app.get("/api/estates/user", isLogged, async (req, res) => {
    const { user } = req.user;

    try {
      const partsQuery = await query(
        collection(db, "parts"),
        where("user_id", "==", user)
      );

      const parts = await getDocs(partsQuery);

      const estatesQuery = await query(
        collection(db, "estates"),
        where(
          "id",
          "in",
          parts.docs.map((doc) => doc.data().estate_id)
        )
      );

      const estates = await getDocs(estatesQuery);

      res.json(estates.docs.map((doc) => doc.data()));
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "An error occurred" });
    }
  });
};

export default EstateRoute;
