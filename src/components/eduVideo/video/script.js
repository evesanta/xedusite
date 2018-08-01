import { mapGetters } from 'vuex'
import vue from 'vue'

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
      this.$store.commit('SET_NOW_TIME', this.nowTime)
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
  created: function () {
    // vue.$on('change-Time', this.changeTime)
  },
  computed: {
    ...mapGetters(['getURL'])
  }
}
