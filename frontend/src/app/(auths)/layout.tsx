export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-full flex flex-col font-sans">{children}</div>;
}
