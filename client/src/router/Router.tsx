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
import { educationNews } from '../data/educationNews.ts'
import { factCheckNews } from '../data/factCheckNews.ts'
import { healthNews } from '../data/healthNews.ts'
import { kinhDoanhNews } from '../data/kinhDoanhNews.ts'
import { phapLuatNews } from '../data/phapLuatNews.ts'
import { realEstateNews } from '../data/realEstateNews.ts'
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
    store.dispatch(loadCategory({ slug: educationConfig.slug, articles: educationNews }))
    store.dispatch(loadCategory({ slug: realEstateConfig.slug, articles: realEstateNews }))
    store.dispatch(loadCategory({ slug: healthConfig.slug, articles: healthNews }))
    store.dispatch(loadCategory({ slug: factCheckConfig.slug, articles: factCheckNews }))
    return null
}

export const appRoutes: RouteObject[] = [
    {
        path: '/',
        element: <CommunityProvider><Layout /></CommunityProvider>,
        errorElement: <ErrorPage />,
        loader: newsLoader,
        children: [
            { index: true, element: <Home /> },
            { path: 'bai/:id', element: <ArticleDetail /> },
            { path: routes.education.slice(1), element: <CategoryPage config={educationConfig} source="store" /> },
            { path: routes.educationLegacy.slice(1), element: <Navigate to={routes.education} replace /> },
            ...editorialSections.flatMap(section => [
                { path: section.path.slice(1), element: <EditorialSectionPage section={section} /> },
                { path: `${section.path.slice(1)}/bai/:id`, element: <EditorialArticleDetail section={section} /> },
            ]),
            { path: routes.realEstate.slice(1), element: <CategoryPage config={realEstateConfig} source="store" /> },
            { path: `${routes.realEstate.slice(1)}/bai/:id`, element: <CategoryArticleDetail config={realEstateConfig} source="store" /> },
            { path: routes.health.slice(1), element: <CategoryPage config={healthConfig} source="store" /> },
            { path: `${routes.health.slice(1)}/bai/:id`, element: <CategoryArticleDetail config={healthConfig} source="store" /> },
            { path: routes.factCheck.slice(1), element: <CategoryPage config={factCheckConfig} source="store" /> },
            { path: `${routes.factCheck.slice(1)}/bai/:id`, element: <CategoryArticleDetail config={factCheckConfig} source="store" /> },
            { path: routes.community.slice(1), children: [
                    { index: true, element: <CommunityPage /> },
                    { path: 'bai/:id', element: <CommunityDetail /> },
                ] },
            { path: routes.thoiSu.slice(1), element: <CategoryPage config={thoiSuConfig} /> },
            { path: routes.theGioi.slice(1), element: <CategoryPage config={theGioiConfig} /> },
            { path: routes.phapLuat.slice(1), element: <CategoryPage config={phapLuatConfig} /> },
            { path: routes.kinhDoanh.slice(1), element: <CategoryPage config={kinhDoanhConfig} /> },
            { path: routes.congNghe.slice(1), element: <CategoryPage config={congNgheConfig} /> },
            { path: ':zone', element: <Category /> },
            { path: '*', element: <NotFoundPage embedded /> },
        ],
    },
]

export const router = createBrowserRouter(appRoutes)
