<template>
  <header class="main-header" style="height: 60px">
    <div class="row" style="margin-top: 5px">
      <div class="col-md-1 col-md-offset-2">
        <a class="logo">
          <span class="logo-lg"><span class="nav-title" style="float: left">{{$const.CLIENT_NAME}}</span></span>
        </a>
      </div>
  
      <div class="col-md-7">
        <nav class="navbar navbar-static-top" role="navigation">
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              <li>
                <a class="nav-item">
                  <span>IT随笔</span>
                </a>
              </li>
              <li>
                <a class="nav-item">
                  <span>生活</span>
                </a>
              </li>
              <li>
                <a class="nav-item">
                  <span>相册</span>
                </a>
              </li>
              <li>
                <a class="nav-item">
                  <span>关于</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
  import {
    mapGetters
  } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        user    : 'getUser',
      })
    },
    methods: {
    }
  }
</script>
<style>
  .main-header .navbar.navbar-static-top {
    background-color: #333;
  }
  .nav-title {
    font-weight: 500;
  }
  .skin-blue .main-header .logo {
    background-color: #333;
    color: #ecf0f5;
  }

  .skin-blue .main-header .navbar .nav > li > a:hover {
    color: #ffffff;
  }
  
  .nav li {
    width: 100px;
  }
  
  .nav-item span {
    float: right;
  }
</style>
