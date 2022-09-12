<script setup></script>

<template>
    <div class="flex h-full">
        <div class="h-full">
            <router-view name="sidebar"></router-view>
        </div>

        <div class="h-full w-full">
            <div>
                <router-view name="navbar"></router-view>
            </div>
            <div>
                <router-view v-slot="{ Component, route }">
                    <template v-if="Component">
                        <KeepAlive>
                            <Suspense>
                                <Transition
                                    enter-active-class="transition duration-1000"
                                    enter-from-class="opacity-0 translate-x-10"
                                    enter-to-class="opacity-1 translate-x-0"
                                    leave-active-class="transition duration-500 "
                                    leave-from-class="opacity-1 translate-x-0"
                                    leave-to-class="opacity-0 -translate-x-10"
                                    mode="out-in"
                                >
                                    <div
                                        :key="route.name"
                                        class="h-full w-full"
                                    >
                                        <component :is="Component" />
                                    </div>
                                </Transition>
                                <template #fallback>
                                    <div class="h-screen bg-red-50 text-center">
                                        Loading...
                                    </div>
                                </template>
                            </Suspense>
                        </KeepAlive>
                    </template>
                </router-view>
            </div>
            <div>
                <router-view name="footer"></router-view>
            </div>
        </div>
    </div>
</template>
