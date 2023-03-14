import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import RoutesWrapper from "./routes/Routes";
import "./App.scss";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <AnimatePresence mode='wait'>
          <RoutesWrapper />
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
