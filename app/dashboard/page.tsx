import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";

export default function DashboardPage() {
  const isAuthenticated = false;

  const children = isAuthenticated ? <Dashboard /> : <Login />;
  return <Main>{children}</Main>;
}
