import { HashRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "./types";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RequisitesPage } from "./pages/RequisitesPage/RequisitesPage";
import { Layout } from "./components/Layout/Layout";
import { EmailPage } from "./pages/EmailPage/EmailPage";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route element={<MainPage />} path={RoutePath.MainPage} />
          <Route element={<ContactsPage />} path={RoutePath.ContactsPage} />
          <Route element={<RequisitesPage />} path={RoutePath.RequisitesPage} />
          <Route element={<EmailPage />} path={RoutePath.EmailPage} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
