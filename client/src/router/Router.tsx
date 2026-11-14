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
import CategoryArticleDetail from '../pages/CategoryArticleDetail.tsx'
import NotFoundPage from '../pages/NotFoundPage.tsx'
import {
    congNgheConfig,
    educationConfig, factCheckConfig, healthConfig,
    kinhDoanhConfig,
    phapLuatConfig, realEstateConfig,
    theGioiConfig,
    thoiSuConfig
} from '../config/categoryConfig.ts'
import { routes } from '../routing/routes.ts'
import CommunityProvider from '../components/community/CommunityProvider.tsx'
import CommunityPage from '../pages/CommunityPage.tsx'
import CommunityDetail from '../pages/CommunityDetail.tsx'

// Giống productsLoader của lab 5: nạp dữ liệu vào Redux trước khi render,
// để mở thẳng /bai/5 (F5, dán link) vẫn có dữ liệu.
// Sau này đổi sang fetch('/api/news') thì chỉ sửa đúng hàm này.
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
            { path: routes.realEstate.slice(1), element: <CategoryPage config={realEstateConfig} /> },
            { path: `${routes.realEstate.slice(1)}/bai/:id`, element: <CategoryArticleDetail config={realEstateConfig} /> },
            { path: routes.health.slice(1), element: <CategoryPage config={healthConfig} /> },
            { path: `${routes.health.slice(1)}/bai/:id`, element: <CategoryArticleDetail config={healthConfig} /> },
            { path: routes.factCheck.slice(1), element: <CategoryPage config={factCheckConfig} /> },
            { path: `${routes.factCheck.slice(1)}/bai/:id`, element: <CategoryArticleDetail config={factCheckConfig} /> },
            { path: routes.community.slice(1), element: <CommunityProvider />, children: [
                { index: true, element: <CommunityPage /> },
                { path: 'bai/:id', element: <CommunityDetail /> },
            ] },
            { path: routes.thoiSu.slice(1), element: <CategoryPage config={thoiSuConfig} /> },
            { path: routes.theGioi.slice(1), element: <CategoryPage config={theGioiConfig} /> },
            { path: routes.thoiSu.slice(1), element: <CategoryPage config={thoiSuConfig} source="store" /> },
            { path: routes.theGioi.slice(1), element: <CategoryPage config={theGioiConfig} source="store" /> },
            { path: routes.phapLuat.slice(1), element: <CategoryPage config={phapLuatConfig} /> },
            { path: routes.kinhDoanh.slice(1), element: <CategoryPage config={kinhDoanhConfig} /> },
            { path: routes.congNghe.slice(1), element: <CategoryPage config={congNgheConfig} /> },
            { path: ':zone', element: <Category /> },
            { path: '*', element: <NotFoundPage embedded /> },
        ],
    },
]

export const router = createBrowserRouter(appRoutes)
