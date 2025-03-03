import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ItemList from "./components/Itemlist";
import { fetchItems } from "./utilities/api/fetchData";
import Spinner from "./components/Spinner";

function App() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      const data = await fetchItems();

      setItems(data);
      setLoading(false);
    };

    loadItems();
  }, []);
  const filteredItems = items.filter((item) =>
    item.mission_name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div className="main__wrapper">
      <SearchBar search={search} setSearch={setSearch} />
      {loading ? <Spinner /> : <ItemList items={filteredItems} />}
    </div>
  );
}

export default App;
