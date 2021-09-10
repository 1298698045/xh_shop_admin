<template>
    <div class="wrapper">
        <div class="cartBox">
            <el-card class="card" shadow="always">
                <div class="head">
                    <h3 class="title">信息</h3>
                </div>
                <div class="content">
                    <div class="row">
                        <p class="label">订单ID：</p>
                        <p class="val">661470620210909113428</p>
                    </div>
                    <div class="row">
                        <p class="label">创建于：</p>
                        <p class="val">418.0000</p>
                    </div>
                    <div class="row">
                        <p class="label">订单总额：</p>
                        <p class="val">2021/9/10 21:48:15</p>
                    </div>
                    <div class="row">
                        <p class="label">客户：</p>
                        <p class="val">匿名用户</p>
                    </div>
                    <div class="row">
                        <p class="label">订单状态：</p>
                        <p class="val">正在处理</p>
                    </div>
                    <div class="row">
                        <p class="label">订单小计：</p>
                        <p class="val">¥0.00 运费(不含税)</p>
                    </div>
                    <div class="row">
                        <p class="label">运费：</p>
                        <p class="val">¥0.00 运费(不含税)</p>
                    </div>
                    <div class="row">
                        <p class="label">订单税收：</p>
                        <p class="val">¥0.00</p>
                    </div>
                    <div class="row">
                        <p class="label">订单总额：</p>
                        <p class="val">¥89.00</p>
                    </div>
                    <div class="row">
                        <p class="label">利润：</p>
                        <p class="val">¥89.00</p>
                    </div>
                    <div class="row">
                        <p class="label">付款方式：</p>
                        <p class="val"></p>
                    </div>
                    <div class="row">
                        <p class="label">付款状态：</p>
                        <p class="val">已付款</p>
                    </div>
                    <div class="row">
                        <p class="label">商店：</p>
                        <p class="val">协和商城</p>
                    </div>
                    <div class="row">
                        <p class="label">订单GUID：</p>
                        <p class="val">e2a59639-a5cc-46db-8d6b-59d6bd996885</p>
                    </div>
                </div>
            </el-card>
            <el-card class="card" shadow="always">
                <div class="head">
                    <h3 class="title">商品</h3>
                </div>
                <el-table
                    class="table"
                    border
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="prductImgs"
                        label="图片"
                        width="180">
                        <template slot-scope="scope">
                            <div class="imgs" v-for="(item,index) in scope.row.prductImgs" :key="index">
                                <img :src="item" alt="" />
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="prductName"
                        label="商品名称"
                        width="180">
                        <template slot-scope="scope">
                            <p class="name">{{scope.row.prductName.name}}</p>
                            <p class="supplier">供应商：{{scope.row.prductName.supplier}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="currentPrice"
                        label="现价">
                    </el-table-column>
                    <el-table-column
                        prop="number"
                        label="数量">
                        <template slot-scope="scope">
                            <div class="val">
                                <span>{{scope.row.number}}</span>
                            </div>
                            <div class="val" v-if="scope.row.isSet">
                                <el-input type="number" size="mini" v-model="scope.row.number"></el-input>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="discount"
                        label="折扣">
                    </el-table-column>
                    <el-table-column
                        prop="subtotal"
                        label="小计">
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                        <template slot-scope="scope">
                            <el-button v-if="!scope.row.isSet" @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
                            <el-button v-if="scope.row.isSet" @click="handleSave(scope.row)" type="text" size="small">保存</el-button>
                            <el-button type="text" size="small" @click="handleDelete(scope.row,$index)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                  <el-button type="primary">添加商品</el-button>
            </el-card>
        </div>
    </div>
</template>
<script>
import {resizeMixin} from '@/mixins/resize.js';
export default {
    mixins:[resizeMixin],
    data(){
        return {
            number:'',
            code:'',
            tableData: [
                {
                    prductImgs:[
                        'http://localhost:9528/static/img/404.a57b6f31.png'
                    ],
                    prductName:{
                        name:"金色徽章套装（铜合金平头扣）",
                        supplier:"协和医院"
                    },
                    currentPrice:"112",
                    number:"3",
                    discount:"0",
                    subtotal:"112",
                    isSet:false
                }
            ]
        }
    },
    mounted(){
        let orderId = this.$route.params.orderId;
    },
    methods:{
        handleEdit(row){
            row.isSet = true;
        },
        handleSave(row){
            row.isSet = false;
        },
        handleDelete(row,index){
            this.$confirm('确定删除该商品, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.tableData.splice(index,1)
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        }
    }
}
</script>
<style lang="scss" scoped>
*{
        margin: 0;
        padding: 0;
    }
    .cartBox{
        padding: 20px;
        overflow-y: auto;
        box-sizing: border-box;
    }
    .card{
        margin-top: 20px;
    }
    .card:first-child{
        margin-top: 0;
    }
    .card .content{
        padding-top: 20px;
        padding-left: 50px;
    }
    .row{
        display: flex;
        align-items: center;
        line-height: 2;
    }
    .row .label{
        min-width: 100px;
        text-align: right;
    }
    .row .val span{
        color: #3399ff;
    }
    .row .field{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    .row .field .btn{
        margin-left: 20px;
    }
    .table{
        margin-top: 20px;
    }
    .imgs{
        width: 60px;
        height: 60px;
    }
    .imgs img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>