import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import 'styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)

postMessage({ payload: 'removeLoading' }, '*')
