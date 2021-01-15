function Filter({ inputValue, setInputValue }) {

   return (
      <div className="filter">
         <h2 className="filter__title">{inputValue ? "Результат по запросу:" : "Что ищем?"}</h2>
         <input type="text" placeholder="Пиши, что ищешь"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
      </div>
   );
}

export default Filter;