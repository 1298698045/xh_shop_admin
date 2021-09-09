<template>
    <div class="wrapper" ref="wrapper">
        <div class="cartBox" :style="{'height':publicContHeight+'px'}">
            <el-card class="card" shadow="always">
                <div class="head">
                    <h3 class="title">订单信息</h3>
                </div>
                <div class="content">
                    <div class="row">
                        <p class="label">订单编号：</p>
                        <p class="val">661470620210909113428</p>
                    </div>
                    <div class="row">
                        <p class="label">商品总额：</p>
                        <p class="val">418.0000</p>
                    </div>
                    <div class="row">
                        <p class="label">订单总额：</p>
                        <p class="val">418.0000</p>
                    </div>
                    <div class="row">
                        <p class="label">运费：</p>
                        <p class="val">0.0000</p>
                    </div>
                    <div class="row">
                        <p class="label">订单状态：</p>
                        <p class="val">正在处理</p>
                    </div>
                    <div class="row">
                        <p class="label">付款状态：</p>
                        <p class="val">已支付</p>
                    </div>
                    <div class="row">
                        <p class="label">付款状态：</p>
                        <p class="val">已支付</p>
                    </div>
                    <div class="row">
                        <p class="label">配送状态：</p>
                        <p class="val">不需要配送</p>
                    </div>
                    <div class="row">
                        <p class="label">是否自提：</p>
                        <p class="val">是</p>
                    </div>
                    <div class="row">
                        <p class="label">微信昵称：</p>
                        <p class="val">陈欣🌟</p>
                    </div>
                    <div class="row">
                        <p class="label">支付时间：</p>
                        <p class="val">2021/9/9 11:34:33</p>
                    </div>
                    <div class="row">
                        <p class="label">收货时间：</p>
                        <p class="val">2021/9/9 11:34:33</p>
                    </div>
                </div>

            </el-card>
            <el-card class="card" shadow="always">
                <div class="head">
                    <h3 class="title">商品信息</h3>
                </div>
                <div class="content">
                    <div class="row">
                        <p class="label">商品名称：</p>
                        <p class="val">《北京协和医院百年院庆》通用版纪念邮册</p>
                    </div>
                    <div class="row">
                        <p class="label">购买数量：</p>
                        <p class="val">2 / <span>已领取：1</span></p>
                    </div>
                    <div class="row">
                        <p class="label">含税单价：</p>
                        <p class="val">209.0000</p>
                    </div>
                    <div class="row">
                        <p class="label">不含税单价：</p>
                        <p class="val">209.0000</p>
                    </div>
                    <div class="row">
                        <p class="label">含税总价：</p>
                        <p class="val">418.0000</p>
                    </div>
                    <div class="row">
                        <p class="label">不含税总价：</p>
                        <p class="val">418.0000</p>
                    </div>
                    <div class="row">
                        <p class="label">确认收货数量：</p>
                        <div class="field">
                            <el-input type="text" @input="number=number.replace(/[^\d]/g,'')" v-model.trim="number" size="mini"></el-input>
                            <el-button class="btn" size="mini">确认收货</el-button>
                        </div>
                    </div>
                </div>

            </el-card>
            <el-card class="card" shadow="always">
                <div class="head">
                    <h3 class="title">地址信息</h3>
                </div>
                <div class="content">
                    <div class="row">
                        <p class="label">收货人：</p>
                        <p class="val">王文远</p>
                    </div>
                    <div class="row">
                        <p class="label">收货地址：</p>
                        <p class="val">山东省 青岛市 市北区市北区登州路24号12号楼一单元702室</p>
                    </div>
                    <div class="row">
                        <p class="label">收货人电话：</p>
                        <p class="val">18366230512</p>
                    </div>
                    <div class="row">
                        <p class="label">自提地址：</p>
                        <p class="val">外科楼等候厅超市：位于北京协和医院东院外科楼一层手术病人家属等候厅</p>
                    </div>
                    <div class="row">
                        <p class="label">含税总价：</p>
                        <p class="val">418.0000</p>
                    </div>
                    <div class="row">
                        <p class="label">不含税总价：</p>
                        <p class="val">418.0000</p>
                    </div>
                </div>

            </el-card>
            <el-card class="card" shadow="always">
                <div class="head">
                    <h3 class="title">发票信息</h3>
                </div>
                <div class="content">
                    <div class="row">
                        <p class="label">发票抬头：</p>
                        <p class="val">902183091283012309812093</p>
                    </div>
                    <div class="row">
                        <p class="label">发票税号：</p>
                        <p class="val">12312312392309840234-09-078</p>
                    </div>
                </div>
            </el-card>
            <el-card class="card" shadow="always">
                <div class="head">
                    <h3 class="title">自提</h3>
                </div>
                <div class="content">
                    <div class="row">
                        <p class="label">收货码：</p>
                        <div class="field">
                            <el-input type="text" v-model.trim="code" placeholder="请输入收货码" size="mini"></el-input>
                            <el-button class="btn" size="mini">确认收货</el-button>
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
import {resizeMixin} from '@/mixins/resize.js';
export default {
    data(){
        return {
            number:'',
            code:''
        }
    },
    mixins:[resizeMixin],
    created(){
        // this.$route.query
    },
    mounted(){
        
    },
    methods:{
        getQuery(){
            
        }
    }
}
</script>
<style lang="scss">
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
</style>