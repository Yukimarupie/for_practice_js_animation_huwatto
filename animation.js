// querySelectorAllで指定クラスの要素を取得する
const targetElement = document.querySelectorAll(".animationTarget");
// 現在のブラウザの高さを取得する
console.log("画面の高さ", window.innerHeight)
// スクロールするたびに、中のの繰り返し処理を実行するようにするのがdocument〜{}。
document.addEventListener("scroll", function() {
    for (let i = 0; i < targetElement.length; i++) {
        // 上からの距離を取得する
        const getElementDistance = targetElement[i].getBoundingClientRect().top 
        // 要素が見えてすぐ、ではなく、何割か見えたら表示させるように
        + targetElement[i].clientHeight * .6
        // もし要素の高さよりも画面の高さの方が上回ったら、showクラスを要素につける
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
})

    
