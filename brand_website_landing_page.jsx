import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BrandWebsite() {
  const [cart, setCart] = useState(0);

  const handlePayment = () => {
    window.location.href = "upi://pay?pa=8200890373@fam&pn=BIG%20FASHION";
  };

  const handleDelivery = () => {
    alert("🚚 Your order will be delivered within 3-5 days!");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden scroll-smooth">
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 flex items-center justify-center text-black font-black text-xl">BF</div>
          <h1 className="text-3xl font-bold tracking-[0.25em]">BIG FASHION</h1>
        </div>
        <div className="px-4 py-2 rounded-full bg-white text-black font-bold">Cart: {cart}</div>

        <nav className="space-x-8 text-sm uppercase tracking-widest">
          <a href="#home">Home</a>
          <a href="#about">Story</a>
          <a href="#products">Collection</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="min-h-screen grid md:grid-cols-2 items-center px-10 md:px-20 pt-28">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-6xl font-black mb-6">DEFINE YOUR STYLE</h2>
          <a href="#products" className="px-8 py-4 bg-white text-black rounded-full">Shop Now</a>
        </motion.div>

        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
          <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49" />
        </motion.div>
      </section>

      <section id="products" className="py-20 px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {['Sunglasses','Watches','Perfume'].map((item) => (
            <div key={item} className="p-6 bg-neutral-800 rounded-2xl">
              <h4 className="mb-4">{item}</h4>
              <button onClick={() => setCart(cart + 1)} className="bg-white text-black px-4 py-2 rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-10">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <button onClick={() => setCart(cart + 1)} className="p-6 bg-neutral-800 rounded">🛒 Add to Cart</button>
          <button onClick={handlePayment} className="p-6 bg-neutral-800 rounded">💳 Pay Now</button>
          <button onClick={handleDelivery} className="p-6 bg-neutral-800 rounded">🚚 Delivery Info</button>
        </div>
      </section>

      <section id="contact" className="py-20 text-center">
        <a href="https://wa.me/918200890373" className="block mb-4">WhatsApp Order</a>
        <a href="https://instagram.com/big_fashion.0">Instagram</a>
      </section>
    </div>
  );
}
