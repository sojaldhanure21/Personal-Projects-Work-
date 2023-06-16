import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <header>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "20%",
          }}
        >
          <Link href="/">Home</Link>
          <br />
          <Link href="/events">Events</Link>
          <br />
          <Link href="/about-us">About Us</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;