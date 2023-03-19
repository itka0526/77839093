import { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import useIsAtTop from "./hooks/useIsAtTop";
import useIsMobile from "./hooks/useIsMobile";

function App() {
    const mainElement = useRef<HTMLElement>(null);

    const { isAtTheTop } = useIsAtTop(mainElement);
    const { isMobile } = useIsMobile();

    return (
        <main ref={mainElement} className="bg-black min-h-screen flex flex-col overflow-y-auto overflow-x-hidden max-lg:pt-14 ">
            <Navbar isAtTheTop={isAtTheTop} />
            <Section isMobile={isMobile} />
            <Footer />
        </main>
    );
}

export default App;
