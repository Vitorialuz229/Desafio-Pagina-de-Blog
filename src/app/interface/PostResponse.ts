export interface PostResponse {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  image: string;
  likeCount: number;
  url: string;
  isLiked?: boolean;
}
