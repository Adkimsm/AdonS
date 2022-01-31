document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('div[a]').addEventListener('click', () => {
        let elementObj = document.querySelector('#laupad')
        let toggleLaupadBtn = document.querySelector('div[a]')
        if (elementObj.style.display === "none") {
            elementObj.style.display = "block"
            elementObj.style.opacity = '1'
            elementObj.classList.add('animate__slideInUp')
            toggleLaupadBtn.style.bottom = window.getComputedStyle(elementObj).height
            toggleLaupadBtn.style.width = window.getComputedStyle(
                document.body
            ).width
            toggleLaupadBtn.style.left = '0px'
            toggleLaupadBtn.style.borderBottomLeftRadius = '0px'
            toggleLaupadBtn.style.borderBottomRightRadius = '0px'
            setTimeout(() => {
                elementObj.classList.remove('animate__slideInUp')
            }, 1050);
        } else {
            elementObj.classList.add('animate__slideOutDown')
            toggleLaupadBtn.style.bottom = '25px'
            toggleLaupadBtn.style.width = '30px'
            toggleLaupadBtn.style.height = '30px'
            toggleLaupadBtn.style.left = '0px'
            toggleLaupadBtn.style.borderBottomLeftRadius = '25px'
            toggleLaupadBtn.style.borderBottomRightRadius = '25px'
            setTimeout(() => {
                let a = Number(
                    window
                        .getComputedStyle(document.querySelector('html'))
                        .width.replace(/px/, '')
                )
                toggleLaupadBtn.style.left = `${Number(
                    a -
                    window
                        .getComputedStyle(toggleLaupadBtn)
                        .width.replace(/px/, '')
                ) / 2
                    }px`
                toggleLaupadBtn.style.width = '70px'
                toggleLaupadBtn.style.height = '70px'
            }, 300);
            setTimeout(() => {
                elementObj.style.opacity = "0"
                elementObj.style.display = "none"
                elementObj.classList.remove('animate__slideOutDown')
            }, 1050);
        }
    })
})