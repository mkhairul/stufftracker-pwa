<template>
  <v-card>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
        <v-layout row wrap>
          <!--
          <v-flex xs12>
            <div class="text-xs-center">
                <v-btn color="error" dark large class="center-button">Create New Item!</v-btn>
            </div>
          </v-flex>
          -->
        </v-layout>
        <v-list two-line>
          <template v-for="(item, index) in itemList">
            <v-list-tile
              :key="item.title"
              avatar
              ripple
              @click="toggle(index)"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                <v-icon
                  v-if="selected.indexOf(index) < 0"
                  color="grey lighten-1"
                >star_border</v-icon>
                <v-icon
                  v-else
                  color="yellow darken-2"
                >star</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < itemList.length" :key="index"></v-divider>
          </template>
        </v-list>
      </v-container>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      selected: [2]
    }
  },
  computed: {
    itemList: function () {
      var items = []
      for (var i = 0; i < 35; i++) {
        items.push({
          id: i,
          title: this.$faker.lorem.words(),
          content: this.$faker.lorem.sentences(),
          subtitle: this.$faker.lorem.lines(),
          action: '5 min'
        })
      }
      return items
    }
  },
  methods: {
    toggle (index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    }
  }
}
</script>

<style>
    .new-user .center-button{
        margin: 0 auto;
    }
</style>