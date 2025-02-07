'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CgChevronRight } from 'react-icons/cg';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';

interface CartItem {
    _id: string;
    title: string;
    price: number;
    productImage: string;
    quantity: number;
}

export default function CheckoutPage() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cartForCheckout') || '[]');
        setCartItems(savedCart);
    }, []);

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountPercentage = 0;
    const totalPrice = subtotal - (subtotal * (discountPercentage / 100));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors: Record<string, string> = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
        if (!formData.phone.trim() || !/^(03\d{9}|\+92\d{10})$/.test(formData.phone)) newErrors.phone = 'Enter a valid Pakistani phone number';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.zipCode.trim() || !/^\d{5}$/.test(formData.zipCode)) newErrors.zipCode = 'Enter a valid 5-digit ZIP Code';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            const orderData = {
                _type: 'order',
                ...formData,
                cartItems: cartItems.map(item => ({ _type: 'reference', _ref: item._id })),
                totalPrice,
                discountPercentage,
                orderStatus: 'pending',
                orderDate: new Date().toISOString(),
            };

            try {
                await client.create(orderData);
                localStorage.removeItem('cartForCheckout');

                Swal.fire({
                    title: '🎉 Order Placed!',
                    text: 'Your order has been placed successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    setCartItems([]);
                    setFormData({ fullName: '', email: '', phone: '', address: '', city: '', zipCode: '' });
                });
            } catch (error) {
                console.error('Error placing order:', error);
                Swal.fire({ title: 'Oops!', text: 'Error placing order.', icon: 'error' });
            }
        }
    };

    return (
        <div className="min-h-screen py-8 px-4 md:px-10 flex justify-center items-center">
            <div className="max-w-5xl w-full bg-white p-8 shadow-2xl rounded-lg">
                <nav className="flex items-center gap-2 pb-4 border-b">
                    <Link href="/cart" className="text-gray-600 hover:text-black transition text-sm">Cart</Link>
                    <CgChevronRight className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-semibold">Checkout</span>
                </nav>
                <h1 className="text-3xl font-bold text-center my-6">🛒 Checkout</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-5 bg-gray-100 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item._id} className="flex items-center gap-4 border-b pb-4 last:border-b-0">
                                    <Image src={item.productImage || '/placeholder.jpg'} alt={item.title} width={64} height={64} className="rounded-lg" />
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium">{item.title}</h3>
                                        <p className="text-xs">Qty: {item.quantity}</p>
                                    </div>
                                    <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600 text-center">Your cart is empty.</p>
                        )}
                        <div className="mt-4 pt-2 border-t text-right">
                            <h3 className="text-lg font-semibold">Total: <span className="text-blue-600">${totalPrice.toFixed(2)}</span></h3>
                        </div>
                    </div>
                    {cartItems.length > 0 && (
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {Object.entries(formData).map(([field, value]) => (
                                    <div key={field}>
                                        <label className="block font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                                        <input type={field === 'email' ? 'email' : 'text'} name={field} value={value} onChange={handleInputChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder={`Enter ${field}`} />
                                        {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                                    </div>
                                ))}
                                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">Place Order</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
