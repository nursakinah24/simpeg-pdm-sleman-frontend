<template v-if="visible">
    <div
        class="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex items-center justify-center font-poppins">
        <div
            class="relative m-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-white px-6 p-5 shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
            <div v-if="loading" class="absolute inset-0 flex items-center justify-center ">
                <loading class="" />
            </div>
            <h1 class="font-bold text-2xl text-center">
                Edit Pendidikan dan Pelatihan
            </h1>
            <div class="pt-5">
                <form @submit.prevent="handleSubmit">
                    <div class="divide-y divide-white space-y-4">
                        <div class="relative">
                            <input type="text" id="nama" v-model="nama" required
                                class="block px-2.5 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " />
                            <label for="nama"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Nama
                                Diklat</label>
                        </div>
                        <div class="relative">
                            <input type="text" id="penyelenggara" v-model="penyelenggara" required
                                class="block px-2.5 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " />
                            <label for="penyelenggara"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Penyelenggara</label>
                        </div>
                        <div class="relative">
                            <input type="text" id="jpl" v-model="jpl" required
                                class="block px-2.5 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " />
                            <label for="jpl"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">JPL</label>
                        </div>
                        <span class="text-gray-500 text-xs italic mt-1 ml-1">Tuliskan dalam angka. Contoh : 1</span>
                        <div class="relative">
                            <input type="text" id="tahun_kegiatan" v-model="tahun_kegiatan" required
                                class="block px-2.5 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " />
                            <label for="tahun_kegiatan"
                                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Tahun
                                Kegiatan</label>
                        </div>
                        <span class="text-gray-500 text-xs italic mt-1 ml-1">Contoh : 2024</span>
                        <div>
                            <div
                                class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                                :class="{ 'bg-blue-100': trainingData.file_url }">
                                <div class="space-y-1 text-center">
                                    <font-awesome-icon icon="cloud-arrow-up" class="size-24" />
                                    <div class="flex text-sm text-gray-600">
                                        <label for="file-upload"
                                            class="relative cursor-pointer bg-sky-50 hover:bg-sky-200 rounded-md font-bold text-gray-500 hover:text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                                            <span class="">{{ file ? file.name : trainingData.file_url ?
        trainingData.file_url.split('/').pop() : 'Pilih Dokumen Pelatihan untuk diunggah' }}</span>
                                            <input id="file-upload" name="file-upload" type="file"
                                                @change="handleFileSelect" class="hidden"  >
                                        </label>
                                    </div>
                                    <p class="pt-2 text-xs text-gray-500 italic">
                                        Format <strong>.pdf</strong> sampai dengan 2MB
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex justify-end pt-4 space-x-6">
                            <saveButton type="submit" class="w-20" />
                            <cancelButton @click="closeModal" class="w-20" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import saveButton from '../../../Buttons/saveButton.vue';
import cancelButton from '../../../Buttons/cancelButton.vue';
import loading from '../../../Alert/loading.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    components: {
        'font-awesome-icon': FontAwesomeIcon,
        saveButton,
        cancelButton,
        loading
    },
    props: {
        visible: Boolean,
        trainingData: Object,
        id: String
    },
    setup(props, { emit }) {
        const store = useStore();
        const nama = ref('');
        const penyelenggara = ref('');
        const jpl = ref('');
        const tahun_kegiatan = ref('');
        const file = ref(null);
        const loading = ref(false);

        nama.value = props.trainingData.nama;
        penyelenggara.value = props.trainingData.penyelenggara;
        jpl.value = props.trainingData.jpl;
        tahun_kegiatan.value = props.trainingData.tahun_kegiatan;
        file.value = null;

        const closeModal = () => {
            emit('close');
        };

        const handleSubmit = async () => {
            try {
                loading.value = true;
                await store.dispatch('createTrainings', {
                    nama: nama.value,
                    penyelenggara: penyelenggara.value,
                    jpl: jpl.value,
                    tahun_kegiatan: tahun_kegiatan.value,
                    file: file.value
                });
                closeModal();
                window.location.reload();
            } catch (error) {
                console.error('Error:', error);
            } finally {
                loading.value = false;
            }
        };

       const handleFileSelect = (event) => {
            // Check if a new file is selected
            if (event.target.files.length > 0) {
                file.value = event.target.files[0];
            } else {
                // If no new file is selected, ensure file.value remains defined
                if (!file.value) {
                    file.value = null; // or any default value you want
                }
            }
        };

        return { nama, penyelenggara, jpl, tahun_kegiatan, file, loading, handleSubmit, handleFileSelect, closeModal };
    },
}
</script>

<style scoped>
.floating-label {
    transform: translateY(-120%) scale(0.75);
    top: 1rem;
}
</style>