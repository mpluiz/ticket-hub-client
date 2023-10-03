import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloProvider } from '@apollo/client'
import { client } from '@/infra/graphql/apollo'
import { MainRouter } from '@/main/routes/router.tsx'

import '@/presentation/assets/styles/normalize.css'
import '@/presentation/assets/styles/global.css'
import '@/presentation/assets/styles/variables.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MainRouter/>
    </ApolloProvider>
  </React.StrictMode>
)
