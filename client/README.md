# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
# Báo Tuổi Trẻ - Giao diện (React + Vite)

Frontend chạy độc lập, dữ liệu lấy từ `src/data/mock.js`. Chưa cần backend.

## Chạy

Yêu cầu Node.js 20.19 trở lên.

```bash
npm install
npm run dev
```

Mở http://localhost:5173

## Cấu trúc

- `src/App.jsx`: trang chủ, ghép các phần lại
- `src/components/`: Header, HomeFocus, HotTags, NewsList, ArticleCard, Footer
- `src/data/mock.js`: tin giả, sẽ thay bằng API sau
- `src/data/menu.js`: menu và chủ đề nổi bật
- `src/styles/home.css`: toàn bộ CSS

## Scripts

- `npm run dev`: chạy môi trường phát triển
- `npm run build`: build bản production vào `dist/`
- `npm run lint`: kiểm tra lỗi code

## Fake API (json-server)

Tin được lấy từ `fake-api/db.json` qua cổng 3001. Nếu không bật fake API, app tự dùng dữ liệu tĩnh trong `src/data/mock.ts`.

Chạy hai terminal:

```bash
# Terminal 1: fake API (cổng 3001)
npm run fake-api

# Terminal 2: giao diện (cổng 5173)
npm run dev
```

Kiểm tra API: mở `http://localhost:3001/news`. Lọc theo chuyên mục: `http://localhost:3001/news?zone=Thế giới`.

Thêm bài mới: sửa `fake-api/db.json`, json-server tự nạp lại. Mỗi bài cần các field `id` (số, không trùng), `title`, `sapo`, `zone` (đúng tên trong `src/data/menu.ts`), `time`, `image`.
