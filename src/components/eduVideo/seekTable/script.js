import { mapGetters } from 'vuex'
export default {
  name: 'SeekTable',
  props: ['saisei', 'nowTime'],
  data () {
    return {
      tableData: []
    }
  },
  mounted() {},
  methods: {
    update: function () {
      this.tableData = getTable(this.$store.state.jsonData.chapter)
    },
    changeContents: function (index) {
      console.log(this.tableData[index].time)
      // ここにchangeTimeを呼び出す処理を入れる
    },
    hen: function (){
      console.log(this.nowTime)
      this.$emit("set", 43)
    }
  },
  created: function(){
    this.update()
  },
  computed: {
    ...mapGetters(['getNowTime'])
  },
  filters: {
    toTime: value => {
      if (!value) return ''
      return Math.floor(value / 60) + ':' + ('00' + (value % 60)).slice(-2)
    }
  }
}

var getTable = function(data) {
  var table = []
  for (var index in data) {
    if (index != 0) table[table.length - 1].endTime = data[index].time
    const shortName = (data[index].name.length > 20) ?
      data[index].name.slice(0, 17) + "..." : data[index].name
    table.push({
      time: data[index].time,
      endTime: Infinity,
      name: shortName,
      nowPlay: false
    })
  }
  return table
}
