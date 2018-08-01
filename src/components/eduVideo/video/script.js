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
    const video = document.getElementById("myvideo")
    this.$store.commit('SET_VIDEO', video)
  },
  methods: {
    changeTime: time => {
      const video = document.getElementById("myvideo")
      video.currentTime = time
      video.play()
    },
    saisei: function (){
      this.$emit("play")
    }
  },
  created: function () {
    // vue.$on('change-Time', this.changeTime)
  },
  computed: {
    ...mapGetters(['getURL'])
  }
}
