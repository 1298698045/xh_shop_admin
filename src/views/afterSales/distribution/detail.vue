<template>
  <div class="wrapper">
    <div class="cardBox">
      <el-card class="card" shadow="always">
        <div class="head">
          <h3 class="title">
            信息
          </h3>
        </div>
        <div class="content">
          <div class="row">
            <p class="label">
              订单ID：
            </p>
            <p class="val">
              661470620210909113428
            </p>
          </div>
          <div class="row">
            <p class="label">
              追踪号码：
            </p>
            <p class="val">
              <el-input v-model="phone" type="number" size="mini" />
              <el-button size="mini">
                保存
              </el-button>
            </p>
          </div>
          <div class="row">
            <p class="label">
              管理员评论：
            </p>
            <p class="val">
              <el-input v-model="phone" type="number" size="mini" />
              <el-button size="mini">
                设置管理员评论
              </el-button>
            </p>
          </div>
          <div class="row">
            <p class="label">
              总重量：
            </p>
            <p class="val">
              100
            </p>
          </div>
          <div class="row">
            <p class="label">
              配送日期：
            </p>
            <p class="val">
              <span v-if="!isShow">2021/9/5 17:35:00</span>
              <el-date-picker
                v-if="isShow"
                v-model="time"
                type="datetime"
                size="mini"
                placeholder="选择日期时间"
              />
              <el-button v-if="!isShow" size="mini" @click.native="getEditTime">
                编辑
              </el-button>
              <el-button v-if="isShow" size="mini" @click.native="getSaveTime">
                保存
              </el-button>
              <el-button v-if="isShow" size="mini" @click.native="getCabcel">
                取消
              </el-button>
            </p>
          </div>
          <div class="row">
            <p class="label">
              交货日期：
            </p>
            <p class="val">
              未发货
              <el-button size="mini">
                标记为已发货
              </el-button>
            </p>
          </div>
        </div>
      </el-card>
      <el-card class="card" shadow="always">
        <div class="head">
          <h3 class="title">
            商品信息
          </h3>
        </div>
        <el-table
          class="table"
          border
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            prop="productName"
            label="商品"
            width="180"
          >
            <template slot-scope="scope">
              <div>
                {{ scope.row.productName }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="prductSku"
            label="商品库存单位（SKU）"
            width="180"
          >
            <template slot-scope="scope">
              <p class="name">
                {{ scope.row.prductName.prductSku }}
              </p>
            </template>
          </el-table-column>
          <el-table-column
            prop="warehouse"
            label="仓库"
          />
          <el-table-column
            prop="totalWeight"
            label="重量"
          >
            <template slot-scope="scope">
              <div class="val">
                <span>{{ scope.row.totalWeight }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="discount"
            label="折扣信息"
          />
          <el-table-column
            prop="number"
            label="配送数量"
          />
        </el-table>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: '',
      time: '',
      isShow: false,
      tableData: [
        {
          productName: '',
          prductSku: '',
          warehouse: '',
          totalWeight: '',
          discount: '',
          number: ''
        }
      ]
    }
  },
  methods: {
    getEditTime() {
      this.isShow = true
    },
    getCabcel() {
      this.isShow = false
    }
  }
}
</script>
<style lang="scss" scoped>
    p{
        margin: 0;
        padding: 0;
    }
    .cardBox{
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
    .row .val{
        display: flex;
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
