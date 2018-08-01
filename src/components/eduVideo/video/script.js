import { mapGetters } from 'vuex'

export default {
  name: 'MyVideo',
  data () {
    return {
      nowTime: 0
    }
  },
  mounted() {
    const video = document.getElementById("video")
    video.addEventListener('timeupdate', () => {
      this.nowTime = video.currentTime
    }, false)
  },
  methods: {
    changeTime: time => {
      const video = document.getElementById("video")
      video.currentTime = time
      video.play();
    },
    saisei: () => {
      const video = document.getElementById("video")
      video.paused ? video.play() : video.pause()
    }
  },
  computed: {
    ...mapGetters(['getURL'])
  }
}
