import React, { useCallback } from 'react'
import { IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

interface Props {
  rota?: string,
  navigation: boolean
}

const NavBar: React.FC<Props> = ({ rota, navigation }) => {
  const history = useHistory();
  const navigate = useCallback(
    (link: string) => {
      history.push(link);
    },
    [history]
  );

  return (
    <>
      {navigation && (
        <IconButton color="inherit" aria-label="menu" onClick={() => navigate(`/${rota}`)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </IconButton>
      )}
    </>
  )
}
export default NavBar;