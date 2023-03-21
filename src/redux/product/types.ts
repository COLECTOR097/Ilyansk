export type Product = {
  id: number;
  imageUrl: string;
  stock: number;
  desc: string;
  price: number;
  discount: number;
  weight: number;
};

export interface Products {
  products: Product[];
}
