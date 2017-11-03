var TEXT = {
    t1: {
        title: "例子",
        content: "<p>1989年CERN（欧洲粒子物理研究所）中由Tim Berners-Lee领导的小组提交了一个针对Internet的新协议和一个使用该协议的文档系统，该小组将这个新系统命名为Word Wide Web，它的目的在于使全球的科学家能够利用Internet交流自己的工作文档。</p><p>这个新系统被设计为允许Internet上任意一个用户都可以从许多文档服务计算机的数据库中搜索和获取文档。1990年末，这个新系统的基本框架已经在CERN中的一台计算机中开发出来并实现了,1991年该系统移植到了其他计算机平台，并正式发布。</p>",
        time: "1970.01.01",
    }
};

var addText = function(title, content) {
    for (var i = 0; i < 6; i++) {
        var str = "<section><h>" + title + "</h>" + content + "</section>";
        var $sec = $(str);
        $("article").append($sec);
    }
};

$(function() {
    addText(TEXT.t1.title, TEXT.t1.content);
    $("#search > input").click(function() {
        open("./搜索.html");
        return false;
    })
    $(".drop-text").click(function() {
        if (event.target == $("#text1")[0]) {
            open("./信息.html");
            return false;
        }
        if (event.target == $("#text2")[0]) {
            open("./登录.html");
            return false;
        }
        if (event.target == $("#text3")[0]) {
            open("./注册.html");
            return false;
        }
    })
});
