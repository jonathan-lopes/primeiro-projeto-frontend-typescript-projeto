import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SingIn";
import TeacherDetail from "./pages/TeacherDetail";

type Props = {
  redirectTo: string;
};

function ProtectedRoutes({ redirectTo }: Props) {
  const { handleGetToken } = useAuth();

  return handleGetToken() ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />

      <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path="/main" element={<Main />} />
        <Route path="/teacher-detail" element={<TeacherDetail />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
