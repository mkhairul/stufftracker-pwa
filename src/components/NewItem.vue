<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
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
      <div class="headline mb-2 mt-4">Select a container to save to</div>
      <v-card>
        <v-list>
          <template v-for="(item, index) in containerList" >
            <v-list-tile 
              :key="item.id"
              @click="toggle(index)"
              avatar
              :class="{ 'grey lighten-2': (selected.includes(index)) }"
              ripple>
              <v-list-tile-action>
                <v-icon>kitchen</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                {{item.name}}
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
            Next
            <v-icon>play_arrow</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
// import axios from 'axios'
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required'
    ],
    description: '',
    selected: []
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
  }
}
</script>

<style></style>