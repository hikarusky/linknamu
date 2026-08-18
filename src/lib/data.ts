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
  name: "홍개발",
  bio: "풀 스택 개발자 | 요즘에는 AI개발에 관심이 많아요",
  avatarUrl: "https://placehold.co/150x150/orange/white.png",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com", icon: "🐙" },
  { id: "blog", title: "기술 블로그", url: "https://velog.io", icon: "✍️" },
  { id: "youtube", title: "YouTube", url: "https://youtube.com", icon: "▶️" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com", icon: "📸" },
  { id: "twitter", title: "X (Twitter)", url: "https://x.com", icon: "🐦" },
];
