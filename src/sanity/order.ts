export const order=({
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'fullName',
            type: 'string',
            title: 'Full Name',
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',
        },
        {
            name: 'city',
            type: 'string',
            title: 'City',
        },
        {
            name: 'zipCode',
            type: 'string',
            title: 'ZIP Code',
        },
        {
            name: 'cartItems',
            type: 'array',
            title: 'Cart Items',
            of: [{ type: 'reference', to: [{ type: 'product' }] }],
        },
        {
            name: 'totalPrice',
            type: 'number',
            title: 'Total Price',
        },
        {
            name: 'discountPercentage',
            type: 'number',
            title: 'Discount Percentage',
        },
        {
            name: 'orderStatus',
            type: 'string',
            title: 'Order Status',
        },
        {
            name: 'orderDate',
            type: 'datetime',
            title: 'Order Date',
        },
    ],
})