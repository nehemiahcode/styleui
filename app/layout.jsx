import Themeprovider from "@/components/Themeprovider";
import "./globals.css";

export const metadata = {
  title: "StyleUi, beautiful, fast and modern React UI library",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Themeprovider>{children}</Themeprovider>
      </body>
    </html>
  );
}
