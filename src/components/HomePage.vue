<template>
    <div>
        <h2 class="section__title">Home</h2>
              <Item v-for="story in stories" :key="story.data.id" :story="story"></Item>
    </div>
</template>

<script>
import axios from 'axios'
import Item from '@/components/Item.vue'

export default {
    name: "HomePage",
    components: {
        "Item": Item
    } ,
    data: function () {
        return {
            err: '',
            stories: []
        }
    },
    created: function () {
        axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(response => {
       let results = response.data.slice(0, 30)
       results.forEach(id => {
           axios.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
            .then(response => {
              this.stories.push(response);
            })
            .catch(err => {
              console.log(err);
            });
       })
      })
      .catch(err => {
        this.err = err;
      });
    }
};
</script>

<style scoped>
 
</style>
