<template>
  <div class="wrapper">
    <div class="header">
      <el-card class="box-card">
        <div class="searchForm">
          <el-form ref="formSeach" class="formSeach" :model="formSeach" label-width="100px">
            <el-form-item class="formItem" prop="startTime" label="开始日期">
              <el-date-picker
                v-model="formSeach.startTime"
                size="mini"
                class="inp time"
                type="date"
                placeholder="选择开始日期"
              />
            </el-form-item>
            <el-form-item class="formItem" prop="endTime" label="结束日期">
              <el-date-picker
                v-model="formSeach.endTime"
                size="mini"
                class="inp time"
                type="date"
                placeholder="选择结束日期"
              />
            </el-form-item>
            <el-form-item class="formItem" prop="phone" label="追踪号码">
              <el-input v-model="formSeach.phone" class="inp" size="mini" clearable />
            </el-form-item>
            <el-form-item class="formItem" prop="warehouse" label="仓库">
              <el-select v-model="formSeach.warehouse" clear="inp" size="mini" placeholder="请选择付款状态">
                <el-option label="全部" value="shanghai" />
                <el-option label="等待" value="beijing" />
                <el-option label="处理中" value="beijing" />
                <el-option label="完成" value="beijing" />
                <el-option label="已取消" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item class="formItem" prop="province" label="省份">
              <el-select v-model="formSeach.province" clear="inp" size="mini" placeholder="请选择付款状态">
                <el-option label="全部" value="shanghai" />
                <el-option label="等待" value="beijing" />
                <el-option label="授权" value="beijing" />
                <el-option label="已付款" value="beijing" />
                <el-option label="部分退款" value="beijing" />
                <el-option label="退款" value="beijing" />
                <el-option label="无效" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item class="formItem" prop="region" label="县/地区">
              <el-input v-model="formSeach.region" class="inp" size="mini" clearable />
            </el-form-item>
            <el-form-item class="formItem" prop="city" label="城市">
              <el-input v-model="formSeach.city" class="inp" size="mini" clearable />
            </el-form-item>
            <el-form-item class="formItem" prop="service" label="货物未送达">
              <el-checkbox v-model="formSeach.service" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="mini" @click.native="handleQuery('formSeach')">
                查询
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="center">
      <el-table
        :data="tableData"
        border
        size="mini"
        style="width: 100%"
      >
        <el-table-column type="expand">
          <template>
            <el-table
              border
              :data="tableChildenData"
              style="width: 100%"
            >
              <el-table-column
                prop="date"
                label="日期"
                width="180"
              />
              <el-table-column
                prop="name"
                label="姓名"
                width="180"
              />
              <el-table-column
                prop="address"
                label="地址"
              />
            </el-table>
          </template>
        </el-table-column>
        <el-table-column
          label="配送单号"
          prop="id"
          align="center"
          type="selection"
        />
        <el-table-column
          label="配送单号"
          prop="id"
          align="center"
        />
        <el-table-column
          label="订单ID"
          prop="orderId"
          align="center"
        />
        <el-table-column
          label="追踪号码"
          prop="number"
          align="center"
        />
        <el-table-column
          label="总重量"
          prop="totalWeight"
          align="center"
        />
        <el-table-column
          label="配送日期"
          align="center"
          prop="time"
        />
        <el-table-column
          label="交货日期"
          prop="deliveryTime"
          align="center"
        />
        <el-table-column
          label="操作"
          prop="desc"
          fixed="right"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleDetail(scope.row)">
              查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formSeach: {
        startTime: '',
        endTime: '',
        phone: '',
        warehouse: '',
        province: '',
        region: '',
        city: '',
        service: false,
        currentPage: 1
      },
      tableData: [{
        id: '123123123',
        orderId: '12391230123',
        number: '123',
        totalWeight: '100g',
        time: '2020-08-08 09:00',
        deliveryTime: '2020-08-08 09:00'
      }, {
        id: '123123123',
        orderId: '12391230123',
        number: '123',
        totalWeight: '100g',
        time: '2020-08-08 09:00',
        deliveryTime: '2020-08-08 09:00'
      }, {
        id: '123123123',
        orderId: '12391230123',
        number: '123',
        totalWeight: '100g',
        time: '2020-08-08 09:00',
        deliveryTime: '2020-08-08 09:00'
      }],
      tableChildenData: []
    }
  },
  methods: {
    handleQuery(row) {

    },
    handleDetail(row) {
      this.$router.push({
        name: 'DistributionDetail'
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
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
            .pagination{
              padding: 20px 0;
              text-align: right;
            }
        }
    }
</style>
