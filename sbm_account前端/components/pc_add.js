var add_template = `
<div>
    <head1></head1>
    <div class="container">
        <div class="row" style="height:800px">
            <div class="col-md-3 bg-light">
                <br>
                <side :item="5"></side>
            </div>
            <div class="col-md-9">
                <br>
                <form role="form">
                    <div class="form-group">
                        <label for="date" class="control-label">日期：</label>
                        <input type="date" v-model="detail.cdate" class="form-control" id="date" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="je" class="control-label">金额：</label>
                        <input type="number" v-on:change="setTwoNumberDecimal" v-model="detail.money"
                            class="form-control" id="je" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="bz" class="control-label">备注：</label>
                        <input type="text" v-model="detail.note" class="form-control" id="bz" placeholder="">
                    </div>
                    <div class="form-group">
                        <button type="submit" v-on:click="add" class="btn btn-primary">新增</button>&nbsp;&nbsp;
                    </div>
                </form>
                {{returnvalue}}
            </div>
        </div>
    </div>
    <foot1></foot1>
</div>
  `
const add = {
  data() {
    return {
      shareurl: store.state.url,
      detail: {
        cdate: new Date().format("yyyy-MM-dd"),
        money: '',
        note: ''
      },
      returnvalue: ''
    }
  },
  methods: {
    add() {
      if (this.detail.money == '') {
        alert("金额不能为空!");
        return;
      };

      axios.post(this.shareurl + 'add', this.detail)
        .then(response => {
          this.returnvalue = response.data.success;
          this.detail.money = '';
          this.detail.note = '';
        })
        .catch(error => console.log(error));// 请求失败处理
    },
setTwoNumberDecimal() {
  this.detail.money = parseFloat(this.detail.money).toFixed(2);
}
  },
template: add_template
}
