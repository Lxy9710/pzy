let demo = document.querySelector("#demo"); //通过css选择器找到这个元素 demo即html写的部分 懒得改了
let style = document.querySelector("#style");
let string = `
/*hi 我是小梁
  就 我昨晚其实在写js的作业
  熬着熬着好像就挺晚了
  感觉明天也起不来
  所以想写个东西来陪陪大宝贝
*/ 
body{
    color:#4682B4;
}
/*先挑一个漂亮点儿的字体颜色*/
*{box-sizing: border-box;}
/*你猜我要画什么？*/
#guess{
  display: inline-block;
  margin: 100px;
  position: relative;
  transition: all 1s;
  
}
#guess:hover{
  transform: scale(1.2);
  
}

/*你应该知道了8*/

/*好像设置的有点慢噢？*/

#guess>.left{
  background: #FA8072;
  width: 50px;
  height: 50px;
  position: absolute;
  transform: rotate(45deg) translateX(31px);
  bottom: 50px;
  left: -50px;
  border-radius: 50% 0 0 50%;
}

/*是不是很奇怪*/

#guess>.right{
  background: #FA8072;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  transform: rotate(45deg) translateY(31px);
  bottom: 50px;
  right: -50px;
  border-radius: 50% 50% 0 0;
}

/*出来啦*/
/*也不知道你的手机兼不兼容*/

#guess>.bottom{
  background: #FA8072;
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
}

/*戳戳它试试？*/

/*其实好无聊hhh*/

/*不想写别的啦 我要睡一会儿*/

/*好想你 回来我们去吃冰淇淋*/

/*mua！*/
`;
let n = 0;
let string2 = "";
// string = string.replace(/\n/g, "<br>"); //对string中的回车进行替换,但是会出现尖括号
// setInterval(() => {
//   n = n + 1;
//   demo.innerHTML = n;
// }, 1000); 可用时延来实现 但是递归更稳定些
let step = () => {
  setTimeout(() => {
    demo.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    demo.scrollTo(0, 99999);
    if (string[n] === "\n") {
      string2 += "<br>"; //判断是不是回车 进行br替换回车符号 格式美观
    } else if (string[n] == " ") {
      string2 += "&nbsp"; //html语法中的缩进 替换空格
    } else {
      string2 += string[n];
    }
    n += 1;

    if (n <= string.length) {
      step();
    } else {
    }
  }, 70);
};
step();
