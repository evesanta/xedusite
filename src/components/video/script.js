import { mapGetters } from 'vuex'

export default {
  name: 'MyVideo',
  data () {
    return {
    }
  },
  methods: {},
  computed: {
    ...mapGetters(['getURL'])
  }
}
