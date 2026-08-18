export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  bio: string;
  avatarUrl: string;
}

export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarUrl: "https://api.dicebear.com/8.x/avataaars/svg?seed=linktree",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com", icon: "🐙" },
  { id: "blog", title: "기술 블로그", url: "https://velog.io", icon: "✍️" },
  { id: "youtube", title: "YouTube", url: "https://youtube.com", icon: "▶️" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com", icon: "📸" },
  { id: "twitter", title: "X (Twitter)", url: "https://x.com", icon: "🐦" },
];
