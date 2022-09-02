<script setup>
import { reactive, ref, onMounted } from "vue";
import {
    UserIcon,
    OfficeBuildingIcon,
    EyeIcon,
    HomeIcon,
} from "@heroicons/vue/24/outline";
import useAuth from "@/services/authServices.js";
import { useAuthenticateStore } from "@/stores/authenticate";
import LeaveModal from "@/components/LeaveModal.vue";
import { createConfirmDialog } from "vuejs-confirm-dialog";
import { onBeforeRouteLeave } from "vue-router";

const {
    cleanErrors,
    sendEmailVerification,
    sendSmsVerification,
    errors,
    loading,
    createUser,
} = useAuth();
const level = ref(0);
const verifyField = ref("");
const progress = ref(0);
const location = ref(null);
const showPassword = ref(false);
const showCPassword = ref(false);
const mapLink =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyCmxQ_PZ3Emup8gQBqJPFBcnFlyHhQCv24&libraries=places";

const { reveal, onConfirm } = createConfirmDialog(LeaveModal, {
    question:
        "En quittant cette page, vous allez perdre toutes les données saisies,voulez-vous continuer ?",
});

const accountType = (type) => {
    level.value++;
    progress.value += 10;
    user.type = type;
};

const verifEmailData = reactive({
    email: "",
    code: "",
    hour: "",
    minutes: "",
});

const verifPhoneData = reactive({
    phone: null,
    code: "",
    hour: "",
    minutes: "",
});

const user = reactive({
    firstname: "",
    lastname: null,
    email: "",
    password: "",
    phone: "",
    location: null,
    category: null,
    password_confirmation: "",
    type: "",
});

// onMounted(() => {
//     new Promise((resolve, reject) => {
//         let googleScript = document.querySelector(`script[src="${mapLink}"]`);

//         if (!googleScript) {
//             googleScript = document.createElement("script");
//             googleScript.src = mapLink;
//             googleScript.async = true;
//             document.head.append(googleScript);

//             googleScript.addEventListener("error", () => {
//                 reject();
//             });

//             googleScript.addEventListener("load", () => {
//                 resolve();
//             });
//         }
//     }).then(() => {
//         new google.maps.places.Autocomplete(location.value);
//     });
// });

const emailVerificationSend = async () => {
    verifEmailData.code = Math.floor(Math.random() * 999999);
    verifEmailData.hour = new Date().getHours();
    verifEmailData.minutes = new Date().getMinutes();
    await sendEmailVerification({ ...verifEmailData });
    if (errors.value == "") {
        level.value++;
        progress.value += 15;
    }
};
const VerifyEmailCode = () => {
    if (verifEmailData.code == verifyField.value) {
        user.email = verifEmailData.email;
        level.value++;
        progress.value += 15;
        verifyField.value = "";
    } else {
        errors.value = "Code de verification incorrect";
    }
};
const SmsVerificationSend = async () => {
    verifPhoneData.code = Math.floor(Math.random() * 999999);
    verifPhoneData.hour = new Date().getHours();
    verifPhoneData.minutes = new Date().getMinutes();
    await sendSmsVerification({ ...verifPhoneData });
    if (errors.value == "") {
        level.value++;
        progress.value += 15;
    }
};
const VerifySmsCode = () => {
    if (verifPhoneData.code == verifyField.value) {
        user.phone = verifPhoneData.phone;
        level.value++;
        progress.value += 15;
    } else {
        errors.value = "Code de verification incorrect";
    }
};
const register = async () => {
    await createUser({ ...user });
    if (errors.value == "") {
        level.value++;
        progress.value = 100;
    }
};
onBeforeRouteLeave((to, from, next) => {
    if (level.value > 0 && level.value < 6) {
        reveal();
        onConfirm(() => {
            next();
        });
    } else {
        next();
    }
});

const toogleShowPassword = async () => {
    showPassword.value = !showPassword.value;
};
const toogleShowCPassword = async () => {
    showCPassword.value = !showCPassword.value;
};
</script>

