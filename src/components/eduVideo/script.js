import MyVideo from './video/Video'
import items from './items/Items'
import seekTable from './seekTable/SeekTable'
import markdown from './markdown/Markdown'
import vue from 'vue'

export default {
  name: 'EduVideo',
  data () {
    return {
      nowTime: 0
    }
  },
  mounted() {
    const video = this.$store.state.videoEntity
    video.addEventListener('timeupdate', () => {
      this.nowTime = video.currentTime
    }, false)
  },
  methods: {
    // hen: function () {
    //   console.log("hen")
    //   this.$store.state.videoEntity.play()
    // },
    play: function (){
      const video = this.$store.state.videoEntity
      video.paused ? video.play() : video.pause()
    },
    changeTime: function( time ){
      const video = this.$store.state.videoEntity
      video.currentTime = time;
      video.play();
    }
  },
  created: function () {
  },
  computed: {
  },
  components: {
    MyVideo,
    items,
    seekTable,
    markdown
  }
}
