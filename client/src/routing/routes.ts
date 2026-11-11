export const routes = Object.freeze({ home: '/', education: '/giao-duc', educationLegacy: '/giao-duc.htm', realEstate: '/nha-dat', health: '/suc-khoe', factCheck: '/gia-that', thoiSu: '/thoi-su', theGioi: '/the-gioi', phapLuat: '/phap-luat' });

export const realEstateArticlePath = (id: string): string => `${routes.realEstate}/bai/${encodeURIComponent(id)}`;

export const healthArticlePath = (id: string): string => `${routes.health}/bai/${encodeURIComponent(id)}`;

export const factCheckArticlePath = (id: string): string => `${routes.factCheck}/bai/${encodeURIComponent(id)}`;
