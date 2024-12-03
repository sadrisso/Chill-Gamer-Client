
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';



const MainLayout = () => {

    return (
        <div className='bg-slate-200'>
            <Navbar />
            <div className='my-20 '>
                <Outlet />
            </div>
            <div className=''>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;