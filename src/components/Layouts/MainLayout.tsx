import NavigationBar from "../Fragments/NavigationBar";
import Footer from "../Fragments/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col font-family-base">
      <header className="text-white">
        <NavigationBar />
      </header>
      <main className="grow p-4 pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
