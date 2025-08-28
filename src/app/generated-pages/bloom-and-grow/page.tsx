"use client";

import { Fragment, useState } from "react";
import { ArrowRight, CheckCircle, PlayCircle, Zap, MessageChatCircle, ChartBreakoutSquare, LayersTwo01, MarkerPin02, Clock } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";
import "./theme.css";

const CustomHeader = () => {
    return (
        <header className="relative flex h-18 w-full items-center justify-center bg-primary md:h-20">
            <div className="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8">
                <div className="flex w-full justify-between gap-4">
                    <div className="flex flex-1 items-center gap-5">
                        <div className="flex items-center gap-2">
                            <img alt="Bloom & Grow" src="/src/design-assets/logos/Default style/Light mode logomark/Flora&Fauna.svg" className="h-8 w-auto dark:hidden" />
                            <img alt="Bloom & Grow" src="/src/design-assets/logos/Default style/Dark mode logomark/Flora&Fauna.svg" className="h-8 w-auto opacity-85 not-dark:hidden" />
                            <span className="text-xl font-semibold text-primary">Bloom & Grow</span>
                        </div>

                        <nav className="max-md:hidden">
                            <ul className="flex items-center gap-0.5">
                                {[
                                    { label: "Plants", href: "#plants" },
                                    { label: "Services", href: "#services" },
                                    { label: "Workshops", href: "#workshops" },
                                    { label: "About", href: "#about" },
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
                            Shop Plants
                        </Button>
                        <Button color="primary" size="lg">
                            Book Consultation
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default function BloomAndGrowLanding() {
    const [email, setEmail] = useState("");

    return (
        <Fragment>
            <CustomHeader />

            {/* Hero Section - Split Layout */}
            <section className="relative bg-primary py-16 lg:flex lg:min-h-180 lg:items-center lg:py-24">
                <div className="mx-auto flex w-full max-w-container items-center px-4 md:px-8">
                    <div className="flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pr-8">
                        <a href="#" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="New arrivals!" iconTrailing={PlayCircle} theme="modern" color="brand">
                                Rare tropical plants in stock
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="New arrivals!" iconTrailing={PlayCircle} theme="modern" color="brand">
                                Rare plants in stock
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            Transform your space into a living oasis
                        </h1>
                        <p className="mt-4 text-lg text-balance text-tertiary md:mt-6 md:max-w-lg md:text-xl">
                            Premium plants, expert care guidance, and personalized garden design services to bring nature into your home and office.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 md:mt-12 md:flex-row">
                            <Button size="xl" color="primary">
                                Explore Our Collection
                                <ArrowRight className="ml-2" />
                            </Button>
                            <Button size="xl" color="secondary">
                                Schedule Free Consultation
                            </Button>
                        </div>

                        <div className="mt-8 flex items-center gap-6">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <img
                                        key={i}
                                        src={`/src/design-assets/avatars/PNG (transparent background)/${["Amelie Laurent", "Candice Wu", "Abraham Baker", "Sarah Johnson"][i - 1]}.png`}
                                        alt="Customer"
                                        className="h-10 w-10 rounded-full ring-2 ring-primary"
                                    />
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary">2,500+ Happy Plant Parents</p>
                                <p className="text-sm text-tertiary">Join our growing community</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1529555466964-1c4d981cf18f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
                            alt="Beautiful greenhouse filled with tropical plants"
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Social Proof */}
            <section className="bg-secondary py-12">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <p className="text-center text-sm font-medium text-tertiary">TRUSTED BY LEADING INTERIOR DESIGNERS AND BUSINESSES</p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                        {["Layers", "Sisyphus", "Capsule", "Quotient", "Hourglass"].map((logo) => (
                            <img
                                key={logo}
                                src={`/src/design-assets/logos/Default style/Light mode/${logo}.svg`}
                                alt={logo}
                                className="h-8 opacity-60"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Features Section */}
            <section id="services" className="py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col md:items-center md:text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Our Services</span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
                            Everything you need for indoor gardening success
                        </h2>
                        <p className="mt-4 max-w-3xl text-lg text-tertiary md:mt-5 md:text-xl">
                            From rare plant sourcing to custom garden design, we're your complete indoor gardening partner.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: PlayCircle,
                                title: "Curated Plant Collection",
                                description: "Hand-selected rare and common houseplants from trusted growers worldwide."
                            },
                            {
                                icon: MessageChatCircle,
                                title: "Personal Consultations",
                                description: "One-on-one expert guidance for plant selection and care tailored to your space."
                            },
                            {
                                icon: Zap,
                                title: "Light Analysis",
                                description: "Professional assessment of your space's lighting to match perfect plants."
                            },
                            {
                                icon: ChartBreakoutSquare,
                                title: "Care Workshops",
                                description: "Monthly hands-on workshops covering propagation, repotting, and pest control."
                            },
                            {
                                icon: Clock,
                                title: "Maintenance Plans",
                                description: "Regular check-ups and care services to keep your plants thriving year-round."
                            },
                            {
                                icon: LayersTwo01,
                                title: "Design Services",
                                description: "Complete interior plant design from concept to installation for homes and offices."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="flex flex-col">
                                <FeaturedIcon icon={feature.icon} size="lg" color="brand" theme="modern" />
                                <h3 className="mt-5 text-lg font-semibold text-primary md:text-xl">{feature.title}</h3>
                                <p className="mt-2 text-md text-tertiary">{feature.description}</p>
                                <Button color="link-color" size="lg" className="mt-4 justify-start p-0">
                                    Learn more
                                    <ArrowRight className="ml-2" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Testimonials */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col md:items-center md:text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Testimonials</span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
                            From our happy plant parents
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
                        {[
                            {
                                quote: "Bloom & Grow transformed my apartment into a jungle paradise. Their consultation service helped me choose plants that actually thrive in my low-light space!",
                                author: "Sarah Mitchell",
                                title: "Interior Designer",
                                avatar: "Sarah Johnson"
                            },
                            {
                                quote: "The workshop on propagation was a game-changer. I've successfully grown 20+ new plants from cuttings. The instructors are incredibly knowledgeable.",
                                author: "Marcus Chen",
                                title: "Plant Enthusiast",
                                avatar: "Abraham Baker"
                            },
                            {
                                quote: "Their maintenance plan saved my office plants. We went from dying plants to a thriving green workspace that impresses every client who walks in.",
                                author: "Emily Rodriguez",
                                title: "Office Manager",
                                avatar: "Amelie Laurent"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="rounded-2xl bg-primary p-6 shadow-xs">
                                <p className="text-md text-secondary">"{testimonial.quote}"</p>
                                <div className="mt-6 flex items-center gap-3">
                                    <img
                                        src={`/src/design-assets/avatars/PNG (transparent background)/${testimonial.avatar}.png`}
                                        alt={testimonial.author}
                                        className="h-10 w-10 rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-primary">{testimonial.author}</p>
                                        <p className="text-sm text-tertiary">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Metrics */}
            <section className="py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col md:items-center md:text-center">
                        <h2 className="text-display-md font-semibold text-primary md:text-display-lg">
                            Growing stronger every day
                        </h2>
                        <p className="mt-4 max-w-3xl text-lg text-tertiary md:mt-5 md:text-xl">
                            Our passion for plants shows in the numbers
                        </p>
                    </div>

                    <div className="mt-12 grid gap-y-12 md:mt-16 md:grid-cols-4 md:gap-x-8">
                        {[
                            { metric: "500+", label: "Plant Varieties", sublabel: "From 6 continents" },
                            { metric: "2,500+", label: "Happy Customers", sublabel: "And growing" },
                            { metric: "98%", label: "Survival Rate", sublabel: "With our care guides" },
                            { metric: "50+", label: "Workshops", sublabel: "Hosted annually" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-display-md font-semibold text-brand-primary md:text-display-lg">{stat.metric}</p>
                                <p className="mt-2 text-lg font-semibold text-primary md:text-xl">{stat.label}</p>
                                <p className="mt-1 text-md text-tertiary">{stat.sublabel}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Gallery Section */}
            <section className="bg-secondary py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col md:items-center md:text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Portfolio</span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
                            Spaces we've transformed
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
                        {[
                            "https://images.unsplash.com/photo-1635538700385-e1027f9868a4?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
                            "https://images.unsplash.com/photo-1656314675358-aa912db05f7f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
                            "https://images.unsplash.com/photo-1657591691268-0c35fd465142?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
                        ].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Transformed space ${index + 1}`}
                                className="aspect-square rounded-lg object-cover"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Pricing Section */}
            <section id="pricing" className="py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col md:items-center md:text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Pricing</span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
                            Investment in green living
                        </h2>
                        <p className="mt-4 max-w-3xl text-lg text-tertiary md:mt-5 md:text-xl">
                            Choose the perfect plan for your indoor gardening journey
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
                        {[
                            {
                                name: "Plant Parent Starter",
                                price: "$29",
                                period: "/month",
                                description: "Perfect for beginners",
                                features: [
                                    "Monthly plant care newsletter",
                                    "Access to online workshops",
                                    "10% discount on all plants",
                                    "Basic email support"
                                ]
                            },
                            {
                                name: "Green Thumb Pro",
                                price: "$79",
                                period: "/month",
                                description: "For serious plant lovers",
                                features: [
                                    "Everything in Starter",
                                    "Quarterly rare plant access",
                                    "Monthly in-person workshop",
                                    "Priority consultation booking",
                                    "20% discount on all plants"
                                ],
                                featured: true
                            },
                            {
                                name: "Botanical Designer",
                                price: "$199",
                                period: "/month",
                                description: "Complete plant care service",
                                features: [
                                    "Everything in Pro",
                                    "Monthly maintenance visit",
                                    "Custom design consultation",
                                    "Plant replacement guarantee",
                                    "30% discount on all plants",
                                    "VIP event invitations"
                                ]
                            }
                        ].map((tier, index) => (
                            <div
                                key={index}
                                className={cx(
                                    "flex flex-col rounded-2xl p-8",
                                    tier.featured ? "bg-brand-primary text-primary-reversed ring-2 ring-brand-primary" : "bg-primary ring-1 ring-secondary"
                                )}
                            >
                                <div>
                                    <h3 className={cx("text-lg font-semibold", tier.featured ? "text-primary-reversed" : "text-primary")}>
                                        {tier.name}
                                    </h3>
                                    <p className={cx("mt-2 text-sm", tier.featured ? "text-primary-reversed opacity-90" : "text-tertiary")}>
                                        {tier.description}
                                    </p>
                                    <div className="mt-4 flex items-baseline">
                                        <span className={cx("text-display-md font-semibold", tier.featured ? "text-primary-reversed" : "text-primary")}>
                                            {tier.price}
                                        </span>
                                        <span className={cx("ml-1 text-md", tier.featured ? "text-primary-reversed opacity-90" : "text-tertiary")}>
                                            {tier.period}
                                        </span>
                                    </div>
                                </div>

                                <ul className="mt-8 space-y-3">
                                    {tier.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <CheckCircle className={cx("h-5 w-5 flex-shrink-0", tier.featured ? "text-primary-reversed" : "text-brand-primary")} />
                                            <span className={cx("text-sm", tier.featured ? "text-primary-reversed opacity-90" : "text-secondary")}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    color={tier.featured ? "primary-reversed" : "primary"}
                                    size="lg"
                                    className="mt-8"
                                >
                                    Get started
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Newsletter CTA */}
            <section className="bg-brand-primary py-16 md:py-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col md:items-center md:text-center">
                        <h2 className="text-display-md font-semibold text-primary-reversed md:text-display-lg">
                            Get weekly plant care tips
                        </h2>
                        <p className="mt-4 max-w-3xl text-lg text-primary-reversed opacity-90 md:mt-5 md:text-xl">
                            Join our newsletter for exclusive plant care guides, workshop announcements, and special offers.
                        </p>

                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                console.log("Newsletter signup:", email);
                            }}
                            className="mt-8 flex w-full flex-col items-stretch gap-4 md:mt-10 md:max-w-120 md:flex-row md:items-start"
                        >
                            <Input
                                isRequired
                                size="lg"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1"
                            />
                            <Button size="lg" color="primary-reversed" type="submit">
                                Subscribe
                            </Button>
                        </Form>

                        <p className="mt-3 text-sm text-primary-reversed opacity-75">
                            We care about your data. Read our privacy policy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary py-12 md:py-16">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2">
                                <img alt="Bloom & Grow" src="/src/design-assets/logos/Default style/Light mode logomark/Flora&Fauna.svg" className="h-8 w-auto" />
                                <span className="text-xl font-semibold text-primary">Bloom & Grow</span>
                            </div>
                            <p className="mt-4 text-md text-tertiary">
                                Bringing nature indoors with premium plants and expert care since 2019.
                            </p>
                            <div className="mt-6 flex gap-4">
                                <Button color="link-gray" size="md" className="p-2">
                                    <PlayCircle className="h-5 w-5" />
                                </Button>
                                <Button color="link-gray" size="md" className="p-2">
                                    <MessageChatCircle className="h-5 w-5" />
                                </Button>
                                <Button color="link-gray" size="md" className="p-2">
                                    <Zap className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-primary">Quick Links</h3>
                            <ul className="mt-4 space-y-3">
                                {["Shop Plants", "Book Consultation", "Workshops", "Care Guides", "About Us"].map((link) => (
                                    <li key={link}>
                                        <Button color="link-gray" size="md" className="justify-start p-0">
                                            {link}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-primary">Contact</h3>
                            <ul className="mt-4 space-y-3">
                                <li className="flex items-start gap-2">
                                    <MarkerPin02 className="h-5 w-5 text-tertiary" />
                                    <span className="text-sm text-tertiary">
                                        123 Garden Lane<br />
                                        Portland, OR 97201
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ChartBreakoutSquare className="h-5 w-5 text-tertiary" />
                                    <span className="text-sm text-tertiary">(503) 555-0100</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <LayersTwo01 className="h-5 w-5 text-tertiary" />
                                    <span className="text-sm text-tertiary">hello@bloomandgrow.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-secondary pt-8">
                        <p className="text-sm text-tertiary">© 2024 Bloom & Grow. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}