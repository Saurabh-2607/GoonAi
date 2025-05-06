import { Container } from './../shared/Container';
import { Paragraph } from './../shared/Paragraph';
import { Title } from './../shared/Title';
import { ServicesCard } from './../cards/ServicesCard';
import { ServicesData } from './../../utils/servicesData';


export const Services = () => {
    return(
        <section id="services">
            <Container className="space-y-10 md:space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Title>Our Services</Title>
                    <Paragraph>
                        GoonAI offers a suite of advanced AI solutions designed to enhance productivity, streamline operations, and drive innovation. 
                        Our services include AI-driven analytics, natural language processing, machine learning model development, and custom AI solutions tailored to your business needs.
                    </Paragraph>
                </div>
                
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {ServicesData.map((service, key) => (
                        <ServicesCard key={key} title={service.title} description={service.description} icon={service.icon}/>
                    ))}
                </div>
            </Container>
        </section>
    )
};