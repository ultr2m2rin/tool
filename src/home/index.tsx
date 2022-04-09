import { useNavigate } from 'react-router-dom';

import { RouteNames } from '../App';

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate(`/${RouteNames.setup}`)}>Initial Setup</button>
      <button>Audit</button>
    </>
  )
}
