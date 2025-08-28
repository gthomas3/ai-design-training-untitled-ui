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
                                Join our green building team
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="We're hiring!" iconTrailing={ArrowRight} theme="light" color="brand">
                                Join our green building team
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-medium text-primary md:text-display-lg lg:text-display-xl">
                            Creating sustainable, efficient and carbon-neutral spaces
                        </h1>
                        <p className="mt-4 max-w-120 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            — We're a full-service green construction company who specialize in sustainable building and environmental responsibility.
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl">
                                Project Gallery
                            </Button>
                            <Button size="xl">Get Quote</Button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
                    <img
                        alt="Sustainable building construction site"
                        src="https://images.unsplash.com/photo-1594080051162-74b97d619668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                        className="hidden w-full rounded-xl object-cover shadow-2xl sm:block"
                    />
                    <img
                        alt="Green building construction"
                        src="https://images.unsplash.com/photo-1521708266372-b3547456cc2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
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
                    <p className="text-center text-md font-medium text-tertiary">Join 150+ companies building sustainably</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
                        {/* Light mode images (hidden in dark mode) */}
                        <img alt="BuildingBlocks" src="/design-assets/logos/Default style/Light mode/BuildingBlocks.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Boltshift" src="/design-assets/logos/Default style/Light mode/Boltshift.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="FeatherDev" src="/design-assets/logos/Default style/Light mode/FeatherDev.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Lightbox" src="/design-assets/logos/Default style/Light mode/Lightbox.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Capsule" src="/design-assets/logos/Default style/Light mode/Capsule.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Hourglass" src="/design-assets/logos/Default style/Light mode/Hourglass.svg" className="h-9 md:h-12 dark:hidden" />

                        {/* Dark mode images (hidden in light mode) */}
                        <img
                            alt="BuildingBlocks"
                            src="/design-assets/logos/Default style/Dark mode/BuildingBlocks.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Boltshift"
                            src="/design-assets/logos/Default style/Dark mode/Boltshift.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="FeatherDev"
                            src="/design-assets/logos/Default style/Dark mode/FeatherDev.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Lightbox"
                            src="/design-assets/logos/Default style/Dark mode/Lightbox.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img alt="Capsule" src="/design-assets/logos/Default style/Dark mode/Capsule.svg" className="h-9 opacity-85 not-dark:hidden md:h-12" />
                        <img
                            alt="Hourglass"
                            src="/design-assets/logos/Default style/Dark mode/Hourglass.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
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
                        Construction that influences how people work, live and experience sustainable environments.
                    </h2>
                    <div className="prose mt-8 md:prose-lg md:mt-12">
                        <p>
                            Our sustainable construction methodology integrates cutting-edge green building technologies with time-tested environmental
                            practices. Every project begins with a comprehensive environmental impact assessment.
                        </p>
                        <p>
                            We source materials from certified sustainable suppliers, implement energy-efficient systems, and design buildings that minimize
                            carbon footprint while maximizing operational efficiency for decades to come.
                        </p>

                        <p>
                            Our team of certified green building professionals ensures that every aspect of construction meets or exceeds environmental
                            standards. From foundation to finish, we prioritize renewable materials and energy systems.
                        </p>
                        <p>
                            Each building we construct becomes a model for sustainable development in the community. We design structures that not only reduce
                            environmental impact but also provide healthier, more comfortable spaces for occupants.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col-reverse gap-3 md:mt-12 md:flex-row">
                        <Button color="secondary" size="xl">
                            View Projects
                        </Button>
                        <Button size="xl">Our Process</Button>
                    </div>
                </div>

                <div className="h-60 lg:h-163.5">
                    <img
                        src="https://images.unsplash.com/photo-1647709332683-fd6359cf879d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                        className="size-full rounded-xl object-cover shadow-xl"
                        alt="Sustainable construction materials and eco-friendly building process"
                    />
                </div>
            </div>
        </section>
    );
};

