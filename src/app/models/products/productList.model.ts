export interface ProductListModel {
  products: ProductModel[]; // Ürün listesi
  resultStatus: ResultStatus; // İşlem durumu
}

export interface ProductModel {
  id: number;
  name: string;
  code: string;
  price: number;
  quantity: number;
  isActive: boolean;
  category: {
    id: number;
    name: string;
    subCategory1: string;
  };
}
export enum ResultStatus {
  Success = 1,
  Error = 0
}