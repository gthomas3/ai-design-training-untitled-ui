"use client";

import { type FC, type ReactNode, useState } from "react";
import { ArrowRight, ChartBreakoutSquare, CheckCircle, LayersThree01, LayersTwo01, MessageChatCircle, PlayCircle, Zap } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CreditCard } from "@/components/shared-assets/credit-card/credit-card";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";
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

const HeroCardMockup05 = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-sm-desktop.svg"
                className="pointer-events-none absolute -top-2 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />

            <CustomHeader />

            <section className="relative overflow-hidden py-16 md:pt-24 md:pb-0">
                <img
                    alt="Light Accent"
                    aria-hidden="true"
                    src="https://www.untitledui.com/marketing/light-accent.webp"
                    className="absolute -right-1/4 -bottom-14 z-10 max-w-160 mix-blend-screen sm:-right-1/3 md:-right-1/4 md:hidden md:max-w-7xl md:dark:block"
                />
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col md:items-center md:text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Farm. Fresh. Exceptional.</span>

                        <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-2xl">
                            Farm-to-table dining that works like magic.
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-balance text-tertiary md:mt-6 md:text-xl">
                            Exceptional cuisine crafted from locally-sourced ingredients, supporting sustainable farming and delivering unforgettable dining
                            experiences.
                        </p>
                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
                            <Button iconLeading={PlayCircle} color="secondary" size="xl">
                                View Menu
                            </Button>
                            <Button size="xl">Reserve Table</Button>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 w-full max-w-container md:px-8">
                    <div className="flex h-53 items-center justify-center md:h-100 md:items-end">
                        <div className="flex">
                            <div
                                className="[transform:var(--transform-mobile)] md:[transform:var(--transform-desktop)]"
                                style={
                                    {
                                        "--transform-mobile": "scale(0.79) translate(131px, 11px) rotate(30deg)",
                                        "--transform-desktop": "scale(1.77) translate(12px, 2px) rotate(30deg)",
                                    } as React.CSSProperties
                                }
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1591189863430-ab87e120f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                                    alt="Fresh organic vegetables at farmers market"
                                    className="h-48 w-80 rounded-lg object-cover shadow-lg"
                                />
                            </div>
                            <div
                                className="[transform:var(--transform-mobile)] md:[transform:var(--transform-desktop)]"
                                style={
                                    {
                                        "--transform-mobile": "scale(0.79) translate(-98px, -1px) rotate(30deg)",
                                        "--transform-desktop": "scale(1.77) translate(5px, -11px) rotate(30deg)",
                                    } as React.CSSProperties
                                }
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1505692794401-b371fa865622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                                    alt="Fresh farm vegetables and herbs"
                                    className="h-48 w-80 rounded-lg object-cover shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

interface TextCentered {
    title: string;
    subtitle: string;
    footer?: ReactNode;
}

interface FeatureTextIcon extends TextCentered {
    icon: FC<{ className?: string }>;
}

const FeatureTextFeaturedIconLeft = ({ icon, title, subtitle, footer }: FeatureTextIcon) => (
    <div className="flex max-w-140 gap-4">
        <FeaturedIcon icon={icon} size="lg" color="gray" theme="modern" className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color="gray" theme="modern" className="inline-flex md:hidden" />

        <div className="flex flex-col items-start gap-4">
            <div>
                <h3 className="mt-1.5 text-lg font-semibold text-primary md:mt-2.5">{title}</h3>
                <p className="mt-1 text-md text-tertiary">{subtitle}</p>
            </div>

            {footer}
        </div>
    </div>
);

