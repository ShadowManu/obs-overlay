import { getFirestore, doc, getDoc, onSnapshot } from "firebase/firestore";

import { AppData } from "./core/types";
import Footer from "./footer";

import "./app.css";
import { useEffect, useState } from "react";

const useAppData = (): AppData | undefined => {
  const [data, setData] = useState<AppData | undefined>(undefined);

  useEffect(() => {
    const promiseFn = () => {
      const db = getFirestore();
      const mainRef = doc(db, "properties", "main");

      // const snapshot = await getDoc(mainRef);
      // const data = snapshot.data() as AppData;

      return onSnapshot(mainRef, (doc) => {
        const data = doc.data() as AppData;
        setData(data);
      });
    };

    return promiseFn();
  }, []);

  return data;
};

const App = () => {
  const data = useAppData();

  return data ? (
    <>
      <Footer data={data.footer} />
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default App;
