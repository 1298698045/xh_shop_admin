<template>
  <div class="wrapper">
    <div class="header">
      <div class="nav">
        <p class="label">
          结账属性
        </p>
        <div class="btns">
          <el-button size="mini" type="primary" @click.native="handleAddProduct">
            添加
          </el-button>
          <el-button size="mini" type="danger">
            删除所选
          </el-button>
        </div>
      </div>
    </div>
    <div class="center">
      <p class="title">
        结账属性会在购物车页面体现，并提供在下订单之前向客户提供更多服务（例如礼品）的机会。
      </p>
      <el-table
        :data="tableData"
        border
        size="mini"
        style="width: 100%"
      >
        <el-table-column
          align="center"
          type="selection"
        />
        <el-table-column
          prop="name"
          label="名称"
        >
          <template slot-scope="scope">
            <p class="name">
              {{ scope.row.name }}
            </p>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="控件类型"
        >
          <template slot-scope="scope">
            <p class="name">
              {{ scope.row.type }}
            </p>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="需要地址属性"
        >
          <template slot-scope="scope">
            <p class="name">
              {{ scope.row.type }}
            </p>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="地址属性显示顺序"
        >
          <template slot-scope="scope">
            <p class="name">
              {{ scope.row.type }}
            </p>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleEdit(scope.row)">
              编辑
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
        shopName: '',
        orderStatus: '',
        filterText: ''
      },
      tableData: [
      ],
      height: '',
      currentPage: 1
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleNode(e) {
      this.formSeach.filterText = e.label
      this.$refs.filterText.blur()
    },
    handleAddProduct() {
      this.$router.push({
        name: 'AddShop'
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
    .wrapper {
        .header{
            padding: 20px;
            box-sizing: border-box;
            .nav{
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
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
            .imgs{
                width: 60px;
                height: 60px;
            }
            .imgs img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
</style>
