<template>
  <div class="wrapper" style="padding: 0px;">
    <ClientNav></ClientNav>
    <div class="content-wrapper" style="min-height: 1126px;">
      <section class="content">
        <div class="row">
          <div class="col-md-6 col-md-offset-2 ">
            <router-view></router-view>
          </div>
          <div class="col-md-2">
            <ClientSideBar></ClientSideBar>
          </div>
        </div>
      </section>
    </div>
    <!--<router-view></router-view>-->
    <ClientFooter></ClientFooter>
  </div>
</template>
<style>
  #wrapper {
    color: #ecf0f5;
  }
  
  .content-wrapper {
    margin-left: 0;
  }
</style>
