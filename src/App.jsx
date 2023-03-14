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

// GLOBAL TODO:
// 1 Always define explicit defaultProps for all non-required props.
// Why? propTypes are a form of documentation, and providing defaultProps means the reader of your code doesn’t have to assume as much. In addition, it can mean that your code can omit certain type checks.
// 2 Use spread props sparingly.
// Why? Otherwise you’re more likely to pass unnecessary props down to components. And for React v15.6.1 and older, you could pass invalid HTML attributes to the DOM.
