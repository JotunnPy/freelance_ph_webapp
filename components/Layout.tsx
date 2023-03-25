import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
