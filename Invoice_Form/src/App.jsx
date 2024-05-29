import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Address from "./components/Address";
import CreateForm from "./components/CreateForm";
import RecordTable from "./components/RecordTable";
import RecordTotal from "./components/RecordTotal";
import Footer from "./components/Footer";
import DrawerBtn from "./components/DrawerBtn";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699.99,
    },
    {
      id: 3,
      name: "Wireless Mouse",
      price: 29.99,
    },
    {
      id: 4,
      name: "Keyboard",
      price: 49.99,
    },
    {
      id: 5,
      name: "Monitor",
      price: 199.99,
    },
  ]);
  const [quantity, setQuantity] = useState(0);
  const addQuantity = (q) => {
    setQuantity(q);
  };
  const [records, setRecords] = useState([]);
  const addRecord = (newRec) => setRecords([...records, newRec]);
  return (
    <main
      id="invoiceForm"
      className=" max-w-[800px] h-[2000px] bg-background mx-auto my-10 py-10"
    >
      <div className="container mx-auto">
        <Header />
        <Address />
        <CreateForm
          products={products}
          addRecord={addRecord}
          records={records}
          addQuantity={addQuantity}
        />
        <RecordTable records={records} />
        <RecordTotal records={records} />
        <DrawerBtn />

        <Footer />
      </div>
    </main>
  );
}

export default App;
