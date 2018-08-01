import { mapGetters } from 'vuex'

export default {
  name: 'Items',
  data () {
    return {
    }
  },
  mounted() {},
  methods: {},
  created: function(){
  },
  computed: {
    ...mapGetters(['getPreVideo', 'getPreName', 'getNextVideo', 'getNextName', 'getGitHub'])
  }
}
