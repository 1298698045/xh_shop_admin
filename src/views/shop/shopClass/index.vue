<template>
  <div class="wrapper">
    <div class="header">
      <div class="nav">
        <p class="label">商品分类</p>
        <div class="btns">
          <el-button size="mini" type="primary" @click.native="handleAddProduct">添加</el-button>
          <el-button size="mini" type="danger">删除所选</el-button>
        </div>
      </div>
      <el-card class="box-card">
        <div class="searchForm">
          <el-form ref="formSeach" class="formSeach" :model="formSeach" label-width="80px">
            <el-form-item class="formItem" prop="shopName" label="分类名称">
              <el-input v-model="formSeach.shopName" class="inp" size="mini" clearable />
            </el-form-item>
            <el-form-item class="formItem" prop="orderStatus" label="已发布">
              <el-select v-model="formSeach.orderStatus" clear="inp" size="mini" placeholder="请选择付款状态">
                <el-option label="全部" value="shanghai" />
                <el-option label="简单" value="beijing" />
                <el-option label="分组的商品" value="beijing" />
              </el-select>
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
        <el-table-column
          align="center"
          type="selection"
        />
        <el-table-column
          prop="name"
          label="商品名称"
          width="500"
        >
          <template slot-scope="scope">
            <p class="name">
              {{ scope.row.name }}
            </p>
          </template>
        </el-table-column>
        <el-table-column
          prop="release"
          label="已发布"
        >
          <template slot-scope="scope">
            <div style="font-size:30px">
              {{ scope.row.release?'√':'×' }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="sort"
          label="地址属性显示顺序"
        />
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <el-button v-if="!scope.row.isSet" type="text" size="small" @click="handleEdit(scope.row)">
              编辑
            </el-button>
            <el-button v-if="scope.row.isSet" type="text" size="small" @click="handleSave(scope.row)">
              保存
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
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: [
        {
          name: '协和邮品',
          release: false,
          sku: '',
          isSet: false,
          sort: 1
        }
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
        name: 'EditClass',
        query: {
          a: 1
        }
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
    .el-scrollbar .el-scrollbar__view .el-select-dropdown__item{
        height: auto;
        max-height: 274px;
        padding: 0;
        overflow: hidden;
        overflow-y: auto;
        padding-left: 10px;
      }
      .classOptions{
        padding-left: 0!important;
      }
  .shopClass .el-select-dropdown__item.selected{
    font-weight: normal;
  }
  >>>.el-tree .el-tree-node__content{
    height:auto;
    padding: 0 !important;
  }
  .el-tree-node__label{
    font-weight: normal;
  }
  .el-tree >>>.is-current .el-tree-node__label{
    color: #409EFF;
    font-weight: 700;
  }
  .el-tree >>>.is-current .el-tree-node__children .el-tree-node__label{
    color:#606266;
    font-weight: normal;
  }
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
