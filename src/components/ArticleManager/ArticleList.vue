<template>
  <div>
    <div class="article-title">
            <div class="article-titleLeft">
                <el-button @click="addfn(1)">编辑添加，字段各种规则验证示例</el-button>
                <el-button>本地导出表格</el-button>
              </el-form>
            </div>
            <div class="article-titleRight">
              <el-input placeholder="请输入文章标题"></el-input>
              <el-input placeholder="请选择类型"></el-input>
              <el-button>查询</el-button>
              <el-button>重置</el-button>
            </div>
    </div>

    <el-table :data="arrs" border>
      <el-table-column prop="title" label="文章标题"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="watchNumber" label="浏览量"></el-table-column>
      <el-table-column prop="reply" label="回复"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="文章标题" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="浏览量" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="回复" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"  @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import instance from "@/api/index.js"
export default {
    name:"ArticleList",
    data(){
        return {
            arrs:null,
            dialogFormVisible:false, //弹窗的显示和不显示
            form:{
              title:"",
              author:"",
              watchNumber:"",
              reply:""
            },
            formLabelWidth:"120px",
        }
    },
    methods:{
      // 获取
      async getArticle(){
         let {data} = await instance.get('/articlelist');
         this.arrs = data;
      },

      // 删除
      handleDelete(a){
          this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.deleteArticle(a);
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });          
          });
      },
      async deleteArticle(index){
        await instance.delete("/articlelist/"+index);
        this.getArticle();
      },

      // 添加弹窗
      addfn(){
        this.dialogFormVisible = !this.dialogFormVisible;
      }



    },
    created(){
      this.getArticle();
    }
}
</script>

<style scoped>
.addbtn {
  float: right;
  margin: 40px 150px 0 0;
}

.article-title {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.article-title div {
  display: flex;
}

.article-titleLeft .el-button {
  background: #0086f1;
  color: #fff;
}
.article-titleRight .el-input {
  margin-right: 5px;
}
.article-titleRight .el-button {
  background: #67c23a;
  color: #fff;
}
.article-titleRight .el-button:last-child {
  background: #e6a23c;
}
</style>