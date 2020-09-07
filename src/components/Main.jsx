import React from 'react';
import ScrollToTop from 'react-scroll-up';
import Footer from "./Footer";
import { FiChevronUp } from "react-icons/fi";
import Header from "./Header";
//import Helmet from "./Helmet";


const PortfolioList = [
    {
        images: 'golf-ball',
        category: '限量200組',
        title: '曾雅妮簽名球 / NT$2000',
        buttonText: '立即購買'
    },
    {
        images: 'tshirt-hat',
        category: '限量50組',
        title: '曾雅妮簽名T-shirt+帽子 / NT$6000',
        buttonText: '立即購買'
    },
    {
        images: 'golf-ball',
        category: '',
        title: '贊助的東東',
        buttonText: '立即購買'
    },
    {
        images: 'tshirt-hat',
        category: '',
        title: '歡迎募款',
        buttonText: '我要募款'
    },
]


const Main = () => {

    return (
        <div className="creative-portfolio">
            {/* <Helmet pageTitle="Creative Portfolio" /> */}

            {/* Start Header Area  */}
            <Header headerPosition="header--static" logo="symbol-dark" color="color-black" />
            {/* End Header Area  */}

            {/* Start Main Area  */}
            <div className="creative-portfolio-wrapper bg_color--1">
                <div className="creative-portfolio-wrapper plr--10">
                    <div className="row row--5">
                        {PortfolioList.map((value, i) => (
                            <div className="col-md-6 col-12" key={i}>
                                <div className="portfolio-style--3">
                                    <div className="thumbnail">
                                        <a href="/portfolio-details">
                                            <img className="w-100" style={{ height: 400 }} src={`/assets/images/${value.images}.jpg`} alt="Portfolio Images" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <p className="portfoliotype">{value.category}</p>
                                        <h4 className="title"><a href="/portfolio-details">{value.title}</a></h4>
                                        <div className="portfolio-btn">
                                            <a className="rn-btn text-white" href="/portfolio-details">{value.buttonText}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End Main Area  */}

            {/* Start Footer Style  */}
            <Footer />
            {/* End Footer Style  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </div>
    )
}

export default Main;