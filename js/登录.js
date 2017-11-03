$("form :input").blur(function() {       /*表单选择器，返回form中的所有表单对象,添加失去焦点事件*/
    var $parent = $(this).parent();
    var msg = "";
    /*删掉旧的msg*/
    $parent.find(".msg").remove();
    var regphone = /^1[34578]\d{9}$/;
    var regemail = /^\w+[-\.\w]*@[a-zA-Z0-9]+([-\.][a-zA-Z0-9]+)*\.[a-zA-Z0-9]+$/;
    /*用户名验证*/
    /*this属于DOM对象，$(this)属于jQuery对象*/
    if ($(this).is("#name")) {
        if (this.value == "" || this.value.length < 6) {
            if (!regphone.test(this.value) && !regemail.test(this.value)) {
                msg = "账号填写有误";
                $parent.append("<span id='false' class='msg'>" + msg + "</span>");
            }
        }
    }
}).focus(function() {
    $(this).triggerHandler("blur");
}).keyup(function() {
    $(this).triggerHandler("blur");
});

/*重新验证全部的必填的输入框*/
$("#send").click(function() {
    $("form :input[required]").trigger('blur');
    var falseMsg = $('form #false').length;
    if (falseMsg) {
        return false;
    }
    alert("请稍等...");
});
