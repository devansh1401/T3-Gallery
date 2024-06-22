import { index } from "drizzle-orm/mysql-core";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/df253b36-f5b3-47c7-90b2-089b456baa56-ocy5td.jpeg",
  "https://utfs.io/f/29e1499c-fe80-4661-997a-e56a759c0dd4-daa6ru.png",
  "https://utfs.io/f/fe89e7db-5d5c-45b8-a65a-f9f6a084b8e6-dspw9u.png",
  "https://utfs.io/f/dc682ca7-181f-48ba-9d75-040ea4ca3cbd-r05z7r.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
