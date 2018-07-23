<template>
  <div class="show">
    <img src="../assets/logo.png">
    <ul id="example-1">
      <li v-bind:key="message.msgId" v-for="message in messages">
        {{ message.msgText }}
      </li>
    </ul>
  </div>
</template>

<script>
import * as axios from 'axios'

export default {
  name: 'show',
  data: function() {
    return {
      messages: []
    }
  },
  mounted: function() {
    let that = this
    axios.get('/messages').then(function(response) {
      that.$set(that, 'messages', response.data.messages)
    })
  }
}
</script>
