export const routes = Object.freeze({ home: '/', education: '/giao-duc', educationLegacy: '/giao-duc.htm', realEstate: '/nha-dat' });

export const realEstateArticlePath = (id: string): string => `${routes.realEstate}/bai/${encodeURIComponent(id)}`;
