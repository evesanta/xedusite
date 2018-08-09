export default {
  name: 'SeekTable',
  props: ['nowTime'],
  data () {
    return {
      tableData: []
    }
  },
  mounted() {},
  methods: {
    getTableData: function () {
      return this.tableData = getTable(this.$store.state.jsonData.chapter)
    },
    changeContents: function (val) {
      console.log('nextTIme is = ' + val.origTime)
      this.$emit("changeTime", val.origTime)
    },
    hen: function (){
      console.log(this.nowTime)
      this.$emit("set", 43)
    },
    toTime: value => {
      if (!value) return ''
      return Math.floor(value / 60) + ':' + ('00' + (value % 60)).slice(-2)
    },
    tableRowClassName({row, rowIndex}) {
      const item = this.tableData[rowIndex]
      if (item.origTime <= this.nowTime && this.nowTime < item.endTime) {
        // console.log(this.nowTime)
        return 'nowPlay'
      }
      return '';
    }
  },
  created: function(){
  },
  computed: {
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
    const timeVal =
    data[index].time === '' ? '' : Math.floor(data[index].time / 60) + ':' + ('00' + (data[index].time % 60)).slice(-2)
    table.push({
      time: timeVal,
      origTime: data[index].time,
      endTime: Infinity,
      name: shortName,
      nowPlay: false
    })
  }
  return table
}
