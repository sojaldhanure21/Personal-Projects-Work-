import Image from "next/image";
import Link from "next/link";
import React from "react";

function MainPage({ events_categories }) {
  return (
    <div>
      <main>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "70%",
            justifyContent: "space-evenly",
            marginTop: "5%",
          }}
        >
          {events_categories.map((title) => (
            <Link key={title.id} href={`/events/${title.id}`} passHref={true}>
              <Image
                alt={title.title}
                width={300}
                height={300}
                src={title.image}
              />
              <h2>{title.title}</h2>
              <p>{title.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
