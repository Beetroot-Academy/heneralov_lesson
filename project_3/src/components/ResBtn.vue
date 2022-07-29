<template>
<div class="resolution-block">
        <v-btn
          v-if="resType == 1"
          @click="openRes = !openRes"
          class="res-btn"
          color="#212121"
          >Resolution >={{ resValue }}</v-btn
        >
        <v-btn 
          v-else-if="resType == 2"
          @click="(openRes = !openRes)"
          class="res-btn"
          color="#212121"
          >Resolution = {{ exactRes }}</v-btn
        >
        <div v-if="openRes" v-click-outside="onClickOutside" class="resolution-dropdown">
          <div class="input-wrapper">
            <input
              v-model="resType"
              type="radio"
              value="1"
              checked
              id="atleast"
              name="res-type"
            />
            <label for="res-type">Atleast</label>
            <input
              v-model="resType"
              type="radio"
              value="2"
              id="Exact"
              name="res-type"
            />
            <label for="res-type">Exact</label>
          </div>
          <div class="res-radio" v-if="resType == 1">
            <input
              v-model="resValue"
              type="radio"
              value="2560x1080"
              id="res1"
              name="res"
            />
            <label for="res1">2560 x 1080</label>
            <input
              v-model="resValue"
              type="radio"
              value="3440x1440"
              id="res2"
              name="res"
            />
            <label for="res2">3440 x 1440</label>
            <input
              v-model="resValue"
              type="radio"
              value="3840x1600"
              id="res3"
              name="res"
            />
            <label for="res3">3840 x 1600</label>
            <input
              v-model="resValue"
              type="radio"
              value="1280x720"
              id="res4"
              name="res"
            />
            <label for="res4">1280 x 720</label>
            <input
              v-model="resValue"
              type="radio"
              value="1600x900"
              id="res5"
              name="res"
            />
            <label for="res5">1600 x 900</label>
            <input
              v-model="resValue"
              type="radio"
              value="1920x1080"
              id="res6"
              name="res"
            />
            <label for="res6">1920 x 1080</label>
            <input
              v-model="resValue"
              type="radio"
              value="2560x1440"
              id="res7"
              name="res"
            />
            <label for="res7">2560 x 1440</label>
            <input
              v-model="resValue"
              type="radio"
              value="3840x2160"
              id="res8"
              name="res"
            />
            <label for="res8">3840 x 2160</label>
            <input
              v-model="resValue"
              type="radio"
              value="1280x800"
              id="res9"
              name="res"
            />
            <label for="res9">1280 x 800</label>
            <input
              v-model="resValue"
              type="radio"
              value="1600x1000"
              id="res10"
              name="res"
            />
            <label for="res10">1600 x 1000</label>
            <input
              v-model="resValue"
              type="radio"
              value="1920x1200"
              id="res11"
              name="res"
            />
            <label for="res11">1920 x 1200 </label>
            <input
              v-model="resValue"
              type="radio"
              value="2560x1600"
              id="res12"
              name="res"
            />
            <label for="res12">2560 x 1600</label>
            <input
              v-model="resValue"
              type="radio"
              value="3840x2400"
              id="res13"
              name="res"
            />
            <label for="res13">3840 x 2400</label>
            <input
              v-model="resValue"
              type="radio"
              value="1280x960"
              id="res14"
              name="res"
            />
            <label for="res14">1280 x 960</label>
            <input
              v-model="resValue"
              type="radio"
              value="1600x1200"
              id="res15"
              name="res"
            />
            <label for="res15">1600 x 1200</label>
            <input
              v-model="resValue"
              type="radio"
              value="1920x1440"
              id="res16"
              name="res"
            />
            <label for="res16">1920 x 1440</label>
            <input
              v-model="resValue"
              type="radio"
              value="2560x1920"
              id="res17"
              name="res"
            />
            <label for="res17">2560 x 1920</label>
            <input
              v-model="resValue"
              type="radio"
              value="3840x2880"
              id="res18"
              name="res"
            />
            <label for="res18">3840 x 2880</label>
            <input
              v-model="resValue"
              type="radio"
              value="1280x1024"
              id="res19"
              name="res"
            />
            <label for="res19">1280 x 1024</label>
            <input
              v-model="resValue"
              type="radio"
              value="1600x1280"
              id="res20"
              name="res"
            />
            <label for="res20">1600 x 1280</label>
            <input
              v-model="resValue"
              type="radio"
              value="1920x1536"
              id="res21"
              name="res"
            />
            <label for="res21">1920 x 1536</label>
            <input
              v-model="resValue"
              type="radio"
              value="2560x2048"
              id="res22"
              name="res"
            />
            <label for="res22">2560 x 2048</label>
            <input
              v-model="resValue"
              type="radio"
              value="3840x3072"
              id="res23"
              name="res"
            />
            <label for="res23">3840 x 3072</label>
          </div>
          <div class="res-radio" v-if="resType == 2">
            <input
              v-model="exactRes"
              type="checkbox"
              value="2560x1080"
              id="res1"
              name="res"
            />
            <label for="res1">2560 x 1080</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="3440x1440"
              id="res2"
              name="res"
            />
            <label for="res2">3440 x 1440</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="3840x1600"
              id="res3"
              name="res"
            />
            <label for="res3">3840 x 1600</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1280x720"
              id="res4"
              name="res"
            />
            <label for="res4">1280 x 720</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1600x900"
              id="res5"
              name="res"
            />
            <label for="res5">1600 x 900</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1920x1080"
              id="res6"
              name="res"
            />
            <label for="res6">1920 x 1080</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="2560x1440"
              id="res7"
              name="res"
            />
            <label for="res7">2560 x 1440</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="3840x2160"
              id="res8"
              name="res"
            />
            <label for="res8">3840 x 2160</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1280x800"
              id="res9"
              name="res"
            />
            <label for="res9">1280 x 800</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1600x1000"
              id="res10"
              name="res"
            />
            <label for="res10">1600 x 1000</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1920x1200"
              id="res11"
              name="res"
            />
            <label for="res11">1920 x 1200 </label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="2560x1600"
              id="res12"
              name="res"
            />
            <label for="res12">2560 x 1600</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="3840x2400"
              id="res13"
              name="res"
            />
            <label for="res13">3840 x 2400</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1280x960"
              id="res14"
              name="res"
            />
            <label for="res14">1280 x 960</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1600x1200"
              id="res15"
              name="res"
            />
            <label for="res15">1600 x 1200</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1920x1440"
              id="res16"
              name="res"
            />
            <label for="res16">1920 x 1440</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="2560x1920"
              id="res17"
              name="res"
            />
            <label for="res17">2560 x 1920</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="3840x2880"
              id="res18"
              name="res"
            />
            <label for="res18">3840 x 2880</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1280x1024"
              id="res19"
              name="res"
            />
            <label for="res19">1280 x 1024</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1600x1280"
              id="res20"
              name="res"
            />
            <label for="res20">1600 x 1280</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1920x1536"
              id="res21"
              name="res"
            />
            <label for="res21">1920 x 1536</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="2560x2048"
              id="res22"
              name="res"
            />
            <label for="res22">2560 x 2048</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="3840x3072"
              id="res23"
              name="res"
            />
            <label for="res23">3840 x 3072</label>
          </div>
        </div>
      </div>
     
</template>

<script>
export default {
    data() {
    return {
        resValue: "",
        exactRes: [],
        openRes: false,
        resType: '1',
    }
    },
  name: 'ResBtn',
  props: [],
methods: {
  onClickOutside () {
    this.openRes = false;
  }
},
 computed: {

 },

  watch: {
    resValue(value) {
      this.$emit("onChangeAtleast", value)
    },
    exactRes(value) {
      this.$emit("onChangeExact", value);
    },
  
  }
}
</script>


<style scoped>
.res-radio {
  
}
.input-wrapper {

}
.resolution-block {
  padding-top:25px ;
}
.resolution-dropdown {
  position: absolute;
  left: 30%;
  width: 600px;
}
.res-btn {
  color: white;
  background-color:#212121;
}
</style>