const reviews = [
    {
        quote: "EcoBuild transformed our office into a sustainable workspace that reduces energy costs by 40%.",
        author: {
            name: "Sarah Mitchell",
            title: "Facilities Manager, GreenTech Corp",
            avatarUrl: "/design-assets/avatars/PNG (transparent background)/Sarah Johnson.png",
        },
    },
    {
        quote: "Outstanding green construction expertise. Our LEED certification was seamless thanks to their guidance.",
        author: {
            name: "David Chen",
            title: "Property Developer, Urban Spaces",
            avatarUrl: "/design-assets/avatars/PNG (transparent background)/Amelie Laurent.png",
        },
    },
    {
        quote: "EcoBuild's sustainable materials and construction methods exceeded all our environmental goals.",
        author: {
            name: "Lisa Rodriguez",
            title: "Sustainability Director, Metro Housing",
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
                        src="https://images.unsplash.com/photo-1594080051162-74b97d619668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="Sustainable building materials"
                        style={{ gridArea: "3 / 3 / 7 / 7" }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1521708266372-b3547456cc2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="Green building exterior"
                        style={{ gridArea: "1 / 7 / 7 / 11" }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1647709332683-fd6359cf879d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="Construction worker with eco materials"
                        style={{ gridArea: "7 / 1 / 10 / 5" }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1603093159687-24356731a8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="Sustainable construction project"
                        style={{ gridArea: "7 / 5 / 13 / 9" }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="Green building design"
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
                        <p className="text-sm font-semibold text-brand-secondary md:text-md">Environmental Impact</p>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Building sustainable communities</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            We construct eco-friendly buildings that create lasting environmental and economic benefits.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
                        <dl className="grid grid-cols-1 gap-8 self-center md:grid-cols-2 md:gap-y-16 md:pr-8">
                            {[
                                {
                                    title: "200+",
                                    subtitle: "Green projects completed",
                                    description: "We've helped build over 200 sustainable construction projects.",
                                },
                                {
                                    title: "45%",
                                    subtitle: "Average energy savings",
                                    description: "Our buildings achieve an average of 45% energy cost reduction.",
                                },
                                {
                                    title: "500k",
                                    subtitle: "Tons CO2 prevented",
                                    description: "Our sustainable practices have prevented 500k tons of CO2 emissions.",
                                },
                                {
                                    title: "150+",
                                    subtitle: "LEED certifications",
                                    description: "We're proud to have achieved over 150 LEED certified buildings.",
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
                            src="https://images.unsplash.com/photo-1594080051162-74b97d619668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                            alt="Sustainable construction professional reviewing green building plans"
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
                            <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Connect with our green building experts</h2>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                                Ready to start your sustainable construction project? Let's discuss how we can help.
                            </p>
                        </div>

                        <ul className="grid grid-cols-1 gap-10 md:gap-8">
                            {[
                                {
                                    title: "Seattle Office",
                                    subtitle: "1200 Green Building Way, \\nSeattle WA 98101 US",
                                    icon: MarkerPin02,
                                },
                                { title: "Portland Office", subtitle: "800 Sustainable Blvd, \\nPortland OR 97201 US", icon: MarkerPin02 },
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
                        src="https://images.unsplash.com/photo-1603093159687-24356731a8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                        className="h-60 w-full rounded-xl object-cover shadow-3xl md:h-120 lg:h-140"
                        alt="EcoBuild construction team collaborating on sustainable building project"
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
                        Ready to build <br className="md:hidden" /> sustainably?
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">
                        Get our sustainability newsletter and receive 15% off your first green building consultation.
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
                                        environmental policy
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
                        <img alt="EcoBuild Construction" src="/design-assets/logos/Default style/Light mode/BuildingBlocks.svg" className="h-8 w-auto" />
                        <span className="text-xl font-semibold text-primary">EcoBuild</span>
                    </div>
                    <nav>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                            {[
                                { title: "About", href: "#" },
                                { title: "Services", href: "#" },
                                { title: "Projects", href: "#" },
                                { title: "Certifications", href: "#" },
                                { title: "Contact", href: "#" },
                                { title: "Sustainability", href: "#" },
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
                    <p className="text-md text-quaternary">© 2024 EcoBuild Construction. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            { title: "Terms", href: "#" },
                            { title: "Privacy", href: "#" },
                            { title: "Environmental", href: "#" },
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

const EcoBuildV2 = () => {
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

export default EcoBuildV2;
