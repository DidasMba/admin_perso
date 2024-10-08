/** @format */
import { GoBell } from "react-icons/go";
import CircleIcon from "./CircleIcon";
import { MdOutlinePerson2 } from "react-icons/md";

const Header = () => {
    return (
        <header className='w-full border sticky top-0 bg-white z-10 h-12 flex items-center justify-end px-6'>
            <nav className='flex items-center gap-2'>
                <CircleIcon Icon={GoBell} />
                <CircleIcon Icon={MdOutlinePerson2} />
            </nav>
        </header>
    );
};

export default Header;
