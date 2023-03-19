import { PropsWithChildren } from "react";
import SVGS from "./SVGS";

function Footer() {
    return (
        <footer className="h-[calc(100vh-3.5rem] px-4 text-[var(--custom-white)] flex flex-col gap-7 pt-9 lg:flex-row lg:justify-between lg:px-[150px]">
            <FooterMenu title="О компании" rows={1}>
                <FooterMenuItem text="Партнёрская программа" />
                <FooterMenuItem text="Вакансии" />
            </FooterMenu>

            <FooterMenu title="Меню" rows={2}>
                <div className="flex flex-col gap-y-2">
                    <li className="text-sm flex">
                        <a href="#">
                            Расчёт <br className="lg:hidden" />
                            стоимости
                        </a>
                    </li>
                    <FooterMenuItem text="Услуги" />
                    <FooterMenuItem text="Виджеты" />
                    <FooterMenuItem text="Интеграции" />
                    <FooterMenuItem text="Наши клиент" />
                </div>
                <div className="flex flex-col gap-y-2">
                    <FooterMenuItem text="Благодарность клиентов" />
                    <FooterMenuItem text="Кейсы" />
                    <FooterMenuItem text="Сертификаты" />
                    <FooterMenuItem text="Блог на Youtube" />
                    <FooterMenuItem text="Вопрос / Ответ" />
                </div>
            </FooterMenu>

            <FooterMenu title="Контакты" rows={1} className="lg:items-end">
                <div className="lg:flex lg:justify-end">
                    <FooterMenuItem href="tel:+7 555 555-55-55" text="+7 555 555-55-55" className="text-base font-medium" />
                </div>
                <div className="lg:flex lg:justify-end">
                    <SVGS />
                </div>
                <span className="text-sm">Москва, Путевой проезд 3с1, к 902</span>
                <Copyright />
            </FooterMenu>
        </footer>
    );
}

const FooterMenuItem = ({ text, href = "#", className, ...props }: { text: string; href?: string } & React.HTMLAttributes<HTMLLIElement>) => {
    return (
        <li className={`text-sm flex ${className} lg:text-base`} {...props}>
            <a href={href}>{text}</a>
        </li>
    );
};

type FooterMenuProps = PropsWithChildren & {
    title: string;
    rows?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const FooterMenu = ({ children, title, rows = 2, className }: FooterMenuProps) => (
    <div className={`flex flex-col gap-5 ${className} lg:gap-4`}>
        <span className="font-bold text-xs text-[#656566] uppercase lg:text-sm">{title}</span>
        <div className={`grid grid-cols-${rows} gap-y-2`}>{children}</div>
    </div>
);

const Copyright = () => {
    return (
        <div className="mt-5 mb-12 text-[#E4E5EA] text-xs flex flex-col montserat-font lg:mt-[70px] lg:items-end">
            <span>©WELBEX 2022. Все права защищены.</span>
            <span className="underline underline-offset-2">Политика конфиденциальности</span>
        </div>
    );
};

export default Footer;
