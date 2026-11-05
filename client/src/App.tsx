import { RouterProvider } from 'react-router-dom'
import type { RouterProviderProps } from 'react-router-dom'
import { router as browserRouter } from './router/Router.tsx'

export default function App({ router = browserRouter }: { router?: RouterProviderProps['router'] }) {
    return <RouterProvider router={router} />
}
