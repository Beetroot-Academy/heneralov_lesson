<template>
<div class="resolution-block">
        <v-btn
          @click="openRes = !openRes"
          class="res-btn"
          color="#212121"
          >Resolution</v-btn
        >
        <div v-if="openRes" v-click-outside="onClickOutside" class="resolution-dropdown">
            <div class="checkbox-wrapper">
            <input
              v-model="exactRes"
              type="checkbox"
              value="2560x1080"
              id="res1"
              name="res"
              class="res-input"
            />
            <label for="res1">2560 x 1080</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="3440x1440"
              id="res2"
              name="res"
              class="res-input"
            />
            <label for="res2">3440 x 1440</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="3840x1600"
              id="res3"
              name="res"
              class="res-input"
            />
            <label for="res3">3840 x 1600</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1280x720"
              id="res4"
              name="res"
              class="res-input"
            />
            <label for="res4">1280 x 720</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1600x900"
              id="res5"
              name="res"
              class="res-input"
            />
            <label for="res5">1600 x 900</label>
            </div>
            <div class="checkbox-wrapper">
            <input
              v-model="exactRes"
              type="checkbox"
              value="1920x1080"
              id="res6"
              name="res"
              class="res-input"
            />
            <label for="res6">1920 x 1080</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="2560x1440"
              id="res7"
              name="res"
              class="res-input"
            />
            <label for="res7">2560 x 1440</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="3840x2160"
              id="res8"
              name="res"
              class="res-input"
            />
            <label for="res8">3840 x 2160</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1280x800"
              id="res9"
              name="res"
              class="res-input"
            />
            <label for="res9">1280 x 800</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1600x1000"
              id="res10"
              name="res"
              class="res-input"
            />
            <label for="res10">1600 x 1000</label>
            </div>
            <div class="checkbox-wrapper">
            <input
              v-model="exactRes"
              type="checkbox"
              value="1920x1200"
              id="res11"
              name="res"
              class="res-input"
            />
            <label for="res11">1920 x 1200 </label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="2560x1600"
              id="res12"
              name="res"
              class="res-input"
            />
            <label for="res12">2560 x 1600</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="3840x2400"
              id="res13"
              name="res"
              class="res-input"
            />
            <label for="res13">3840 x 2400</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1280x960"
              id="res14"
              name="res"
              class="res-input"
            />
            <label for="res14">1280 x 960</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1600x1200"
              id="res15"
              name="res"
              class="res-input"
            />
            <label for="res15">1600 x 1200</label>
            </div>
            <div class="checkbox-wrapper">
            <input
              v-model="exactRes"
              type="checkbox"
              value="1920x1440"
              id="res16"
              name="res"
              class="res-input"
            />
            <label for="res16">1920 x 1440</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="2560x1920"
              id="res17"
              name="res"
              class="res-input"
            />
            <label for="res17">2560 x 1920</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="3840x2880"
              id="res18"
              name="res"
              class="res-input"
            />
            <label for="res18">3840 x 2880</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1280x1024"
              id="res19"
              name="res"
              class="res-input"
            />
            <label for="res19">1280 x 1024</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="1600x1280"
              id="res20"
              name="res"
              class="res-input"
            />
            <label for="res20">1600 x 1280</label>
            </div>
            <div class="checkbox-wrapper">
            <input
              v-model="exactRes"
              type="checkbox"
              value="1920x1536"
              id="res21"
              name="res"
              class="res-input"
            />
            <label for="res21">1920 x 1536</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="2560x2048"
              id="res22"
              name="res"
              class="res-input"
            />
            <label for="res22">2560 x 2048</label>
            <input
              v-model="exactRes"
              type="checkbox"
              value="3840x3072"
              id="res23"
              name="res"
              class="res-input"
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

.resolution-block {
  padding-right: 20px;
  
}
.resolution-dropdown {
  position: absolute;
  right: 0px;
  bottom: 50px;
  padding: 10px 15px;
  
  width: fit-content;
  height: fit-content;
}
.res-btn {
  
  margin-top: -5px;
  color: white;
  background-color:#212121;
}

.res-input {
 display: none;
}

.res-input:checked + label,
.res-input:not(:checked) + label {
  padding: 1px;
  border: 1px solid black;
  z-index: 1;
  margin-right: 2px;
  font-size: 12px;
  
}
.res-input:checked + label {
  background-color: #00C853;
  transition: 0.3s;
}
.res-input:not(:checked) + label {
  color: #BDBDBD;
  background-color:#616161 ;
}
.res-switcher + label {
  margin-right:25px ;
}
.res-radio {
  display: inline-table;
  
}
.checkbox-wrapper {
  display: flex;
}
.res-btn:hover {
  background-color:#FF8F00;
  transition: 0.5s;
}
@media screen and (max-width: 768px) {
.resolution-block {
  padding-right: 0px;
}
}

</style>