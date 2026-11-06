import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Layout from './Layout.tsx'
import ErrorPage from './Error.tsx'
import Home from '../pages/Home.tsx'
import Category from '../pages/Category.tsx'
import ArticleDetail from '../pages/ArticleDetail.tsx'
import { store } from '../store/Store.ts'
import { load } from '../store/slice/NewsSlice.ts'
import { normalizeArticles } from '../services/articleDataService.ts'
// Fix: explicitly load the typed fixture instead of its duplicate JS module.
import { mockNews } from '../data/mock.ts'
import CategoryPage from '../pages/CategoryPage.tsx'
import NotFoundPage from '../pages/NotFoundPage.tsx'
import { educationConfig } from '../config/categoryConfig.ts'
import { routes } from '../routing/routes.ts'

// Lấy tin từ fake API (json-server, xem fake-api/). Nếu chưa bật fake API thì dùng mock tĩnh.
const newsLoader = async () => {
    try {
        const res = await fetch('/api/news')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        store.dispatch(load(normalizeArticles(await res.json())))
    } catch (err) {
        console.warn('Không gọi được fake API, dùng dữ liệu mock:', err)
        store.dispatch(load(mockNews))
    }
    return null
}

export const appRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        loader: newsLoader,
        children: [
            { index: true, element: <Home /> },
            { path: 'bai/:id', element: <ArticleDetail /> },
            { path: routes.education.slice(1), element: <CategoryPage config={educationConfig} /> },
            { path: routes.educationLegacy.slice(1), element: <Navigate to={routes.education} replace /> },
            { path: ':zone', element: <Category /> },
            { path: '*', element: <NotFoundPage embedded /> },
        ],
    },
]

export const router = createBrowserRouter(appRoutes)
