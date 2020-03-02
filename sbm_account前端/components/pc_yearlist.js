var yearlist_template = `
<div>
    <head1></head1>
    <div class="container">
        <div class="row" style="height:800px">
            <div class="col-md-3 bg-light">
                <br>
                <side :item="4"></side>
            </div>
            <div class="col-md-9">
                <br>
                <table class="table  table-bordered table-striped text-center">
                    <thead>    
                    <tr>
                        <th>年份</th>
                        <th>金额</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="detail in details ">
                        <td>{{detail.year}}</td>
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
const yearlist = {
    data() {
        return {
            shareurl: store.state.url,
            details: []
        }
    },
    created() {  //这里mounted和created生命周期函数区别
        //发送get请求
        axios.get(this.shareurl + 'yearlist')
            .then(response => this.details = response.data)
            .catch(error => console.log(error));// 请求失败处理

    },
    computed: {
        sum() {
            var result = 0;
            for (let i in this.details) {
                result += parseFloat(this.details[i].je);
            };
            return result.toFixed(2);
        }
    },
    template: yearlist_template
}
