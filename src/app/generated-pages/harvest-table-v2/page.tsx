"use client";

import { type ComponentPropsWithRef, type FC, useState } from "react";
import { ArrowLeft, ArrowRight, MarkerPin02, PlayCircle } from "@untitledui/icons";
import { AnimatePresence, type Transition, motion } from "motion/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { StarIcon } from "@/components/foundations/rating-stars";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";
import "./theme.css";

const CustomHeader = () => {
    return (
        <header className="relative flex h-18 w-full items-center justify-center md:h-20">
            <div className="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8">
                <div className="flex w-full justify-between gap-4">
                    <div className="flex flex-1 items-center gap-5">
                        <div className="flex items-center gap-2">
                            <img alt="Harvest & Table" src="/design-assets/logos/Default style/Light mode/Flora&Fauna.svg" className="h-8 w-auto dark:hidden" />
                            <img
                                alt="Harvest & Table"
                                src="/design-assets/logos/Default style/Dark mode/Flora&Fauna.svg"
                                className="h-8 w-auto opacity-85 not-dark:hidden"
                            />
                            <span className="text-xl font-semibold text-primary">Harvest & Table</span>
                        </div>

                        <nav className="max-md:hidden">
                            <ul className="flex items-center gap-0.5">
                                {[
                                    { label: "Menu", href: "#menu" },
                                    { label: "About", href: "#about" },
                                    { label: "Reservations", href: "#reservations" },
                                    { label: "Events", href: "#events" },
                                    { label: "Contact", href: "#contact" },
                                ].map((navItem) => (
                                    <li key={navItem.label}>
                                        <a
                                            href={navItem.href}
                                            className="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-md font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-secondary_hover focus:outline-offset-2 focus-visible:outline-2"
                                        >
                                            <span className="px-0.5">{navItem.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="hidden items-center gap-3 md:flex">
                        <Button color="secondary" size="lg">
                            View Menu
                        </Button>
                        <Button color="primary" size="lg">
                            Reserve Table
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

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

            <CustomHeader />

            <section className="relative py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-5xl flex-col md:items-center md:text-center">
                        <a href="#" className="rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="Now hiring!" iconTrailing={ArrowRight} theme="light" color="brand">
                                Join our culinary team
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="Now hiring!" iconTrailing={ArrowRight} theme="light" color="brand">
                                Join our culinary team
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-medium text-primary md:text-display-lg lg:text-display-xl">
                            Creating flavorful, sustainable and memorable dining experiences
                        </h1>
                        <p className="mt-4 max-w-120 text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            — We're a farm-to-table restaurant who specialize in locally-sourced ingredients and seasonal menus that celebrate the harvest.
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl">
                                Kitchen Tour
                            </Button>
                            <Button size="xl">Reserve Table</Button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
                    <img
                        alt="Fresh ingredients and farm-to-table cuisine preparation"
                        src="https://images.unsplash.com/photo-1591189863430-ab87e120f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                        className="hidden w-full rounded-xl object-cover shadow-2xl sm:block"
                    />
                    <img
                        alt="Seasonal farm-fresh vegetables"
                        src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
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
                    <p className="text-center text-md font-medium text-tertiary">Join 50+ local restaurants sourcing sustainably</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-6">
                        {/* Light mode images (hidden in dark mode) */}
                        <img alt="Flora&Fauna" src="/design-assets/logos/Default style/Light mode/Flora&Fauna.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Goodwell" src="/design-assets/logos/Default style/Light mode/Goodwell.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Luminary" src="/design-assets/logos/Default style/Light mode/Luminary.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Magnolia" src="/design-assets/logos/Default style/Light mode/Magnolia.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Wildcrafted" src="/design-assets/logos/Default style/Light mode/Wildcrafted.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Renaissance" src="/design-assets/logos/Default style/Light mode/Renaissance.svg" className="h-9 md:h-12 dark:hidden" />

                        {/* Dark mode images (hidden in light mode) */}
                        <img
                            alt="Flora&Fauna"
                            src="/design-assets/logos/Default style/Dark mode/Flora&Fauna.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Goodwell"
                            src="/design-assets/logos/Default style/Dark mode/Goodwell.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Luminary"
                            src="/design-assets/logos/Default style/Dark mode/Luminary.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Magnolia"
                            src="/design-assets/logos/Default style/Dark mode/Magnolia.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Wildcrafted"
                            src="/design-assets/logos/Default style/Dark mode/Wildcrafted.svg"
                            className="h-9 opacity-85 not-dark:hidden md:h-12"
                        />
                        <img
                            alt="Renaissance"
                            src="/design-assets/logos/Default style/Dark mode/Renaissance.svg"
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
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Our philosophy</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                        Cuisine that influences how people taste, appreciate and connect with their food source.
                    </h2>
                    <div className="prose mt-8 md:prose-lg md:mt-12">
                        <p>
                            Our farm-to-table approach begins with understanding the story behind every ingredient. We work directly with local farmers to
                            ensure peak freshness and support sustainable agriculture practices in our community.
                        </p>
                        <p>
                            Each dish tells the story of its origin—from the soil it grew in to the hands that harvested it. Our chefs craft seasonal menus that
                            celebrate the natural flavors and nutritional peak of each ingredient.
                        </p>

                        <p>
                            We believe that great food creates connections—between diner and farmer, between community and land, between tradition and
                            innovation. Every meal becomes a celebration of local agriculture and culinary artistry.
                        </p>
                        <p>
                            Our kitchen operates as a bridge between farm and table, transforming the freshest local ingredients into memorable dining
                            experiences that nourish both body and soul while supporting our regional food system.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col-reverse gap-3 md:mt-12 md:flex-row">
                        <Button color="secondary" size="xl">
                            Meet our farmers
                        </Button>
                        <Button size="xl">Our kitchen</Button>
                    </div>
                </div>

                <div className="h-60 lg:h-163.5">
                    <img
                        src="https://images.unsplash.com/photo-1626206613328-da4be4810a05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                        className="size-full rounded-xl object-cover shadow-xl"
                        alt="Chef carefully preparing farm-fresh ingredients in the kitchen"
                    />
                </div>
            </div>
        </section>
    );
};

const reviews = [
    {
        quote: "Harvest & Table redefined farm-to-table dining for me. Every bite tells a story of the local harvest.",
        author: {
            name: "Emma Wilson",
            title: "Food Critic, Local Eats Magazine",
            avatarUrl: "/design-assets/avatars/PNG (transparent background)/Amelie Laurent.png",
        },
    },
    {
        quote: "Exceptional quality and flavors. You can truly taste the difference that fresh, local ingredients make.",
        author: {
            name: "Marcus Johnson",
            title: "Chef, Urban Kitchen",
            avatarUrl: "/design-assets/avatars/PNG (transparent background)/Abraham Baker.png",
        },
    },
    {
        quote: "A dining experience that connects you to the local farming community. Absolutely outstanding.",
        author: {
            name: "Sarah Martinez",
            title: "Food Blogger, Farm Fresh Living",
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
                        src="https://images.unsplash.com/photo-1591189863430-ab87e120f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="Fresh organic vegetables at farmers market"
                        style={{ gridArea: "3 / 3 / 7 / 7" }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1626206613328-da4be4810a05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="Chef preparing farm-to-table cuisine"
                        style={{ gridArea: "1 / 7 / 7 / 11" }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1505692794401-b371fa865622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="Fresh farm vegetables and herbs"
                        style={{ gridArea: "7 / 1 / 10 / 5" }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1575218823251-f9d243b6f720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="Urban garden with fresh vegetables"
                        style={{ gridArea: "7 / 5 / 13 / 9" }}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        className="size-full rounded-lg object-cover shadow-lg"
                        alt="Fresh vegetables and ingredients"
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
                        <p className="text-sm font-semibold text-brand-secondary md:text-md">Farm Impact</p>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Supporting local agriculture</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            We create dining experiences that directly support local farmers and sustainable agriculture practices.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
                        <dl className="grid grid-cols-1 gap-8 self-center md:grid-cols-2 md:gap-y-16 md:pr-8">
                            {[
                                {
                                    title: "25+",
                                    subtitle: "Local farm partners",
                                    description: "We work directly with over 25 local farms and producers in our region.",
                                },
                                {
                                    title: "95%",
                                    subtitle: "Locally sourced ingredients",
                                    description: "95% of our ingredients are sourced within 100 miles of our restaurant.",
                                },
                                {
                                    title: "5k+",
                                    subtitle: "Meals served monthly",
                                    description: "We serve over 5,000 farm-fresh meals to our community each month.",
                                },
                                {
                                    title: "Zero",
                                    subtitle: "Food waste to landfill",
                                    description: "We're proud to achieve zero food waste through composting and partnerships.",
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
                            src="https://images.unsplash.com/photo-1591189863430-ab87e120f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                            alt="Local farmer harvesting fresh vegetables for restaurant supply"
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
                            <span className="text-sm font-semibold text-brand-secondary md:text-md">Visit us</span>
                            <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Experience farm-fresh dining</h2>
                            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                                Ready to taste the difference that truly fresh, local ingredients make? We'd love to welcome you to our table.
                            </p>
                        </div>

                        <ul className="grid grid-cols-1 gap-10 md:gap-8">
                            {[
                                {
                                    title: "Main Restaurant",
                                    subtitle: "456 Farm Fresh Lane, \\nVerdant Valley CA 95401 US",
                                    icon: MarkerPin02,
                                },
                                { title: "Private Events", subtitle: "789 Harvest Circle, \\nVerdant Valley CA 95401 US", icon: MarkerPin02 },
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
                        src="https://images.unsplash.com/photo-1626206613328-da4be4810a05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                        className="h-60 w-full rounded-xl object-cover shadow-3xl md:h-120 lg:h-140"
                        alt="Harvest & Table restaurant team preparing fresh farm-to-table cuisine"
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
                        Ready to taste <br className="md:hidden" /> the harvest?
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 lg:text-xl">
                        Get our seasonal newsletter and receive priority reservations for our farm dinner events.
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
                                        farm partnerships
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
                        <img alt="Harvest & Table" src="/design-assets/logos/Default style/Light mode/Flora&Fauna.svg" className="h-8 w-auto" />
                        <span className="text-xl font-semibold text-primary">Harvest & Table</span>
                    </div>
                    <nav>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                            {[
                                { title: "Menu", href: "#" },
                                { title: "Reservations", href: "#" },
                                { title: "Farm Tours", href: "#" },
                                { title: "Events", href: "#" },
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
                    <p className="text-md text-quaternary">© 2024 Harvest & Table. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            { title: "Terms", href: "#" },
                            { title: "Privacy", href: "#" },
                            { title: "Farm Partners", href: "#" },
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

const HarvestTableV2 = () => {
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

export default HarvestTableV2;
