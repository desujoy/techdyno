export interface EventItem {
  id: number;
  name: string;
  club: string;
  description: string;
  image: string;
  leaderboard: leaderbeard_items[];
}

interface leaderbeard_items{
  id: number;
  name: string;
  score: number;
}