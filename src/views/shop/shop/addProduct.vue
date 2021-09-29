<template>
  <div class="wrapper">
    <div class="header">
      <div class="nav">
        <div class="left">
          <p class="name">
            {{ routeName }}
          </p>
          <p class="back" @click="getNavBack">
            <i class="el-icon-arrow-left" />
            返回商品列表
          </p>
        </div>
        <div class="right">
          <el-button size="mini" type="primary">
            保存
          </el-button>
          <el-button size="mini" type="primary">
            保存并继续编辑
          </el-button>
        </div>
      </div>
    </div>
    <div class="center">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            <i class="el-icon-warning" />
            基本信息</span>
        </div>
        <div class="shopContent">
          <el-form ref="form" :model="form" label-width="200px">
            <el-form-item label="商品名称" prop="productName">
              <el-input v-model="form.productName" />
            </el-form-item>
            <el-form-item label="简短说明" prop="desc">
              <el-input v-model="form.desc" />
            </el-form-item>
            <el-form-item label="详细信息" prop="desc">
              <quill-editor v-model="form.goods" :options="editorOption" />
            </el-form-item>
            <el-form-item label="商品库存单位（SKU）" prop="sku">
              <el-input v-model="form.sku" />
            </el-form-item>
            <el-form-item label="商品分类" prop="productClass">
              <el-input v-model="form.productClass" />
            </el-form-item>
            <el-form-item label="制造商管理" prop="manufacturer">
              <el-select v-model="form.manufacturer" placeholder="请选择">
                <el-option
                  v-for="item in manufacturerList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="已发布" prop="release">
              <el-checkbox v-model="form.release" />
            </el-form-item>
            <el-form-item label="商品标签(逗号隔开)" prop="productTag">
              <el-input v-model="form.productTag" />
            </el-form-item>
            <el-form-item label="商品类型" prop="productType">
              <el-input v-model="form.productType" />
            </el-form-item>
            <el-form-item label="客户角色" prop="productType">
              <el-input v-model="form.productType" />
            </el-form-item>
          </el-form>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            <i class="el-icon-warning" />
            价格</span>
        </div>
        <div class="shopContent">
          <el-form ref="form" :model="form" label-width="200px">
            <el-form-item label="现价" prop="currentPrice">
              <el-input v-model="form.currentPrice" />
            </el-form-item>
            <el-form-item label="原价" prop="price">
              <el-input v-model="form.price" />
            </el-form-item>
            <el-form-item label="商品成本" prop="commodityCost">
              <el-input v-model="form.commodityCost" />
            </el-form-item>
            <el-form-item label="禁用购买按钮" prop="release">
              <el-checkbox v-model="form.release" />
            </el-form-item>
            <el-form-item label="禁用愿望清单按钮" prop="release">
              <el-checkbox v-model="form.release" />
            </el-form-item>
            <el-form-item label="接受预订" prop="release">
              <el-checkbox v-model="form.release" />
            </el-form-item>
            <el-form-item label="价格欢迎来电咨询" prop="release">
              <el-checkbox v-model="form.release" />
            </el-form-item>
            <el-form-item label="客户输入的价格" prop="release">
              <el-checkbox v-model="form.release" />
            </el-form-item>
            <el-form-item label="启用PAngV (基本价格)" prop="release">
              <el-checkbox v-model="form.release" />
            </el-form-item>
            <el-form-item label="折扣" prop="price">
              <el-input v-model="form.price" />
            </el-form-item>
            <el-form-item label="免税" prop="release">
              <el-checkbox v-model="form.release" />
            </el-form-item>
            <el-form-item label="税务种类" prop="manufacturer">
              <el-select v-model="form.manufacturer" placeholder="请选择">
                <el-option
                  v-for="item in manufacturerList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="通信， 直播和电子服务" prop="release">
              <el-checkbox v-model="form.release" />
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routeName: '添加新的商品',
      form: {
        productName: '',
        desc: '',
        goods: '',
        sku: '',
        productClass: '',
        manufacturer: '',
        release: false,
        productTag: '',
        productType: ''
      },
      editorOption: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons

        ['blockquote', 'code-block'],

        [{ header: 1 }, { header: 2 }], // custom button values

        [{ list: 'ordered' }, { list: 'bullet' }],

        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript

        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

        [{ direction: 'rtl' }], // text direction

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown

        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme

        [{ font: [] }],

        [{ align: [] }],

        ['link', 'image', 'video'],

        ['clean'] // remove formatting button
      ],
      manufacturerList: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    }
  },
  methods: {
    getNavBack() {
      this.$router.go(-1)
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(from, to)
    next((vm) => {
      if (to.query.type === 'edit') {
        // console.log(vm)
        vm.routeName = '编辑商品'
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  p{
    margin: 0;
    padding: 0;
  }
  .header{
    padding: 20px;
    .nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
        display: flex;
        align-items: center;
        .name{
          font-size: 28px;
          font-weight: bold;
          color: #333;
        }
        .back{
          color: #3399ff;
          margin-left: 10px;
          cursor:pointer;
          font-size: 24px;
        }
      }
    }
  }
  .center{
    padding: 20px;
    .box-card:first-child{
      margin-top: 0;
    }
    .box-card{
      margin-top: 20px;
    }
  }
</style>
