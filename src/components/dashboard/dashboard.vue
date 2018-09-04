<template>
  <div class="dashboard">
    <div class="dashboard-center">
      <!--订单数据-->
      <div class="widget-box">
        <div class="widget-box__title extrude">下午好，</div>
        <div class="widget-box__content">
          <div  class="widget-store-data-box">
            <div class="widget-store-data-box__item" v-for="item in staticsInfo">
              <div>{{item.number}}</div>
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>
      </div>
      <!--常见功能-->
      <div class="widget-box">
        <div class="widget-box__title ">常见功能</div>
        <div class="widget-box__content">
          <div  class="widget-store-function-box">
            <div class="widget-store-function-box__item" v-for="item in menu_list">
              <a href="">
                <div class="function-item__icon" :class="item.icon"></div>
                <span>{{item.name}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--营销工具-->
      <div class="widget-box">
        <div class="widget-box__title ">
          营销工具
          <a href="" class="widget-box-title__more-data">营销中心</a>
        </div>
        <div class="widget-box__content">
          <div  class="widget-store-marketing-box">
            <div class="widget-store-marketing-box__item" v-for="item in tool_list">
              <a href="">
                <img :src="item.src" alt="">
                <div class="item__rightxt">
                  <div>{{item.name}}</div>
                  <span>{{item.desc}}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="dashboard-right">

    </div>
  </div>
</template>

<script>
    export default {
      name: "dashboard",

      data(){
        return {
          staticsInfo:[], //统计信息
          menu_list: [],  // 常见功能
          tool_list: [],  // 营销工具
        }
      },
      created(){
         this.initData();
         this.getStaticsInfo()
      },
      methods:{
        initData(){
          this.menu_list = [
            {"name":"店铺装修", "icon":"decorate-icon", "url": "/workspace/manager/list"},
            {"name":"发布商品", "icon":"public-icon", "url": "/goods/manager/list/add"},
            {"name":"评价管理", "icon":"template-icon", "url": "/order/manager/evaluatelist"},
            {"name":"客户管理", "icon":"manager-icon", "url": "/member/manager/list"},
            {"name":"客服系统", "icon":"notification-icon", "url": "https://mpkf.weixin.qq.com", "target": "_blank"},
            {"name":"营收概况", "icon":"detail-icon", "url": "javascript:;"},
            {"name":"数据统计", "icon":"statistics-icon", "url": "javascript:;"},
          ]
          this.tool_list = [
            {"name":"拼团", "desc":"分享拼团，让用户为您拓展用户", "src":"/static/images/icon_pintuan.png", "url": "/marketing/manager/grouplist"},
            {"name":"砍价", "desc":"邀请好友帮砍价，营销推广两不误", "src":"/static/images/icon_pintuan.png", "url": "/marketing/manager/bargainlist"},
            {"name":"优惠券", "desc":"发放优惠券，吸引客户购物", "src":"/static/images/icon_coupon.png", "url": "/marketing/manager/couponlist"},
            {"name":"代言人分销", "desc":"帮助商城低成本推广，拓展营销渠道，提升营业收入", "src":"/static/images/icon_bag.png", "url": "/marketing/manager/spokesmanlist/setting"},
            {"name":"满减满送", "desc":"购满一定金额享受优惠", "src":"/static/images/icon_gift.png", "url": "/marketing/manager/moneyofflist"},
            {"name":"幸运大转盘", "desc":"快来嗨", "src":"/static/images/icon_pintuan.png", "url": "/marketing/manager/wheellist"},
          ]
        },
        getStaticsInfo(){
          this.staticsInfo = [
            {"number":2000,"title":"待发货订单"},
            {"number": 20000, "title": "维权订单"},
            {"number": 20000, "title": "已售空商品"},
            {"number": 20000, "title": "今日总访客"},
            {"number": 20000, "title": "昨日交易额/元"},
          ]
        },

      }

    }
</script>

<style scoped lang="scss">
  @import "../../common/style/adapter.config";
  @import "../../common/style/variable.config";

  .dashboard {
    @include flex-a;
    .dashboard-center {
      @include flex-full();
      padding: $common_space - 5;
      padding-right: $box_space;
      min-width: 720px;
    }

    .dashboard-right {
      background: $bg_color;
      width: 258px;
      padding: $common_space - 5;
      padding-left: 0;

    }
  }

  .widget-box {
    $widget_box_padding: $common_space;

    //padding: $widget_box_padding;
    margin-bottom: $box_space;
    border-radius: 4px;
    overflow: hidden;

    &.widget-bind-box {
      .widget-box__title {
        margin-bottom: 0;
      }
      .widget-box__content {
        padding-bottom:  $common_space;
      }
    }

    &.equal-height {
      /*height: 174px;*/
      @include box-sizing();
    }

    a {
      display: block;
      cursor: pointer;
    }

    .widget-box__title {
      position: relative;
      min-height: 12px;
      font-size: 14px;
      padding: $common_title_padding_v $widget_box_padding;
      margin-bottom: 1px;
      background-color: #ffffff;
      border-top: 1px solid #f7f7f7;
      color: #595961;

      &.extrude {
        font-weight: 800;
      }

      .widget-box-title__more-data {
        position: absolute;
        font-size: 12px;
        color: #0087f8;
        right: $common_space;
        top: $common_title_padding_v;
        transition: all 0.25s;

        &:hover {
          padding-right: 8px;
          background: url("/static/images/icon_arrow.png") no-repeat right center / 4px;
        }
      }
    }

    .widget-box__content {
      background: #fff;
    }


    @mixin box-common() {
      @include flex-a();

    }

    .widget-store-data-box {
      @include box-common();

      .widget-store-data-box__item  {
        @include flex-full();
        padding-bottom: $common_bottom_space;
        text-align: center;

        > div {
          font-size: 24px;
          font-weight: 500;
          /*line-height: 1.33;*/
          margin-top: $common_space + 14px;
          margin-bottom: 8px;
        }
        > span {
          font-size: 14px;
          color: #999;
          line-height: 1;
          display: block;
        }
      }
    }

    .widget-store-function-box {
      @include box-common();

      .widget-store-function-box__item {
        @include flex(column, space-between, center);
        @include flex-full();
        padding-bottom: $common_bottom_space;

        .function-item__icon {
          margin-top: $common_space + 14px;
          width:$function_icon_size;
          height:$function_icon_size;
          margin-bottom: 14px;

          background: url("/static/images/sprite_function.png") no-repeat center center / $function_icon_size;
          background-position: 0 0;

          &.template-icon {
            /*background-image: url("/static/images/btn_transport.png");*/
            background-position: 0 (-$function_icon_size * 1);
          }
          &.decorate-icon {
            background-position: 0 (-$function_icon_size * 2);
          }

          &.notification-icon {
            background-position: 0 (-$function_icon_size * 3);
          }
          &.manager-icon {
            background-position: 0 (-$function_icon_size * 4);
          }
          &.detail-icon {
            background-position: 0 (-$function_icon_size * 5);
          }
          &.statistics-icon {
            background-position: 0 (-$function_icon_size * 6);
          }
        }

        > span {

          color: #666;
          font-size: 14px;
          line-height: 0.88;
        }
      }
    }

    .widget-store-marketing-box {
      @include box-common();
      @include flex-wrap();
      margin-right: 0;
      margin-left: 0;



      .widget-store-marketing-box__item {
        @include flex-full();
        @include flex-basis(30%);
        @include box-sizing();
        height:120px;

        /*border-radius: 4px;*/
        border-right: 1px solid #f7f7f7;
        border-bottom: 1px solid #f7f7f7;

        color: #fff;
        position: relative;

        &:nth-child(3n+3) {
          border-right: none;
        }

        &:nth-last-child(-n+3) {
          border-bottom: none;
        }
        a {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        img {
          width: 40px;
          margin:0 20px;
        }

        .item__rightxt {
          > div {
            font-size: 16px;
            font-weight: 800;
            line-height: 1;
            margin-bottom: 8px;
            color: #333;
          }
          > span {
            opacity: .7;
            font-size: 12px;
            line-height: 1;
            color: #999;
            display: block;
          }
        }

        &.bargain-item {

          &:before {
            background-image: url("/static/images/icon_light.png");
          }
        }

        &.coupon-item {
          &:before {
            background-image: url("/static/images/icon_coupon.png");
          }
        }

        &.distribution-item {
          &:before {
            background-image: url("/static/images/icon_bag.png");
          }
        }

        &.money-item {
          &:before {
            background-image: url("/static/images/icon_gift.png");
          }
        }

        &.turntable-item {
          &:before {
            background-image: url("/static/images/icon_lottery.png");
          }
        }




        > div {
          font-size: 16px;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 8px;
          color: #333;
        }

        > span {
          opacity: 0.7;
          font-size: 12px;
          line-height: 1.0;
          color: #999;
          display: block;
        }
      }
    }

    .widget-store-bind-box {

      @include box-common;

      .widget-store-bind-box__item {
        @include flex-full();
        @include flex(column, $al: center);
        padding-top: 14px;

        > i {
          width: 120px;
          height: 120px;
          display: inline-block;
          background-repeat: no-repeat;
          background-size: 100%;
          background-color: #378ef7;
        }


        &.item-left {
          position: relative;

          > div {
            font-size: 16px;
            height: 14px;
            line-height: 0.88;
            margin-top: 12px;
          }

          &::after {
            content: '';
            position: absolute;
            right: 0;
            top:12px;
            width: 1px;
            height: 96px;
            /*background-image: linear-gradient(#f4f4f4, #f4f4f4);*/
          }
        }

        &.item-right {

          p {
            font-size: 12px;
            color: rgba(51, 51, 51, 0.6);
            text-align: center;
            margin-top: 10px;
            /*text-align: left;*/
            line-height: 1.3;
          }

          .el-button {
            font-size: 12px;
            padding: 7px 26px;
            margin-top: 12px;
          }


        }
      }
    }
  }


  .widget-version-box {
    padding-bottom: 0;
    .widget-box__title {
      margin-bottom: 0;
    }
    .widget-box__content {
      font-size: 14px;
      color: #5c5c5c;
      padding: 0 $common_space;
      .content__header {
        @include flex($al:center, $jc:space-between);
        padding: 12px 0 20px;
        border-bottom: 1px solid #f7f7f7;

        a {
          font-size: 14px;
          color: #0087f8;
        }
      }

      .content__footer {
        padding: 12px 0;
      }
    }
  }

  .widget-cms-list {

    .widget-box__title {
      font-weight: 800;
      font-size: 14px;
      color: #595961;
      padding-left: 18px;
      position: relative;
      margin-bottom: 0;
    }

    ul {
      padding: $common_space;
      padding-top: 0;
      li {
        border-bottom: 1px dashed #f7f7f7;
        &:last-child {
          border-bottom: none;

          a{
            padding-bottom: 0;
          }
        }

        a {
          @include flex($jc: space-between);
          color: #666;
          font-size: 12px;
          padding: 6px 0;

          &:hover {
            color: #0087f8;
          }

          span {

            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            position: relative;
            word-break: break-all;
            margin-right: 12px;
          }

          i{
            font-size: 12px;
          }
        }

      }
    }
  }



</style>
