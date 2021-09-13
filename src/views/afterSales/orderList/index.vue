<template>
  <div class="wrapper">
    <el-form ref="formSeach" class="formSeach" :model="formSeach" label-width="80px">
      <el-form-item class="formItem" prop="orderCode" label="订单编号">
        <el-input v-model="formSeach.orderCode" class="inp" size="mini" clearable />
      </el-form-item>
      <el-form-item class="formItem" prop="startTime" label="开始日期">
        <el-date-picker
          v-model="formSeach.startTime"
          size="mini"
          class="inp"
          type="date"
          placeholder="选择开始日期"
        />
      </el-form-item>
      <el-form-item class="formItem" prop="endTime" label="结束日期">
        <el-date-picker
          v-model="formSeach.endTime"
          size="mini"
          class="inp"
          type="date"
          placeholder="选择结束日期"
        />
      </el-form-item>
      <el-form-item class="formItem" prop="phone" label="手机号">
        <el-input
          v-model="formSeach.phone"
          class="inp"
          size="mini"
          maxlength="11"
          type="text"
          clearable
        />
      </el-form-item>
      <el-form-item class="formItem" prop="email" label="邮箱">
        <el-input
          v-model="formSeach.email"
          class="inp"
          size="mini"
          maxlength="11"
          type="text"
          clearable
        />
      </el-form-item>
      <el-form-item class="formItem" prop="paymentStatus" label="付款状态">
        <el-select v-model="formSeach.paymentStatus" clear="inp" size="mini" placeholder="请选择付款状态">
          <el-option label="全部" value="shanghai" />
          <el-option label="等待支付" value="beijing" />
          <el-option label="已支付" value="beijing" />
          <el-option label="部分退款" value="beijing" />
          <el-option label="全额退款" value="beijing" />
          <el-option label="无效" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item class="formItem" prop="isSelfmention" label="是否自提">
        <el-select v-model="formSeach.isSelfmention" class="inp_min" size="mini">
          <el-option label="全部" value="shanghai" />
          <el-option label="是" value="beijing" />
          <el-option label="否" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item class="formItem" prop="shopName" label="商品">
        <el-input
          v-model="formSeach.shopName"
          class="inp"
          size="mini"
          type="text"
          clearable
        />
      </el-form-item>
      <el-form-item class="formItem" prop="consigneeName" label="收货人">
        <el-input
          v-model="formSeach.consigneeName"
          class="inp"
          size="mini"
          type="text"
          clearable
        />
      </el-form-item>
      <el-form-item class="formItem" prop="orderStatus" label="订单状态">
        <el-select v-model="formSeach.orderStatus" clear="inp" size="mini" placeholder="请选择付款状态">
          <el-option label="全部" value="shanghai" />
          <el-option label="等待支付" value="beijing" />
          <el-option label="正在处理" value="beijing" />
          <el-option label="已完成" value="beijing" />
          <el-option label="已取消" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item class="formItem" prop="distributionStatus" label="配送状态">
        <el-select v-model="formSeach.distributionStatus" clear="inp" size="mini" placeholder="请选择付款状态">
          <el-option label="全部" value="shanghai" />
          <el-option label="不需要配送" value="beijing" />
          <el-option label="未发货" value="beijing" />
          <el-option label="部分配送" value="beijing" />
          <el-option label="已发货" value="beijing" />
          <el-option label="已交货" value="已交货" />
        </el-select>
      </el-form-item>
      <el-form-item class="formItem" prop="selfmentionAddress" label="自提地址">
        <el-input
          v-model="formSeach.selfmentionAddress"
          class="inp"
          size="mini"
          type="text"
          clearable
        />
      </el-form-item>
      <el-form-item class="formItem" prop="pickUpCode" label="取货码">
        <el-input
          v-model="formSeach.pickUpCode"
          class="inp"
          size="mini"
          type="text"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click.native="handleQuery('formSeach')">
          查询
        </el-button>
        <el-button size="mini" @click.native="resetForm('formSeach')">
          重置
        </el-button>
        <el-button size="mini" @click="exportTable('#table')">
          导出
        </el-button>
      </el-form-item>
    </el-form>
    <div class="center" :style="{'height':publicContHeight+'px'}">
      <el-table
        id="table"
        :data="tableData"
        class="table"
        border
        style="width:100%"
      >
        <el-table-column
          label="序号"
          type="index"
          width="50"
        />
        <el-table-column
          prop="pickUpCode"
          label="取货码"
        />
        <el-table-column
          prop="orderCode"
          label="订单编号"
        />
        <el-table-column
          prop="shopPrice"
          label="商品总额"
        />
        <el-table-column
          prop="shipFee"
          label="运费"
        />
        <el-table-column
          prop="orderPriceAll"
          label="订单总额"
        />
        <el-table-column
          prop="orderStatus"
          label="订单状态"
        >
          <template slot-scope="scope">
            <span>{{ getStatus(scope.row.orderStatus) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="paymentStatus"
          label="付款状态"
        >
          <template slot-scope="scope">
            <span>{{ getStatus(scope.row.paymentStatus) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="distributionStatus"
          label="配送状态"
        >
          <template slot-scope="scope">
            <span>{{ getStatus(scope.row.distributionStatus) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="isSelfmention"
          label="是否自提"
        >
          <template slot-scope="scope">
            <span>{{ getStatus(scope.row.isSelfmention) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="wechatName"
          label="微信昵称"
        />
        <el-table-column
          prop="paymentTime"
          width="150"
          label="支付时间"
        />
        <el-table-column
          prop="receivingTime"
          width="150"
          label="收货时间"
        />
        <el-table-column
          prop="createdTime"
          width="150"
          label="创建时间"
        />
        <el-table-column
          prop="remarks"
          width="150"
          label="备注"
        />
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click.native="handleDetail(scope.row)">
              详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination
          :current-page="currentPage"
          layout="total, prev, pager, next, jumper"
          :total="100"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { getList } from '@/api/order'
import { exportExcel } from '@/utils/export2Excel'
import { resizeMixin } from '@/mixins/resize.js'
export default {
  mixins: [resizeMixin],
  data() {
    return {
      formSeach: {
        orderCode: '', // 订单编号
        startTime: '', // 开始日期
        endTime: '', // 结束日期
        phone: '', // 手机号
        email: '', // 邮箱
        paymentStatus: '', // 付款状态
        isSelfmention: '', // 是否自提
        shopName: '', // 商品名称
        consigneeName: '', // 收货人姓名
        orderStatus: '', // 订单状态
        distributionStatus: '', // 配送状态
        selfmentionAddress: '', // 自提地址
        pickUpCode: '' // 取货码
      },
      tableData: [
        {
          pickUpCode: 'skdfa',
          orderCode: '123123',
          shopPrice: '120',
          shipFee: '12',
          orderPriceAll: '1233',
          orderStatus: 0,
          paymentStatus: 0,
          distributionStatus: 0,
          isSelfmention: 0,
          wechatName: 'hell',
          paymentTime: '2021-09-06',
          receivingTime: '2021-09-06',
          createdTime: '2021-09-06',
          remarks: '备注'
        },
        {
          pickUpCode: 'skdfa',
          orderCode: '123123',
          shopPrice: '120',
          shipFee: '12',
          orderPriceAll: '1233',
          orderStatus: 0,
          paymentStatus: 0,
          distributionStatus: 0,
          isSelfmention: 0,
          wechatName: 'hell',
          paymentTime: '2021-09-06',
          receivingTime: '2021-09-06',
          createdTime: '2021-09-06',
          remarks: '备注'
        },
        {
          pickUpCode: 'skdfa',
          orderCode: '123123',
          shopPrice: '120',
          shipFee: '12',
          orderPriceAll: '1233',
          orderStatus: 0,
          paymentStatus: 0,
          distributionStatus: 0,
          isSelfmention: 0,
          wechatName: 'hell',
          paymentTime: '2021-09-06',
          receivingTime: '2021-09-06',
          createdTime: '2021-09-06',
          remarks: '备注'
        },
        {
          pickUpCode: 'skdfa',
          orderCode: '123123',
          shopPrice: '120',
          shipFee: '12',
          orderPriceAll: '1233',
          orderStatus: 0,
          paymentStatus: 0,
          distributionStatus: 0,
          isSelfmention: 0,
          wechatName: 'hell',
          paymentTime: '2021-09-06',
          receivingTime: '2021-09-06',
          createdTime: '2021-09-06',
          remarks: '备注'
        },
        {
          pickUpCode: 'skdfa',
          orderCode: '123123',
          shopPrice: '120',
          shipFee: '12',
          orderPriceAll: '1233',
          orderStatus: 0,
          paymentStatus: 0,
          distributionStatus: 0,
          isSelfmention: 0,
          wechatName: 'hell',
          paymentTime: '2021-09-06',
          receivingTime: '2021-09-06',
          createdTime: '2021-09-06',
          remarks: '备注'
        },
        {
          pickUpCode: 'skdfa',
          orderCode: '123123',
          shopPrice: '120',
          shipFee: '12',
          orderPriceAll: '1233',
          orderStatus: 0,
          paymentStatus: 0,
          distributionStatus: 0,
          isSelfmention: 0,
          wechatName: 'hell',
          paymentTime: '2021-09-06',
          receivingTime: '2021-09-06',
          createdTime: '2021-09-06',
          remarks: '备注'
        }
      ],
      currentPage: 1
    }
  },
  created() {
    this.getQueryList()
  },
  mounted() {
    this.getHeight(230)
  },
  methods: {
    getQueryList() {
      getList().then(res => {
        console.log(res)
      })
    },
    // 查询
    handleQuery(formName) {
      this.$refs[formName].validate((validate) => {
        console.log(this.formSeach)
        if (validate) {
          console.log(validate)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    getStatus(status) {
      return ['等待', '已收到', '同意', '拒绝'][status]
    },
    // 查看详情
    handleDetail(row) {
      const params = JSON.stringify(row)
      this.$router.push({
        name: 'OrderDetail',
        params: {
          row: params
        }
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    // 导出
    exportTable(id) {
      exportExcel(id)
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
