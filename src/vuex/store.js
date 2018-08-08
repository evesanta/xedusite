import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

import {
  SET_NOW_TIME,
  SET_VIDEO,
  CHANGE_JSONDATA
} from './mutation-types'

Vue.use(Vuex)

const state = {
  videoEntity: null,
  nowTime: 0,
  jsonData: {
    url: 'https://firebasestorage.googleapis.com/v0/b/eduwebsite-1224.appspot.com/o/sample.mp4?alt=media&token=64381586-bbfe-4a33-a8c3-15d9e9cf2a55',
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
      }
    ],
    source: '# タイトルを書いてください\n\n\nソースコードテスト\n\n```java\n/**\n * @author John Smith <john.smith@example.com>\n*/\npackage l2f.gameserver.model;\n\npublic abstract class L2Char extends L2Object {\n  public static final Short ERROR = 0x0001;\n\n  public void moveTo(int x, int y, int z) {\n    _ai = null;\n    log("Should not be called");\n    if (1 > 5) { // wtf!?\n      return;\n    }\n  }\n}\n```\n',
    'preVideo': '1220',
    'preName': 'アクセス制御１',
    'nextVideo': '1340',
    'nextName': 'アクセス制御３',
    'github': ''
  }
}

const actions = {
  [CHANGE_JSONDATA] ({ commit }, number) {
    commit(CHANGE_JSONDATA, number)
  }
}

const getters = {
  getMarkDown: state => state.jsonData.source,
  getURL: state => state.jsonData.url,
  getPreVideo: state => state.jsonData.preVideo,
  getPreName: state => state.jsonData.preName,
  getNextVideo: state => state.jsonData.nextVideo,
  getNextName: state => state.jsonData.nextName,
  getGitHub: state => state.jsonData.github,
  getNowTime: state => state.nowTime
}

var getJson = async function (videoID) {
  var getData = null
  // axios.get('./assets/jsonFile/' + videoID + '.json').then(x => {
  await axios.get('/static/jsonFile/111.json').then(x => {
    getData = x.data
  })
  console.log(getData)
  return getData
}

const mutations = {
  [SET_NOW_TIME] (state, time) {
    state.nowTime = time
  },
  [SET_VIDEO] (state, v) {
    state.videoEntity = v
  },
  async [CHANGE_JSONDATA] (state, number) {
    state.jsonData = await getJson(111)
    // console.log(getJson(number))
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
