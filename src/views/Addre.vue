<template>
  <div class="addre">
    <HH title="选择收货地址" :isLeft="true"></HH>
    <div class="city_search">
      <div class="search">
        <span class="city" @click="$router.push('/city')">
          {{city}}
          <i class="fa fa-angle-down"></i>
        </span>
        <i class="fa fa-search"></i>
        <input type="text" v-model="search_val" placeholder="小区/写字楼/学校等" />
      </div>
      <Location @MyClick="selectAddress" :address="address" />
    </div>
    <div class="area">
      <ul class="area_list" v-for="(item,index) in areaList" :key="index">
        <li @click="selectAddress(item)">
          <h4>{{item.name}}</h4>
          <p>{{item.district}}{{item.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import HH from "@/components/HH";
import Location from "@/components/Location";
import { mapState, mapActions } from "vuex";
export default {
  name: "addre",
  data() {
    return {
      city: "",
      search_val: "",
      areaList: []
    };
  },
  computed: {
    ...mapState(["address"])
  },
  watch: {
    search_val(value) {
      let self = this;
      AMap.plugin("AMap.Autocomplete", function() {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: self.city
        };
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(value, function(status, result) {
          // 搜索成功时，result即是对应的匹配数据
          self.areaList = result.tips;
        });
      });
    }
  },
  methods: {
    ...mapActions(["setAddress"]),
    selectAddress(item) {
      if (item) {
        let address = item.district + item.address + item.name;
        this.setAddress(address);
        this.$router.push("/home");
      } else {
        this.$store.dispatch("setAddress", this.address);
        this.$router.push("/home");
      }
    }
  },
  components: {
    HH,
    Location
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.city = to.params.city;
    });
  }
};
</script>
<style scoped>
.addre {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}

.city_search {
  background-color: #fff;
  padding: 10px 20px;
  color: #333;
}

.search {
  background-color: #eee;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 40px;
}
.search .city {
  padding: 0 10px;
}
.city i {
  margin-right: 10px;
}
.search input {
  margin-left: 5px;
  background-color: #eee;
  outline: none;
  border: none;
}

.area {
  margin-top: 16px;
  background: #fff;
}
.area li {
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
  color: #aaa;
}
.area li h4 {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
</style>
