import { useSelector, useDispatch } from 'react-redux';
import { searchedCnpj, companiesFound } from './store/actions';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import 'bootstrap/scss/bootstrap.scss';
import './styles/global.scss';

function App() {
  // const companies = useSelector((state) => state.companies);
  // const dispatch = useDispatch();

  // const changeValue = () => {
  //   const inputValue = document.getElementsByName('input-value')[0].value;

  //   dispatch(searchedCnpj(inputValue));
  //   dispatch(companiesFound(['Siagre', 'Conexa']));
  // };

  // return (
  //   <div className="container" style={{ paddingTop: '10px' }}>
  //     <div className="row justify-content-center align-items-center">
  //       <div className="col-md-4">
  //         <input className="form-input" type='text' name="input-value" />
  //         <button className="btn-primary" onClick={changeValue}>
  //           Click me!
  //         </button>
  //       </div>
  //     </div>
  //     <div className="row justify-content-center">
  //       <h1>{companies.searchedCnpj}</h1>        
  //     </div>
  //     <div className="row justify-content-center">
  //       <ul>
  //         {companies.companiesFound.map((company) => (
  //           <li key={company}>{company}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
