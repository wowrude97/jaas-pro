export const metadata = {
  title: "JAAS Pro",
  description: "Sistema de gestão pessoal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
