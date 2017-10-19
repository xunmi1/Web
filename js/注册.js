$("form :input").blur(function() {       /*表单选择器，返回form中的所有表单对象,添加失去焦点事件*/
    var $parent = $(this).parent();
    var msg = "";
    $parent.find(".msg").remove();
    /*删掉旧的msg*/

    /*用户名验证*/
    /*this属于DOM对象，$(this)属于JQuery对象*/
    if ($(this).is("#name")) {
        if (this.value == "" || this.value.length < 6) {
            msg = "用户名至少为6位！";
            $parent.append("<span id='false' class='msg'>" + msg + "</span>");
        } else {
            msg = "用户名可以使用！";
            $parent.append("<span id='true' class='msg'>" + msg + "</span>");
        }
    }

    /*密码验证*/
    if ($(this).is("#pad")) {
        if (this.value == "" || this.value.length < 6) {
            msg = "密码至少为6位！";
            $parent.append("<span id='false' class='msg'>" + msg + "</span>");
        } else {
            msg = "密码符合要求！";
            $parent.append("<span id='true' class='msg'>" + msg + "</span>");
        }
    }
}).keyup(function() {
    $(this).triggerHandler("blur");
}).focus(function() {
    $(this).triggerHandler("blur");
});


$("#send").click(function() {
    $("form :input[required]").trigger('blur');
    var falseMsg = $('form #false').length;
    if (falseMsg) {
        return false;
    }
    alert("请稍等...");
});

