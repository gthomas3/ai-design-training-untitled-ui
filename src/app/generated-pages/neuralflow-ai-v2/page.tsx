"use client";

import { type ComponentPropsWithRef, type FC, useState } from "react";
import { ArrowLeft, ArrowRight, MarkerPin02, PlayCircle } from "@untitledui/icons";
import { AnimatePresence, type Transition, motion } from "motion/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { StarIcon } from "@/components/foundations/rating-stars";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";
import "./theme.css";

const HeroGeometricShapes04 = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />

            <Header />

            <section className="relative py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-5xl flex-col md:items-center md:text-center">
                        <a href="#" className="rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="We're hiring!" iconTrailing={ArrowRight} theme="light" color="brand">
                                Join our AI research team
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="We're hiring!" iconTrailing={ArrowRight} theme="light" color="brand">
                                Join our AI research team
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-medium text-primary md:text-display-lg lg:text-display-xl">
                            Creating intelligent, adaptive and transformative AI experiences
                        </h1>
                        <p className="mt-4 max-w-120 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            — We're a full-service AI development company who specialize in machine learning solutions and intelligent automation.
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl">
                                AI Showcase
                            </Button>
                            <Button size="xl">Start Trial</Button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
                    <img
                        alt="AI visualization with neural networks and data processing"
                        src="https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                        className="hidden w-full rounded-xl object-cover shadow-2xl sm:block"
                    />
                    <img
                        alt="Machine learning AI visualization"
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                        className="w-full rounded-xl object-cover shadow-2xl sm:hidden"
                    />
                </div>
            </section>
        </div>
    );
};

const SocialProofFullWidth = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8">
                    <p className="text-center text-md font-medium text-tertiary">Join 2,000+ companies leveraging AI transformation</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
                        {/* Light mode images (hidden in dark mode) */}
                        <img alt="ContrastAI" src="/design-assets/logos/Default style/Light mode/ContrastAI.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Lightbox" src="/design-assets/logos/Default style/Light mode/Lightbox.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Command+R" src="/design-assets/logos/Default style/Light mode/Command+R.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Capsule" src="/design-assets/logos/Default style/Light mode/Capsule.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Hourglass" src="/design-assets/logos/Default style/Light mode/Hourglass.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Layers" src="/design-assets/logos/Default style/Light mode/Layers.svg" className="h-9 md:h-12 dark:hidden" />

                        {/* Dark mode images (hidden in light mode) */}
                        <img
                            alt="ContrastAI"
                            src="/design-assets/logos/Default style/Dark mode/ContrastAI.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Lightbox"
                            src="/design-assets/logos/Default style/Dark mode/Lightbox.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Command+R"
                            src="/design-assets/logos/Default style/Dark mode/Command+R.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img alt="Capsule" src="/design-assets/logos/Default style/Dark mode/Capsule.svg" className="h-9 opacity-85 not-dark:hidden md:h-12" />
                        <img
                            alt="Hourglass"
                            src="/design-assets/logos/Default style/Dark mode/Hourglass.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img alt="Layers" src="/design-assets/logos/Default style/Dark mode/Layers.svg" className="h-9 opacity-85 not-dark:hidden md:h-12" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContentSectionSplitImage03 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto grid w-full max-w-container grid-cols-1 items-center gap-12 px-4 md:gap-16 md:px-8 lg:grid-cols-2">
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Our approach</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                        AI that influences how people work, learn, and experience intelligent automation.
                    </h2>
                    <div className="prose mt-8 md:prose-lg md:mt-12">
                        <p>
                            Our machine learning methodology combines advanced neural networks with human-centered design principles. Every AI solution begins
                            with understanding your unique business challenges and data landscape.
                        </p>
                        <p>
                            We develop custom AI models that learn from your processes, adapt to changing conditions, and continuously improve performance. Our
                            algorithms are designed for transparency, reliability, and ethical decision-making.
                        </p>

                        <p>
                            Our team of AI researchers and data scientists ensures that every solution is built on cutting-edge research while remaining
                            practical and implementable. From computer vision to natural language processing, we deliver AI that works.
                        </p>
                        <p>
                            Each AI system we build becomes a competitive advantage for your organization. We create intelligent solutions that not only
                            automate tasks but also generate insights and opportunities for growth.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col-reverse gap-3 md:mt-12 md:flex-row">
                        <Button color="secondary" size="xl">
                            View Case Studies
                        </Button>
                        <Button size="xl">Our Technology</Button>
                    </div>
                </div>

                <div className="h-60 lg:h-163.5">
                    <img
                        src="https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                        className="size-full rounded-xl object-cover shadow-xl"
                        alt="Advanced AI and machine learning technology visualization"
                    />
                </div>
            </div>
        </section>
    );
};

