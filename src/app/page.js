import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeMain from "@/components/Home_Sections/HomeMain";

export default function Home() {
  return (
    <div className="font-display overflow-hidden">
      <Header />
      <HomeMain />
      <Footer />
    </div>
  );
}
