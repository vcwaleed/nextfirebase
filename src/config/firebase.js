
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
/// your config data
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export default app;
