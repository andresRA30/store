export interface Cart {
    id: string;
    name: string;
    created: number;
    updated: number;
    expires: number;
    quantity: number;
    total_items: number;
    total_unique_items: number;
    subtotal: Subtotal;
    hosted_checkout_url: string;
    line_items: LineItem[];
    currency: Currency;
    discount: any[];
}

export interface Currency {
    code: string;
    symbol: string;
}

export interface LineItem {
    id: string;
    product_id: string;
    formatted_with_symbol: string;
    name: string;
    product_name: string;
    media: any[];
    sku: string;
    permalink: string;
    quantity: number;
    price: Subtotal;
    line_total: Subtotal;
    is_valid: boolean;
    product_meta: any[];
    selected_options: any[];
    variant: any[];
}

export interface Subtotal {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
}
