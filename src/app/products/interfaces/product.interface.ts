export interface SearchProductResponse {
    data: Product[];
    meta: Meta;
}

export interface Product {
    id: string;
    created: number;
    updated: number;
    active: boolean;
    permalink: string;
    name: string;
    description: string;
    price: Price;
    inventory: Inventory;
    media: MediaClass;
    sku: string;
    sort_order: number;
    seo: SEO;
    thank_you_url: null;
    meta: null;
    conditionals: { [key: string]: boolean };
    is: Is;
    has: Has;
    collects: Collects;
    checkout_url: CheckoutURL;
    extra_fields: any[];
    variant_groups: any[];
    categories: any[];
    assets: Asset[];
    related_products: any[];
}

export interface Asset {
    id: string;
    url: string;
    description: null;
    is_image: boolean;
    filename: string;
    file_size: number;
    file_extension: string;
    image_dimensions: ImageDimensions;
    meta: any[];
    created_at: number;
    updated_at: number;
}

export interface ImageDimensions {
    width: number;
    height: number;
}

export interface CheckoutURL {
    checkout: string;
    display: string;
}

export interface Collects {
    fullname: boolean;
    shipping_address: boolean;
    billing_address: boolean;
    extra_fields: boolean;
}

export interface Has {
    digital_delivery: boolean;
    physical_delivery: boolean;
    images: boolean;
    video: boolean;
    rich_embed: boolean;
}

export interface Inventory {
    managed: boolean;
    available: number;
}

export interface Is {
    active: boolean;
    tax_exempt: boolean;
    pay_what_you_want: boolean;
    inventory_managed: boolean;
    sold_out: boolean;
}

export interface MediaClass {
    type: string;
    source: string;
}

export interface Price {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
}

export interface SEO {
    title: null;
    description: null;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: Links;
}

export interface Links {
}
