import userAvatar from '../../assets/avatar.webp'
import { FaRegBell } from "react-icons/fa";
const PersonalDetails = () => {
    const transaction = [
        {
            date: "2020-08-07",
            title: "Withdrawal Transfer to Bank-XXX11"
        },
        {
            date: "2020-07-21",
            title: "Withdrawal Transfer to Bank-XXX11"
        },
        {
            date: "2020-01-16",
            title: "Withdrawal Transfer to Bank-XXX11"
        },

    ]
    return (
        <div className='p-5 bg-bgGray w-full border-2'>
            <div className='fixed right-0 mr-4 lg:hidden block'>
                <FaRegBell className='text-xl' />
                <div className='p-1 bg-emerald-400 rounded-full w-[5px] mt-[-25px] ms-[20px]'></div>
            </div>
            <div className='flex items-center space-x-5'>
                <img src={userAvatar} className='h-16' alt="" />
                <div>
                    <h3 className='font-bold text-2xl'>Hi Mike,</h3>
                    <p className='font-semibold'>welcome back.</p>
                </div>
            </div>
            <div className='mt-10 space-y-3'>
                <p className='font-semibold text-xl'>Today</p>
                <div>
                    <p className='text-4xl font-bold'>$<span>19,892</span></p>
                    <p>Account Balance</p>
                </div>
                <div>
                    <p className='font-bold text-xl'>$<span>4,000</span></p>
                    <p>Year-to-Date Contributions</p>
                </div>
                <div>
                    <p className='font-bold text-xl'>$<span>1,0892</span></p>
                    <p>Total interest</p>
                </div>
                <ul className="menu menu-horizontal px-1">
                    <li className='bg-mainColor rounded-md text-white font-semibold'>
                        <details>
                            <summary className='hover:text-white'>
                                I want to
                            </summary>
                            <ul className="p-2 bg-base-100 text-black">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className='mt-10'>
                <p className='text-lg font-bold'>Recent Transaction</p>
                <div className='mt-4'>
                    {transaction.map((detail, idx) => (
                        <div key={idx}>
                            <div>
                                <p>{detail.date}</p>
                                <p className='font-bold'>{detail.title}</p>
                            </div>
                            <div className='divider'></div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PersonalDetails;