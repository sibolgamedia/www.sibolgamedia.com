function loophalaman(a){var b="";nomerkiri=parseInt(numshowpage/2);nomerkiri==numshowpage-nomerkiri&&(numshowpage=2*nomerkiri+1);mulai=nomerhal-nomerkiri;1>mulai&&(mulai=1);maksimal=parseInt(a/postperpage)+1;maksimal-1==a/postperpage&&--maksimal;akhir=mulai+numshowpage-1;akhir>maksimal&&(akhir=maksimal);b+="<span class='showpageOf'>Page "+nomerhal+" of "+maksimal+"</span>";a=parseInt(nomerhal)-1;1<nomerhal&&(b+=2==nomerhal?"page"==jenis?'<span class="showpage"><a href="'+home_page+'">'+upPageWord+
"</a></span>":'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">'+upPageWord+"</a></span>":"page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+a+');return false">'+upPageWord+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+a+');return false">'+upPageWord+"</a></span>");1<mulai&&(b+="page"==jenis?'<span class="showpageNum"><a href="'+home_page+'">1</a></span>':'<span class="showpageNum"><a href="/search/label/'+
lblname1+"?&max-results="+postperpage+'">1</a></span>');2<mulai&&(b+="");for(a=mulai;a<=akhir;a++)b+=nomerhal==a?'<span class="showpagePoint">'+a+"</span>":1==a?"page"==jenis?'<span class="showpageNum"><a href="'+home_page+'">1</a></span>':'<span class="showpageNum"><a href="/search/label/'+lblname1+"?&max-results="+postperpage+'">1</a></span>':"page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+a+');return false">'+a+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+
a+');return false">'+a+"</a></span>";akhir<maksimal-1&&(b+="");akhir<maksimal&&(b+="page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+maksimal+');return false">'+maksimal+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+maksimal+');return false">'+maksimal+"</a></span>");a=parseInt(nomerhal)+1;nomerhal<maksimal&&(b+="page"==jenis?'<span class="showpageNum"><a href="#" onclick="redirectpage('+a+');return false">'+downPageWord+"</a></span>":'<span class="showpageNum"><a href="#" onclick="redirectlabel('+
a+');return false">'+downPageWord+"</a></span>");a=document.getElementsByName("pageArea");for(var d=document.getElementById("blog-pager"),c=0;c<a.length;c++)a[c].innerHTML=b;a&&0<a.length&&(b="");d&&(d.innerHTML=b)}function hitungtotaldata(a){a=parseInt(a.feed.openSearch$totalResults.$t,10);loophalaman(a)}
function halamanblogger(){var a=urlactivepage;-1!=a.indexOf("/search/label/")&&(lblname1=-1!=a.indexOf("?updated-max")?a.substring(a.indexOf("/search/label/")+14,a.indexOf("?updated-max")):a.substring(a.indexOf("/search/label/")+14,a.indexOf("?&max")));-1==a.indexOf("?q=")&&-1==a.indexOf(".html")&&(-1==a.indexOf("/search/label/")?(jenis="page",nomerhal=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+
home_page+'feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata">\x3c/script>')):(jenis="label",-1==a.indexOf("&max-results=")&&(postperpage=20),nomerhal=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+"feeds/posts/summary/-/"+lblname1+'?alt=json-in-script&callback=hitungtotaldata&max-results=1" >\x3c/script>')))}
function redirectpage(a){jsonstart=(a-1)*postperpage;nopage=a;a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");a.appendChild(b)}
function redirectlabel(a){jsonstart=(a-1)*postperpage;nopage=a;a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.setAttribute("src",home_page+"feeds/posts/summary/-/"+lblname1+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");a.appendChild(b)}
function finddatepost(a){post=a.feed.entry[0];a=post.published.$t.substring(0,19)+post.published.$t.substring(23,29);a=encodeURIComponent(a);location.href="page"==jenis?"/search?updated-max="+a+"&max-results="+postperpage+"#PageNo="+nopage:"/search/label/"+lblname1+"?updated-max="+a+"&max-results="+postperpage+"#PageNo="+nopage}var nopage,jenis,nomerhal,lblname1;halamanblogger();