var daylist_template = `
<div>
    <head1></head1>
    <div class="container">
        <div class="row" style="height:800px">
            <div class="col-md-3 bg-light">
                <br>
                <side :item="2"></side>
            </div>
            <div class="col-md-9">
                <br>
                
                <form class="form-inline">
                    <label for="date1" class="control-label">起始日期：</label>
                    <input type="date" v-model="date1" class="form-control" id="date1" placeholder="">&nbsp;&nbsp;
                    <label for="date2" class="control-label">终止日期：</label>
                    <input type="date" v-model="date2" class="form-control" id="date2" placeholder="">&nbsp;&nbsp;
                    <button type="buttom" v-on:click="select" class="btn btn-primary">查询</button>&nbsp;&nbsp;
                </form>

                <br>
                <table class="table  table-bordered table-striped text-center">
                    <thead>
                    <tr>
                        <th>日期</th>
                        <th>金额</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="detail in details ">
                        <td>{{detail.cdate}}</td>
                        <td>{{detail.je}}</td>
                    </tr>
                    <tr>
                        <td class="text-right" colspan="2">
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
const daylist = {
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
          axios.get(this.shareurl + 'daylist/'+ this.date1 + '/' + this.date2)
            .then(response => this.details = response.data)
            .catch(error => console.log(error));// 请求失败处理
        },
      },

      mounted() {  //这里mounted和created生命周期函数区别
        this.select();
      },


    // mounted() {  //这里mounted和created生命周期函数区别
    //     //发送get请求
    //     axios.get(this.shareurl + 'daylist')
    //         .then(response => this.details = response.data)
    //         .catch(error => console.log(error));// 请求失败处理
    // },
    computed: {
        sum() {
          var result = 0;
          for (let i in this.details) {
            result += parseFloat(this.details[i].je);
          };
          return result.toFixed(2);
        }
      },
    template: daylist_template
}
