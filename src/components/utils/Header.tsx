import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    return(
        <>
            <header className="w-full pt-4">
                <div className="container mx-auto max-w-full px-10">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold">
                            Homepage
                        </div>
                        <nav className="flex">
                            <button type="button" className="px-4 py-2 border-none text-xl rounded hover:bg-blue-200"
                                onClick={() => navigate("/homepage")}>
                                Home
                            </button>
                            <button type="button" className="px-4 py-2 border-none text-xl rounded hover:bg-red-200"
                                onClick={() => navigate("/contact")}>
                                Contact
                            </button>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}