import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Blog from './components/blog/blog';
import Footer from './components/footer/footer';
import Search from './components/iconpages/search';
import Account from './components/iconpages/account';
import CreateAccount from './components/iconpages/createaccount';
import Services from './components/pages/services';
import Catalog from './components/catalog/catalog';
import Aboutus from './components/about/aboutus';
import Faq from './components/pages/faq';
import Contact from './components/pages/contact';
import Nailpolish from './components/shop/nailpolish/nailpolish';
import Curated from './components/shop/nailpolish/curated';
import Dime from './components/shop/nailpolish/dime';
import Foxy from './components/shop/nailpolish/foxy';
import Naildelights from './components/shop/nailpolish/naildelight';
import Nautical from './components/shop/nailpolish/nautical';
import Glossynails from './components/shop/glossynails';
import Naildecoration from './components/shop/naildecoration/naildecoration';
import Allureglossynails from './components/shop/naildecoration/allureglossynails';
import Allurenails from './components/shop/naildecoration/allurenails';
import Envyglossynails from './components/shop/naildecoration/envyglossynails';
import Splashglossynails from './components/shop/naildecoration/splashglossynails';
import Mattefinishnails from './components/shop/naildecoration/mattefinishnails';
import Nailcaretools from './components/shop/nailcaretools/nailcaretools';
import Daintynailbrush from './components/shop/nailcaretools/daintynailbrush';
import Aliyanailfile from './components/shop/nailcaretools/aliyanailfile';
import Artificialnails from './components/shop/artificialnails';
import Manicureset from './components/shop/manicureset';
import Daintyglossynails from './components/shop/naildecoration/daintyglossynails';
import Glitterfinishnails from './components/shop/naildecoration/glitterfinishnails';
import Glossyfinishnails from './components/shop/naildecoration/glossyfinishnails';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/services" element={<Services />} />
                <Route path="/search" element={<Search />} />
                <Route path="/account" element={<Account />} />
                <Route path="/createaccount" element={<CreateAccount />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/nailpolish" element={<Nailpolish />} />
                <Route path="/curated" element={<Curated />} />
                <Route path="/dime" element={<Dime />} />
                <Route path="/foxy" element={<Foxy />} />
                <Route path="/naildelights" element={<Naildelights />} />
                <Route path="/nautical" element={<Nautical />} />
                <Route path="/naildecoration" element={<Naildecoration />} />
                <Route path="/allureglossynails" element={<Allureglossynails />} />
                <Route path="/allurenails" element={<Allurenails />} />
                <Route path="/envyglossynails" element={<Envyglossynails />} />
                <Route path="/splashglossynails" element={<Splashglossynails />} />
                <Route path="/mattefinishnails" element={<Mattefinishnails />} />
                <Route path="/nailcaretools" element={<Nailcaretools />} />
                <Route path="/daintynailbrush" element={<Daintynailbrush />} />
                <Route path="/aliyanailfile" element={<Aliyanailfile />} />
                <Route path="/glossynails" element={<Glossynails />} />
                <Route path="/artificialnails" element={<Artificialnails />} />
                <Route path="/manicureset" element={<Manicureset />} />
                <Route path="/daintyglossynails" element={<Daintyglossynails />} />
                <Route path="/glitterfinishnails" element={<Glitterfinishnails />} />
                <Route path="/glossyfinishnails" element={<Glossyfinishnails />} />
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;