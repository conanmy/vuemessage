<template>
  <div class="show">
    <MessageTabs />
    <div class="message-main clearfix">
      <MessageList />
    </div>
  </div>
</template>

<script>
import MessageTabs from '../components/MessageTabs'
import MessageList from '../components/MessageList'

export default {
  name: 'show',
  components: {
    MessageTabs,
    MessageList
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