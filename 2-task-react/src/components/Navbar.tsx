import DesktopOnlyContact from "./desktop-only/DesktopOnlyContact";
import DesktopOnlyLogo from "./desktop-only/DesktopOnlyLogo";

function Navbar({ isAtTheTop }: { isAtTheTop: boolean }) {
    return (
        <nav
            className={`
                    w-full bg-black z-10
                    fixed top-0 left-0
                    lg:flex lg:bg-transparent
                    lg:top-14 lg:items-start
                    lg:px-[150px] transition-all ${
                        isAtTheTop ? "lg:opacity-100 lg:translate-y-0" : "lg:opacity-0 lg:translate-y-2 lg:pointer-events-none"
                    }
            `}
        >
            <DesktopOnlyLogo />
            <ul className="py-5 px-4 flex gap-4 uppercase text-[var(--custom-white)] lg:gap-7 lg:py-0 max-lg:justify-between">
                <li className="text-xs font-medium lg:text-base hover:cursor-pointer">Услуги</li>
                <li className="text-xs font-medium lg:text-base hover:cursor-pointer">Виджеты</li>
                <li className="text-xs font-medium lg:text-base hover:cursor-pointer">Интеграции</li>
                <li className="text-xs font-medium lg:text-base hover:cursor-pointer">Кейсы</li>
            </ul>
            <DesktopOnlyContact />
        </nav>
    );
}

export default Navbar;
