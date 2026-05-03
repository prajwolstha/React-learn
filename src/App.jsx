import Header from "./Header";
import Footer from "./Footer";
function App() {
  const name = "Prajwol";
  return (
    <div>
      <Header />
      <h1>Hello {name} </h1>
      <p>Now React is working!</p>
      <Footer />
    </div>
  );
}

export default App;