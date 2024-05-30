import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="py-8 xl:py-12 , text-white">
      <nav className="container  sm:px-[6rem] xl:container mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="">
          <Link className="flex  gap-4 text-4xl font-semibold " href="/">
            <h1 className="text-4xl font-semibold flex items-baseline gap-4 ">
              Jawed 
            </h1>
            <span className="text-accent ">.</span>
          </Link>
        </div>

        {/* desktop nav  & hireme button */}
        <div className="hidden xl:flex justify-between items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}

export default Header;
