"use client";

import { Check, Copy01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { useClipboard } from "@/hooks/use-clipboard";

export const ContentLargeImage04 = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-primary">
            <div className="w-full bg-brand-section py-16 pb-32 md:pt-24 md:pb-40">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-240 flex-col items-center text-center">
                        <span className="text-sm font-semibold text-primary_on-brand md:text-md">Design</span>
                        <h1 className="mt-3 text-display-md font-semibold text-tertiary_on-brand md:text-display-lg">What is Wireframing?</h1>
                        <p className="mt-4 max-w-3xl text-lg text-primary_on-brand md:mt-6 md:text-xl">
                            Introduction to Wireframing and its Principles. Learn from the best in the industry with tips, tools, and best practices from those
                            in the know.
                        </p>

                        <div className="mt-8 flex items-center gap-3 text-left">
                            <img
                                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                className="size-12 rounded-full object-cover"
                                alt="Olivia Rhye"
                            />
                            <div>
                                <p className="text-md font-semibold text-tertiary_on-brand">Olivia Rhye</p>
                                <p className="text-md text-primary_on-brand">20 Jan 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <img
                    className="mx-auto -mt-16 h-60 w-full object-cover md:-mt-24 md:h-160"
                    src="https://www.untitledui.com/marketing/wireframing-pattern.webp"
                    alt="Wireframing pattern"
                />
                <div className="mx-auto max-w-prose pt-16 md:max-w-180 md:pt-24">
                    <div className="mx-auto prose md:prose-lg">
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel
                            fringilla.
                        </p>
                        <hr />
                        <h2>Introduction</h2>
                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                            montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat
                            sapien varius id.
                        </p>
                        <p>
                            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
                            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
                            aliquet sodales id est ac volutpat.
                        </p>

                        <figure>
                            <img
                                className="h-110 md:h-210"
                                src="https://images.pexels.com/photos/6121448/pexels-photo-6121448.jpeg?cs=srgb&dl=pexels-jasmin-chew-6121448.jpg&fm=jpg&w=1920&h=2629"
                                alt="Woman with vintage camera"
                            />
                            <figcaption>
                                <span>
                                    Image courtesy of Jasmin Chew via{" "}
                                    <a
                                        href="https://www.pexels.com/photo/slim-woman-with-vintage-photo-camera-on-chair-6121448/"
                                        className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Pexels
                                    </a>
                                </span>
                            </figcaption>
                        </figure>

                        <figure>
                            <blockquote>
                                <p>
                                    In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have
                                    lost or never attained, living by voices we shall never hear.
                                </p>
                            </blockquote>
                            <figcaption className="not-prose mt-6 text-md md:mt-8">
                                — Olivia Rhye, <cite className="not-italic">Product Designer</cite>
                            </figcaption>
                        </figure>

                        <p>
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
                            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                        </p>

                        <p>
                            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim
                            dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
                            congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
                            id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                        </p>
                        <p>
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien,
                            dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit
                            erat nam nibh orci.
                        </p>

                        <h3>Software and tools</h3>

                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
                            montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat
                            sapien varius id.
                        </p>
                        <p>
                            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
                            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
                            aliquet sodales id est ac volutpat.
                        </p>

                        <h3>Other resources</h3>

                        <p>
                            Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
                            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit
                            dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                        </p>
                        <ol>
                            <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                            <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                            <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                        </ol>
                        <figure>
                            <img
                                className="h-86 md:h-120 lg:h-180"
                                src="https://www.untitledui.com/marketing/two-people-2.webp"
                                alt="Two people working together"
                            />
                            <figcaption>
                                <span>
                                    Image courtesy of Leon via{" "}
                                    <a
                                        href="https://unsplash.com/photos/bzqU01v-G54"
                                        className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Unsplash
                                    </a>
                                </span>
                            </figcaption>
                        </figure>

                        <p>
                            Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in
                            non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis
                            suspendisse at.
                        </p>

                        <p>
                            Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
                            Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus
                            molestie pellentesque. Arcu ultricies sed mauris vestibulum.
                        </p>

                        <div className="not-prose my-8 rounded-2xl bg-secondary px-5 py-6 text-lg text-tertiary md:my-12 md:p-8 [&>p+p]:mt-4.5">
                            <h2 className="mb-4 text-display-xs font-semibold text-primary">Conclusion</h2>
                            <p>
                                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo
                                nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                            </p>
                            <p>
                                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis
                                facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                            </p>
                            <p>
                                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
                                id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et,
                                nunc tortor.
                            </p>
                        </div>
                    </div>

                    <div className="-mt-px flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row md:items-center">
                        <div className="flex gap-2">
                            <Badge color="blue-light" size="md">
                                Design
                            </Badge>
                            <Badge color="pink" size="md">
                                Research
                            </Badge>
                        </div>

                        <div className="flex gap-3">
                            <Button color="secondary" size="md" onClick={() => copy("https://www.untitledui.com/")} iconLeading={copied ? Check : Copy01}>
                                {copied ? "Copied" : "Copy link"}
                            </Button>
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
