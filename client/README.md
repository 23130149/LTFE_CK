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
npm run api
```

Mở một terminal khác trong thư mục `client`, chạy `npm run dev` rồi mở http://localhost:5173. Giữ cả hai terminal đang chạy để các chuyên mục Xe, Du lịch, Văn hóa, Giải trí và Thể thao tải được dữ liệu.

## Cấu trúc

- `src/App.jsx`: trang chủ, ghép các phần lại
- `src/components/`: Header, HomeFocus, HotTags, NewsList, ArticleCard, Footer
- `src/data/mock.js`: tin giả, sẽ thay bằng API sau
- `src/data/menu.js`: menu và chủ đề nổi bật
- `src/styles/home.css`: toàn bộ CSS

## Scripts

- `npm run dev`: chạy môi trường phát triển
- `npm run api`: chạy fake API ở cổng 4000
- `npm run build`: build bản production vào `dist/`
- `npm run lint`: kiểm tra lỗi code

## Fake API

Dữ liệu nằm trong `fake-api/db.json`. Chạy `npm run api` để mở API ở cổng 4000. Các đường dẫn `/api/articles` và `/api/news` lần lượt trả dữ liệu cho năm chuyên mục và danh sách tin mẫu; `/api/news?zone=Thế giới` lọc tin theo chuyên mục. API đọc lại file khi có yêu cầu.
