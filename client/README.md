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
