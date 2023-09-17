import { OrganizationSwitcher, SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png"
function TopNav() {
  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src={logo} alt='logo' width={28} height={28} />

      </Link>

      <div className='flex items-center gap-1'>
        <div className='block '>
        <UserButton />
        </div>

      </div>
    </nav>
  );
}

export default TopNav;