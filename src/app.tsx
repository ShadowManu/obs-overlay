import Footer from "./footer";
import { useAppData } from "./core/use-app-data";

import "./app.css";

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
