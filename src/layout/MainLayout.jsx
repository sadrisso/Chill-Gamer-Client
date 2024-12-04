
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Navbar } from './Navbar';


const MainLayout = () => {

    return (
        <div className='bg-slate-100'>
            <div>
                <Navbar />
            </div>
            <div className='my-10 '>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;