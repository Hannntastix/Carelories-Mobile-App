import { useState, useEffect } from 'react';
import { auth, db } from '../configs/FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";

export const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  return { userData, loading };
};