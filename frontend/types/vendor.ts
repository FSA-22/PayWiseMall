export type Vendor = {
  id: string;
  name: string;
  logo: string;
  memberSince: number;
  reviewsCount: number;
  rating: number; // 0 - 5
  itemsSold: number;
  availableProducts: number;
  isTrending: boolean;
  isFavorite: boolean;
};
