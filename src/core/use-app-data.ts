import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

import { AppData } from "./types";

export const useAppData = (): AppData | undefined => {
  const [data, setData] = useState<AppData | undefined>(undefined);

  useEffect(() => {
    const promiseFn = () => {
      const db = getFirestore();
      const ref = doc(db, "properties", "main");

      return onSnapshot(ref, (doc) => {
        const data = doc.data() as AppData;
        setData(data);
      });
    };

    return promiseFn();
  }, []);

  return data;
};
