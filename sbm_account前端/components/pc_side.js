var side_template = `
<ul class="nav flex-column" >
  <li class="nav-item">
    <router-link to="/details" v-bind:class="['nav-link',item==1 ? 'text-danger' : 'text-dark']" >消费明细</router-link>
  </li>
  <li class="nav-item">
   <router-link to="/daylist" :class="['nav-link',item==2 ? 'text-danger' : 'text-dark']">日统计</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/monthlist" :class="['nav-link',item==3 ? 'text-danger' : 'text-dark']">月统计</router-link>
  </li>
  <li class="nav-item">
   <router-link to="/yearlist" :class="['nav-link',item==4 ? 'text-danger' : 'text-dark']">年统计</router-link>
  </li>
</ul>
  `
Vue.component('side', {
  props: {
    item : String,
  },
  data: function () {
    return {
    }
  },
  template: side_template,
});
