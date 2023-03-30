import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <main className="mt:8 lg:mt-16">{children}</main>
      <Footer />
    </div>
  );
}
