<template>
  <div class="hello">
    <div class="md-layout md-gutter">
      <md-card  v-for="item in itemList" v-bind:key="item.id" class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <md-card-header>
            <div class="md-title">{{ item.title }}</div>
          </md-card-header>

          <md-card-content>
            {{ item.content }}
          </md-card-content>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
      </md-card>
    </div>
      
    <md-speed-dial class="md-bottom-left">
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button md-raised" to="/camera">
            <md-icon>camera_alt</md-icon>
        </md-button>
          
        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  </div>
</template>

<script>
export default {
  data () {
    console.log(this.$faker)
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  computed: {
    itemList: function () {
      var items = []
      for (var i = 0; i < 35; i++) {
        items.push({
          id: i,
          title: this.$faker.lorem.words(),
          content: this.$faker.lorem.paragraph()
        })
      }
      return items
    }
  }
}
</script>

<style>
  .md-card {
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>