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

## 🔐 Bảng phân quyền (RBAC)
Dựa trên yêu cầu nghiệp vụ, hệ thống phân quyền chi tiết cho các chức năng như sau:

| Chức năng | Admin | HR | Lead / Manager | Employee | PC |
|---|---|---|---|---|---|
| **Quản lý nhân viên** | Không có | Toàn quyền | Không có | Không có | Không có |
| **Xem danh sách nhân viên** | Không có | Toàn quyền | Không có | Không có | Không có |
| **Phê duyệt đơn nghỉ phép** | Của Lead | Toàn quyền | Toàn quyền | Không có | Không có |
| **Phê duyệt OT ticket** | Của Lead | Toàn quyền | Toàn quyền<br>*(Lead IT tự động approve khi gửi)* | Không có | Không có |
| **Tạo đơn nghỉ phép** | Không có | Toàn quyền | Toàn quyền | Toàn quyền | Toàn quyền |
| **Duyệt kế hoạch OT (OT Plan)** | Của Lead | Không có | Toàn quyền<br>*(Lead IT duyệt plan do PC tạo)* | Không có | Toàn quyền |
| **Tạo kế hoạch OT (OT Plan)** | Không có | Toàn quyền | Toàn quyền | Không có | Toàn quyền |
| **Cấu hình hệ thống (Holidays...)** | Không có | Toàn quyền | Không có | Không có | Không có |
| **Xem báo cáo tổng hợp** | Không có | Toàn quyền | Không có | Không có | Không có |

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

## 📡 Danh sách API Backend hiện có
Hệ thống Frontend đã kết nối với Backend (NestJS) và có sẵn các API sau để triển khai:

**1. Auth & Users:**
- `GET /auth/zoho` & `/auth/zoho/callback`: Đăng nhập OAuth.
- `POST /auth/dev-login`: Login môi trường test.
- `GET /users/me`: Lấy Profile user đang đăng nhập.

**2. Leave Management (Nghỉ phép):**
- `POST /leave/request`: Tạo đơn xin nghỉ.
- `GET /leave/my-requests` & `GET /leave/my-balance`: Xem đơn cá nhân và số dư phép.
- `GET /leave/list-requests`: Quản lý lấy danh sách toàn bộ đơn.
- `PATCH /leave/:id/(approve|reject|cancel|update)`: Xử lý trạng thái đơn.

**3. OT Management (Tăng ca):**
- `POST /ot/plan`: PC tạo kế hoạch OT.
- `PATCH /ot/plan/:id/(approve|reject|update|cancel)`: Xử lý kế hoạch OT.
- `PATCH /ot/ticket/:id/(check-in|check-out|submit|approve|reject|update)`: Xử lý vé OT (Ticket).
- `GET /ot/ticket/my-ot-ticket/:id`: Xem chi tiết OT cá nhân.

**4. HR Management (Tuyển dụng/Nhân sự):**
- `POST /hr/invite`: Mời nhân viên (đơn lẻ).
- `POST /hr/invite/upload`: Import nhân viên hàng loạt (CSV/Excel).
- `POST /hr/invite/confirm`: Xác nhận danh sách gửi mail.

