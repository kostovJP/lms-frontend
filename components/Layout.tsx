//components/Layout.tsx/
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;