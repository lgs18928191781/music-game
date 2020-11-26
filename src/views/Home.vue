<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="main-container is-full-container">
      <section class="carouselConsume">
        <div id="backgroundPic">
          <img :src="require('../../public/' + currentPic)">
        </div>
        <section class="messagePannel">
          <div class="noteEditor">谱面编辑师</div>
          <div class="introEditorIta">一个关系到音乐游戏命脉的隐藏职业</div>
          <div class="introEditorNormal">玩音乐游戏的时候，我们到底在玩什么？一个个NOTE从屏幕由上至下地滑落，我们按照节奏一次击打，最终完成一首歌曲的演奏，这些带给我们愉悦的，实际上并不单单是音乐本身，还有在空中NOTE所形成的谱面一款音乐游戏歌曲的谱面，是一个供你演奏的NOTE群，这些NOTE就是由谱面编辑师来完成编制的。</div>
        </section>
        <svg width="1920" height="121" class="mask">
          <path d="M0 0c320 80.667 640 121 960 121s640-40.333 960-121v121H0V0z" fill="#FFF" fill-rule="evenodd"/>
        </svg>
      </section>
      <section class="gameClassify">
        <div v-for="item in games" :key="item.id" class="gameClassItem">
          <div class="hot">热度:{{item.hot}}</div>
          <img :src="require('../../public/' + item.logoSrc)" class="gameLogo">
          <div class="gameName"> {{item.name}} </div>
          <div class="goButtonDiv" @click="visitModel(item.routeParam)">
            <div class="goBorder"></div>
            <div class="goText">GO</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
  .main-container.is-full-container {
    width: 100%;
    margin: 0 auto;
  }
  .carouselConsume {
    position: relative;
    overflow: hidden;
    max-height: 100vh;
  }
  .messagePannel {
    height: 350px;
    width: 700px;
    /*border: 1px solid lawngreen;*/
    position: absolute;
    top: 50%;
    right: 15%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .noteEditor {
    border: 5px solid #FFF;
    border-radius: 20px;
    font-size: xx-large;
    color: #FFF;
    padding: 5px 30px;
    box-shadow:2px 2px 10px #000;
    text-shadow:2px 2px 10px #000;
  }
  .introEditorIta {
    font-size: xx-large;
    font-style: italic;
    color: #FFF;
    text-shadow:4px 4px 10px #000;
  }
  .introEditorNormal {
    font-size: x-large;
    font-weight: bold;
    color: #FFF;
    text-shadow:4px 4px 10px #000;
    text-align: center;
  }
  .mask {
    position: absolute;
    bottom: 0;
  }
  .gameClassify {
    width: 100%;
    /*border: 1px solid red;*/
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .gameClassItem {
    width: 60%;
    height: 100px;
    border: 1px solid #CCC;
    border-radius: 50px;
    margin: 30px;
    box-shadow:2px 2px 3px #A8A8A8;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .hot {
    position: absolute;
    left: -20px;
    top: -20px;
    font-size: x-large;
    font-style: italic;
    font-weight: bold;
  }
  .gameLogo {
    height: 80px;
    width: 80px;
    margin: 0 50px;
  }
  .gameName {
    font-size: x-large;
    font-weight: bold;
  }
  .goButtonDiv {
    height: 80px;
    width: 80px;
    /*border: 1px solid red;*/
    position: relative;
    margin: 0 50px;
  }
  .goBorder {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border-top: 8px solid deepskyblue;
    border-right: 8px solid lightskyblue;
    border-bottom: 8px solid deepskyblue;
    border-left: 8px solid lightskyblue;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .goBorder:hover {
    animation-name: buttonRotate;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    cursor: pointer;
  }
  .goText {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    font-size: xx-large;
    font-weight: bold;
    color: deepskyblue;
    text-align: center;
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    padding-top: 15px;
  }
  @keyframes buttonRotate {
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<script>
// @ is an alias to /src
import Navbar from "@/views/Navbar";

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data() {
    return {
      games: [],
      fakeData: [{
        id: 0,
        name: "节奏大师",
        hot: 666666,
        logoSrc: "rmLogo.png",
        routeParam: "rm"
      }, {
        id: 1,
        name: "Cytus",
        hot: 444444,
        logoSrc: "cytusLogo.jpg",
        routeParam: "cy"
      }, {
        id: 2,
        name: "MuseDash",
        hot: 333333,
        logoSrc: "mdLogo.jpg",
        routeParam: "md"
      }],
      currentPic: "backgroundPic_1.jpg",
      carouselPic: ["backgroundPic_1.jpg", "backgroundPic_2.jpg", "backgroundPic_3.jpg"]
    }
  },
  methods: {
    visitModel(routeParam) {
      if (!routeParam) return null
      this.$router.push({
        name: "Collection",
        params: {
          gameType: routeParam
        }
      })
    },
    queryGameClassify() {
      axios.get('').then(res => {
        this.games = [...res];
      });
    },
    carousel() {
      let carouselIndex = 0;
      setInterval(() => {
        this.currentPic = this.carouselPic[carouselIndex];
        carouselIndex++;
        if (carouselIndex >= this.carouselPic.length) {
          carouselIndex = 0;
        }
      }, 5000)
    }
  },
  mounted() {
    // 模拟异步
    setTimeout(() => {
      this.games = [...this.fakeData];
    }, 500);
    // this.queryGameClassify();
    this.carousel();
  }
}
</script>
