import Themeprovider from "@/components/Themeprovider.js";
import "../globals.css";

export const metadata = {
  title: "Introduction | StyleUi, beautiful, fast and modern React UI library",
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
