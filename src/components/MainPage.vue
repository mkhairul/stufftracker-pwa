<template>
  <div class="hello">
    <md-card>
        <md-card-header>
            <div class="md-title">Material Design with Vue.js 2 Demo</div>
            <div class="md-subhead">by CodingTheSmartWay.com testing</div>
        </md-card-header>
    </md-card>
    <h1>{{ msg }}</h1>
    <a class="waves-effect waves-light btn">button</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>