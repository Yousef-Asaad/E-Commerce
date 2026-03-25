import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ breadcrumbItems }) {
  return (
    <>
      <Navbar />

      {/* Breadcrumb يظهر في كل الصفحات */}
      <div className="container my-3">
        {breadcrumbItems && breadcrumbItems.length > 0 ? (
          <Breadcrumbs items={breadcrumbItems} />
        ) : (
          <Breadcrumbs items={[{ label: "Home", path: "/" }]} />
        )}
      </div>

      <div className="container">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}