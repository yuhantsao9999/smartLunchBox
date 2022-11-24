<html>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class = "block">  
      <div class="all-title-box">
        <a> 需攝取營養</a>
      </div>
    </div>
    <div class = "block">
      <div class="all-title-box">
        <a> 推薦餐盒</a>
      </div>
    </div>
 
    <div class = "block">
      <div class="all-title-box">
          <a> 主餐</a>
      </div>
    
      <select>
            <option>請選擇你最愛的寵物</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Hamster</option>
            <option>Parrot</option>
            <option>Spider</option>
            <option>Goldfish</option>
      </select>
    </div>
    <div class = "block">
      <div class="all-title-box">

        <a> 目前訂購</a>
      </div>
    </div>
  </div>
  <button @click="count++">{{ count }}</button>
</html>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue'


export default {
  setup() {
    const count = ref(0)
    return {
      count
    }
  },

  mounted() {
    //console.log(this.count) // 0
  }
}
</script>

<style>
.all-title-box {
    background-size: cover;
    text-align: center;
    background-attachment: fixed;
    padding: 30px 0px;
    position: relative;
    background-color: lightblue;
    
}
.block{
  margin-bottom: 6rem;
}


</style>
