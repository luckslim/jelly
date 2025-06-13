import type { Metadata } from "next";
import { Roboto_Flex} from "next/font/google";
import { Providers } from "./providers";
const Roboto = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pulse",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Roboto.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
