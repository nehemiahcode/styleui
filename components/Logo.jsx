import Link from "next/link"
import Image from "next/image";
import StyleUi from "../public/logo3.webp";

export default function Logo({size}) {
  return (
    <Link href="/" scroll={false} className="flex items-center gap-2">
    <Image
      src={StyleUi}
      width={40}
      height={40}
      alt="Style UI logo"
      className={{size}}
    />
    <p className="font-semibold dark:text-black text-[1rem] text-white">
      Style{" "}
      <span className="p-2 dark:border-l-white border-l-slate-900 border-[3px] border-blue-600 rounded-full">
        Ui
      </span>
    </p>
  </Link>
  )
}
