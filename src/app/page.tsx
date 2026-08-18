import Image from "next/image";
import DarkModeToggle from "@/components/DarkModeToggle";
import LinkCard from "@/components/LinkCard";
import { profile, links } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <DarkModeToggle />

      <div className="max-w-md mx-auto px-4 py-16 flex flex-col items-center gap-4">
        {/* 프로필 */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md">
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {profile.name}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {profile.bio}
        </p>

        {/* 링크 목록 */}
        <div className="w-full flex flex-col gap-3 mt-4">
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>
      </div>
    </main>
  );
}
