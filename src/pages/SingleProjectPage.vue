<script>
import axios from 'axios';

export default {
    name: "SingleProjectPage",
    data() {
        return {
            baseUrl: "http://127.0.0.1:8010",
            project: null,
            errorMessage: ""
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios.get(`${this.baseUrl}/api/projects/${slug}`).then(
            resp => {
                //status 200
                console.log(resp);
                this.project = resp.data.results;
            },
            error => {
                console.log(error.response.status);
                console.log(error.response.data);
                if (error.response.status === 404) {
                    // Errore not found, sto cercando un post che non esiste
                    // Rindirizzo nella pagina not found
                    this.$router.push({ name: "not-found" });
                } else {
                    this.errorMessage = "Ooops, qualcosa è andato storto..";
                }
            })
    },
    methods: {
        goBack() {
            // this.$router.back();
            this.$router.go(-1);
        }
    }
}
</script>

<template>
    <div class="container">
        <a @click.prevent="goBack()" class="btn btn-warning" href="">Back</a>
        <div class="project-details" v-if="project">
            <h2>{{ project.name }}</h2>
        </div>
    </div>
</template>