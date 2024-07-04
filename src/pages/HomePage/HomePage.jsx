import React, { useRef } from 'react'
import '../../assets/styles/homePage.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'


import getStartedBg from '../../assets/images/getStartedBg.png'
import airBnb from '../../assets/images/logo_clouds_images/airBnb.svg'
import hubSpot from '../../assets/images/logo_clouds_images/hubSpot.svg'
import google from '../../assets/images/logo_clouds_images/google.svg'
import microsoft from '../../assets/images/logo_clouds_images/microsoft.svg'
import walmart from '../../assets/images/logo_clouds_images/walmart.svg'
import fedex from '../../assets/images/logo_clouds_images/fedex.svg'

import robust from '../../assets/images/futures_icons/robust.svg'
import flexibility from '../../assets/images/futures_icons/flexibility.svg'
import userFriendly from '../../assets/images/futures_icons/userFriendly.svg'
import multiple from '../../assets/images/futures_icons/multiple.svg'
import better from '../../assets/images/futures_icons/better.svg'
import well from '../../assets/images/futures_icons/well.svg'
import FuturesCard from './components/FuturesCard'
import country from '../../assets/images/futures_icons/country.svg'

import quoteMark from '../../assets/images/quoteMark.svg'
import StoriesCard from './components/StoriesCard'

import baristica from '../../assets/images/stories_images/baristica.svg'
import botanist from '../../assets/images/stories_images/botanist.svg'
import fuzzy from '../../assets/images/stories_images/fuzzy.svg'
import MetricsCard from './components/MetricsCard'

import clouds1 from '../../assets/images/clouds_icons/clouds1.svg'
import clouds2 from '../../assets/images/clouds_icons/clouds2.svg'
import clouds3 from '../../assets/images/clouds_icons/clouds3.svg'
import clouds4 from '../../assets/images/clouds_icons/clouds4.svg'
import clouds5 from '../../assets/images/clouds_icons/clouds5.svg'
import clouds6 from '../../assets/images/clouds_icons/clouds6.svg'
import clouds7 from '../../assets/images/clouds_icons/clouds7.svg'
import AppBadges from '../components/AppBadges'

import phoneMockup1 from '../../assets/images/phoneMockup1.png'
import phoneMockup2 from '../../assets/images/phoneMockup2.png'


const futuresCardData = [
    {
        icon: robust,
        title: 'Robust workflow',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    {
        icon: flexibility,
        title: 'Flexibility',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    {
        icon: userFriendly,
        title: 'User friendly',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    {
        icon: multiple,
        title: 'Multiple layouts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
    },
    {
        icon: better,
        title: 'Better components',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
    },
    {
        icon: well,
        title: 'Well organised',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
    }
];

const storiesData = [
    {
        icon: baristica,
        storyText: 'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
        fullName: 'Floyd Miles',
        position: 'Vice President, GoPro'
    },
    {
        icon: botanist,
        storyText: 'I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.',
        fullName: 'Jane Cooper',
        position: 'CEO, Airbnb'
    },
    {
        icon: fuzzy,
        storyText: 'Landify saved our time in designing my company page.',
        fullName: 'Kristin Watson',
        position: 'Co-Founder, Strapi'
    },
]



const HomePage = () => {

    const cloudsRef = useRef();
    const storiesRef = useRef();
    const downloadRef = useRef();

    return (
        <div className='homePage'>
            <Header cloudsRef={cloudsRef} storiesRef={storiesRef} downloadRef={downloadRef} />
            <section className='get-started-section'>
                <h1 className='get-started-title title'>Work on big ideas, without the busywork.</h1>
                <button className='get-started-btn'>Get Started Now</button>
                <div className="get-started-bg"></div>
                {/* <img src={getStartedBg} alt="" className='get-started-bg' /> */}
            </section>
            <section className='logo-clouds-section'>
                <div className='line'></div>
                <div className='logo-clouds'>
                    <img src={airBnb} alt="" />
                    <img src={hubSpot} alt="" />
                    <img src={google} alt="" />
                    <img src={microsoft} alt="" />
                    <img src={walmart} alt="" />
                    <img src={fedex} alt="" />
                </div>
                <div className='line'></div>
            </section>
            <section className="features-section">
                <h1 className='features-title title'>Tailor-made features</h1>
                <p className='features-subtitle subtitle'>Lorem ipsum
                    is common placeholder text used to demonstrate th
                    e graphic elements of a document or visual prese
                    ntation.
                </p>
                <div className="features-cards">
                    {
                        futuresCardData.map((futuresCard, i) => {
                            return (
                                <FuturesCard key={i} data={futuresCard} />
                            )
                        })
                    }
                </div>
            </section>
            <section ref={storiesRef} className="stories-section">
                <div className="stories-main">
                    <div className="quoteMarkWrapper">
                        <img src={quoteMark} alt="quote" className='quoteMark' />
                        <h2 className='title'>Real Stories from Real Customers</h2>
                        <p className='subtitle'>Get inspired by these stories.</p>
                    </div>
                    <StoriesCard data={storiesData[0]} width={'50%'} />
                </div>
                <div className="stories-secondary">
                    <StoriesCard data={storiesData[1]} width={'70%'} />
                    <StoriesCard data={storiesData[2]} width={'50%'} />
                </div>
            </section>
            <section className="metrics-section">
                <div className="metrics-section-head">
                    <h2 className='title'>Our 18 years of achievements</h2>
                    <p className='subtitle'>With our super powers we have reached this</p>
                </div>
                <div className="metrics-section-content">
                    <MetricsCard icon={robust} count={'10,000+'} description={'Downloads per day'} />
                    <MetricsCard icon={multiple} count={'2 Million'} description={'Users'} />
                    <MetricsCard icon={better} count={'500+'} description={'Clients'} />
                    <MetricsCard icon={country} count={'140'} description={'Countries'} />
                </div>
            </section>
            <section ref={cloudsRef} className="clouds-section">
                <div className="clouds-section-head">
                    <h2 className='title'>Easy integrations with 170+ tools</h2>
                    <p className='subtitle'>Connect Landify with your favourite tools that you use daily and keep things on track.</p>
                </div>
                <div className="clouds-section-content">
                </div>
            </section>
            <section ref={downloadRef} className="download-section">
                <div className="download-section-head">
                    <h2 className='title'>Manage all projects from your mobile</h2>
                    <p className='subtitle'>
                        Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!
                    </p>
                    <p className="get-the-app">Get the App</p>
                    <AppBadges />
                </div>
                <div className="download-section-body">
                    <img className='phoneMockup1' src={phoneMockup1} alt="" />
                    <img className='phoneMockup2' src={phoneMockup2} alt="" />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default HomePage