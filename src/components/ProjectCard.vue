<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="card h-100">
        <div class="card-body">
            <h5>{{ project.name }}</h5>
            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary">Leggi</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>