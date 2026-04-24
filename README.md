# feHRM - Human Resource Management System

Dự án Quản lý nhân sự được xây dựng bằng ReactJS + Tailwind CSS v4.

## 🏗 Cấu trúc thư mục (Architecture)
Dự án tuân thủ cấu trúc phân tầng rõ rệt:

```
src/
├── api/          # Cấu hình Axios & các hàm gọi API (employeeApi, otApi...)
├── components/   # Các thành phần giao diện
│   ├── ui/       # Component thuần UI (Button, Input, Badge...)
│   └── common/   # Component chứa logic nghiệp vụ dùng chung (DataTable, PageHeader...)
├── context/      # Quản lý state toàn cục (AuthContext...)
├── hooks/        # Custom hooks (useApi, useDebounce...)
├── layouts/      # Bộ khung giao diện (DashboardLayout, AuthLayout)
├── pages/        # Các trang nghiệp vụ (Employee, Overtime, Leave...)
├── routes/       # Cấu hình điều hướng (PrivateRoute, AppRoutes)
├── utils/        # Hàm tiện ích (format, validate)
└── constants/    # Hằng số (API_URL, Roles, Status)
```

## 🛠 Tech Stack & Quy tắc Code
- **Framework:** ReactJS (Vite)
- **Styling:** Tailwind CSS v4 (Sử dụng CSS vars và @import "tailwindcss")
- **API Handling:** Axios + Custom hook `useApi`.
- **Layout Pattern:** Sử dụng nested routes với `<Outlet />`.
- **Naming Convention:**
    - Component: PascalCase (ví dụ: `EmployeeTable.jsx`)
    - Hooks: camelCase bắt đầu bằng 'use' (ví dụ: `useApi.js`)
    - Tránh hard-code, ưu tiên dùng file `constants/`.

## 💡 Phương pháp học tập & phát triển
Để người dùng nắm vững Tailwind CSS, AI tuân thủ quy trình hướng dẫn UI từng bước:
1. **Phân tích cấu trúc:** Giải thích các thẻ HTML cần thiết.
2. **Triển khai từng lớp (Layering):** 
    - Bước 1: **Layout & Size** (flex, grid, width, height).
    - Bước 2: **Spacing & Alignment** (padding, margin, items-center...).
    - Bước 3: **Visual & Decor** (bg-color, rounded, border, shadow...).
    - Bước 4: **Interactivity & Effects** (hover, transition, animate...).
3. **Giải thích ý nghĩa:** Mỗi class thêm vào đều đi kèm giải thích ngắn gọn về tác dụng của nó.

## 🚦 Lộ trình phát triển (Roadmap)
1. ✅ Khởi tạo dự án & Cấu trúc thư mục.
2. 🔄 Setup Routing & Authentication (App.jsx, AuthContext).
3. 🔄 Xây dựng Dashboard Layout (Sidebar, Header).
4. 🔄 Phát triển UI Components dùng chung.
5. 🔄 Triển khai các trang nghiệp vụ (Nhân viên, Chấm công...).
