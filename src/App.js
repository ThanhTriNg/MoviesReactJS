import 'swiper/swiper.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/boxicons-2.1.4/css/boxicons.min.css';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { publicRoutes } from './config/routes';
function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <>
                                        <Header />
                                        <Page />
                                        <Footer />
                                    </>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
