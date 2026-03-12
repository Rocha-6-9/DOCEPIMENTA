/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  Heart, 
  Star, 
  CheckCircle2, 
  Package, 
  Sparkles,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Lock,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_NUMBER = "5500000000000"; // Placeholder
const WHATSAPP_MESSAGE = encodeURIComponent("Olá, gostaria de conhecer os produtos da Doce Pimenta.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Button = ({ children, className = "", variant = "primary", ...props }: any) => {
  const variants = {
    primary: "bg-brand-pink text-white hover:bg-opacity-90",
    secondary: "bg-brand-dark text-white hover:bg-opacity-90",
    outline: "bg-transparent text-brand-pink border-2 border-brand-pink hover:bg-brand-pink hover:text-white"
  };

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-xl hover:shadow-brand-pink/20 ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

const SectionTitle = ({ children, subtitle, centered = true }: any) => (
  <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
    <h2 className="text-4xl md:text-7xl font-black text-brand-dark mb-2 uppercase tracking-tighter">
      {children}
    </h2>
    <div className={`w-24 h-2 bg-brand-pink ${centered ? "mx-auto" : ""}`}></div>
    {subtitle && <p className="max-w-2xl text-lg text-stone-500 font-medium mt-8">{subtitle}</p>}
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Banner */}
      <div className="bg-brand-dark text-white py-2 text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
        Envio 100% Discreto • Atendimento Personalizado • Entrega Rápida
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://acdn-us.mitiendanube.com/stores/001/858/899/themes/common/logo-784907036-1631208059-ef2524075512bc44259241c34bb3e8f51631208059-480-0.png?0" 
              alt="Doce Pimenta" 
              className="h-10 md:h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-brand-dark">
            <a href="#produtos" className="hover:text-brand-pink transition-colors">Categorias</a>
            <a href="#sobre" className="hover:text-brand-pink transition-colors">Sobre Nós</a>
            <a href="#depoimentos" className="hover:text-brand-pink transition-colors">Depoimentos</a>
            <Button className="px-8 py-3" variant="secondary">Falar com Consultora</Button>
          </nav>

          <button className="md:hidden text-brand-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-t border-stone-100 p-6 flex flex-col gap-4"
          >
            <a href="#produtos" onClick={() => setIsMenuOpen(false)} className="text-brand-dark font-bold uppercase text-sm tracking-widest">Categorias</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-brand-dark font-bold uppercase text-sm tracking-widest">Sobre Nós</a>
            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-brand-dark font-bold uppercase text-sm tracking-widest">Depoimentos</a>
            <Button className="w-full">Falar com Consultora</Button>
          </motion.div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white pt-12 md:pt-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h1 className="text-5xl md:text-8xl font-black text-brand-dark leading-[0.9] mb-8 uppercase tracking-tighter">
                Sua <span className="text-brand-pink">Intimidade</span><br />
                Em Outro Nível
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 mb-10 font-medium leading-tight max-w-lg">
                Produtos selecionados para despertar prazer, conexão e novas sensações. Atendimento exclusivo e discreto.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="text-lg">Falar com Consultora</Button>
                <div className="flex items-center gap-4 px-6 py-4 bg-brand-gray rounded-full">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-brand-dark uppercase tracking-tighter">+5k Clientes Satisfeitas</span>
                </div>
              </div>

              {/* Categorias Favoritas - NOW DIRECTLY BELOW THE BUTTON */}
              <div className="mb-12">
                <h2 className="text-xl font-black text-brand-dark uppercase mb-6 tracking-tighter border-l-4 border-brand-pink pl-4">
                  Categorias Favoritas
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "Vibradores", img: "https://acdn-us.mitiendanube.com/stores/001/858/899/products/bw016-preto-4-1000x10001-60dfa0a221bdcb9af116376900264234-480-0.webp" },
                    { name: "Cosméticos", img: "https://acdn-us.mitiendanube.com/stores/001/858/899/products/16276698684198_zoom1-e83e8fc51501607a1f16366598139631-480-0.webp" },
                    { name: "Acessórios", img: "https://acdn-us.mitiendanube.com/stores/001/858/899/products/41o1vydzupl-_ac_sx425_1-0b4518e1eabc44afa516366539470915-480-0.webp" }
                  ].map((cat, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="group cursor-pointer"
                      onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                    >
                      <div className="aspect-square rounded-2xl overflow-hidden mb-2 shadow-md border border-stone-100">
                        <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-tighter text-center block text-brand-dark group-hover:text-brand-pink transition-colors">
                        {cat.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Lock, text: "Sigilo Total" },
                  { icon: Zap, text: "Entrega Flash" },
                  { icon: ShieldCheck, text: "Compra Segura" },
                  { icon: Heart, text: "Premium" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-brand-gray p-2 rounded-lg">
                    <item.icon size={14} className="text-brand-pink shrink-0" />
                    <span className="text-[9px] font-bold uppercase tracking-tighter text-brand-dark leading-none">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000" 
                  alt="Doce Pimenta" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-pink/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-pink/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-24 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <SectionTitle centered={false}>Prazer, Doce Pimenta</SectionTitle>
                <div className="space-y-6 text-lg text-stone-600 font-medium leading-relaxed">
                  <p>
                    Somos mais que um sexshop. Somos uma boutique dedicada ao seu bem-estar íntimo e à descoberta de novas sensações.
                  </p>
                  <p>
                    Na Doce Pimenta, selecionamos apenas o que há de melhor no mercado mundial para garantir que sua experiência seja inesquecível, segura e transformadora.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div>
                    <span className="block text-4xl font-black text-brand-pink mb-2">100%</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">Discreto</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-black text-brand-pink mb-2">+10k</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">Pedidos Entregues</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://acdn-us.mitiendanube.com/stores/001/858/899/products/7112-41-1b097105ff012c604916473735252551-480-0.webp" alt="Produto Doce Pimenta" className="rounded-3xl shadow-xl w-full h-full object-cover" referrerPolicy="no-referrer" />
                <img src="https://acdn-us.mitiendanube.com/stores/001/858/899/products/vb168-cd308864710ef81a6a17507144900848-480-0.webp" alt="Produto Doce Pimenta" className="rounded-3xl shadow-xl mt-12 w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Atendimento Banner */}
        <section className="py-12 bg-brand-gray border-y border-stone-100">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 text-brand-dark">Dúvidas sobre qual escolher?</h2>
              <p className="text-stone-500 font-medium">Nossas consultoras estão online para te ajudar agora.</p>
            </div>
            <Button>
              Falar com Consultora
            </Button>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-24 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle centered>O que elas dizem</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Ana Paula", text: "A entrega foi super rápida e a embalagem é realmente muito discreta. Amei o atendimento!" },
                { name: "Beatriz M.", text: "Os produtos são de uma qualidade absurda. A Doce Pimenta virou minha loja favorita." },
                { name: "Fernanda S.", text: "Tive medo de comprar online, mas a consultora me passou muita segurança pelo WhatsApp. Recomendo!" }
              ].map((d, i) => (
                <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm">
                  <div className="flex text-brand-pink mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-stone-600 font-medium italic mb-8">"{d.text}"</p>
                  <span className="font-black text-brand-dark uppercase text-sm tracking-widest">— {d.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-brand-dark text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <span className="inline-block text-brand-pink font-black uppercase tracking-[0.3em] text-xs mb-6">Pronta para o prazer?</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">
              Não deixe para <span className="text-brand-pink italic">amanhã</span> o prazer que você pode sentir hoje.
            </h2>
            <Button className="px-16 py-6 text-lg">Falar com Consultora</Button>
            <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50">
              <div className="flex items-center gap-2"><ShieldCheck size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Seguro</span></div>
              <div className="flex items-center gap-2"><Truck size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Rápido</span></div>
              <div className="flex items-center gap-2"><Lock size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Discreto</span></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <img 
            src="https://acdn-us.mitiendanube.com/stores/001/858/899/themes/common/logo-784907036-1631208059-ef2524075512bc44259241c34bb3e8f51631208059-480-0.png?0" 
            alt="Doce Pimenta Logo" 
            className="h-12 w-auto" 
            referrerPolicy="no-referrer" 
          />
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-stone-400">
            <a href="#" className="hover:text-brand-pink">Privacidade</a>
            <a href="#" className="hover:text-brand-pink">Termos</a>
            <a href="#" className="hover:text-brand-pink">Contato</a>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
            © {new Date().getFullYear()} Doce Pimenta Boutique
          </p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
