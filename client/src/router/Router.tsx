import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Layout from './Layout.tsx'
import ErrorPage from './Error.tsx'
import Home from '../pages/Home.tsx'
import Category from '../pages/Category.tsx'
import ArticleDetail from '../pages/ArticleDetail.tsx'
import { store } from '../store/Store.ts'
import { load } from '../store/slice/NewsSlice.ts'
import { mockNews } from '../data/mock.ts'
import CategoryPage from '../pages/CategoryPage.tsx'
import NotFoundPage from '../pages/NotFoundPage.tsx'
import { educationConfig } from '../config/categoryConfig.ts'
import { routes } from '../routing/routes.ts'
import { editorialSections } from '../data/editorialSections.ts'
import EditorialSectionPage, { EditorialArticleDetail } from '../pages/EditorialSectionPage.tsx'

const newsLoader = () => {
    store.dispatch(load(mockNews))
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
            ...editorialSections.flatMap(section => [
                { path: section.path.slice(1), element: <EditorialSectionPage section={section} /> },
                { path: `${section.path.slice(1)}/bai/:id`, element: <EditorialArticleDetail section={section} /> },
            ]),
            { path: ':zone', element: <Category /> },
            { path: '*', element: <NotFoundPage embedded /> },
        ],
    },
]

export const router = createBrowserRouter(appRoutes)
