import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flora Komarno | Твоя крамниця квітів",
  description:
    "Квіти та вазони. Flora Komarno є найкращим місцем для придбання чудових квітів у Комарно та околицях. Квіти у Городок, Великий Любінь, Щирець, Бучали, Переможне, Нове Село, Грімне, Березець",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
