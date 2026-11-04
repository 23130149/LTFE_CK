import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import ErrorPage from './Error'
import Home from '../pages/Home'
import Category from '../pages/Category'
import ArticleDetail from '../pages/ArticleDetail'
import { store } from '../store/Store'
import { load } from '../store/slice/NewsSlice'
import { mockNews } from '../data/mock'

// Giống productsLoader của lab 5: nạp dữ liệu vào Redux trước khi render,
// để mở thẳng /bai/5 (F5, dán link) vẫn có dữ liệu.
// Sau này đổi sang fetch('/api/news') thì chỉ sửa đúng hàm này.
const newsLoader = () => {
    store.dispatch(load(mockNews))
    return null
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        loader: newsLoader,
        children: [
            { index: true, element: <Home /> },
            { path: 'bai/:id', element: <ArticleDetail /> },
            { path: ':zone', element: <Category /> },
        ],
    },
])
