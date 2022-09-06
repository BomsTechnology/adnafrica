<script setup>
import { HeartIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <section class="mb-10 mt-10 px-4 md:px-28">
        <div class="min-h-max">
            <h1 class="text-lg font-bold lg:text-2xl">
                Retrouvez vos annonces sauvegardées
            </h1>
            <h4 class="mt-3">
                Si l’annonce n’est plus active sur le site, elle disparaîtra
                automatiquement de votre sélection.
            </h4>
            <div class="mt-6">
                <div
                    class="flex h-48 w-full items-center rounded-lg border shadow"
                >
                    <div class="h-full w-60 overflow-hidden rounded-l-lg">
                        <img
                            src="/images/ads/cuisine/1.jpg"
                            class="h-full w-full bg-cover object-cover"
                            alt=""
                        />
                    </div>
                    <div class="flex h-full grow justify-between px-4">
                        <div class="flex h-full flex-col justify-between py-4">
                            <div>
                                <h1
                                    class="whitespace-normal text-sm font-bold lg:text-lg"
                                >
                                    Gâteau à la crème chocolat
                                </h1>
                                <h6
                                    class="whitespace-normal text-sm font-semibold text-gray-800 lg:text-lg"
                                >
                                    10 000 XFA
                                </h6>
                            </div>
                            <div class="text-xs font-light text-gray-400">
                                <h6>Automobile</h6>
                                <h6>Douala Bonamousadi - 12/05/2022 à 16h30</h6>
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
    </section>
</template>
