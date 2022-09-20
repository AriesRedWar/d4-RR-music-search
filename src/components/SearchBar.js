function SearchBar(props) {
  // We can comment out our searchTerm state variable as we are not using it!
  // let [searchTerm, setSearchTerm] = useState('')

  return (
    <form className="App">
      <input
        required
        type="text"
        placeholder="Search Here"
        onChange={(e) => props.handleSearch(e, e.target.value)}
      />
      <p>&nbsp;</p>
    </form>
  );
}

export default SearchBar;
