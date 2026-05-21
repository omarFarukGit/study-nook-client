"use client";

import { useState, useEffect } from "react";

import { BookOpen, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // active nav style
  const navLinkClass = (path) =>
    `font-medium transition-colors ${
      pathname === path ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
    }`;

  const mobileNavClass = (path) =>
    `block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
      pathname === path
        ? "bg-blue-50 text-blue-600"
        : "text-slate-900 hover:bg-slate-50"
    }`;

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm py-2"
          : "bg-slate-50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-blue-600 rounded-xl group-hover:rotate-12 transition-transform">
                <BookOpen className="w-6 h-6 text-white" />
              </div>

              <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                StudyNook
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            <Link href="/all-room" className={navLinkClass("/all-room")}>
              Rooms
            </Link>

            {user && (
              <>
                <Link href="/add-room" className={navLinkClass("/add-room")}>
                  Add Room
                </Link>

                <Link
                  href="/my-listing"
                  className={navLinkClass("/my-listing")}
                >
                  My Listings
                </Link>

                <Link
                  href="/my-booking"
                  className={navLinkClass("/my-booking")}
                >
                  My Bookings
                </Link>
              </>
            )}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            {!user && (
              <>
                <Link href="/login">
                  <Button
                    color="primary"
                    className="font-bold rounded-full px-8 shadow-lg shadow-blue-600/20"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/signin">
                  <Button
                    variant="bordered"
                    className="font-bold rounded-full px-8"
                  >
                    Sign In
                  </Button>
                </Link>
              </>
            )}

            {user && (
              <div className="relative group">
                <button className="flex items-center gap-3 p-1 rounded-full hover:bg-muted transition-colors">
                  <Image
                    width={40}
                    height={40}
                    src={
                      user?.image ||
                      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
                    }
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-bold truncate max-w-25">
                      {user?.name}
                    </p>

                    <p className="text-[10px] text-slate-500">{user?.email}</p>
                  </div>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50">
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="font-bold text-sm">Welcome back!</p>

                    <p className="text-xs truncate text-slate-500">
                      {user?.email}
                    </p>
                  </div>

                  <Link
                    href="/my-listing"
                    className="px-4 py-2 text-sm hover:bg-slate-100 flex items-center gap-3 transition-colors"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Link>

                  <Link
                    href="/my-booking"
                    className="px-4 py-2 text-sm hover:bg-slate-100 flex items-center gap-3 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    My Booking
                  </Link>

                  <button
                    onClick={handleSignOut}
                    className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200">
          <Link href="/" className={mobileNavClass("/")}>
            Home
          </Link>

          <Link href="/all-room" className={mobileNavClass("/all-room")}>
            All Room
          </Link>

          {user && (
            <>
              <Link href="/add-room" className={mobileNavClass("/add-room")}>
                Add Room
              </Link>

              <Link
                href="/my-listing"
                className={mobileNavClass("/my-listing")}
              >
                My Listing
              </Link>

              <Link
                href="/my-booking"
                className={mobileNavClass("/my-booking")}
              >
                My Booking
              </Link>
            </>
          )}

          <div className="pt-4 border-t mt-4">
            {user ? (
              <button
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl"
              >
                Log Out
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <Link href="/login">
                  <Button variant="bordered" className="rounded-xl w-full">
                    Login
                  </Button>
                </Link>

                <Link href="/register">
                  <Button color="primary" className="rounded-xl w-full">
                    Join Now
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
