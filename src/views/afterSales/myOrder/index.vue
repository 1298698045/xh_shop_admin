<template>
    <div class="wrapper">
        <div class="header">
            <el-card class="box-card">
                <div class="searchForm">
                    <el-form ref="formSeach" class="formSeach" :model="formSeach" label-width="80px">
                        <el-form-item class="formItem" prop="startTime" label="开始日期">
                            <el-date-picker
                                size="mini"
                                class="inp time"
                                v-model="formSeach.startTime"
                                type="date"
                                placeholder="选择开始日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item class="formItem" prop="endTime" label="结束日期">
                            <el-date-picker
                                size="mini"
                                class="inp time"
                                v-model="formSeach.endTime"
                                type="date"
                                placeholder="选择结束日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item class="formItem" prop="shopName" label="商品">
                            <el-input class="inp" size="mini" clearable v-model="formSeach.shopName"></el-input>
                        </el-form-item>
                        <el-form-item class="formItem" prop="orderStatus" label="订单状态">
                            <el-select clear="inp" size="mini" v-model="formSeach.orderStatus" placeholder="请选择付款状态">
                                <el-option label="全部" value="shanghai"></el-option>
                                <el-option label="等待" value="beijing"></el-option>
                                <el-option label="处理中" value="beijing"></el-option>
                                <el-option label="完成" value="beijing"></el-option>
                                <el-option label="已取消" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formItem" prop="paymentStatus" label="付款状态">
                            <el-select clear="inp" size="mini" v-model="formSeach.paymentStatus" placeholder="请选择付款状态">
                                <el-option label="全部" value="shanghai"></el-option>
                                <el-option label="等待" value="beijing"></el-option>
                                <el-option label="授权" value="beijing"></el-option>
                                <el-option label="已付款" value="beijing"></el-option>
                                <el-option label="部分退款" value="beijing"></el-option>
                                <el-option label="退款" value="beijing"></el-option>
                                <el-option label="无效" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formItem" prop="distribution" label="付款状态">
                            <el-select clear="inp" size="mini" v-model="formSeach.distributionStatus" placeholder="请选择付款状态">
                                <el-option label="全部" value="shanghai"></el-option>
                                <el-option label="不需要配送" value="beijing"></el-option>
                                <el-option label="未发货" value="beijing"></el-option>
                                <el-option label="部分配送" value="beijing"></el-option>
                                <el-option label="已发货" value="beijing"></el-option>
                                <el-option label="已交货" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="formItem" prop="name" label="姓名">
                            <el-input class="inp" size="mini" clearable v-model="formSeach.name"></el-input>
                        </el-form-item>
                        <el-form-item class="formItem" prop="phone" label="手机号">
                            <el-input class="inp" size="mini" clearable v-model="formSeach.phone"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" size="mini" @click.native="handleQuery('formSeach')">查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
        <div class="center">
            <el-table
                :data="tableData"
                border
                fit
                size="small"
                :height="height"
                ref="multipleTable"
                :summary-method="getSummaries"
                show-summary
                id="table"
                @selection-change="handleSelectionChange"
                style="width: 100%">
                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                prop="orderId"
                label="订单ID">
                </el-table-column>
                <el-table-column
                prop="orderStatus"
                label="订单状态"
                >
                    <template slot-scope="scope">
                        <span>{{getStatus(scope.row.orderStatus)}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="paymentStatus"
                label="付款状态"
                >
                    <template slot-scope="scope">
                        <span>{{getStatus(scope.row.paymentStatus)}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="distributionStatus"
                label="配送状态"
                >
                    <template slot-scope="scope">
                        <span>{{getStatus(scope.row.distributionStatus)}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                width="160"
                prop="customer"
                label="客户"
                >
                </el-table-column>
                <el-table-column
                prop="createTime"
                label="创建于"
                >
                    <template slot-scope="scope">
                        <span>{{scope.row.createTime}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="orderPrice"
                    label="订单总额"
                    >
                </el-table-column>
                <el-table-column
                label="操作"
                fixed="right"
                width="100">
                <template slot-scope="scope">
                    <el-button  @click="handleDetail(scope.row)" type="text" size="small">查看</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import {resizeMixin} from '@/mixins/resize.js';
export default {
    mixins: [resizeMixin],
    data(){
        return {
            formSeach:{
                startTime:"",
                endTime:"",
                shopName:"",
                orderStatus:""
            },
            tableData: [
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                },
                {
                    orderId:680409520210910134815,
                    orderStatus: 0,
                    paymentStatus: 1,
                    distributionStatus:1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    createTime: "2021-09-08 12:00:00",
                    orderPrice:"100"
                }
            ],
            height:""
        }
    },
    mounted(){
        window.addEventListener('resize',this.getHeight)
        // this.getHeight(260)
    },
    created(){
    },
    methods:{
        getStatus(status){
            return ['等待','已收到','同意','拒绝'][status]
        },
        getHeight(){
            let height = document.documentElement.clientHeight - 260;
            this.height = height;
        },
        handleDetail(row){
            this.$router.push({
                name:'PreviewOrder',
                params:{
                    orderId:row.orderId
                }
            })
        },
        handleSelectionChange(e){

        },
        getSummaries(param) {
            //此处打印param可以看到有两项，一项是columns，一项是data，最后一列可以通过columns.length获取到。
            const { columns, data } = param
            const len = columns.length
            const sums = []
            columns.forEach((column, index) => {
                //如果是第一列，则最后一行展示为“总计”两个字
                if (index === 0) {
                    sums[index] = '总计'
                    //如果是最后一列，索引为列数-1，则显示计算总和
                } else if (index === len - 2) {
                    const values = data.map(item => Number(item[column.property]))
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr)
                            if (!isNaN(value)) {
                                return prev + curr
                            } else {
                                return prev
                            }
                        }, 0)
                    } else {
                        sums[index] = 'N/A'
                    }
                    //如果是除了第一列和最后一列的其他列，则显示为空
                } else {
                    sums[index] = ''
                }
            })
            return sums
        }

    }
}
</script>
<style lang="scss" scoped>
    .el-form-item{
        margin: 0;
    }
    .wrapper {
        .header{
            padding: 20px;
            box-sizing: border-box;
            .formSeach{
                display: flex;
                flex-wrap: wrap;
                .formItem{
                    .inp{
                        min-width: 180px!important;
                    }
                    .inp.time{
                        width: 180px;
                        min-width: 180px;
                    }
                }
            }
        }
        .center{
            margin:0 20px 20px 20px;
            box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
            box-sizing: border-box;
            padding: 10px;
        }
    }
</style>