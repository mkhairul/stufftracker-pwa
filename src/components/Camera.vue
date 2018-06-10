<template>
    <v-card height="100%">
        <v-card-media height="100%">
            <video ref="video" id="video" width="100%" height="100%" autoplay></video>
        </v-card-media>
        <div></div>
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
        <ul>
            <li v-for="c in captures">
                <img v-bind:src="c" height="50" />
            </li>
        </ul>
        <v-speed-dial
          :top="top"
          :bottom="bottom"
          :right="right"
          :left="left"
          :direction="direction"
          :open-on-hover="hover"
          :transition="transition"
          class="camera-speeddial"
          fixed
        >
          
          <v-btn
            v-on:click="capture()"
            slot="activator"
            v-model="fab"
            color="blue darken-2"
            dark
            fab
          >
            <v-icon>camera_alt</v-icon>
          </v-btn>
        </v-speed-dial>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
      video: {},
      canvas: {},
      captures: [],
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
    }
  },
  methods: {
    capture () {
      this.canvas = this.$refs.canvas
      var context = this.canvas.getContext('2d').drawImage(this.video, 0, 0, 640, 480)
      console.log(context)
      this.captures.push(this.canvas.toDataURL('img/png'))
    }
  },
  mounted () {
    this.$store.commit('disable_speeddial')
    this.video = this.$refs.video
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
        this.video.src = window.URL.createObjectURL(stream)
        this.video.play()
      })
    }
  }
}
</script>

<style>
    #video {
        background-color: #000000;
    }
    #canvas {
        display: none;
    }
    .camera-speeddial{
        left: 50%;
        margin-left: -24px;
    }
</style>