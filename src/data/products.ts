export interface ProductItem {
    productId: string;
    productName: string;
    productPrice: number;
}

export const PRODUCTS: ProductItem[] = [
    {
        productId: '1',
        productName: 'Macbook Pro',
        productPrice: 100000,
    },
    {
        productId: '2',
        productName: 'iPhone',
        productPrice: 100000,
    }
]