# Portfolio Website - Vũ Đình Hoàng

Website portfolio cá nhân được xây dựng với React, TypeScript và các công nghệ web hiện đại.

## 📋 Giới thiệu

Đây là website portfolio cá nhân của Vũ Đình Hoàng - sinh viên năm 3 ngành Công nghệ Thông tin tại Trường Đại học Khoa học Tự nhiên - Đại học Quốc gia Hà Nội (HUS-VNU), với niềm đam mê dành cho Backend Development và Software Engineering.

Website hiển thị thông tin cá nhân, kỹ năng, dự án đã thực hiện và kinh nghiệm làm việc của tác giả.

## 🚀 Công nghệ sử dụng

### Frontend
- **React 18.3.1** - Thư viện JavaScript để xây dựng giao diện người dùng
- **TypeScript 5.6.3** - Superset của JavaScript với static typing
- **Vite 5.4.9** - Build tool nhanh và hiện đại
- **React Router DOM 6.27.0** - Routing cho ứng dụng React

### Styling
- **Bootstrap 5.3.3** - Framework CSS responsive
- **React Bootstrap 2.10.5** - Components Bootstrap cho React
- **Sass 1.77.6** - Preprocessor CSS

### Internationalization
- **i18next 23.16.0** - Framework internationalization
- **react-i18next 15.0.3** - Integration i18next cho React
- **i18next-browser-languagedetector 8.0.0** - Tự động phát hiện ngôn ngữ trình duyệt
- **i18next-http-backend 2.6.2** - Load translations từ server

### Animations & UI
- **lottie-react 2.4.0** - Thư viện hiển thị animations Lottie
- **react-fast-marquee 1.6.5** - Component marquee animation
- **react-parallax-tilt 1.7.246** - 3D tilt effect cho cards
- **typewriter-effect 2.21.0** - Hiệu ứng gõ chữ
- **react-icons 5.3.0** - Icon library

### Development Tools
- **ESLint 9.12.0** - Code linting
- **vite-tsconfig-paths 5.0.1** - Path aliases trong Vite

## 📁 Cấu trúc dự án

```
cv-project/
├── public/                 # Static files
│   ├── locales/           # Translation files
│   │   └── vi/            # Vietnamese translations
│   └── vite.svg           # Vite icon
├── src/
│   ├── assets/            # Images, animations, SVGs
│   ├── components/        # React components
│   │   ├── context/       # React Context (theme management)
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   ├── sections/      # Page sections (Hero, Skills, Projects, About)
│   │   └── share/         # Shared components (GlowCard, AnimationLottie)
│   ├── helpers/           # Utility functions and data
│   ├── pages/             # Page components
│   ├── styles/            # Global styles (SCSS)
│   ├── i18n.tsx           # i18next configuration
│   ├── layout.tsx         # Main layout component
│   └── main.tsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── vercel.json            # Vercel deployment config
```

## 🎯 Tính năng chính

### 1. **Hero Section**
- Giới thiệu bản thân với hiệu ứng typewriter
- Nút tải CV và xem kinh nghiệm
- Animation Lottie
- Responsive design

### 2. **Skills Section**
- Hiển thị kỹ năng kỹ thuật theo nhóm:
  - Backend Development
  - Database Management
  - System & Architecture
  - DevOps & Deployment
- Tech stack marquee animation với icons
- Hỗ trợ nhiều kỹ năng khác nhau

### 3. **Projects Section**
- Hiển thị danh sách dự án cá nhân
- Card project với hình ảnh, mô tả, tech stack
- Links đến GitHub và demo
- Responsive grid layout

### 4. **About Section**
- Giới thiệu chi tiết về bản thân
- Lĩnh vực quan tâm
- Mục tiêu nghề nghiệp
- Thông tin học vấn
- Thông tin liên hệ với social media links
- Animations Lottie

### 5. **Header & Navigation**
- Navbar responsive với Bootstrap
- Dark/Light theme toggle
- Language switcher (Tiếng Việt/English)
- Social media links
- Smooth scroll navigation

### 6. **Internationalization**
- Hỗ trợ đa ngôn ngữ (Tiếng Việt và English)
- Tự động phát hiện ngôn ngữ trình duyệt
- Dễ dàng thêm ngôn ngữ mới

### 7. **Theme Management**
- Dark/Light mode
- Lưu preference vào localStorage
- Áp dụng theme toàn ứng dụng

## 🛠️ Cài đặt và chạy dự án

### Yêu cầu
- Node.js (v18 hoặc cao hơn)
- npm hoặc yarn

### Các bước cài đặt

1. **Clone repository**
```bash
git clone https://github.com/dinhhoang0712/cv-project.git
cd cv-project
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy development server**
```bash
npm run dev
```
Website sẽ chạy tại `http://localhost:3000`

4. **Build cho production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📝 Scripts có sẵn

- `npm run dev` - Chạy development server
- `npm run start` - Tương tự như `npm run dev`
- `npm run build` - Build cho production
- `npm run lint` - Chạy ESLint
- `npm run preview` - Preview production build

## 🎨 Tùy chỉnh

### Thay đổi thông tin cá nhân

1. **Tên và thông tin cơ bản**: Sửa trong `public/locales/vi/translation.json` và `public/locales/en/translation.json`

2. **Kinh nghiệm làm việc**: Sửa trong `src/helpers/data.ts` - mảng `EXPERIENCES`

3. **Dự án**: Sửa trong `src/helpers/data.ts` - mảng `PROJECTS`

4. **Kỹ năng**: Sửa trong `src/components/sections/skill/index.tsx` - mảng `SKILLS` và `TECH_STACK`

### Thêm ngôn ngữ mới

1. Tạo folder mới trong `public/locales/` (ví dụ: `en/`)
2. Tạo file `translation.json` với cấu trúc tương tự
3. Cập nhật `src/i18n.tsx` để thêm ngôn ngữ mới

### Thay đổi theme colors

Sửa trong `src/styles/variable.scss` để thay đổi các biến màu sắc.

## 📱 Responsive Design

Website được thiết kế responsive và hỗ trợ:
- Desktop (md, lg, xl breakpoints)
- Tablet (sm breakpoint)
- Mobile (xs breakpoint)

## 🌐 Deployment

Dự án được cấu hình để deploy trên Vercel. File `vercel.json` đã được cấu hình sẵn.

Để deploy:
1. Push code lên GitHub
2. Import project vào Vercel
3. Vercel sẽ tự động detect và deploy

## 📧 Liên hệ

- **Email**: vuhoang5053@gmail.com
- **Phone**: 0343721388
- **GitHub**: https://github.com/dinhhoang0712
- **Facebook**: https://www.facebook.com/vu.inh.hoang.443763

## 📄 License

Dự án này được phát triển cho mục đích cá nhân và học tập.

## 🤝 Đóng góp

Nếu bạn muốn đóng góp hoặc có gợi ý cải thiện, hãy tạo issue hoặc pull request trên GitHub.

---

© 2024 Vũ Đình Hoàng. Built with ♥ using React & TypeScript.
