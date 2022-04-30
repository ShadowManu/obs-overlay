import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

import { AppData } from "./types";

type DocumentType = "main" | "gaming";

const getActiveDocument = (): DocumentType => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return (params.get("document") as DocumentType) ?? "main";
};

export const useAppData = (): AppData | undefined => {
  const [data, setData] = useState<AppData | undefined>(undefined);

  useEffect(() => {
    const promiseFn = () => {
      const db = getFirestore();
      const active = getActiveDocument();
      const ref = doc(db, "properties", active);

      return onSnapshot(ref, (doc) => {
        const data = doc.data() as AppData;
        setData(data);
      });
    };

    return promiseFn();
  }, []);

  return data;
};
