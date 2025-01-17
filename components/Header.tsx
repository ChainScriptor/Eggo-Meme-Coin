import React from 'react';
import { Rocket, Scan, Twitter, MessageCircle, Coins } from 'lucide-react';

const Header = () => {
    return (
        <header className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Rocket className="w-8 h-8 text-yellow-400" />
                <span className="text-2xl font-bold text-white">$EGGO</span>
            </div>
            <nav className="flex gap-6">
                {[
                    { icon: <Scan className="w-6 h-6" />, label: 'Dex Screener', href: '#' },
                    { icon: <Coins className="w-6 h-6" />, label: 'Solscan', href: '#' },
                    { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', href: '#' },
                    { icon: <MessageCircle className="w-6 h-6" />, label: 'Telegram', href: '#' }
                ].map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="flex flex-col items-center text-white hover:text-yellow-400 transition-colors"
                    >
                        {item.icon}
                        <span className="text-sm">{item.label}</span>
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;
