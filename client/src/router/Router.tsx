import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Layout from './Layout.tsx'
import ErrorPage from './Error.tsx'
import Home from '../pages/Home.tsx'
import Category from '../pages/Category.tsx'
import ArticleDetail from '../pages/ArticleDetail.tsx'
import { store } from '../store/Store.ts'
import { load } from '../store/slice/NewsSlice.ts'
import { loadCategory } from '../store/slice/CategoryNewsSlice.ts'
import { mockNews } from '../data/mock.ts'
import { congNgheNews } from '../data/congNgheNews.ts'
import { kinhDoanhNews } from '../data/kinhDoanhNews.ts'
import { phapLuatNews } from '../data/phapLuatNews.ts'
import { theGioiNews } from '../data/theGioiNews.ts'
import { thoiSuNews } from '../data/thoiSuNews.ts'
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
import { editorialSections } from '../data/editorialSections.ts'
import EditorialSectionPage, { EditorialArticleDetail } from '../pages/EditorialSectionPage.tsx'
import CommunityProvider from '../components/community/CommunityProvider.tsx'
import CommunityPage from '../pages/CommunityPage.tsx'
import CommunityDetail from '../pages/CommunityDetail.tsx'

const newsLoader = () => {
    store.dispatch(load(mockNews))
    store.dispatch(loadCategory({ slug: thoiSuConfig.slug, articles: thoiSuNews }))
    store.dispatch(loadCategory({ slug: theGioiConfig.slug, articles: theGioiNews }))
    store.dispatch(loadCategory({ slug: phapLuatConfig.slug, articles: phapLuatNews }))
    store.dispatch(loadCategory({ slug: kinhDoanhConfig.slug, articles: kinhDoanhNews }))
    store.dispatch(loadCategory({ slug: congNgheConfig.slug, articles: congNgheNews }))
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
            { path: routes.thoiSu.slice(1), element: <CategoryPage config={thoiSuConfig} source="store" /> },
            { path: routes.theGioi.slice(1), element: <CategoryPage config={theGioiConfig} source="store" /> },
            { path: routes.phapLuat.slice(1), element: <CategoryPage config={phapLuatConfig} source="store" /> },
            { path: routes.kinhDoanh.slice(1), element: <CategoryPage config={kinhDoanhConfig} source="store" /> },
            { path: routes.congNghe.slice(1), element: <CategoryPage config={congNgheConfig} source="store" /> },
            { path: ':zone', element: <Category /> },
            { path: '*', element: <NotFoundPage embedded /> },
        ],
    },
]

export const router = createBrowserRouter(appRoutes)