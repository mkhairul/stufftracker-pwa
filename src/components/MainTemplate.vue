<template>
  <div>
      <v-toolbar>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Stuff Tracker</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Link One</v-btn>
          <v-btn flat>Link Two</v-btn>
          <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-navigation-drawer
        v-model="drawer"
        temporary
        absolute
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="item in drawerMenu" :key="item.name" :to="item.link">
            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
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
            <v-icon>add</v-icon>
            <v-icon>close</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            small
            color="indigo"
            to="/camera"
          >
            <v-icon>camera_alt</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            small
            color="green"
            to="/newitem"
          >
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            small
            color="blue darken-1"
            to="/newcontainer"
          >
            <v-icon>kitchen</v-icon>
          </v-btn>
        </v-speed-dial>
    </div>
</template>

<script>
export default {
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
    transition: 'slide-y-reverse-transition',
    drawer: null
  }),

  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { 'class': 'purple', icon: 'account_circle' }
        case 'two': return { 'class': 'red', icon: 'edit' }
        case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    },
    drawerMenu () {
      return [
        {
          name: 'Dashboard',
          icon: 'dashboard',
          link: '/'
        },
        {
          name: 'Login',
          icon: 'https',
          link: '/login'
        }
      ]
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
