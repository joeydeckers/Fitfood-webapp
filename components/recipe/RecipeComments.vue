<template>
  <div class="comments">
      <h3>Comments</h3>
      <div v-for="comment in comments" :key="comment.id" class="comment-holder">
          <p>{{comment.comment_text}}</p>
          <p>{{comment.owner}}</p>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props:{
        comments: {
            type: Array,
            required: true
        },  
    },
}
</script>
