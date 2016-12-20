MusicBox=function (){
    var _this=this;
    var  media= document.getElementById("musicBox"); 
    var  musicFiles=[
                   {name:"薛之谦 - 方圆几里",url:"audio/薛之谦 - 方圆几里.mp3"} ,
				   {name:"薛之谦 - 刚刚好",url:"audio/薛之谦 - 刚刚好.mp3"} ,
				   {name:"薛之谦 - 你还要我怎样",url:"audio/薛之谦 - 你还要我怎样.mp3"} ,
				   {name:"薛之谦 - 认真的雪",url:"audio/薛之谦 - 认真的雪.mp3"} ,
				   {name:"薛之谦 - 绅士",url:"audio/薛之谦 - 绅士.mp3"} ,
				   {name:"薛之谦 - 深深爱过你",url:"audio/薛之谦 - 深深爱过你.mp3"} ,
				   {name:"薛之谦 - 为了遇见你",url:"audio/薛之谦 - 为了遇见你.mp3"} ,
				   {name:"薛之谦 - 我好像在哪见过你",url:"audio/薛之谦 - 我好像在哪见过你.mp3"} ,
				   {name:"薛之谦 - 我想起你了",url:"audio/薛之谦 - 我想起你了.mp3"} ,
				   {name:"薛之谦 - 下雨了",url:"audio/薛之谦 - 下雨了.mp3"} ,
                   {name:"薛之谦 - 演员",url:"audio/薛之谦 - 演员.mp3"} ,
				   {name:"薛之谦 - 来日方长",url:"audio/薛之谦 - 来日方长.mp3"} ,
                ];
    //当前正在播放的歌曲的索引               
    var index=-1;
    //当前正在播放的歌曲
    var playingFile=null;
    //播放模式
    var playMode=1;
    //下一首
    this.nextMusic=function(){
       if(playMode=="1"){
            index+=1;
        }
        if(index==musicFiles.length){
            index=0;
        }
        playingFile=musicFiles[index];
        media.setAttribute("src",playingFile.url); 
        media.play();
        $("#ul_musicList").children().css({"background-color":"#FFF","border":"solid 1px #EEEEEE","color":"#000"});
        $( $("#ul_musicList").children()[index]).css({"background-color":"#2C7DE2","border":"solid 1px #206DDF","color":"#FFF"});
     
    }

    //加载
    this. loadStart=function(){
        $("#sn_status").text("加载中....");
    }
    //播放
    this. playing=function(){
         $("#sn_status").text("当前正在播放："+playingFile.name);
    } 
    //暂停
    this. pausePaly=function(){
         $("#sn_status").text("暂停："+playingFile.name);
    }
    //加载出错
    this. loadError=function(){
        $("#sn_status").text("加载“"+playingFile.name+"”失败，可能资源不存在~");
    }
    //初始化
    this.init=function(){
        for(var a in musicFiles){
			$("#ul_musicList").append("<li>"+musicFiles[a].name+"</li>");
        }
        _this.nextMusic();
        $("#slt_playMode").change(function(){
			playMode=$("#slt_playMode").val();
        });
    }
}