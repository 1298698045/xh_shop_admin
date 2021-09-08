<template>
    <div class="wrapper">
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
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return {
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
        }
    }
}
</script>