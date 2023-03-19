import FloatingBalls from "./FloatingBalls";

type SectionProps = {
    isMobile: boolean;
};

function Section({ isMobile }: SectionProps) {
    return (
        /** lg:pt-[100px] including the top navbar position */
        <section
            className="
            h-[calc(100vh-3.5rem)] w-full px-4
            custom-section relative isolate
            overflow-hidden lg:px-[150px] lg:pt-[calc(100px+3.5rem)] lg:h-screen
            lg:flex
            "
        >
            <FloatingBalls />

            <div className="lg:grow lg:flex lg:flex-col lg:items-start">
                <div className="title text-4xl flex flex-col text-[var(--custom-white)] pt-10 lg:text-5xl">
                    <span>Зарабатывайте</span>
                    <span>больше</span>
                    <span
                        className="
                    uppercase text-transparent
                    bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]
                    font-black
                    "
                    >
                        c WELBEX{" "}
                    </span>
                </div>

                <div className="text-lg text-[var(--custom-white)] my-4 font-montserrat ">
                    <p>
                        Развиваем и контролируем
                        <br className="max-lg:hidden" /> продажи за вас
                    </p>
                </div>
            </div>

            <div className="lg:grow lg:flex lg:flex-col lg:items-end">
                <div className="mt-7 text-[var(--custom-white)] text-lg lg:col-[2] lg:row-[1]">
                    <p className=" font-bold lg:text-right">
                        Вместе с{" "}
                        <span className="gradient-1 lg:uppercase">
                            бесплатной <br className="hidden lg:block" /> консультацией
                        </span>{" "}
                        мы дарим:
                    </p>
                </div>

                <div
                    className="
                         mt-5 grid grid-cols-2 grid-rows-2 text-[var(--custom-white)]
                         items-center justify-center gap-x-2 gap-y-3 lg:gap-x-7 lg:gap-y-5 lg:mt-10
                    "
                >
                    {/** Positioning Skype audit to different row and col */}
                    <div className="max-lg:font-montserrat whitespace-nowrap lg:col-[1] lg:row-[2] lg:flex lg:flex-col lg:items-end lg:gap-1">
                        <span className="uppercase text-sm lg:font-medium lg:text-lg custom-line">Skype аудит</span>
                        <span className="max-lg:hidden text-right font-montserrat ">
                            отдела продажи <br />
                             и CRM системы
                        </span>
                    </div>
                    <div className="max-lg:font-montserrat whitespace-nowrap lg:flex lg:flex-col lg:items-end lg:gap-1">
                        <span className="uppercase text-sm lg:font-medium lg:text-lg custom-line">{isMobile ? "30 виджетов" : "виджеты"}</span>
                        <span className="max-lg:hidden text-right font-montserrat ">
                            30 готовых <br /> решений
                        </span>
                    </div>
                    <div className="max-lg:font-montserrat whitespace-nowrap lg:flex lg:flex-col lg:items-end lg:gap-1">
                        <span className="uppercase text-sm lg:font-medium lg:text-lg custom-line ">Dashboard</span>
                        <span className="max-lg:hidden text-right font-montserrat ">
                            с показателями <br /> вашего бизнеса
                        </span>
                    </div>
                    <div className="max-lg:font-montserrat whitespace-nowrap lg:flex lg:flex-col lg:items-end lg:gap-1">
                        <span className="uppercase text-sm lg:font-medium lg:text-lg custom-line">{isMobile ? "Месяц аmoCRM" : "35 дней"}</span>
                        <span className="max-lg:hidden text-right font-montserrat ">
                            использования <br />
                            CRM
                        </span>
                    </div>
                </div>

                <a
                    className="hidden cursor-pointer lg:flex w-11/12 bg-[#4077F3] h-[3.75rem] font-medium text-white justify-center items-center max-w-[260px] mt-[3.75rem]"
                    href="#"
                >
                    Получить консультацию
                </a>
            </div>
        </section>
    );
}

export default Section;
