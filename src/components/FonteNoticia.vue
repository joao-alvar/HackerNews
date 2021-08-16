<template>
    <div class="fonte__noticia">
        <div class="fonte__container">
        <h4>Selecione a Fonte de Noticias</h4>
        <select class="form-control" v-on:change="sourceChanged">
            <option v-bind:key="source.id" v-for="source in sources">{{source.name}}</option>
        </select>
        <div v-for="source in sources" v-bind:key="source.id">
            <h6>{{source.description}}</h6>
            <a v-bind:href="source.url" class="btn btn-primary" target="_blank">Visitar {{source.name}}</a>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
      'apiKey'
    ],
    data: () => {
      return {
        apiUrl: '',
        isBusy: false,
        showloader: false,
        currentPage: 1,
        totalResults: 0,
        maxPerPage: 20,
        searchword: '',
        articles: [],
        country: 'us'
      }
    }
    }
</script>

<style scoped>

</style>