const IconsAndMockup08 = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col lg:max-w-3xl">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Fresh Philosophy</span>

                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">The only dining experience you'll ever need. Fresh.</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Taste the difference of truly fresh ingredients, support local farmers, savor exceptional flavors, and discover culinary artistry that
                        celebrates the season.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-10 md:gap-y-12">
                        {[
                            {
                                title: "Local partnerships",
                                subtitle:
                                    "Direct relationships with local farmers and producers ensure the freshest ingredients arrive at your table within hours of harvest.",
                                icon: MessageChatCircle,
                            },
                            {
                                title: "Seasonal menus",
                                subtitle:
                                    "Our ever-changing menu celebrates the best of each season, featuring dishes that highlight the natural flavors of peak-ripeness ingredients.",
                                icon: Zap,
                            },
                            {
                                title: "Sustainable practices",
                                subtitle: "Zero-waste cooking and sustainable sourcing practices that support both environmental health and exceptional taste.",
                                icon: ChartBreakoutSquare,
                            },
                        ].map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconLeft
                                    icon={item.icon}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    footer={
                                        <Button color="link-color" size="lg" href="#" iconTrailing={ArrowRight}>
                                            Learn more
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>

                    <div className="relative -mx-4 flex h-80 items-center justify-center bg-linear-to-tr from-gray-800 to-gray-700 md:mr-0 md:h-120 lg:h-140">
                        <img
                            src="https://images.unsplash.com/photo-1626206613328-da4be4810a05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                            alt="Chef preparing fresh farm-to-table cuisine"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const plans = [
    {
        title: "Dinner Tasting",
        subtitle: "$85/person",
        description: "7-course experience.",
        features: [
            "Chef's seasonal tasting menu",
            "Wine pairing recommendations",
            "Farm story with each course",
            "Vegetarian options available",
            "2.5 hour dining experience",
        ],
        hasCallout: true,
        icon: Zap,
    },
    {
        title: "Private Dining",
        subtitle: "$150/person",
        description: "Exclusive experience.",
        features: [
            "Customized multi-course menu",
            "Dedicated chef consultation",
            "Private dining room access",
            "Premium wine selection",
            "Personal service team",
        ],
        icon: LayersTwo01,
    },
    {
        title: "Farm Experience",
        subtitle: "$250/person",
        description: "Full day package.",
        features: ["Morning farm tour", "Hands-on cooking class", "Multi-course farm lunch", "Take-home ingredients", "Chef's cookbook included"],
        icon: LayersThree01,
    },
];

const CheckItemText = (props: {
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    color?: "primary" | "success";
    iconStyle?: "outlined" | "contained" | "filled";
    textClassName?: string;
}) => {
    const { text, color, size, iconStyle = "contained" } = props;

    return (
        <li className="flex gap-3">
            {iconStyle === "contained" && (
                <div
                    className={cx(
                        "flex shrink-0 items-center justify-center rounded-full",
                        color === "success" ? "bg-success-secondary text-featured-icon-light-fg-success" : "bg-brand-primary text-featured-icon-light-fg-brand",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                >
                    <svg
                        width={size === "lg" ? 16 : size === "md" ? 15 : 13}
                        height={size === "lg" ? 14 : size === "md" ? 13 : 11}
                        viewBox="0 0 13 11"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            )}

            {iconStyle === "filled" && (
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-solid text-white">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1.5 4L4.5 7L10.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}

            {iconStyle === "outlined" && (
                <CheckCircle
                    className={cx(
                        "shrink-0",
                        color === "success" ? "text-fg-success-primary" : "text-fg-brand-primary",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                />
            )}

            <span
                className={cx(
                    "text-tertiary",
                    size === "lg" ? "pt-0.5 text-lg md:pt-0" : size === "md" ? "pt-0.5 text-md md:pt-0 md:text-lg" : "text-md",
                    iconStyle === "filled" && "text-brand-secondary",
                    props.textClassName,
                )}
            >
                {text}
            </span>
        </li>
    );
};

const PricingTierCardCallout = (props: {
    title: string;
    subtitle: string;
    description?: string;
    features: string[];
    secondAction?: string;
    checkItemTextColor?: "primary" | "success";
    hasCallout?: boolean;
    className?: string;
}) => {
    return (
        <div className={cx("relative flex flex-col rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt", props.className)}>
            {props.hasCallout && (
                <div className="absolute -top-6 right-2 md:-right-16">
                    <div className="flex text-brand-secondary">
                        <svg width="60" height="46" viewBox="0 0 60 46" fill="none">
                            <path
                                d="M9.22056 42.4485C9.06321 43.2619 9.595 44.0488 10.4084 44.2061C11.2217 44.3635 12.0086 43.8317 12.166 43.0184L9.22056 42.4485ZM50.5841 3.7912C51.405 3.68023 51.9806 2.92474 51.8696 2.10378C51.7586 1.28282 51.0032 0.707267 50.1822 0.818242L50.5841 3.7912ZM4.78725 32.3308C4.36038 31.6208 3.43878 31.3913 2.7288 31.8182C2.01882 32.2451 1.78931 33.1667 2.21618 33.8766L4.78725 32.3308ZM8.9767 42.2098L7.69117 42.9828L7.69189 42.984L8.9767 42.2098ZM12.5932 43.2606L11.9803 41.8916L11.979 41.8921L12.5932 43.2606ZM23.5123 40.0155C24.2684 39.677 24.6069 38.7897 24.2684 38.0336C23.9299 37.2774 23.0425 36.9389 22.2864 37.2774L23.5123 40.0155ZM10.6933 42.7334C12.166 43.0184 12.1659 43.0187 12.1658 43.019C12.1658 43.0189 12.1658 43.0192 12.1658 43.0192C12.1658 43.0192 12.1658 43.0189 12.166 43.0184C12.1662 43.0173 12.1666 43.0152 12.1672 43.012C12.1684 43.0058 12.1705 42.9953 12.1735 42.9808C12.1794 42.9517 12.1887 42.9064 12.2016 42.8456C12.2274 42.7239 12.2676 42.5403 12.3233 42.3008C12.4349 41.8216 12.6088 41.1193 12.8551 40.2421C13.3481 38.4863 14.1291 36.0371 15.2773 33.2782C17.5833 27.7375 21.3236 21.0615 27.0838 16.2002L25.1489 13.9076C18.8763 19.2013 14.905 26.3651 12.5076 32.1255C11.3042 35.0171 10.4856 37.5837 9.96684 39.4311C9.7073 40.3554 9.52235 41.1015 9.40152 41.6204C9.34109 41.8799 9.29667 42.0827 9.26695 42.2227C9.25209 42.2927 9.24091 42.3471 9.23323 42.385C9.22939 42.4039 9.22643 42.4187 9.22432 42.4294C9.22327 42.4347 9.22243 42.4389 9.22181 42.4421C9.22149 42.4437 9.22123 42.4451 9.22103 42.4461C9.22092 42.4467 9.22081 42.4473 9.22075 42.4475C9.22065 42.4481 9.22056 42.4485 10.6933 42.7334ZM27.0838 16.2002C38.8964 6.23107 48.2848 4.10201 50.5841 3.7912L50.1822 0.818242C47.3237 1.20465 37.402 3.56662 25.1489 13.9076L27.0838 16.2002ZM2.21618 33.8766L7.69117 42.9828L10.2622 41.4369L4.78725 32.3308L2.21618 33.8766ZM7.69189 42.984C8.83415 44.8798 11.2204 45.5209 13.2074 44.6291L11.979 41.8921C11.2779 42.2068 10.5661 41.9412 10.2615 41.4357L7.69189 42.984ZM13.2061 44.6297L23.5123 40.0155L22.2864 37.2774L11.9803 41.8916L13.2061 44.6297Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span className="-mt-2 text-sm font-semibold">Most popular!</span>
                    </div>
                </div>
            )}

            <div className="flex flex-col items-center px-6 pt-10 text-center md:px-8">
                <h2 className="text-display-md font-semibold text-primary md:text-display-lg">{props.subtitle}</h2>
                <p className="mt-4 text-xl font-semibold text-primary md:text-xl">{props.title}</p>
                <p className="mt-1 text-md text-tertiary">{props.description}</p>
            </div>

            <ul className="flex flex-col gap-4 px-6 pt-8 pb-8 md:p-8 md:pb-10">
                {props.features.map((feat) => (
                    <CheckItemText key={feat} text={feat} color={props.checkItemTextColor} />
                ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 px-6 pb-8 md:px-8">
                <Button size="xl">Reserve now</Button>
                {props.secondAction && (
                    <Button color="secondary" size="xl">
                        {props.secondAction}
                    </Button>
                )}
            </div>
        </div>
    );
};

const PricingSectionSimpleCards02 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full max-w-3xl flex-col">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Experiences</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Simple, memorable experiences</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        We believe exceptional dining should be accessible to all food lovers, no matter the occasion.
                    </p>
                </div>

                <div className="mt-12 grid w-full grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <PricingTierCardCallout key={plan.title} {...plan} checkItemTextColor="success" />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureTextFeaturedIconTopCentered = ({
    color = "gray",
    theme = "modern",
    icon,
    title,
    subtitle,
    footer,
}: FeatureTextIcon & {
    color?: "brand" | "gray" | "success" | "warning" | "error";
    theme?: "light" | "gradient" | "dark" | "outline" | "modern";
}) => (
    <div className="flex max-w-sm flex-col items-center gap-4 text-center">
        <FeaturedIcon icon={icon} size="lg" color={color} theme={theme} className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color={color} theme={theme} className="inline-flex md:hidden" />

        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const FeaturesSimpleIcons01 = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                    {[
                        {
                            title: "Fresh ingredients daily",
                            subtitle: "We source the freshest ingredients every morning from our network of local farms and trusted producers.",
                            icon: MessageChatCircle,
                        },
                        {
                            title: "Seasonal menu rotation",
                            subtitle:
                                "Our menu changes with the seasons to showcase the best flavors at their peak, ensuring every visit brings new discoveries.",
                            icon: Zap,
                        },
                        {
                            title: "Farm partnership stories",
                            subtitle:
                                "Learn about the passionate farmers and producers behind each dish through detailed stories that connect you to your food's journey.",
                            icon: ChartBreakoutSquare,
                        },
                    ].map((item) => (
                        <li key={item.title}>
                            <FeatureTextFeaturedIconTopCentered icon={item.icon} title={item.title} subtitle={item.subtitle} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

interface FeatureTabProps {
    title: string;
    subtitle: string;
    footer?: ReactNode;
    isCurrent?: boolean;
}

const FeatureTabHorizontal = ({ title, subtitle, footer, isCurrent }: FeatureTabProps) => (
    <div
        className={cx(
            "relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-tertiary py-4 pl-5 transition duration-100 ease-linear hover:border-brand",
            isCurrent && "border-brand",
        )}
    >
        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const FeaturesTabsMockup09 = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <section className="overflow-hidden bg-primary pt-16 lg:pt-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col lg:max-w-3xl">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Farm Connections</span>

                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">All-in-one farm-to-table for any occasion</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Get fresh ingredients, seasonal menus, and exceptional service—in one complete culinary experience that celebrates local agriculture.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
                    <ul className="flex flex-col">
                        {[
                            {
                                title: "Local farm partnerships",
                                subtitle: "Direct relationships with over 20 local farms ensure the freshest ingredients arrive daily at our kitchen.",
                            },
                            {
                                title: "Seasonal menu curation",
                                subtitle: "Our chefs work closely with farmers to design menus that celebrate the best of each season's harvest.",
                            },
                            {
                                title: "Sustainable practices",
                                subtitle: "Zero-waste cooking, composting programs, and sustainable sourcing practices that support environmental health.",
                            },
                        ].map((item, index) => (
                            <li key={item.title} onClick={() => setCurrentTab(index)}>
                                <FeatureTabHorizontal
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    isCurrent={index === currentTab}
                                    footer={
                                        <Button color="link-color" size="lg" href="#" iconTrailing={ArrowRight}>
                                            Learn more
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>

                    <div className="relative flex h-90 w-full justify-center md:h-120 lg:-ml-4 lg:h-140 lg:overflow-y-clip">
                        <img
                            src="https://images.unsplash.com/photo-1575218823251-f9d243b6f720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                            alt="Urban garden with fresh vegetables and herbs"
                            className="h-full w-full rounded-lg object-cover shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

interface FeatureTextIntegrationIcon extends TextCentered {
    imgUrl: string;
}

const FeatureTextIntegrationIconTopCentered = ({ imgUrl, title, subtitle, footer }: FeatureTextIntegrationIcon) => (
    <div className="flex max-w-sm flex-col items-center gap-4 text-center">
        <span className="flex size-13 shrink-0 items-center justify-center rounded-lg bg-primary shadow-xs ring-1 ring-secondary ring-inset md:size-16 md:rounded-xl">
            <img alt={title} src={imgUrl} className="size-12 md:size-14" />
        </span>

        <div className="5 flex flex-col items-center gap-4">
            <div>
                <h3 className="text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-1 text-md text-tertiary">{subtitle}</p>
            </div>

            {footer}
        </div>
    </div>
);

const FeaturesIntegrationsIcons03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <Badge size="md" type="pill-color" color="brand" className="inline-flex md:hidden">
                        Farm Partners
                    </Badge>
                    <Badge size="lg" type="pill-color" color="brand" className="hidden md:inline-flex">
                        Farm Partners
                    </Badge>

                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">Trusted local growers</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Partner with the finest local farms and artisan producers who share our commitment to quality and sustainability.
                    </p>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="lg:grid-y-16 grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
                        {[
                            {
                                title: "Sunrise Valley Farm",
                                subtitle: "Organic vegetables and herbs grown using sustainable farming practices for over 30 years.",
                                logo: "/design-assets/logos/Default style/Light mode/Flora&Fauna.svg",
                            },
                            {
                                title: "Mountain View Dairy",
                                subtitle: "Grass-fed dairy products from happy cows in the beautiful mountain pastures.",
                                logo: "/design-assets/logos/Default style/Light mode/Goodwell.svg",
                            },
                            {
                                title: "Heritage Grain Co",
                                subtitle: "Ancient grains and specialty flours milled fresh from heirloom wheat varieties.",
                                logo: "/design-assets/logos/Default style/Light mode/Luminary.svg",
                            },
                            {
                                title: "Ocean Breeze Seafood",
                                subtitle: "Sustainably caught seafood delivered fresh daily from coastal waters.",
                                logo: "/design-assets/logos/Default style/Light mode/Magnolia.svg",
                            },
                            {
                                title: "Wildflower Apiaries",
                                subtitle: "Pure local honey and bee products from pesticide-free wildflower meadows.",
                                logo: "/design-assets/logos/Default style/Light mode/Wildcrafted.svg",
                            },
                            {
                                title: "Artisan Orchards",
                                subtitle: "Tree-ripened fruits and seasonal preserves made using traditional methods.",
                                logo: "/design-assets/logos/Default style/Light mode/Renaissance.svg",
                            },
                        ].map((item) => (
                            <li key={item.title}>
                                <FeatureTextIntegrationIconTopCentered
                                    imgUrl={item.logo}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    footer={
                                        <Button color="link-color" size="lg" href="#" iconTrailing={ArrowRight}>
                                            Visit farm
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const SocialProofCard = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container md:px-8">
                <div className="flex flex-col gap-8 bg-secondary px-6 py-12 md:rounded-2xl md:p-16">
                    <p className="text-center text-md font-medium text-tertiary md:text-xl">Featured in 50+ local publications</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 xl:gap-x-8">
                        {/* Light mode images (hidden in dark mode) */}
                        <img alt="Flora&Fauna" src="/design-assets/logos/Default style/Light mode/Flora&Fauna.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Goodwell" src="/design-assets/logos/Default style/Light mode/Goodwell.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Luminary" src="/design-assets/logos/Default style/Light mode/Luminary.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Magnolia" src="/design-assets/logos/Default style/Light mode/Magnolia.svg" className="h-9 md:h-12 dark:hidden" />
                        <img alt="Wildcrafted" src="/design-assets/logos/Default style/Light mode/Wildcrafted.svg" className="h-9 md:h-12 dark:hidden" />
                        <img
                            alt="Renaissance"
                            src="/design-assets/logos/Default style/Light mode/Renaissance.svg"
                            className="inline-flex h-9 md:hidden md:h-12 dark:hidden"
                        />

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
                            className="inline-flex h-9 opacity-85 not-dark:hidden md:hidden md:h-12"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CTACardHorizontalBrand = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-brand-section px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-1 flex-col">
                        <h2 className="text-display-sm font-semibold text-primary_on-brand">
                            <span className="hidden md:inline">Experience farm-fresh dining today</span>
                            <span className="md:hidden">Taste the difference</span>
                        </h2>
                        <p className="mt-4 text-lg text-tertiary_on-brand lg:text-xl">
                            Join 5,000+ diners who have discovered the magic of truly fresh, locally-sourced cuisine.
                        </p>
                    </div>
                    <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                        <Button color="secondary" size="xl" className="shadow-xs! ring-0">
                            View menu
                        </Button>
                        <Button size="xl">Reserve table</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterLarge08 = () => {
    return (
        <footer className="bg-secondary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-x-8 gap-y-12 lg:flex-row">
                    <div className="flex flex-col gap-8 md:items-start">
                        <div className="flex items-center gap-2">
                            <img alt="Harvest & Table" src="/design-assets/logos/Default style/Light mode/Flora&Fauna.svg" className="h-8 w-auto" />
                            <span className="text-xl font-semibold text-primary">Harvest & Table</span>
                        </div>
                        <nav>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                                {[
                                    { title: "Menu", href: "#" },
                                    { title: "Reservations", href: "#" },
                                    { title: "Events", href: "#" },
                                    { title: "Our Farms", href: "#" },
                                    { title: "Contact", href: "#" },
                                    { title: "Catering", href: "#" },
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

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex w-full flex-col gap-4 sm:max-w-90"
                    >
                        <label htmlFor="newsletters-email" className="text-sm font-semibold text-primary">
                            Stay fresh with seasonal updates
                        </label>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Input
                                isRequired
                                id="newsletters-email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                size="md"
                                wrapperClassName="flex-1"
                            />
                            <Button type="submit" size="lg">
                                Subscribe
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-secondary pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-md text-quaternary">© 2024 Harvest & Table. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            { title: "Terms", href: "#" },
                            { title: "Privacy", href: "#" },
                            { title: "Sustainability", href: "#" },
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

const HarvestTableV1 = () => {
    return (
        <div className="bg-primary">
            <HeroCardMockup05 />

            <IconsAndMockup08 />

            <PricingSectionSimpleCards02 />

            <FeaturesSimpleIcons01 />

            <FeaturesTabsMockup09 />

            <SectionDivider />

            <FeaturesIntegrationsIcons03 />

            <SocialProofCard />

            <CTACardHorizontalBrand />

            <FooterLarge08 />
        </div>
    );
};

export default HarvestTableV1;
