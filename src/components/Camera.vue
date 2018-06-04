<template>
    <div class="md-layout">
        <h1>Camera</h1>
        <div><video ref="video" id="video" width="640" height="480" autoplay></video></div>
        <div><button id="snap" v-on:click="capture()">Snap Photo</button></div>
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
        <ul>
            <li v-for="c in captures">
                <img v-bind:src="c" height="50" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      video: {},
      canvas: {},
      captures: []
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
</style>