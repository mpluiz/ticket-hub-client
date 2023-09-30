import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloProvider } from '@apollo/client'
import { client } from '@/infra/graphql/apollo'
import { MainRouter } from '@/main/routes/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MainRouter/>
    </ApolloProvider>
  </React.StrictMode>
)
