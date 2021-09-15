<template>
  <div class="wrapper">
    <el-form ref="formSeach" class="formSeach" :model="formSeach" label-width="80px">
      <el-form-item class="formItem" prop="shopId" label="商品ID">
        <el-input v-model="formSeach.shopId" class="inp" size="mini" clearable />
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
      <el-form-item class="formItem" prop="refundStatus" label="退货状态">
        <el-select v-model="formSeach.refundStatus" clear="inp" size="mini" placeholder="请选择付款状态">
          <el-option label="全部" value="shanghai" />
          <el-option label="等待" value="beijing" />
          <el-option label="已收到" value="beijing" />
          <el-option label="退货授权" value="beijing" />
          <el-option label="货物已更换" value="beijing" />
          <el-option label="货物已退款" value="beijing" />
          <el-option label="拒绝请求" value="beijing" />
          <el-option label="已取消" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click.native="handleQuery('formSeach')">
          查询
        </el-button>
      </el-form-item>
    </el-form>
    <div class="center" :style="{'height':publicContHeight+'px'}">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="shopId"
          label="商品ID"
          width="80"
        />
        <el-table-column
          prop="shopName"
          label="商品"
        />
        <el-table-column
          prop="shopNum"
          label="数量"
        />
        <el-table-column
          prop="customer"
          label="客户"
        />
        <el-table-column
          width="160"
          prop="orderId"
          label="订单ID"
        />
        <el-table-column
          prop="refundStatus"
          label="退货请求状态"
        >
          <template slot-scope="scope">
            <span>{{ getStatus(scope.row.refundStatus) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
        />
        <el-table-column
          label="操作"
          fixed="right"
          width="100"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleEdit(scope.row)">
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="编辑退货"
      :visible.sync="editDialog"
      width="30%"
      class="modal"
      :before-close="handleClose"
    >
      <div class="modalContent">
        <el-form ref="editForm" class="editForm" :rules="editFormRules" :model="editForm" label-width="100px">
          <div class="infoRow">
            <span class="label">商品ID</span>
            <span class="val">4730720210910085709</span>
          </div>
          <div class="infoRow">
            <span class="label">订单ID</span>
            <span class="val">868411720210910085645</span>
          </div>
          <div class="infoRow">
            <span class="label">客户</span>
            <span class="val">匿名用户</span>
          </div>
          <div class="infoRow">
            <span class="label">商品</span>
            <span class="val">百年LOGO单枚装（锌合金平头扣）</span>
          </div>
          <el-form-item class="infoRow" prop="number" label="数量">
            <el-input v-model="editForm.number" type="number" size="mini" clearable placeholder="请输入内容" />
          </el-form-item>
          <el-form-item class="infoRow" prop="refundStatus" label="退货请求状态">
            <el-select v-model="editForm.refundStatus" clear="inp" size="mini" placeholder="请选择付款状态">
              <el-option label="全部" value="shanghai" />
              <el-option label="等待" value="beijing" />
              <el-option label="已收到" value="beijing" />
              <el-option label="退货授权" value="beijing" />
              <el-option label="货物已更换" value="beijing" />
              <el-option label="货物已退款" value="beijing" />
              <el-option label="拒绝请求" value="beijing" />
              <el-option label="已取消" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item class="infoRow" prop="reason" label="退货原因">
            <el-input v-model="editForm.reason" type="text" size="mini" clearable placeholder="请输入内容" />
          </el-form-item>
          <el-form-item class="infoRow" prop="operation" label="退货操作">
            <el-input v-model="editForm.operation" type="text" size="mini" clearable placeholder="请输入内容" />
          </el-form-item>
          <el-form-item class="infoRow explain" prop="explain" label="退货说明">
            <el-input v-model="editForm.explain" type="textarea" size="mini" clearable placeholder="请输入内容" />
          </el-form-item>
          <el-form-item class="infoRow" prop="workingExplain" label="工作人员说明">
            <el-input v-model="editForm.workingExplain" type="textarea" size="mini" clearable placeholder="请输入内容" />
          </el-form-item>
          <div class="infoRow">
            <span class="label">日期</span>
            <span class="val">2021/9/10 16:57:09</span>
          </div>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="handleClose('editForm')">取 消</el-button>
        <el-button type="primary" @click="getEditSubmit('editForm')">确 定</el-button>
      </span>
    </el-dialog>
    <MyPopup
      :dialog-title="dialogTitle"
      :visible.sync="dialogVisible"
      :popup-width="'550px'"
      @updateVisible="updateVisible"
      @resetPopupData="resetPopupData"
      @submitPopupData="submitPopupData('editForm')"
      @handleClose="handleClose"
    >
      <div class="modalContent">
        <el-form ref="editForm" class="editForm" :rules="editFormRules" :model="editForm" label-width="100px">
          <div class="infoRow">
            <span class="label">商品ID</span>
            <span class="val">4730720210910085709</span>
          </div>
          <div class="infoRow">
            <span class="label">订单ID</span>
            <span class="val">868411720210910085645</span>
          </div>
          <div class="infoRow">
            <span class="label">客户</span>
            <span class="val">匿名用户</span>
          </div>
          <div class="infoRow">
            <span class="label">商品</span>
            <span class="val">百年LOGO单枚装（锌合金平头扣）</span>
          </div>
          <el-form-item class="infoRow" prop="number" label="数量">
            <el-input v-model="editForm.number" type="number" size="mini" clearable placeholder="请输入内容" />
          </el-form-item>
          <el-form-item class="infoRow" prop="refundStatus" label="退货请求状态">
            <el-select v-model="editForm.refundStatus" clear="inp" size="mini" placeholder="请选择付款状态">
              <el-option label="全部" value="shanghai" />
              <el-option label="等待" value="beijing" />
              <el-option label="已收到" value="beijing" />
              <el-option label="退货授权" value="beijing" />
              <el-option label="货物已更换" value="beijing" />
              <el-option label="货物已退款" value="beijing" />
              <el-option label="拒绝请求" value="beijing" />
              <el-option label="已取消" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item class="infoRow" prop="reason" label="退货原因">
            <el-input v-model="editForm.reason" type="text" size="mini" clearable placeholder="请输入内容" />
          </el-form-item>
          <el-form-item class="infoRow" prop="operation" label="退货操作">
            <el-input v-model="editForm.operation" type="text" size="mini" clearable placeholder="请输入内容" />
          </el-form-item>
          <el-form-item class="infoRow explain" prop="explain" label="退货说明">
            <el-input v-model="editForm.explain" type="textarea" size="mini" clearable placeholder="请输入内容" />
          </el-form-item>
          <el-form-item class="infoRow" prop="workingExplain" label="工作人员说明">
            <el-input v-model="editForm.workingExplain" type="textarea" size="mini" clearable placeholder="请输入内容" />
          </el-form-item>
          <div class="infoRow">
            <span class="label">日期</span>
            <span class="val">2021/9/10 16:57:09</span>
          </div>
        </el-form>
      </div>
    </MyPopup>
  </div>
</template>
<script>
import { resizeMixin } from '@/mixins/resize.js'
import MyPopup from '@/components/customUi/myPopup.vue'
export default {
  components: {
    MyPopup
  },
  mixins: [resizeMixin],
  data() {
    return {
      formSeach: {
        shopId: '', // 商品ID
        startTime: '', // 开始日期
        endTime: '', // 结束日期
        refundStatus: 0 // 退货状态
      },
      tableData: [
        {
          shopId: 1,
          shopName: '彩色双徽套装001',
          shopNum: 1,
          customer: 0, // 0:匿名客户 1: 推荐客户
          orderId: 1,
          refundStatus: 0,
          date: '2021-09-08 12:00:00'
        },
        {
          shopId: 1,
          shopName: '彩色双徽套装002',
          shopNum: 1,
          customer: 0, // 0:匿名客户 1: 推荐客户
          orderId: 1,
          refundStatus: 0,
          date: '2021-09-08 12:00:00'
        },
        {
          shopId: 1,
          shopName: '彩色双徽套装003',
          shopNum: 1,
          customer: 0, // 0:匿名客户 1: 推荐客户
          orderId: 1,
          refundStatus: 0,
          date: '2021-09-08 12:00:00'
        }
      ],
      editDialog: false,
      options: [
        {
          label: '等待',
          value: '等待'
        },
        {
          label: '已收到',
          value: '已收到'
        },
        {
          label: '退货授权',
          value: '退货授权'
        },
        {
          label: '货物已更换',
          value: '货物已更换'
        },
        {
          label: '货物已退款',
          value: '货物已退款'
        },
        {
          label: '拒绝请求',
          value: '拒绝请求'
        },
        {
          label: '已取消',
          value: '已取消'
        }
      ],
      editForm: {
        number: '',
        refundStatus: '',
        reason: '',
        operation: '',
        explain: '',
        workingExplain: ''
      },
      editFormRules: {
        reason: [
          { required: true, message: '请输入退货原因', trigger: 'blur' }
        ],
        operation: [
          { required: true, message: '请输入退货操作', trigger: 'blur' }
        ]
      },
      dialogVisible: false,
      dialogTitle: '编辑退货'
    }
  },
  methods: {
    getStatus(status) {
      return ['等待', '已收到', '同意', '拒绝'][status]
    },
    handleEdit() {
      // this.editDialog = true
      this.dialogVisible = true
      // this.$router.push({
      //     name:'EditRefundList'
      // })
    },
    handleClose(formName = 'editForm') {
      // this.$refs.editForm.resetFields()
      // this.editDialog = false
      this.dialogVisible = false
    },
    getEditSubmit(formName) {
      this.$refs[formName].validate((validate) => {
        console.log(validate)
        if (validate) {
          this.editDialog = false
        }
      })
    },
    updateVisible(val) {
      console.log(val)
    },
    submitPopupData(formName) {
      this.$refs[formName].validate((validate) => {
        console.log(validate)
        if (validate) {
          this.dialogVisible = false
          this.$refs.editForm.resetFields()
        }
      })
    },
    resetPopupData() {
      this.dialogVisible = false
      this.$refs.editForm.resetFields()
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
    .modalContent{
        height: 500px;
        overflow-y: auto;
        padding: 0 32px;
        box-sizing: border-box;
    }
    .modalContent .editForm .infoRow .label{
        display: inline-block;
        width: 100px;
        text-align: right;
        padding: 0 12px 0 0;
        color: #606266;
        line-height: 40px;
        font-size: 14px;
        box-sizing: border-box;
        font-weight: 700;
    }
    .modalContent .editForm .el-form-item{
        margin-bottom: 10px;
    }
    .explain{
        margin-top: 20px;
    }
</style>
