<template>
  <div class="show">
    <MessageTabs />
    <div class="message-main clearfix">
      <ul>
        <li v-bind:key="message.msgId" v-for="message in messages">
          {{ message.msgText }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as axios from 'axios'
import MessageTabs from '../components/MessageTabs'

export default {
  name: 'show',
  components: {
    MessageTabs
  },
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

<style lang="less">
@import '../assets/styles/variables.less';
.message-tab {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-right: 1px solid Silver;
    background-color: @light-gray-color;
}
.message-main {
    margin-left: 180px;
    min-height: 800px;
    padding: 25px;
}
.message-status-switch {
    position: absolute;
    right: 300px;
}
.message-tag-switch {
    position: absolute;
    right: 30px;
}
</style>