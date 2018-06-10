<template>
  <div id="app" class="viewport">
    <v-app>
      <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Stuff Tracker</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Link One</v-btn>
          <v-btn flat>Link Two</v-btn>
          <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-speed-dial
          v-show="$store.state.main_speeddial"
          v-model="fab"
          :top="top"
          :bottom="bottom"
          :right="right"
          :left="left"
          :direction="direction"
          :open-on-hover="hover"
          :transition="transition"
          class="main-speeddial"
          fixed
        >
          <v-btn
            slot="activator"
            v-model="fab"
            color="blue darken-2"
            dark
            fab
          >
            <v-icon>account_circle</v-icon>
            <v-icon>close</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            small
            color="green"
          >
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            small
            color="indigo"
            to="/camera"
          >
            <v-icon>add</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            small
            color="red"
          >
            <v-icon>delete</v-icon>
          </v-btn>
        </v-speed-dial>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    direction: 'top',
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: false,
    bottom: true,
    left: true,
    transition: 'slide-y-reverse-transition'
  }),

  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { 'class': 'purple', icon: 'account_circle' }
        case 'two': return { 'class': 'red', icon: 'edit' }
        case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    }
  },
  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    }
  }
}
</script>

<style>
    .main-speeddial{
        width: 55px;
        margin-left: 15px;
    }
</style>
