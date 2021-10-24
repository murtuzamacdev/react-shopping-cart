export interface ProductItem {
    productId: string;
    productName: string;
    productPrice: number;
    maxBuyLimit: number;
    showInventoryWarningLimit: number
}

export interface InvetoryItem {
    productId: string;
    currentQuantity: number;
}


export const PRODUCTS: ProductItem[] = [
    {
        productId: '1',
        productName: 'Macbook Pro',
        productPrice: 120000,
        maxBuyLimit: 3,
        showInventoryWarningLimit: 1
    },
    {
        productId: '2',
        productName: 'iPhone',
        productPrice: 80000,
        maxBuyLimit: 2,
        showInventoryWarningLimit: 1
    },
    {
        productId: '3',
        productName: 'iWatch',
        productPrice: 30000,
        maxBuyLimit: 2,
        showInventoryWarningLimit: 10
    },
    {
        productId: '4',
        productName: 'iPad',
        productPrice: 60000,
        maxBuyLimit: 2,
        showInventoryWarningLimit: 1
    }
]

export const INVENTORY: InvetoryItem[] = [
    {
        productId: '1',
        currentQuantity: 5
    },
    {
        productId: '2',
        currentQuantity: 10
    },
    {
        productId: '3',
        currentQuantity: 8
    },
    {
        productId: '4',
        currentQuantity: 9
    }
]