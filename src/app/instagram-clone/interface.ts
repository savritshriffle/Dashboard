export interface postData {
  id: string;
  username: string;
  userImage: string;
  imageUrl: string;
  caption: string;
  hashtags: string[];
  likes: number;
  liked: boolean;
  comments: {[key: string]: number | boolean | string} []
}


