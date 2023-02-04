import About from "./components/About";
import Cookies from "./components/Cookies";
import Presentation from "./components/Presentation";
import Shop from "./components/Shop";

function Home() {
  return (
    <main>
      <Presentation />
      <Cookies />
      <About />
      <Shop />
    </main>
  )
}

export default Home;
