window.addEventListener("load" , function(){
    const popupBtnLinks = this.document.querySelectorAll(".popup-btn .inner a")
    const popupBtn = this.document.querySelector(".popup-btn")
    const popupText = this.document.querySelector(".pop-text")
    popupBtnLinks.forEach(function(item){
        item.addEventListener("click" , function(e){
            e.preventDefault()
            popupBtnLinks.forEach(function(link){
                link.classList.toggle("active")
            })
        })
    })
    popupBtn.addEventListener("click" , function(){
        popupText.style.display = popupText.style.display === "none" ? "block" : "none"
    })
    // 메뉴 탭기능
    const tapTitle = this.document.querySelectorAll(".tap-nav li a")
    tapTitle.forEach(function(element){
        element.addEventListener("click" , function(e){
            e.preventDefault()
            // ↓이전에 active는 없애기
            tapTitle.forEach(function(item){
                item.classList.remove("active")
            })
            // ↓active 효과 유지
            this.classList.add("active")
            const tapItems = document.querySelectorAll(".tapitem")
            tapItems.forEach(function(tap){
                tap.style.display = "none"
            })
            // id 말고 href 찾아보기
            const target = this.getAttribute("href")
            document.querySelector(target).style.display = "block"
        })
    })
    // 첫번째 탭 메뉴 활성화 시켜놓기
    tapTitle[0].click()
})