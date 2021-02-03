import { useSelector, useDispatch } from 'react-redux';
import { searchedCnpj, companiesFound } from './store/actions';
import './App.css';

function App() {
  const companies = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  const changeValue = () => {
    const inputValue = document.getElementsByName('input-value')[0].value;

    dispatch(searchedCnpj(inputValue));
    dispatch(companiesFound(['Siagre', 'Conexa']));
  };

  return (
    <div className="App" style={{ paddingTop: '10px' }}>
      <input type='text' name="input-value" />
      <button onClick={changeValue}>
        Click me!
      </button>
      <h1>{companies.searchedCnpj}</h1>
      <ul>
        {companies.companiesFound.map((company) => (
          <li key={company}>{company}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
