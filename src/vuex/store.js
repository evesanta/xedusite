import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  jsonData: {
    source: '# コマンドライン引数の指定方法\n\n今回はコマンドラインの引数の指定方法と、それの利用方法を学びます。\n\n今回使用するプログラムはこちらです。   \n```java\nclass Main {\n\tpublic static void main(String[] args) {\n\t\tString getString;\n\t\tint getInt;\n\t\tdouble getDouble;\n\t\t\n\t\tif(args.length != 3){\n\t\t\tSystem.out.println("引数の数が間違っています。");\n\t\t\tSystem.exit(1);\n\t\t}\n\t\t\n\t\tgetString = args[0];\n\t\tgetInt = Integer.parseInt(args[1]);\n\t\tgetDouble = Double.parseDouble(args[2]);\n\t\t\n\t\tSystem.out.println(getString + ", " + getInt + ", " + getDouble);\n\t}\n}\n```\n\n*クラス名は適宜変更してください*\n\n指定した引数は   \n```\nhi 123 1.23\n```\nです'
  }
}
const actions = {}
const getters = {
  getMarkDown: state => state.jsonData.source
}
const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