const reviews = [
    {
        quote: "NeuralFlow's AI automation reduced our processing time by 75% while improving accuracy significantly.",
        author: {
            name: "Michael Rodriguez",
            title: "CTO, DataVision Corp",
            avatarUrl: "/design-assets/avatars/PNG (transparent background)/Abraham Baker.png",
        },
    },
    {
        quote: "Exceptional AI expertise. Their predictive models transformed our decision-making process completely.",
        author: {
            name: "Jennifer Chen",
            title: "Head of Analytics, TechFlow Solutions",
            avatarUrl: "/design-assets/avatars/PNG (transparent background)/Amelie Laurent.png",
        },
    },
    {
        quote: "NeuralFlow's machine learning platform exceeded our expectations and delivered measurable ROI.",
        author: {
            name: "David Thompson",
            title: "VP of Innovation, SmartSystems Inc",
            avatarUrl: "/design-assets/avatars/PNG (transparent background)/Candice Wu.png",
        },
    },
];

interface RoundButtonProps extends ComponentPropsWithRef<"button"> {
    icon?: FC<{ className?: string }>;
}

const RoundButton = ({ icon: Icon, ...props }: RoundButtonProps) => {
    return (
        <Button
            {...props}
            color="link-gray"
            className={cx(
                "group flex size-12 items-center justify-center rounded-full bg-primary ring-1 ring-secondary backdrop-blur transition duration-100 ease-linear ring-inset hover:bg-secondary md:size-14",
                props.className,
            )}
        >
            {props.children ??
                (isReactComponent(Icon) ? (
                    <Icon className="size-5 text-fg-quaternary transition-inherit-all group-hover:text-fg-quaternary_hover md:size-6" />
                ) : null)}
        </Button>
    );
};

