<template>
  <div class="container">
    <img src="../assets/logo.png">
  <form action="" method="post" role="form" class="form-inline">
    <legend>查单词</legend>

    <div class="input-group">
<!--      <span class="input-group-addon" id="basic-addon1">@</span>-->
      <div class="input-group-btn input-group-lg">
        <!-- Buttons -->
        <button class="btn btn-default" :class="EorC? activeClass: ''" @click.prevent="EorC=true" >E=>中</button>
        <button class="btn btn-default" :class="EorC? '': activeClass" @click.prevent="EorC=false" >中=>E</button>
      </div>
      <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon1" v-model="key" @focus="key=''">
    </div>


    <button type="submit" class="btn btn-primary"  @click.prevent="find(key)">查询</button>

  </form>

    <div class="list-group" v-show="!EorC">
      <a href="#" class="list-group-item" v-for="item in list">
        <h4 class="list-group-item-heading">{{item.content}}</h4>
        <p class="list-group-item-text">{{item.translate}}</p>
      </a>
    </div>

    <div class="result" v-show="EorC">
        <div class="col-sm-offset-2 col-xs-offset-2  col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div class="panel panel-default">
            <div class="panel-body">
              <h1>{{content}}</h1>
              <strong>{{phonogram}}</strong>
              <p>{{translates}}</p>
            </div>
          </div>
        </div>
    </div>



  </div>

</template>

<script>
    export default {
        name: "Query",
        data(){
          return {
            content: '',
            translates: '',
            phonogram: '',
            key: '',
            EorC: false,
            activeClass: 'active',
            list: null
          }
        },

        methods: {
          getQuery: function (word) {
              let that = this
              this.$http.get("http://localhost:8080/get/" + word)
                .then(function (response) {
                   console.log(response)
                  if (response.data != '') {
                    let words = response.data
                    that.content = words['content']
                    that.phonogram = words['phonogram']
                    that.translates = words['translate']
                  } else {
                    that.content = '查无此词'
                    that.phonogram = ''
                    that.translates = ''
                  }
                })
          },

          getTrans: function (key) {
            let that = this
            this.$http.get("http://localhost:8080/translate" , {
              params: {
                key: key
              }
            })
              .then(function (response) {
                  console.log(response.data)
                  that.$data.list = response.data
              })
          },

          find: function (key) {

            let that = this

            that.content = '查无此词'
            that.phonogram = ''
            that.translates = ''
            that.list = null

            if (this.$data.EorC) {
              this.getQuery(key)
            }else {
              this.getTrans(key)
            }
          }
        }
    }
</script>

<style scoped>
  #word {
    text-align: center;
  }

  .result {
    margin-top: 50px;
  }
</style>
