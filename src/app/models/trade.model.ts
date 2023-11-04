export interface Trade {
  id: number;
  userId: number;
  symbol: string;
  price: number;
  quantity: number;
  date: Date;
}
