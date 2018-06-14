<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-layout row wrap>
        <v-flex s12 class="text-xs-center">
          <img :src="$store.state.image||placeholder_image" height="100" />
        </v-flex>
      </v-layout>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="256"
        label="Name"
        required>
      </v-text-field>
      <v-text-field
        v-model="description"
        name="input-7-2"
        label="Description"
        value=""
        class="input-group--focused"
        multi-line>
      </v-text-field>
      <div class="headline mb-2 mt-4">Select or create a container to save to</div>
      <v-card>
        <v-layout row wrap>
          <v-flex xs12 class="ml-5 mr-5">
            <v-text-field
              v-model="new_container"
              label="Create New Container"
              counter
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-list>
          <template v-for="container in containers" >
            <v-list-tile 
              :key="container['.key']"
              @click="toggle(container['.key'])"
              avatar
              :class="{ 'grey lighten-2': (selected.includes(container['.key'])) }"
              ripple>
              <v-list-tile-action>
                <v-icon>kitchen</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                {{container.name}}
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
      <v-layout row wrap class="mt-3">
        <v-flex xs12 offset-xs10 class="text-xs-right">
          <v-btn @click="clear">clear</v-btn>
          <v-btn
            :disabled="!valid"
            @click="submit">
            Save
            <v-icon>play_arrow</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline error">Error</v-card-title>
        <v-card-text>You need to choose or create a new container to put your item into.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
// import axios from 'axios'
export default {
  data: () => ({
    placeholder_image: 'https://placeimg.com/640/480/any',
    dialog: false,
    valid: true,
    name: '',
    new_container: '',
    nameRules: [
      v => !!v || 'Name is required'
    ],
    description: '',
    selected: [],
    rules: {
      required: (value) => !!value || 'Required.',
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      }
    }
  }),
  methods: {
    toggle (index) {
      const i = this.selected.indexOf(index)
      this.selected = []
      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    },
    submit () {
      if (this.selected.length === 0 && this.new_container === '') {
        this.dialog = true
        return false
      }
      if (this.$refs.form.validate()) {
        this.$store.commit('saveNewItem', {
          name: this.name,
          email: this.email
        })
        // Native form submission is not yet supported
        /*
        axios.post('/api/submit', {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        })
        */
      }
    },
    clear () {
      this.$refs.form.reset()
      this.selected = []
    }
  },
  computed: {
    containerList: function () {
      var items = []
      for (var i = 0; i < 10; i++) {
        items.push({
          id: i,
          name: this.$faker.random.word()
        })
      }
      return items
    }
  },
  firestore () {
    return {
      containers: this.$db.collection('containers')
    }
  }
}
</script>

<style></style>