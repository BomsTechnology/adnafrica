<script setup>
import {
    PhotoIcon,
    MegaphoneIcon,
    ClockIcon,
    QuestionMarkCircleIcon,
    HomeIcon,
    MapPinIcon,
    DocumentTextIcon,
    GlobeAltIcon,
} from "@heroicons/vue/24/outline";
import { Cog6ToothIcon, StarIcon, HeartIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const isScroll = ref(false);
document.addEventListener("scroll", function () {
    let bodyTopPosition = document.body.getBoundingClientRect().top;
    if (bodyTopPosition < -300) {
        isScroll.value = true;
    } else {
        isScroll.value = false;
    }
});
</script>
<template>
    <section>
        <nav
            :class="[
                isScroll
                    ? 'fixed top-0 z-40  w-full bg-white  shadow-lg lg:px-28'
                    : 'hidden',
            ]"
        >
            <div
                class="flex w-full overflow-x-auto py-3 px-2 text-xs font-semibold text-gray-800 md:text-sm"
            >
                <h1 class="mr-4 text-xl font-bold text-gray-800">
                    Mon Entreprise
                </h1>
                <a
                    href="#about"
                    class="flex items-center space-x-1 border-x border-gray-800 px-4 hover:font-bold"
                    ><span><QuestionMarkCircleIcon class="h-5 w-5" /></span
                    ><span class="hidden lg:block">A propos</span></a
                >
                <a
                    href="#services"
                    class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold"
                    ><span><ClockIcon class="h-5 w-5" /></span
                    ><span class="hidden lg:block">Horaires / Services</span></a
                >
                <a
                    href="#pictures"
                    class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold"
                >
                    <span><PhotoIcon class="h-5 w-5" /></span>
                    <span class="hidden lg:block">Image de l'entreprise</span>
                </a>
                <a
                    href="#ads"
                    class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold"
                >
                    <span><MegaphoneIcon class="h-5 w-5" /></span>
                    <span class="hidden lg:block"> Annonces (0)</span>
                </a>
                <a
                    href="#rating"
                    class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold"
                >
                    <span><DocumentTextIcon class="h-5 w-5" /></span>
                    <span class="hidden lg:block"> Avis (0)</span>
                </a>
            </div>
        </nav>
        <div class="w-full">
            <div
                class="h-60 w-full bg-cover pt-10"
                style="background-image: url('images/ads/cuisine/4.jpg')"
            >
                <div
                    class="h-full w-full bg-gradient-to-t from-gray-50 to-transparent"
                ></div>
            </div>
            <div
                class="container mx-auto -mt-28 flex w-[90%] flex-col rounded bg-white shadow md:w-5/6 lg:h-52"
            >
                <div
                    class="flex h-full flex-col items-center justify-center py-4 lg:flex-row lg:justify-between lg:px-10"
                >
                    <div
                        class="flex flex-col items-center justify-center space-y-3 lg:flex-row lg:justify-start lg:space-y-0 lg:space-x-4"
                    >
                        <div class="border border-gray-200 p-2">
                            <div class="h-28 w-28 overflow-hidden">
                                <img
                                    src="/images/avatar/1.jpg"
                                    alt=""
                                    class="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h1 class="text-xl font-bold text-gray-800">
                                Mon Entreprise
                            </h1>

                            <span
                                class="mt-1 flex items-center justify-center lg:justify-start"
                            >
                                <StarIcon class="h-4 w-4 text-orange-400" />
                                <StarIcon
                                    class="h-4 w-4 text-orange-400"
                                /><StarIcon
                                    class="h-4 w-4 text-orange-400"
                                /><StarIcon
                                    class="h-4 w-4 text-orange-400"
                                /><StarIcon class="h-4 w-4 text-gray-400" />
                            </span>

                            <h4
                                class="mt-3 flex items-center space-x-1 text-sm font-light text-gray-800"
                            >
                                <MapPinIcon class="h-5 w-5" />
                                <span>Douala Bonamousadi</span>
                            </h4>
                            <div
                                class="mt-2 flex items-center justify-center space-x-2 lg:justify-start"
                            >
                                <a href="#"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-blue-800"
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                    >
                                        <title>Logo Facebook</title>
                                        <path
                                            d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                                            fill-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 stroke-pink-500 text-pink-500"
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                    >
                                        <title>Logo Instagram</title>
                                        <path
                                            d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
                                        />
                                        <path
                                            d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
                                        />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-blue-300"
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                    >
                                        <title>Logo Twitter</title>
                                        <path
                                            d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"
                                        />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-blue-900"
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                    >
                                        <title>Logo Linkedin</title>
                                        <path
                                            d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                                        />
                                    </svg>
                                </a>
                                <a href="#">
                                    <GlobeAltIcon
                                        class="h-6 w-6 text-primary-color"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 lg:mt-0">
                        <span>
                            <Cog6ToothIcon class="h-8 w-8" />
                        </span>
                    </div>
                </div>
                <div
                    class="flex w-full overflow-x-auto bg-gray-100 py-3 text-xs font-semibold text-gray-800 md:text-sm"
                >
                    <a
                        href="#about"
                        class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold"
                        ><span><QuestionMarkCircleIcon class="h-5 w-5" /></span
                        ><span class="hidden lg:block">A propos</span></a
                    >
                    <a
                        href="#services"
                        class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold"
                        ><span><ClockIcon class="h-5 w-5" /></span
                        ><span class="hidden lg:block"
                            >Horaires / Services</span
                        ></a
                    >
                    <a
                        href="#pictures"
                        class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold"
                    >
                        <span><PhotoIcon class="h-5 w-5" /></span>
                        <span class="hidden lg:block"
                            >Image de l'entreprise</span
                        >
                    </a>
                    <a
                        href="#ads"
                        class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold"
                    >
                        <span><MegaphoneIcon class="h-5 w-5" /></span>
                        <span class="hidden lg:block"> Annonces (0)</span>
                    </a>
                    <a
                        href="#rating"
                        class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold"
                    >
                        <span><DocumentTextIcon class="h-5 w-5" /></span>
                        <span class="hidden lg:block"> Avis (0)</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="container mx-auto w-[90%] p-4 md:w-5/6 lg:flex">
            <div class="lg:w-2/3">
                <div class="mt-4">
                    <h1
                        id="about"
                        class="flex items-center space-x-4 text-xl font-bold tracking-widest"
                    >
                        <span
                            ><QuestionMarkCircleIcon
                                class="h-7 w-7 text-primary-color" /></span
                        ><span>A Propos</span>
                    </h1>
                    <p
                        class="mt-4 whitespace-pre-line text-justify text-sm leading-6 lg:mx-8"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Temporibus adipisci accusantium, illo qui est
                        voluptates esse praesentium, explicabo facere
                        repudiandae aliquid laborum et magnam harum
                        necessitatibus veritatis animi repellat cum? Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Temporibus
                        adipisci accusantium, illo qui est voluptates esse
                        praesentium, explicabo facere repudiandae aliquid
                        laborum et magnam harum necessitatibus veritatis animi
                        repellat cum?
                        <span></span>
                        -Lorem ipsum dolor sit, amet consectetur adipisicing
                        -Lorem ipsum dolor sit, amet consectetur adipisicing
                    </p>
                </div>
                <div class="mt-4">
                    <h1
                        id="services"
                        class="flex items-center space-x-4 text-xl font-bold tracking-widest"
                    >
                        <span
                            ><ClockIcon
                                class="h-7 w-7 text-primary-color" /></span
                        ><span>Horaires / Services</span>
                    </h1>
                    <div class="mt-4 flex flex-col lg:mx-8 lg:flex-row">
                        <div class="w-full">
                            <h2
                                class="font-semibold underline decoration-primary-color underline-offset-4"
                            >
                                Horaires
                            </h2>
                            <ul
                                class="ml-2 mt-2 list-disc space-y-1 px-2 text-sm"
                            >
                                <li>Lunid 08h - 18h</li>
                                <li>Lunid 08h - 18h</li>
                                <li>Lunid 08h - 18h</li>
                            </ul>
                        </div>
                        <div class="w-full">
                            <h2
                                class="font-semibold underline decoration-primary-color underline-offset-4"
                            >
                                Services
                            </h2>
                            <ul
                                class="ml-2 mt-2 list-disc space-y-1 px-2 text-sm"
                            >
                                <li>Lunid 08h - 18h</li>
                                <li>Lunid 08h - 18h</li>
                                <li>Lunid 08h - 18h</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <h1
                        id="pictures"
                        class="flex items-center space-x-4 text-xl font-bold tracking-widest"
                    >
                        <span
                            ><PhotoIcon
                                class="h-7 w-7 text-primary-color" /></span
                        ><span>Images de l'entreprise</span>
                    </h1>
                    <div
                        class="mt-4 grid grid-cols-2 gap-4 overflow-x-auto lg:mx-8 lg:grid-cols-5"
                    >
                        <div class="h-32 w-32 overflow-hidden rounded shadow">
                            <img
                                src="images/ads/automobile/1.jpg"
                                class="h-full w-full object-cover"
                            />
                        </div>
                        <div class="h-32 w-32 overflow-hidden rounded shadow">
                            <img
                                src="images/ads/automobile/1.jpg"
                                class="h-full w-full object-cover"
                            />
                        </div>
                        <div class="h-32 w-32 overflow-hidden rounded shadow">
                            <img
                                src="images/ads/automobile/1.jpg"
                                class="h-full w-full object-cover"
                            />
                        </div>
                        <div class="h-32 w-32 overflow-hidden rounded shadow">
                            <img
                                src="images/ads/automobile/1.jpg"
                                class="h-full w-full object-cover"
                            />
                        </div>
                        <div
                            class="flex h-32 w-32 items-center justify-center rounded bg-gray-100 text-center text-sm shadow"
                        >
                            <span class="font-bold"
                                >Voir toutes les images</span
                            >
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <h1
                        id="ads"
                        class="flex items-center space-x-4 text-xl font-bold tracking-widest"
                    >
                        <span
                            ><MegaphoneIcon
                                class="h-7 w-7 text-primary-color" /></span
                        ><span>Annonces</span>
                    </h1>
                    <div class="mt-4 grid lg:mx-8 lg:grid-cols-2">
                        <div
                            class="flex h-36 w-full items-center rounded-lg border shadow"
                        >
                            <div class="h-full overflow-hidden rounded-l-lg">
                                <img
                                    src="/images/ads/cuisine/1.jpg"
                                    class="h-full w-full bg-cover object-cover"
                                    alt=""
                                />
                            </div>
                            <div class="flex h-full grow justify-between px-4">
                                <div
                                    class="flex h-full flex-col justify-between py-2"
                                >
                                    <div>
                                        <h1
                                            class="whitespace-normal text-lg font-bold leading-5"
                                        >
                                            Gâteau à la crème chocolat
                                        </h1>
                                        <h6
                                            class="whitespace-normal font-semibold text-gray-800"
                                        >
                                            10 000 XFA
                                        </h6>
                                    </div>
                                    <div
                                        class="text-xs font-light text-gray-400"
                                    >
                                        <h6>Automobile</h6>
                                        <h6>
                                            Douala Bonamousadi - 12/05/2022 à
                                            16h30
                                        </h6>
                                    </div>
                                </div>
                                <div class="flex h-full items-end py-4">
                                    <button
                                        type="button"
                                        title="Ajouter/Retirer aux favoris"
                                        class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:scale-95 hover:bg-pink-300 focus:bg-pink-300"
                                    >
                                        <HeartIcon
                                            class="h-7 w-7 bg-transparent text-pink-500"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <h1
                        id="rating"
                        class="flex items-center space-x-4 text-xl font-bold tracking-widest"
                    >
                        <span
                            ><DocumentTextIcon
                                class="h-7 w-7 text-primary-color" /></span
                        ><span>Avis</span>
                    </h1>
                    <div class="mt-4 lg:mx-8">
                        <div class="border-b border-gray-300 py-3">
                            <div
                                class="float-left mr-3 flex items-center space-x-2"
                            >
                                <img
                                    src="/images/avatar/1.jpg"
                                    alt=""
                                    class="h-16 w-16 rounded-full object-cover"
                                />
                                <div>
                                    <h3 class="font-semibold">John Doe</h3>
                                    <span class="flex items-center">
                                        <StarIcon
                                            class="h-4 w-4 text-orange-400"
                                        />
                                        <StarIcon
                                            class="h-4 w-4 text-orange-400"
                                        /><StarIcon
                                            class="h-4 w-4 text-orange-400"
                                        /><StarIcon
                                            class="h-4 w-4 text-orange-400"
                                        /><StarIcon
                                            class="h-4 w-4 text-gray-400"
                                        />
                                    </span>
                                    <span class="text-xs text-gray-500"
                                        >23 Juin 2020</span
                                    >
                                </div>
                            </div>
                            <p class="text-justify text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ab a animi natus assumenda
                                consequuntur laboriosam sapiente? Eligendi,
                                fugiat quod debitis, voluptatem esse velit
                                necessitatibus voluptas rem magni incidunt
                                soluta nulla.fugiat quod debitis, voluptatem
                                esse velit necessitatibus voluptas rem magni
                                incidunt soluta nulla.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col-reverse lg:w-1/3 lg:flex-col">
                <div class="mt-8 w-full rounded bg-white p-4 shadow lg:mt-0">
                    <h1 class="text-xl font-bold">Contacter</h1>
                    <div class="mt-4 flex items-center text-sm font-bold">
                        <button
                            class="w-full rounded bg-primary-color px-3 py-2 text-white"
                        >
                            E-mail
                        </button>
                        <button class="w-full px-3 py-2">Télépone</button>
                    </div>
                    <form class="mt-4">
                        <div class="">
                            <label
                                for="title"
                                class="mb-1 block text-sm font-medium text-gray-900"
                                >Nom Complet</label
                            >
                            <input
                                type="text"
                                id="title"
                                required
                                class="block w-full rounded border border-gray-200 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        <div class="mt-4">
                            <label
                                for="title"
                                class="mb-1 block text-sm font-medium text-gray-900"
                                >Adresse E-mail</label
                            >
                            <input
                                type="email"
                                id="title"
                                required
                                class="block w-full rounded border border-gray-200 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        <div class="mt-4">
                            <label
                                for="title"
                                class="mb-1 block text-sm font-medium text-gray-900"
                                >Téléphone</label
                            >
                            <input
                                type="email"
                                id="title"
                                required
                                class="block w-full rounded border border-gray-200 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>

                        <div class="mt-4">
                            <label
                                for="description"
                                class="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <div class="mt-1">
                                <textarea
                                    id="message"
                                    rows="5"
                                    required
                                    class="mt-1 block w-full rounded-md border border-gray-200 p-2.5 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div class="mt-8">
                            <button
                                type="submit"
                                class="hover:bg-secondary focus:bg-primary w-full transform rounded-md bg-primary-color px-4 py-2 text-sm tracking-wide text-white transition-colors duration-200 focus:outline-none"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
                <div
                    class="mt-8 flex h-60 w-full items-center justify-center rounded bg-white shadow"
                >
                    <span class="font-bold">Google Map</span>
                </div>
            </div>
        </div>
    </section>
</template>
