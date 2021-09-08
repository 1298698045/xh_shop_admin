<template>
    <div class="wrapper">
        <el-form ref="formSeach" class="formSeach" :model="formSeach" label-width="80px">
            <el-form-item class="formItem" prop="orderCode" label="订单编号">
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
             <el-form-item class="formItem" prop="phone" label="手机号">
                <el-input class="inp" size="mini" v-model="formSeach.phone" maxlength="11" type="text"
                    clearable
                ></el-input>
            </el-form-item>
            <el-form-item class="formItem" prop="email" label="邮箱">
                <el-input class="inp" size="mini" v-model="formSeach.email" maxlength="11" type="text"
                    clearable
                ></el-input>
            </el-form-item>
            <el-form-item class="formItem" prop="paymentStatus" label="付款状态">
                <el-select clear="inp" size="mini" v-model="formSeach.paymentStatus" placeholder="请选择付款状态">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="等待支付" value="beijing"></el-option>
                    <el-option label="已支付" value="beijing"></el-option>
                    <el-option label="部分退款" value="beijing"></el-option>
                    <el-option label="全额退款" value="beijing"></el-option>
                    <el-option label="无效" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="formItem" prop="isSelfmention" label="是否自提">
                <el-select class="inp_min" size="mini" v-model="formSeach.isSelfmention">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="是" value="beijing"></el-option>
                    <el-option label="否" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="formItem"  prop="shopName" label="商品">
                <el-input class="inp" size="mini" v-model="formSeach.shopName" type="text"
                    clearable
                ></el-input>
            </el-form-item>
            <el-form-item class="formItem" prop="consigneeName" label="收货人">
                <el-input class="inp" size="mini" v-model="formSeach.consigneeName" type="text"
                    clearable
                ></el-input>
            </el-form-item>
            <el-form-item class="formItem" prop="orderStatus" label="订单状态">
                <el-select clear="inp" size="mini" v-model="formSeach.orderStatus" placeholder="请选择付款状态">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="等待支付" value="beijing"></el-option>
                    <el-option label="正在处理" value="beijing"></el-option>
                    <el-option label="已完成" value="beijing"></el-option>
                    <el-option label="已取消" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="formItem" prop="distributionStatus" label="配送状态">
                <el-select clear="inp" size="mini" v-model="formSeach.distributionStatus" placeholder="请选择付款状态">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="不需要配送" value="beijing"></el-option>
                    <el-option label="未发货" value="beijing"></el-option>
                    <el-option label="部分配送" value="beijing"></el-option>
                    <el-option label="已发货" value="beijing"></el-option>
                    <el-option label="已交货" value="已交货"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="formItem" prop="selfmentionAddress" label="自提地址">
                <el-input class="inp" size="mini" v-model="formSeach.selfmentionAddress" type="text"
                    clearable
                ></el-input>
            </el-form-item>
            <el-form-item class="formItem" prop="pickUpCode" label="取货码">
                <el-input class="inp" size="mini" v-model="formSeach.pickUpCode" type="text"
                    clearable
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="mini" @click.native="handleQuery('formSeach')">查询</el-button>
                <el-button size="mini" @click.native="resetForm('formSeach')">重置</el-button>
                <el-button size="mini" @click="exportExcel('#table')">导出</el-button>
            </el-form-item>
        </el-form>
        <div class="center">
            <el-table :data="tableData"
                class="table"
                border
                style="width:100%"
                id="table"
            >
                <el-table-column
                label="序号"
                type="index"
                width="50">
                </el-table-column>
                <el-table-column
                prop="pickUpCode"
                label="取货码">
                </el-table-column>
                <el-table-column
                prop="orderCode"
                label="订单编号">
                </el-table-column>
                <el-table-column
                prop="shopPrice"
                label="商品总额">
                </el-table-column>
                <el-table-column
                prop="shipFee"
                label="运费">
                </el-table-column>
                <el-table-column
                prop="orderPriceAll"
                label="订单总额">
                </el-table-column>
                <el-table-column
                prop="orderStatus"
                label="订单状态">
                    <template slot-scope="scope">
                        <span>{{getStatus(scope.row.orderStatus)}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="paymentStatus"
                label="付款状态">
                    <template slot-scope="scope">
                        <span>{{getStatus(scope.row.paymentStatus)}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="distributionStatus"
                label="配送状态">
                    <template slot-scope="scope">
                        <span>{{getStatus(scope.row.distributionStatus)}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="isSelfmention"
                label="是否自提">
                    <template slot-scope="scope">
                        <span>{{getStatus(scope.row.isSelfmention)}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="wechatName"
                label="微信昵称">
                </el-table-column>
                <el-table-column
                prop="paymentTime"
                width="150"
                label="支付时间">
                </el-table-column>
                <el-table-column
                prop="receivingTime"
                width="150"
                label="收货时间">
                </el-table-column>
                <el-table-column
                prop="createdTime"
                width="150"
                label="创建时间">
                </el-table-column>
                <el-table-column
                prop="remarks"
                width="150"
                label="备注">
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                        <el-button @click.native="handleDetail(scope.row)" type="text" size="small">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="page">     
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                layout="total, prev, pager, next, jumper"
                :total="100">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import { validate } from '@babel/types';
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
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
            tableData:[
                {
                    pickUpCode:"skdfa",
                    orderCode:'123123',
                    shopPrice:"120",
                    shipFee:"12",
                    orderPriceAll:"1233",
                    orderStatus:0,
                    paymentStatus:0,
                    distributionStatus:0,
                    isSelfmention:0,
                    wechatName:"hell",
                    paymentTime:"2021-09-06",
                    receivingTime:"2021-09-06",
                    createdTime:"2021-09-06",
                    remarks:"备注"
                },
                {
                    pickUpCode:"skdfa",
                    orderCode:'123123',
                    shopPrice:"120",
                    shipFee:"12",
                    orderPriceAll:"1233",
                    orderStatus:0,
                    paymentStatus:0,
                    distributionStatus:0,
                    isSelfmention:0,
                    wechatName:"hell",
                    paymentTime:"2021-09-06",
                    receivingTime:"2021-09-06",
                    createdTime:"2021-09-06",
                    remarks:"备注"
                },
                {
                    pickUpCode:"skdfa",
                    orderCode:'123123',
                    shopPrice:"120",
                    shipFee:"12",
                    orderPriceAll:"1233",
                    orderStatus:0,
                    paymentStatus:0,
                    distributionStatus:0,
                    isSelfmention:0,
                    wechatName:"hell",
                    paymentTime:"2021-09-06",
                    receivingTime:"2021-09-06",
                    createdTime:"2021-09-06",
                    remarks:"备注"
                },
                {
                    pickUpCode:"skdfa",
                    orderCode:'123123',
                    shopPrice:"120",
                    shipFee:"12",
                    orderPriceAll:"1233",
                    orderStatus:0,
                    paymentStatus:0,
                    distributionStatus:0,
                    isSelfmention:0,
                    wechatName:"hell",
                    paymentTime:"2021-09-06",
                    receivingTime:"2021-09-06",
                    createdTime:"2021-09-06",
                    remarks:"备注"
                },
                {
                    pickUpCode:"skdfa",
                    orderCode:'123123',
                    shopPrice:"120",
                    shipFee:"12",
                    orderPriceAll:"1233",
                    orderStatus:0,
                    paymentStatus:0,
                    distributionStatus:0,
                    isSelfmention:0,
                    wechatName:"hell",
                    paymentTime:"2021-09-06",
                    receivingTime:"2021-09-06",
                    createdTime:"2021-09-06",
                    remarks:"备注"
                },
                {
                    pickUpCode:"skdfa",
                    orderCode:'123123',
                    shopPrice:"120",
                    shipFee:"12",
                    orderPriceAll:"1233",
                    orderStatus:0,
                    paymentStatus:0,
                    distributionStatus:0,
                    isSelfmention:0,
                    wechatName:"hell",
                    paymentTime:"2021-09-06",
                    receivingTime:"2021-09-06",
                    createdTime:"2021-09-06",
                    remarks:"备注"
                }
            ],
            currentPage: 1
        }
    },
    methods:{
        // 查询
        handleQuery(formName){
            this.$refs[formName].validate((validate)=>{
                console.log(this.formSeach)
                if(validate){

                }else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        getStatus(status){
            return ['等待','已收到','同意','拒绝'][status]
        },
        // 查看详情
        handleDetail(row){
            const params = JSON.stringify(row);
            this.$router.push({
                name:'OrderDetail',
                params:{
                    row:params
                }
            })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        // 导出
        exportExcel (id) {
            var reportTitle = Date.parse(new Date())+'.xlsx'
            /* generate workbook object from table */
            // 判断要导出的节点中是否有fixed的表格，如果有，转换excel时先将该dom移除，然后append回去，
            var fix = document.querySelector('.el-table__fixed-right');
            var wb;
            var xlsxParam = { raw: true };//转换成excel时，使用原始的格式
            if (fix) {
                wb = XLSX.utils.table_to_book(document.querySelector(id).removeChild(fix),xlsxParam);
                document.querySelector(id).appendChild(fix);
            } else {
                wb = XLSX.utils.table_to_book(document.querySelector(id),xlsxParam);
            }
            /* get binary string as output */
            var wbout = XLSX.write(wb, {
                bookType: 'xlsx',
                bookSST: true,
                type: 'array'
            });
            try {
                FileSaver.saveAs(
                new Blob([wbout], {
                    type: 'application/octet-stream'
                }),
                reportTitle
                );
            } catch (e) {
                if (typeof console !== 'undefined') console.log(e, wbout);
            }
            return wbout;
            },
    },
    created(){

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
        width: 80px;
    }
    .el-form-item{
        margin-bottom: 5px;
    }
    .page{
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }
</style>