import Header from "./Header";
import Footer from "./Footer";
import UserCard from "./UserCard";
import ProductCard from "./ProductCard";
import Counter from "./Counter";
import Form from "./Form";
function App() {
  const name = "Prajwol";
  return (
    <div>
      <Header />
      <h1>Hello {name} </h1>
      <Counter />
      <Form />
      <UserCard name="Alice" age={30} />
      <UserCard name="Bob" age={25} />
      <UserCard name="Charlie" age={35} />

      <ProductCard name = "iPhone" price="$999" rating="4.5" />
      <ProductCard name = "Samsung Galaxy" price="$899" rating="4.0" />
      <ProductCard name = "OnePlus 12" price="$799" rating="4.2" />
      <Footer />
    </div> 
  );
}

export default App;