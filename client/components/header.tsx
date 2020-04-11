import Link from 'next/link';

const Header = () => (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
                TKO-äly
            </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div>
                <ul className="text-sm lg:flex-grow">
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <Link href="/">Etusivu</Link>
                    </li>
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <Link href="/yhdistys">Yhdistys</Link>
                    </li>
                    <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <Link href="/tyopaikat">Työpaikat</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;
