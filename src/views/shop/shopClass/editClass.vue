<template>
  <div class="wrapper">
    <div class="header">
      <div class="nav">
        <div class="left">
          <p class="name">
            添加新的分类
          </p>
          <p class="back" @click="getNavBack">
            <i class="el-icon-arrow-left" />
            返回商品分类列表
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
            <el-form-item label="名称" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="描述信息" prop="desc">
              <quill-editor v-model="form.desc" :options="editorOption" />
            </el-form-item>
            <el-form-item label="父级分类" prop="parentClass">
              <el-select v-model="form.parentClass" placeholder="请选择">
                <el-option
                  v-for="item in manufacturerList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="图片" prop="name">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">
                  点击上传
                </el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </el-form-item>
            <el-form-item label="已发布" prop="release">
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
      form: {
        name: '',
        desc: '',
        parentClass: ''
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
      }],
      fileList: []
    }
  },
  methods: {
    getNavBack() {
      this.$router.go(-1)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
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
