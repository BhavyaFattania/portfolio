import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Bhavya Jignesh Fattania"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="pursuing my B.E from L.D. College of Engineering.I am having strong interest in Artificial Intelligence, Machine Learning, and Data Science. With hands-on experience in developing innovative solutions in Computer Vision and Natural Language Processing, I thrive on solving complex problems and creating meaningful applications that bridge the gap between AI and real-world use cases." />

                        <AnimatedBody
                            delay={0.1}
                            text="I have successfully worked on projects such as conversational image recognition chatbots, automated scheduling systems, and large-scale data analysis. My expertise spans across various domains, including web development, AI research, and model deployment. I enjoy tackling challenges, continuously learning, and sharing my knowledge with the community."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
