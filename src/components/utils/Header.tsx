import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const handleOpenHamburgerMenu = () => {
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    };

    return (
        <>
            <header className="w-full pt-4">
                <div className="container mx-auto max-w-full px-10">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold">Homepage</div>
                        <button
                            type="button"
                            className="hover:cursor-pointer z-50"
                            onClick={() => handleOpenHamburgerMenu()}
                        >
                            <span className="flex flex-col gap-1">
                                {/* 文字列 + templateral */}
                                <div
                                    className={`w-5 border-[1.5px] transition-transform ${isHamburgerMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
                                >
                                    <span />
                                </div>
                                <div
                                    className={`w-5 border-[1.5px] ${isHamburgerMenuOpen ? 'opacity-0' : ''}`}
                                >
                                    <span />
                                </div>
                                <div
                                    className={`w-5 border-[1.5px] transition-transform ${isHamburgerMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}
                                >
                                    <span />
                                </div>
                            </span>
                        </button>

                        {/* スライドインメニュー */}
                        <div
                            className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                                isHamburgerMenuOpen
                                    ? 'translate-x-0'
                                    : 'translate-x-full'
                            } z-40`}
                        >
                            <div className="pt-20 px-4">
                                <nav className="flex flex-col space-y-4">
                                    <button
                                        type="button"
                                        className="px-4 py-2 text-xl text-left rounded hover:bg-blue-200"
                                        onClick={() => {
                                            navigate('/home');
                                            setIsHamburgerMenuOpen(false);
                                        }}
                                    >
                                        Home
                                    </button>
                                    <button
                                        type="button"
                                        className="px-4 py-2 text-xl text-left rounded hover:bg-red-200"
                                        onClick={() => {
                                            navigate('/contact');
                                            setIsHamburgerMenuOpen(false);
                                        }}
                                    >
                                        Contact
                                    </button>
                                    <a
                                        href="https://earth0922.github.io/otegaru-blog/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 text-xl text-left rounded hover:bg-green-200"
                                        onClick={() =>
                                            setIsHamburgerMenuOpen(false)
                                        }
                                    >
                                        Blog
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
