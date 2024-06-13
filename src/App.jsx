import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Content from "./components/Content";

export default function App() {
  return (
  // <main id="main-layout">
  <main className="w-full min-h-dvh p-4 grid grid-cols-[20%_1fr] grid-rows-[3.2rem_1fr]">
    <Navbar />
    <Menu />
    <Content />
  </main>
  )
}

// export default App esto es para hacerlo en una linea independiente
