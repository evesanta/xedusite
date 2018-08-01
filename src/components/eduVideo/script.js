import MyVideo from './video/Video'
import items from './items/Items'
import seekTable from './seekTable/SeekTable'
import markdown from './markdown/Markdown'
import vue from 'vue'
export default {
  name: 'EduVideo',
  data () {
    return {
    }
  },
  mounted() {},
  methods: {
    saisei: function (data){
      console.log(data)
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
