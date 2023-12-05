var btn = document.getElementsByClassName("account--click");
btn[0].addEventListener("click",function () {
    var user = document.getElementById("account--user").value;
    var password = document.getElementById("account--password").value;
    console.log(user);
    console.log(password);
    let count;
    if(user == "nguyenthilananh" && password == "27092004"){
        confirm("Bạn giỏi quá cùng đi tiếp nhé");
        count = 1;
        if(count == 1){
            window.open('https://phamtung86.github.io/gift-for-you_content/');
        }
    }
    else {
        alert("Sai rồi huhu ( Gợi ý: Những gì liên quan đến bản thân bạn )")
    }
})
