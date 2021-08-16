<template>
      <div class="container">
           <div class="searchbar">
               <form @submit.prevent="fetchSearchNews">
        <input type="text" placeholder="search..." v-model="searchword">
      </form>
           </div>
      </div>
</template>

<script>
export default {
       name: "FonteNoticia",
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
