var details_template = `
<div>
    <head1></head1>
    <div class="container">
        <div class="row" style="height:800px">
            <div class="col-md-3 bg-light" >
                <br>
                <side :item="1"></side>
            </div>
            <div class="col-md-9">
                <br>

                <form class="form-inline">
                    <label for="date1" class="control-label">起始日期：</label>
                    <input type="date" v-model="date1" class="form-control" id="date1" placeholder="">&nbsp;&nbsp;
                    <label for="date2" class="control-label">终止日期：</label>
                    <input type="date" v-model="date2" class="form-control" id="date2" placeholder="">&nbsp;&nbsp;
                    <button type="buttom" v-on:click="select" class="btn btn-primary">查询</button>&nbsp;&nbsp;

                    <button type="buttom" v-on:click="add" class="btn btn-danger">增加</button>
                </form>

                <table class="table table-bordered table-striped text-center" style="margin-top:30px">
                  </thead>    
                    <tr>
                        <th>日期</th>
                        <th>金额</th>
                        <th>备注</th>
                        <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="detail in details ">
                        <td>{{detail.cdate}}</td>
                        <td>{{detail.money}}</td>
                        <td>{{detail.note}}</td>
                        <td><a href="#" v-on:click="del(detail.id)">删除</a></td>
                    </tr>
                    <tr>
                        <td class="text-right" colspan="4">
                            合计：{{sum}}
                        </td>
                    </tr>
                  </tbody>
                </table><br><br>
            </div>
        </div>
    </div>
    <foot1></foot1>
</div>

  `
const details = {
  data() {
    var myDate = new Date();
    return {
      date1: new Date(myDate.getFullYear(), myDate.getMonth(), 1).format("yyyy-MM-dd"),
      date2: new Date().format("yyyy-MM-dd"),
      shareurl: store.state.url,
      details: [],
      newdetail: {
        date: new Date().format("yyyy-MM-dd"),
        money: '',
        note: ''
      },
    }
  },

  methods: {
    select() {
      //发送get请求
      axios.get(this.shareurl + 'details/'+ this.date1 + '/' + this.date2)
        .then(response => this.details = response.data)
        .catch(error => console.log(error));// 请求失败处理

    },
    add() {
      router.push({
        path: 'add'
      })
    },
    del(id) {
      axios.delete(this.shareurl + 'delete/' + id)
        .then(response => {
          console.log(response.data);
          for (var i = 0; i < this.details.length; i++) {
            if (id == this.details[i].id) {
              this.details.splice(i, 1);
              break;
            }
          }
        })
        .catch(error => console.log(error));// 请求失败处理
    },
  },

  mounted() {  //这里mounted和created生命周期函数区别
    this.select();
  },

  computed: {
    sum() {
      var result = 0;
      for (let i in this.details) {
        result += parseFloat(this.details[i].money);
      };
      return result.toFixed(2);
    }
  },
  template: details_template
}
