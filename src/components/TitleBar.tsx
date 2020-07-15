import React, { useContext, useState } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { Button } from '@material-ui/core'
import EmpresaContext from '../contexts/EmpresaContext'
import MaskedInput from 'react-text-mask'
import verificaCNPJ from '../utils/verificaCNPJ'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

interface Props {
  rota?: string,
  navigation: boolean
}

const TitleBar = () => {
  const { buscarEmpresas, setOpenAlert, setMessageError } = useContext(EmpresaContext);
  const [cnpj, setCnpj] = useState('');
  const [canSearch, setCanSearch] = useState(false);

  const valida = (cnpj: string) => {
    const isValid = cnpj.replace(/\W/gi, '');
    if (isValid.length === 14) {
      if (verificaCNPJ(isValid)) {
        setCnpj(cnpj);
        setCanSearch(true);
      } else {
        setCanSearch(false);
        setOpenAlert(true);
        setMessageError("O CNPJ é numericamente invalido");
      }
    } else {
      setOpenAlert(false);
    }
  }

  return (
    <section className="searchBar">
      <Toolbar>
        <h1><FontAwesomeIcon icon={faBuilding} />  Localizador de Empresas</h1>

        <div className="searchLayout">
          <MaskedInput
            id="outlined-basic"
            mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            onChange={(e) => valida(e.target.value)}
            placeholder="CNPJ..."
            placeholderChar={'\u2000'} />
          <Button onClick={() => buscarEmpresas(cnpj.replace(/\W/gi, ""),)} disabled={canSearch ? false : true}>Localizar</Button>
        </div>
      </Toolbar>
    </section>
  )
}
export default TitleBar;