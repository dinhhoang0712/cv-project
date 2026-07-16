import { Outlet } from "react-router-dom"
import AppHeader from "./components/layout/app.header"
import AppFooter from "./components/layout/app.footer"
import BackToTop from "./components/share/back-to-top"
import CustomCursor from "./components/share/custom-cursor"

function Layout() {

  return (
    <div>
      <CustomCursor />
      <div className="app-aurora" aria-hidden="true">
        <span className="aurora-1"></span>
        <span className="aurora-2"></span>
        <span className="aurora-3"></span>
      </div>
      <AppHeader />
      <Outlet />
      <AppFooter />
      <BackToTop />
    </div>
  )
}

export default Layout