const TestimonialAbstractImage = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const transition: Transition = {
        type: "spring",
        duration: 0.8,
    };

    return (
        <section className="bg-primary py-16 lg:py-24">
            <div className="mx-auto flex max-w-container flex-col gap-12 overflow-hidden px-4 md:gap-16 md:px-8 lg:flex-row lg:items-center">
                <figure className="flex flex-col gap-8 md:gap-12 lg:flex-1">
                    <div className="flex flex-1 flex-col gap-6 md:gap-12">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div key={currentReviewIndex + "-rating"} aria-hidden="true" className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <motion.div
                                        key={`${currentReviewIndex}-${index}`}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                            y: 6,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            y: 0,
                                            transition: {
                                                ...transition,
                                                delay: 0.5 + index * 0.1,
                                            },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.9,
                                            y: 6,
                                            transition: {
                                                ...transition,
                                                delay: 0.12,
                                            },
                                        }}
                                        className="will-change-transform"
                                    >
                                        <StarIcon />
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.blockquote
                                key={currentReviewIndex + "-quote"}
                                initial={{
                                    opacity: 0,
                                    scale: 0.99,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        ...transition,
                                        delay: 0.4,
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.99,
                                    y: 12,
                                    transition: {
                                        ...transition,
                                        delay: 0.06,
                                    },
                                }}
                                className="origin-bottom-left text-display-sm font-medium text-balance text-primary will-change-transform sm:text-display-md md:text-display-lg"
                            >
                                {reviews[currentReviewIndex].quote}
                            </motion.blockquote>
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col justify-between gap-6 md:flex-row">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div
                                key={currentReviewIndex}
                                initial={{
                                    opacity: 0,
                                    scale: 0.99,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        ...transition,
                                        delay: 0.3,
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.99,
                                    y: 12,
                                    transition,
                                }}
                                className="flex origin-bottom-left gap-4 will-change-transform"
                            >
                                <Avatar src={reviews[currentReviewIndex].author.avatarUrl} alt={reviews[currentReviewIndex].author.name} size="xl" />
                                <figcaption className="flex flex-col gap-0.5">
                                    <p className="text-lg font-semibold whitespace-nowrap text-primary">{reviews[currentReviewIndex].author.name}</p>
                                    <cite className="text-md whitespace-nowrap text-tertiary not-italic">{reviews[currentReviewIndex].author.title}</cite>
                                </figcaption>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex gap-4 md:gap-8">
                            <RoundButton
                                icon={ArrowLeft}
                                onClick={() => setCurrentReviewIndex(currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1)}
                            />
                            <RoundButton
                                icon={ArrowRight}
                                onClick={() => setCurrentReviewIndex(currentReviewIndex === reviews.length - 1 ? 0 : currentReviewIndex + 1)}
                            />
                        </div>
                    </div>
                </figure>

                <div className="grid h-122 w-[150%] grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 self-center sm:h-124 sm:w-[120%] md:w-auto md:gap-4 lg:flex-1">
                    <img
                        src="https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="AI layered text visualization"
                        style={{ gridArea: "3 / 3 / 7 / 7" }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="AI robot with human features"
                        style={{ gridArea: "1 / 7 / 7 / 11" }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="Machine learning data visualization"
                        style={{ gridArea: "7 / 1 / 10 / 5" }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1695902173528-0b15104c4554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="AI analytics dashboard"
                        style={{ gridArea: "7 / 5 / 13 / 9" }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1738003946582-aabeabf5e009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="Neural network AI visualization"
                        style={{ gridArea: "7 / 9 / 10 / 13" }}
                    />
                </div>
            </div>
        </section>
    );
};

const MetricsSplitImage01 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="flex w-full flex-col md:max-w-3xl">
                        <p className="text-sm font-semibold text-brand-secondary md:text-md">AI Innovation</p>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                            Transforming businesses with intelligent solutions
                        </h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            We develop AI systems that create measurable business value and competitive advantages.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
                        <dl className="grid grid-cols-1 gap-8 self-center md:grid-cols-2 md:gap-y-16 md:pr-8">
                            {[
                                {
                                    title: "500+",
                                    subtitle: "AI models deployed",
                                    description: "We've successfully deployed over 500 custom AI solutions in production.",
                                },
                                {
                                    title: "85%",
                                    subtitle: "Average efficiency gain",
                                    description: "Our AI implementations achieve an average of 85% improvement in process efficiency.",
                                },
                                {
                                    title: "50M+",
                                    subtitle: "Data points processed",
                                    description: "Our AI systems process over 50 million data points daily with high accuracy.",
                                },
                                {
                                    title: "300+",
                                    subtitle: "AI experts on team",
                                    description: "We're proud to have over 300 certified AI researchers and engineers.",
                                },
                            ].map((item) => (
                                <div key={item.title} className="flex flex-1 flex-col-reverse gap-3 text-center">
                                    <div className="flex flex-col gap-1">
                                        <dt className="text-lg font-semibold text-primary">{item.subtitle}</dt>
                                        <p className="text-md text-tertiary">{item.description}</p>
                                    </div>
                                    <dd className="text-display-lg font-semibold text-brand-tertiary_alt md:text-display-xl">{item.title}</dd>
                                </div>
                            ))}
                        </dl>

                        <img
                            src="https://images.unsplash.com/photo-1695902173528-0b15104c4554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                            alt="AI researcher analyzing machine learning models and data visualizations"
                            className="h-70 w-full rounded-xl object-cover shadow-2xl md:h-140"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactSectionIconsAndImage = () => {
    return (
        <div className="bg-primary">
            <section className="bg-secondary pt-16 pb-28 md:pt-24 md:pb-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
                        <div className="flex w-full max-w-3xl flex-col">
                            <span className="text-sm font-semibold text-brand-secondary md:text-md">Contact us</span>
                            <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Connect with our AI specialists</h2>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                                Ready to transform your business with AI? Let's explore how machine learning can accelerate your growth.
                            </p>
                        </div>

                        <ul className="grid grid-cols-1 gap-10 md:gap-8">
                            {[
                                {
                                    title: "San Francisco HQ",
                                    subtitle: "350 AI Innovation Drive, \\nSan Francisco CA 94107 US",
                                    icon: MarkerPin02,
                                },
                                { title: "Austin Lab", subtitle: "1200 Machine Learning Blvd, \\nAustin TX 78701 US", icon: MarkerPin02 },
                            ].map((item) => (
                                <li key={item.title} className="flex items-start gap-4">
                                    <item.icon className="size-6 pt-0.5 text-icon-fg-brand" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                                        <p className="mt-1 text-md whitespace-pre text-tertiary md:whitespace-normal">{item.subtitle}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="-mt-16 pb-16 md:-mt-24 md:pb-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <img
                        src="https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                        className="h-60 w-full rounded-xl object-cover shadow-3xl md:h-120 lg:h-140"
                        alt="NeuralFlow AI team collaborating on machine learning solutions"
                    />
                </div>
            </section>
        </div>
    );
};

const NewsletterCardVertical = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center rounded-2xl bg-secondary px-6 py-10 text-center lg:p-16">
                    <h2 className="text-display-sm font-semibold text-primary xl:text-display-md">
                        Ready to embrace <br className="md:hidden" /> AI innovation?
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">
                        Get our AI insights newsletter and receive a free AI readiness assessment for your business.
                    </p>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-8 flex w-full flex-col gap-4 md:max-w-120 md:flex-row"
                    >
                        <Input
                            isRequired
                            size="md"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            wrapperClassName="py-0.5 md:max-w-[345px]"
                            hint={
                                <span>
                                    Read about our{" "}
                                    <a
                                        href="#"
                                        className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        AI ethics policy
                                    </a>
                                    .
                                </span>
                            }
                        />
                        <Button type="submit" size="xl">
                            Subscribe
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

const FooterLarge15 = () => {
    return (
        <footer className="dark-mode bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8 md:items-center">
                    <div className="flex items-center gap-2">
                        <img alt="NeuralFlow AI" src="/design-assets/logos/Default style/Light mode/ContrastAI.svg" className="h-8 w-auto" />
                        <span className="text-xl font-semibold text-primary">NeuralFlow</span>
                    </div>
                    <nav>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                            {[
                                { title: "Platform", href: "#" },
                                { title: "Solutions", href: "#" },
                                { title: "Research", href: "#" },
                                { title: "Case Studies", href: "#" },
                                { title: "Support", href: "#" },
                                { title: "AI Ethics", href: "#" },
                            ].map((item) => (
                                <li key={item.title}>
                                    <Button color="link-gray" size="lg" href={item.href}>
                                        {item.title}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-secondary pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-md text-quaternary">© 2024 NeuralFlow AI. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            { title: "Terms", href: "#" },
                            { title: "Privacy", href: "#" },
                            { title: "AI Principles", href: "#" },
                        ].map(({ title, href }) => (
                            <li key={title}>
                                <a href={href} className="text-md text-quaternary transition duration-100 ease-linear hover:text-tertiary">
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const NeuralFlowV2 = () => {
    return (
        <div className="bg-primary">
            <HeroGeometricShapes04 />

            <SocialProofFullWidth />

            <ContentSectionSplitImage03 />

            <SectionDivider />

            <TestimonialAbstractImage />

            <SectionDivider />

            <MetricsSplitImage01 />

            <ContactSectionIconsAndImage />

            <NewsletterCardVertical />

            <FooterLarge15 />
        </div>
    );
};

export default NeuralFlowV2;
