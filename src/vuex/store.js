import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  nowTime: 0,
  jsonData: {
    videoURL: 'https://rprjie.meijo-u.ac.jp/lectures/Prog4/video/Java_HowToCompile.mp4',
    chapter: [
      {
        'time': '7',
        'name': '概要'
      },
      {
        'time': '14',
        'name': 'アウトライン'
      },
      {
        'time': '23',
        'name': 'アクセス修飾子の説明'
      },
      {
        'time': '44',
        'name': 'プログラムの紹介'
      },
      {
        'time': '121',
        'name': 'package private の使い方'
      },
      {
        'time': '156',
        'name': 'public の使い方'
      },
      {
        'time': '229',
        'name': 'カプセル化'
      },
      {
        'time': '595',
        'name': 'まとめ'
      }
    ],
    source: '# コマンドライン引数の指定方法\n\n今回はコマンドラインの引数の指定方法と、それの利用方法を学びます。\n\n今回使用するプログラムはこちらです。   \n```java\nclass Main {\n\tpublic static void main(String[] args) {\n\t\tString getString;\n\t\tint getInt;\n\t\tdouble getDouble;\n\t\t\n\t\tif(args.length != 3){\n\t\t\tSystem.out.println("引数の数が間違っています。");\n\t\t\tSystem.exit(1);\n\t\t}\n\t\t\n\t\tgetString = args[0];\n\t\tgetInt = Integer.parseInt(args[1]);\n\t\tgetDouble = Double.parseDouble(args[2]);\n\t\t\n\t\tSystem.out.println(getString + ", " + getInt + ", " + getDouble);\n\t}\n}\n```\n\n*クラス名は適宜変更してください*\n\n指定した引数は   \n```\nhi 123 1.23\n```\nです'
  }
}
const actions = {}
const getters = {
  getMarkDown: state => state.jsonData.source,
  getURL: state => state.jsonData.videoURL
}
const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
