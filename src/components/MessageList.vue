<template>
  <div class="message-list" v-if="messages && messages.length > 0">
    <div class="message-item" v-bind:key="message.msgId" v-for="(message, index) in messages">
      <input type="checkbox" v-on:change="checkIt(index)" />
      <div class="message-item-line-wrapper">
        <div class="message-item-line"><span class="message-item-dot">●</span></div>
      </div>
      <div class="message-item-main">
        <p>
          {{message.date}} <span class="message-item-time">{{message.time}}</span> 
          <span class="message-item-status" ms-class="read:(message.status==2)" ms-class-1="unread:(message.status==1)">{{message.statusName}}</span>
          <span class="message-item-tag" v-if="message.tagName">{{message.tagName}}</span>
          <span class="message-item-productname" v-if="message.productName">{{message.productName}}</span>
        </p>
        <p class="message-item-content">
          <a v-if="message.linkAhead" v-bind:href="linkAvailable(message) ? 'javascript:void(0);' : message.linkUrl"
            v-bind:target="linkAvailable(message) ?'_self':'_blank'"
            v-on:click="handleMessageClick(message, index)" v-bind:class="{ disable: linkAvailable(message)&&(message.status==2) }"
          >{{message.linkText}}</a>
          {{message.msgText}}
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import * as axios from 'axios'

export default {
  name: 'MessageList',
  data: function() {
    return {
      messages: []
    }
  },
  computed: {
    
  },
  methods: {
    linkAvailable: function(message) {
      return message.readOnly || message.action==1
    }
  },
  mounted: function() {
    let that = this
    axios.get('/messages').then(function(response) {
      that.$set(that, 'messages', response.data)
    })
  }
}
</script>

<style lang="less">
@import '../assets/styles/variables.less';
.operate-panel {
    position: relative;
    margin-bottom: 30px;
    input {
        vertical-align: middle;
    }
    label {
        margin-left: 10px;
    }
    .dark-button {
        margin-left: 10px;
    }
    .dark-button.disable {
        background-color: @dark-gray-color;
        cursor: default;
    }
}
.message-switch-item {
    cursor: pointer;
    color: @link-color;
}
.message-switch-item.active {
    color: @main-font-color;
    cursor: default;
}
.message-list {
    .message-item {
        position: relative;
    }
    input {
        vertical-align: top;
        margin-top: 5px;
    }
}
.operate-panel,
.message-list {
    input[type=checkbox] {
        width: 14px;
        height: 14px;
    }
}
.message-item {
    &-main {
        display: inline-block;
        width: 800px;
        margin-left: 30px;
        padding-bottom: 40px;
        p {
            line-height: 22px;
        }
        a.disable {
            color: @dark-gray-color;
        }
    }
    &-content {
        margin-top: 12px;
    }
    &-time {
        margin-left: 10px;
        margin-right: 5px;
    }
    &-tag,
    &-status,
    &-productname {
        padding: 1px 7px;
        color: white;
    }
    &-status.read {
        background-color: @main-green-color;
    }
    &-status.unread {
        background-color: @main-yellow-color;
    }
    &-tag {
        background-color: @dark-gray-color;
    }
    &-productname {
        background-color: #8899bb;
    }
    &-line-wrapper {
        position: absolute;
        display: inline-block;
        width: 30px;
        height: 100%;
    }
    &-line {
        position: absolute;
        left: 10px;
        width: 1px;
        height: 100%;
        background-color: @dark-gray-color;
    }
    &-dot {
        position: absolute;
        left: -4px;
        color: @dark-gray-color;
    }
}
.message-main .pagination {
    float: right;
}
.message-main .pagination .message-page-ellipsis {
    border: none;
}
</style>