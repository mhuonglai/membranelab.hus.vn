import React from 'react';

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <h2>Welcome to the MTAL Lab</h2>
                <p>
                    <br /> Welcome to the Membrane Technology and Applications Lab, a leading research facility dedicated to advancing membrane science and engineering in Vietnam. We develop innovative materials and systems for water and wastewater treatment, food preservation, and beyond.
                    <br /> Our multidisciplinary team focuses on creating membranes with superior performance, antifouling properties, and chlorine resistance. We also utilize agricultural by-products to fabricate biodegradable packaging films and aim to produce antibacterial materials for wastewater and gas treatment.
                    <br /> We explore membrane and film technologies to address global challenges like clean water access and environmental protection, translating our research into practical, sustainable solutions.
                    <br /> Join us in pushing the boundaries of membrane technology for a better future.
                </p>
                <div className='home--img'>
                    <div>
                    <img src='/img/pic1.jpg'  />
                    <img src='/img/pic2.png'  />
                    </div>
                </div>
              

                <p>Group 2023 - 2024</p>
            </div>
        </div>
    );
}

export default Home;
