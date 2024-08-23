import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './screens/Login/index.tsx'
import HomeALU from './screens/HomeALU/index.tsx'
import HomeRES from './screens/HomeRES/index.tsx'
import HomeADM from './screens/HomeADM/index.tsx'
import CadastraALU from './screens/CadastraALU/index.tsx'
import EntradaTARDIA from './screens/EntradaTARDIA/index.tsx'
import SaidaANTECIPADA from './screens/SaidaANTECIPADA/index.tsx'
import ContaALU from './screens/ContaALU/index.tsx'
import LoginADM from './screens/LoginADM/index.tsx'
import LoginRES from './screens/LoginRES/index.tsx'
import VerificaPRESENTE from './screens/VerificaPRESENTE/index.tsx'
import TirarRELATORIO from './screens/TirarRELATORIO/index.tsx'
import ContaRES from './screens/ContaRES/index.tsx'
import ContaADM from './screens/ContaADM/index.tsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Page } from './screens/Page/index.tsx'

const router = createBrowserRouter(
  [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/homeAlu",
        element: <HomeALU />
      },
      {
        path: "/homeAdm",
        element: <HomeADM />
      },
      {
        path: "/homeRes",
        element: <HomeRES />
      },
      {
        path: "/cadastraAlu",
        element: <CadastraALU />
      },
      {
        path: "/entradaTardia",
        element: <EntradaTARDIA />
      },
      {
        path: "/saidaAntecipada",
        element: <SaidaANTECIPADA />
      },
      {
        path: "/contaAlu",
        element: <ContaALU />
      },
      {
        path: "/loginAdm",
        element: <LoginADM />
      },
      {
        path: "/loginRes",
        element: <LoginRES />
      },
      {
        path: "/verificarPresente",
        element: <VerificaPRESENTE />
      },
      {
        path: "/tirarRelatorio",
        element: <TirarRELATORIO />
      },
      {
        path: "/contaRES",
        element: <ContaRES />
      },
      {
        path: "/contaADM",
        element: <ContaADM />
      },
      {
        path: "/",
        element: <Page />
      },
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)