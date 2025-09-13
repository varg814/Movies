import Navbar from "../components/organisms/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-md:flex-col h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center text-white">{children}</main>
    </div>
  );
}
