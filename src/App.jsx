import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import DashboardLayout from './layouts/DashboardLayout';
import LoginPage from './pages/auth/LoginPage';

const DashboardHome = () => (
  <div className="text-white">
    <h2 className="text-2xl font-bold mb-4">Chào mừng đến với feHRM</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <p className="text-slate-400">Tổng nhân viên</p>
        <h3 className="text-3xl font-bold">120</h3>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <p className="text-slate-400">Nghỉ phép hôm nay</p>
        <h3 className="text-3xl font-bold text-orange-400">5</h3>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <p className="text-slate-400">Yêu cầu OT chờ duyệt</p>
        <h3 className="text-3xl font-bold text-indigo-400">12</h3>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes (Yêu cầu đăng nhập mới được vào) */}
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/employees" element={<div className="text-white">Trang Quản lý nhân viên</div>} />
              <Route path="/overtime" element={<div className="text-white">Trang Quản lý OT</div>} />
              <Route path="/leave" element={<div className="text-white">Trang Quản lý Nghỉ phép</div>} />
              <Route path="/attendance" element={<div className="text-white">Trang Chấm công</div>} />
              <Route path="/settings" element={<div className="text-white">Trang Cài đặt</div>} />
            </Route>
          </Route>

          {/* Redirect mặc định */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
