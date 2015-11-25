FusionCharts.ready(function () {
  FusionCharts.ready(function () {
    var salesByState = new FusionCharts({
      "type": "maps/china2",
      "renderAt": "chartContainer",
      "width": "1000",
      "height": "600",
      "dataFormat": "json",
      "dataSource": {
        "map": {
          "showshadow": "0",
          "showlabels": "0",//地图各省首字母显示，0为不显示
          "showmarkerlabels": "1",
          "fillcolor": "F1f1f1",//背景填充颜色
          "bordercolor": "aaaaaa",//地图边界颜色
          "canvasBgColor": "f4efe9",//画布背景颜色
          //"canvasBgAlpha":"20",//画布背景透明度
          "canvasBorderColor": "f4efe9",//画布边框颜色
          "basefont": "Verdana",
          "basefontsize": "10",
          "markerbordercolor": "000000",//标记点边框颜色
          "markerbgcolor": "f4efe9",  //标记点颜色,有默认颜色
          "markerradius": "3",
          "usehovercolor": "1",  //管理onmouseover效果,0为无效果
          "hoveronempty": "0",
          "showmarkertooltip": "1"
          //"hovercolor":"ff0000",
          //"canvasBorderAlpha": "0"//画布边框透明度，透明度为0时，则为白色
        },
        //"markers": {
        //  "shapes": [
        //    {
        //      "id": "myCustomShape",
        //      "type": "circle",
        //      //"fillcolor": "FFFFFF,333333",//首都标记点颜色
        //      //"fillpattern": "radial",
        //      "showborder": "0",
        //      "radius": "3"
        //    },
        //    {
        //      "id": "newCustomShape",
        //      "type": "circle",
        //      //"fillcolor": "FFFFFF,000099",
        //      //"labelcolor":"ff0000",
        //      //"fillpattern": "radial",
        //      "showborder": "0",
        //      "radius": "3"
        //    }],
        //    "items": [
        //      {
        //        "id": "BE",
        //        "shapeid": "myCustomShape",
        //        "x": "637.03",
        //        "y": "277.31",
        //       // "label": "京 ",
        //       // "labelpos": "right",
        //       "toRaphaelColor":"ff0000"
        //      },
        //      {
        //        "id": "01",
        //        "shapeid": "newCustomShape",
        //        "x": "753.68",
        //        "y": "0.87",
        //     // "label": "Harbin",
        //     // "labelpos": "right"
        //      },
        //      {
        //        "id": "02",
        //        "shapeid": "newCustomShape",
        //        "x": "716.25",
        //        "y": "0.5",
        //      //"label": "Shenyang",
        //     // "labelpos": "right"
        //      },
        //      {
        //        "id": "03",
        //        "shapeid": "newCustomShape",
        //        "x": "371.13",
        //        "y": "0.63",
        //     // "label": "Tianjin",
        //     // "labelpos": "right"
        //      },
        //      {
        //        "id": "04",
        //        "shapeid": "newCustomShape",
        //        "x": "343.44",
        //        "y": "0.7",
        //        //   "label": "Zhengzhou"
        //      },
        //      {
        //        "id": "05",
        //        "shapeid": "newCustomShape",
        //        "x": "389.59",
        //        "y": "0.16",
        //        //   "label": "Nanjing",
        //        "labelpos": "right"
        //      },
        //      {
        //        "id": "06",
        //        "shapeid": "newCustomShape",
        //        "x": "416.25",
        //        "y": "0.54",
        //        //  "label": "Shanghai",
        //        //  "labelpos": "right"
        //      },
        //      {
        //        "id": "07",
        //        "shapeid": "newCustomShape",
        //        "x": "321.91",
        //        "y": "0.24",
        //        //   "label": "Xi'an",
        //        //  "labelpos": "right"
        //      },
        //      {
        //        "id": "08",
        //        "shapeid": "newCustomShape",
        //        "x": "360.88",
        //        "y": "0.1",
        //        //   "label": "Wuhan",
        //        //   "labelpos": "right"
        //      },
        //      {
        //        "id": "09",
        //        "shapeid": "newCustomShape",
        //        "x": "276.79",
        //        "y": "0.4",
        //        //   "label": "Chongqing",
        //        //   "labelpos": "left"
        //      },
        //      {
        //        "id": "10",
        //        "shapeid": "newCustomShape",
        //        "x": "260.39",
        //        "y": "0.07",
        //        //   "label": "Chengdu",
        //        //   "labelpos": "right"
        //      },
        //      {
        //        "id": "11",
        //        "shapeid": "newCustomShape",
        //        "x": "152.72",
        //        "y": "0.05",
        //        //  "label": "Lhasa"
        //      },
        //      {
        //        "id": "12",
        //        "shapeid": "newCustomShape",
        //        "x": "346.52",
        //        "y": "0.98",
        //        //   "label": "Guangzhou",
        //        //   "labelpos": "right"
        //      },
        //      {
        //        "id": "13",
        //        "shapeid": "newCustomShape",
        //        "x": "285",
        //        "y": "0.25",
        //        //    "label": "Lanzhou"
        //      },
        //      {
        //        "id": "14",
        //        "shapeid": "newCustomShape",
        //        "x": "117.86",
        //        "y": "0.79",
        //        //    "label": "Urumqi"
        //      }
        //  ]
        //}
      }
    });
    salesByState.render();
      // 初始全局json
      var globalData = {
          "map": {
              "showshadow": "0",
              "showlabels": "0",//地图各省首字母显示，0为不显示
              "showmarkerlabels": "1",
              "fillcolor": "F1f1f1",//背景填充颜色
              "bordercolor": "aaaaaa",//地图边界颜色
              "canvasBgColor": "f4efe9",//画布背景颜色
              //"canvasBgAlpha":"20",//画布背景透明度
              "canvasBorderColor": "f4efe9",//画布边框颜色
              "basefont": "Verdana",
              "basefontsize": "10",
              "markerbordercolor": "000000",//标记点边框颜色
              "markerbgcolor": "f4efe9",  //标记点颜色,有默认颜色
              "markerradius": "3",
              "usehovercolor": "1",  //管理onmouseover效果,0为无效果
              "hoveronempty": "0",
              "showmarkertooltip": "1"
          },
          "data": []
      };
      var city= {
          "beij" :{
             "id" : "CN.BJ",
              "color" : "DF3D55"
          },
          "tianj" :{
              "id" : "CN.TJ",
              "color" : "DF3D55"
          },
          "shangh" :{
              "id" : "CN.SH",
              "color" : "DF3D55"
          },
          "chongq" :{
              "id" : "CN.CQ",
              "color" : "DF3D55"
          },
          "hlj" :{
              "id" : "CN.HL",
              "color" : "DF3D55"
          },
          "jil" :{
              "id" : "CN.JL",
              "color" : "DF3D55"
          },
          "liaon" :{
              "id" : "CN.LN",
              "color" : "DF3D55"
          },
          "heb" :{
              "id" : "CN.HB",
              "color" : "DF3D55"
          },
          "shand" :{
              "id" : "CN.SD",
              "color" : "DF3D55"
          },
          "jiangs" :{
              "id" : "CN.JS",
              "color" : "DF3D55"
          },
          "zhej" :{
              "id" : "CN.ZJ",
              "color" : "DF3D55"
          },
          "fuj" :{
              "id" : "CN.FJ",
              "color" : "DF3D55"
          },
          "anh" :{
              "id" : "CN.AH",
              "color" : "DF3D55"
          },
          "jiangx" :{
              "id" : "CN.JX",
              "color" : "DF3D55"
          },
          "guangd" :{
              "id" : "CN.GD",
              "color" : "DF3D55"
          },
          "guangx" :{
              "id" : "CN.GX",
              "color" : "DF3D55"
          },
          "hun" :{
              "id" : "CN.HN",
              "color" : "DF3D55"
          },
          "hub" :{
              "id" : "CN.HU",
              "color" : "DF3D55"
          },
          "hen" :{
              "id" : "CN.HE",
              "color" : "DF3D55"
          },
          "shanx" :{
              "id" : "CN.SX",
              "color" : "DF3D55"
          },
          "nmg" :{
              "id" : "CN.NM",
              "color" : "DF3D55"
          },
          "shaanx" :{
              "id" : "CN.SA",
              "color" : "DF3D55"
          },
          "ningx" :{
              "id" : "CN.NX",
              "color" : "DF3D55"
          },
          "gans" :{
              "id" : "CN.GS",
              "color" : "DF3D55"
          },
          "sic" :{
              "id" : "CN.SC",
              "color" : "DF3D55"
          },
          "guiz" :{
              "id" : "CN.GZ",
              "color" : "DF3D55"
          },
          "yunn" :{
              "id" : "CN.YN",
              "color" : "DF3D55"
          },
          "xiz" :{
              "id" : "CN.XZ",
              "color" : "DF3D55"
          },
          "xinj" :{
              "id" : "CN.XJ",
              "color" : "DF3D55"
          },
          "qingh" :{
              "id" : "CN.QH",
              "color" : "DF3D55"
          },
          "hain" :{
              "id" : "CN.HA",
              "color" : "DF3D55"
          },
          "hk" :{
              "id" : "CN.HK",
              "color" : "DF3D55"
          },
          "mc" :{
              "id" : "CN.MA",
              "color" : "DF3D55"
          },
          "tw" :{
              "id" : "CN.TA",
              "color" : "DF3D55"
          }
      };
      function changeProvinceColor(province) {
          globalData.data.push(province);
          salesByState.setChartData(globalData, "json");
      }
      if(addEventListener){
          document.querySelector(".province_list").addEventListener("click",function(e){
              var tar = e.target.id;
              changeProvinceColor(city[tar]);
              if(e.target.nodeName==="LI"){
                  e.target.style.background="#ff9999";
              }
        },false);
      }else if(attachEvent){
          document.querySelector(".province_list").attachEvent("click",function(e){
              var tar = e.target.id;
              changeProvinceColor(city[tar]);
              if(e.target.nodeName==="LI"){
                  e.target.style.background="#ff9999";
              }
        })
      }
  });
})
var $lis=$(".province_list>li:gt(13)");
$lis.hide();
$("button>span").click(function(){
    if($lis.is(':hidden')){
        $lis.show(500);
        $("button>span").text("收起");
    }else{
        $lis.hide(500);
        $("button>span").text("显示全部城市");
    }
});

