export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
