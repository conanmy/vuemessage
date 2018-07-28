<template>
  <div class="message-tab">
    <div v-bind:key="category.id" v-for="category in categories">
      <div class="message-tab-item" v-bind:class="{current: isCurrent(category)}" v-on:click="changeTab(category.id)">
        {{category.name}}<span ms-if="category.msgNum" class="new-message-num">{{category.msgNum}}</span>
      </div>
      <div v-bind:key="subcategory.id" v-for="subcategory in category.subCategoryList">
        <div class="message-tab-item message-tab-sub-item" v-bind:class="{current: isCurrent(subcategory)}" v-on:click="changeTab(subcategory.id)">
          <span class="message-tab-sub-dot">●</span>
          {{subcategory.name}}
          <span v-if="subcategory.msgNum" class="new-message-num">{{subcategory.msgNum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as axios from 'axios'

export default {
  name: 'MessageTabs',
  data: function() {
    return {
      categories: []
    }
  },
  computed: {
    
  },
  methods: {
    isCurrent: function(category) {
      return (category.id==this.$route.params.categoryId)
    }
  },
  mounted: function() {
    let that = this
    axios.get('/messageCategory').then(function(response) {
      that.$set(that, 'categories', response.data)
    })
  }
}
</script>

<style lang="less">
@import '../assets/styles/variables.less';
.message-tab {
  &-item,
  &-sub-item {
    width: 138px;
    padding-left: 32px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  &-item {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    border-bottom: 1px solid Silver;
    background-color: @gray-color;
    cursor: pointer;
  }
  &-sub-item {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    border-bottom: none;
    background-color: transparent;
  }
  &-item.current {
    background-color: white;
  }
  &-sub-dot {
    margin-right: 4px;
    color: @light-blue-color;
  }
}
.new-message-num {
  font-size: 12px;
  background-color: #ff6565;
  padding: 0 4px;
  margin-left: 3px;
  color: white;
}
</style>