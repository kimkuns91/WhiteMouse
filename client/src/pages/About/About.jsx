import './About.css'
import Banner from '../../components/Banner/Banner'

const About = ()=>{

    const testVersion = 'Text01'

    return(
        <div className='About'>
            <Banner banner='About'/>
            <div className='Container Wrap'>
                <div className='left'>
                    <div className='ProfileImg'>
                    </div>
                </div>
                <div className='right'>
                    <p className={ testVersion }>Hello, My name is Kun Woo Kim, and I am a full-stack developer with three years of experience in the field. I have a diverse background that includes being a former professional player for the Korean national team in League of Legends back in 2016.</p>
                    <p className={ testVersion }>Throughout my career, I have honed my skills in both front-end and back-end development, allowing me to tackle various aspects of software development. I am proficient in languages such as JavaScript, Python, and Java, and I have hands-on experience with frameworks like React and Node.js.</p>
                    <p className={ testVersion }>As a developer, I thrive on solving complex problems and creating innovative solutions. I enjoy working collaboratively with teams to bring ideas to life and deliver high-quality software products. With my background in competitive gaming, I bring a unique perspective to development, where I value the importance of teamwork, adaptability, and constant improvement.</p>
                    <p className={ testVersion }>My journey as a professional player taught me invaluable lessons in discipline, perseverance, and the ability to thrive under pressure. These traits have seamlessly transitioned into my career as a developer, where I approach challenges with a determined mindset and a passion for continuous growth.</p>
                    <p className={ testVersion }>I am always eager to learn and stay up-to-date with the latest technologies and industry trends. I embrace new challenges and am driven by a desire to make a positive impact through my work.</p>
                    <p className={ testVersion }>Thank you for considering my profile. I look forward to the opportunity to contribute my skills and experience to your team.</p>
                    <p className={ testVersion }>Best regards,</p>
                    <p className={ testVersion }>Kun Woo Kim</p>
                </div>
            </div>
        </div>
    )
}

export default About