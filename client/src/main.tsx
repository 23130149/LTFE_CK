import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store } from './store/Store.ts'
import './styles/home.css'
import './styles/category.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Missing root element')

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
)
