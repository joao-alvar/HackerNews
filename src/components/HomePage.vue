<template>
    <div>
        <h2>Home Page</h2>
        <div v-for="story in stories" :key="story">
            <h2>{{story.data.title}}</h2>
            <a :href="story.data.url" target="_blank">{{story.data.url}}</a> 
            <p>Comentários: {{story.data.descendants}}</p>
             <p>Nota: {{story.data.score}}</p>
              <p>Autor: {{story.data.by}}</p>
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "HomePage",
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
       let results = response.data.slice(0, 10)
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