<template>
    <DialogsWrapper />
    <Goback />
    <section class="mb-16 mt-10">
        <div
            class="dark:bg-gray-800 relative m-auto w-full max-w-sm rounded-md bg-white p-6 shadow-md"
        >
            <h1 class="text-center text-3xl font-semibold text-gray-700">
                {{
                    level == 6 ? "Inscription terminée" : "Rejoindre Adnafrica"
                }}
            </h1>

            <Error :errors="errors" @cleanErrors="cleanErrors" />
            <transition-group
                enter-active-class="transition duration-1000"
                enter-from-class="opacity-0 translate-x-20"
                enter-to-class="opacity-1 translate-x-0"
                leave-active-class="transition duration-500 absolute ease-out"
                leave-from-class="opacity-1 translate-x-0"
                leave-to-class=" -translate-x-20 opacity-0"
                mode="out-in"
            >
                <!-- level 0 -->
                <div
                    v-if="level == 0"
                    class="flex flex-col items-center justify-center space-y-4 py-10 px-4"
                >
                    <button
                        type="button"
                        @click="accountType('particular')"
                        class="flex space-x-2 rounded-md border border-primary-color bg-white p-2 text-primary-color hover:bg-primary-color hover:text-white"
                    >
                        <span>Créer un compte particulier</span>

                        <UserIcon class="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        @click="accountType('professional')"
                        class="flex space-x-2 rounded-md border border-primary-color bg-white p-2 text-primary-color hover:bg-primary-color hover:text-white"
                    >
                        <span>Créer un compte professionel</span>

                        <OfficeBuildingIcon class="h-5 w-5" />
                    </button>
                </div>
                <!-- level 1 -->
                <form
                    v-if="level == 1"
                    @submit.prevent="emailVerificationSend()"
                    class="mt-6"
                >
                    <div class="mt-4">
                        <div>
                            <label
                                for="email"
                                class="block text-sm text-gray-800"
                                >E-mail</label
                            >
                            <input
                                type="email"
                                required
                                v-model="verifEmailData.email"
                                class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div class="mt-6">
                        <button
                            v-if="loading == 0"
                            type="submit"
                            class="w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
                        >
                            Suivant
                        </button>
                        <button
                            type="button"
                            v-if="loading == 1"
                            disabled
                            class="flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
                        >
                            <Spin />
                            <!-- S'inscrire -->
                        </button>
                    </div>
                </form>
                <!-- level 2 -->
                <form
                    v-if="level == 2"
                    @submit.prevent="VerifyEmailCode()"
                    class="mt-6"
                >
                    <div class="mt-4">
                        <div>
                            <label
                                for="email"
                                class="block text-sm text-gray-800"
                                >Code de vérification</label
                            >
                            <input
                                type="text"
                                required
                                v-model="verifyField"
                                maxlength="6"
                                class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div class="mt-6">
                        <button
                            v-if="loading == 0"
                            type="submit"
                            class="w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
                        >
                            Suivant
                        </button>
                        <button
                            type="button"
                            v-if="loading == 1"
                            disabled
                            class="flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
                        >
                            <Spin />
                        </button>
                    </div>
                </form>
                <!-- level 3 -->
                <form
                    v-if="level == 3"
                    @submit.prevent="SmsVerificationSend()"
                    class="mt-6"
                >
                    <div class="mt-4">
                        <div>
                            <label class="block text-sm text-gray-800"
                                >Numéro de Téléphone</label
                            >
                            <div class="mt-2">
                                <vue-tel-input
                                    v-model="verifPhoneData.phone"
                                    mode="international"
                                ></vue-tel-input>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <button
                            v-if="loading == 0"
                            type="submit"
                            class="w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
                        >
                            Suivant
                        </button>
                        <button
                            type="button"
                            v-if="loading == 1"
                            disabled
                            class="flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
                        >
                            <Spin />
                        </button>
                    </div>
                </form>
                <!-- level 4 -->
                <form
                    v-if="level == 4"
                    @submit.prevent="VerifySmsCode()"
                    class="mt-6"
                >
                    <div class="mt-4">
                        <div>
                            <label class="block text-sm text-gray-800"
                                >Code de vérification</label
                            >
                            <input
                                type="text"
                                required
                                v-model="verifyField"
                                maxlength="6"
                                class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div class="mt-6">
                        <button
                            v-if="loading == 0"
                            type="submit"
                            class="w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
                        >
                            Suivant
                        </button>
                        <button
                            type="button"
                            v-if="loading == 1"
                            disabled
                            class="flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
                        >
                            <Spin />
                        </button>
                    </div>
                </form>
                <!-- level 5 -->
                <form
                    v-if="level == 5"
                    @submit.prevent="register()"
                    class="mt-6"
                >
                    <div class="mt-4">
                        <div>
                            <label class="block text-sm text-gray-800"
                                >Nom
                                <span v-if="user.type == 'professional'"
                                    >de l'entreprise</span
                                ></label
                            >
                            <input
                                type="text"
                                required
                                v-model="user.firstname"
                                class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                            />
                        </div>
                        <div class="mt-2" v-if="user.type == 'particular'">
                            <label class="block text-sm text-gray-800"
                                >Prénom</label
                            >
                            <input
                                type="text"
                                required
                                v-model="user.lastname"
                                class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                            />
                        </div>
                        <div class="mt-2" v-if="user.type == 'professional'">
                            <label class="block text-sm text-gray-800"
                                >Ville</label
                            >
                            <input
                                type="text"
                                required
                                v-model="user.location"
                                class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                            />
                        </div>
                        <!-- <div class="mt-2" v-if="user.type == 'professional'">
                            <label class="block text-sm text-gray-800"
                                >Ville</label
                            >
                            <input
                                type="text"
                                required
                                ref="location"
                                class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                            />
                        </div> -->
                        <div class="mt-2" v-if="user.type == 'professional'">
                            <label class="block text-sm text-gray-800"
                                >Catégotie de votre activité</label
                            >
                            <select
                                v-model="user.category"
                                required
                                class="form-select mt-2 w-full rounded-md text-sm text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                            >
                                <option value="vetement">Vetement</option>
                                <option value="automobile">Automobile</option>
                                <option value="immobilier">Immobilier</option>
                                <option value="cuisine">Cuisine</option>
                            </select>
                        </div>
                        <div class="mt-2">
                            <label class="block text-sm text-gray-800"
                                >Mot de passe</label
                            >
                            <div class="relative mt-2">
                                <input
                                    :type="[showPassword ? 'text' : 'password']"
                                    required
                                    v-model="user.password"
                                    class="block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                                />
                                <button
                                    type="button"
                                    @click="toogleShowPassword()"
                                    :class="[
                                        showPassword
                                            ? 'absolute top-3 right-2 text-primary-color'
                                            : 'absolute top-3 right-2 text-gray-500 hover:text-primary-color',
                                    ]"
                                >
                                    <EyeIcon class="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        <div class="mt-2">
                            <label class="block text-sm text-gray-800"
                                >Confirmation du mot de passe</label
                            >
                            <div class="relative mt-2">
                                <input
                                    :type="[
                                        showCPassword ? 'text' : 'password',
                                    ]"
                                    required
                                    v-model="user.password_confirmation"
                                    class="block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-color focus:outline-none focus:ring focus:ring-primary-color focus:ring-opacity-40"
                                />
                                <button
                                    type="button"
                                    @click="toogleShowCPassword()"
                                    :class="[
                                        showCPassword
                                            ? 'absolute top-3 right-2 text-primary-color'
                                            : 'absolute top-3 right-2 text-gray-500 hover:text-primary-color',
                                    ]"
                                >
                                    <EyeIcon class="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <p
                        class="mt-8 text-center text-xs font-light text-gray-400"
                    >
                        En créant mon compte professionnel je reconnais avoir lu
                        et accepté les
                        <a
                            href="#"
                            class="font-medium text-primary-color hover:underline"
                            >Conditions Générales de Vente</a
                        >
                        et les
                        <a
                            href="#"
                            class="font-medium text-primary-color hover:underline"
                            >Conditions Générales d‘Utilisation</a
                        >
                        .
                    </p>
                    <div class="mt-6">
                        <button
                            v-if="loading == 0"
                            type="submit"
                            class="w-full transform rounded-md bg-primary-color px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"
                        >
                            Terminer
                        </button>
                        <button
                            type="button"
                            v-if="loading == 1"
                            disabled
                            class="flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"
                        >
                            <Spin />
                        </button>
                    </div>
                </form>
                <!-- level 6 -->
                <div
                    v-if="level == 6"
                    class="flex flex-col items-center justify-center space-y-4 py-10 px-4"
                >
                    <p class="text-center text-sm font-light text-gray-500">
                        Félicitation vous êtes désormais membre de Adnafrica 😀
                    </p>
                    <a
                        href="/"
                        class="flex space-x-2 rounded-md border border-primary-color bg-white p-2 text-primary-color hover:bg-primary-color hover:text-white"
                    >
                        <span>Retouner à l'acceuil</span>
                        <HomeIcon class="h-5 w-5" />
                    </a>
                </div>
            </transition-group>

            <p
                v-if="level == 0"
                class="mt-8 text-center text-xs font-light text-gray-400"
            >
                Vous avez déja un compte ?
                <router-link
                    :to="{ name: 'login' }"
                    class="font-medium text-primary-color hover:underline"
                    >Se connecter</router-link
                >
            </p>

            <div
                class="rounded-x-md absolute bottom-0 left-0 h-1.5 w-full rounded-b-md bg-gray-200"
            >
                <div
                    class="rounded-x-md h-1.5 rounded-b-md bg-primary-color"
                    :style="'width: ' + progress + '%'"
                ></div>
            </div>
        </div>
    </section>
</template>
