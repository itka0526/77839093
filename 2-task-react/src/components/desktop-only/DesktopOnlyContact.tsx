import SVGS from "../SVGS";

const DesktopOnlyContact = () => {
    return (
        <div className="max-lg:hidden flex gap-11 ml-auto ">
            <a href="tel:+7 555 555-55-55" className="font-medium text-[var(--custom-white)]">
                +7 555 555-55-55
            </a>
            <SVGS />
        </div>
    );
};

export default DesktopOnlyContact;
