<template>
    <div class="wrapper">
        <el-card>
            <el-form ref="formSeach" class="formSeach" :model="formSeach" label-width="80px">
                <el-form-item class="formItem" prop="orderCode" label="商品ID">
                    <el-input class="inp" size="mini" clearable v-model="formSeach.orderCode"></el-input>
                </el-form-item>
                <el-form-item class="formItem" prop="startTime" label="开始日期">
                    <el-date-picker
                        size="mini"
                        class="inp"
                        v-model="formSeach.startTime"
                        type="date"
                        placeholder="选择开始日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item class="formItem" prop="endTime" label="结束日期">
                    <el-date-picker
                        size="mini"
                        class="inp"
                        v-model="formSeach.endTime"
                        type="date"
                        placeholder="选择结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item class="formItem" prop="paymentStatus" label="退货状态">
                    <el-select clear="inp" size="mini" v-model="formSeach.paymentStatus" placeholder="请选择付款状态">
                        <el-option label="全部" value="shanghai"></el-option>
                        <el-option label="等待" value="beijing"></el-option>
                        <el-option label="已收到" value="beijing"></el-option>
                        <el-option label="退货授权" value="beijing"></el-option>
                        <el-option label="货物已更换" value="beijing"></el-option>
                        <el-option label="货物已退款" value="beijing"></el-option>
                        <el-option label="拒绝请求" value="beijing"></el-option>
                        <el-option label="已取消" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="mini" @click.native="handleQuery('formSeach')">查询</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <div class="center" :style="{'height':publicContHeight+'px'}">
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                prop="shopId"
                label="商品ID"
                width="80">
                </el-table-column>
                <el-table-column
                prop="shopName"
                label="商品"
                >
                </el-table-column>
                <el-table-column
                prop="shopNum"
                label="数量"
                >
                </el-table-column>
                <el-table-column
                prop="customer"
                label="客户"
                >
                </el-table-column>
                <el-table-column
                width="160"
                prop="orderId"
                label="订单ID"
                >
                </el-table-column>
                <el-table-column
                prop="refundStatus"
                label="退货请求状态"
                >
                    <template slot-scope="scope">
                        <span>{{getStatus(scope.row.refundStatus)}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="date"
                label="日期"
                >
                </el-table-column>
                <el-table-column
                label="操作"
                fixed="right"
                width="100">
                <template slot-scope="scope">
                    <el-button  @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
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
                orderCode:"", // 订单编号
                startTime:"", // 开始日期
                endTime:"", // 结束日期
                phone:"", // 手机号
                email:"", // 邮箱
                paymentStatus:"", // 付款状态
                isSelfmention:"", // 是否自提
                shopName:"", // 商品名称
                consigneeName:"", // 收货人姓名
                orderStatus:"", // 订单状态
                distributionStatus:"", // 配送状态
                selfmentionAddress:"", // 自提地址
                pickUpCode:"" // 取货码
            },
            tableData: [
                {
                    shopId:1,
                    shopName: '彩色双徽套装001',
                    shopNum: 1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    orderId:1, 
                    refundStatus: 0,
                    date: "2021-09-08 12:00:00"
                },
                {
                    shopId:1,
                    shopName: '彩色双徽套装002',
                    shopNum: 1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    orderId:1, 
                    refundStatus: 0,
                    date: "2021-09-08 12:00:00"
                },
                {
                    shopId:1,
                    shopName: '彩色双徽套装003',
                    shopNum: 1,
                    customer: 0, // 0:匿名客户 1: 推荐客户
                    orderId:1, 
                    refundStatus: 0,
                    date: "2021-09-08 12:00:00"
                }
            ]
        }
    },
    methods:{
        getStatus(status){
            return ['等待','已收到','同意','拒绝'][status]
        },
        handleEdit(){
            this.$router.push({
                name:'EditRefundList'
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .formSeach{
        display: flex;
        flex-wrap: wrap;
        margin:10px 0;
    }
    .inp{
        width: 160px;
    }
    .inp_min{
        width: 90px;
    }
    .el-form-item{
        margin-bottom: 5px;
    }
    .page{
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }
    .center{
        overflow-y: auto;
    }
</style>