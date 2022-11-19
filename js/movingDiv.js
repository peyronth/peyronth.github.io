//DOM load event
function setDivMove (id) {
    window.addEventListener("DOMContentLoaded", () => {
        let div = document.getElementById(id)
        let parentDiv = div.parentNode
        parentDiv.addEventListener('mousemove', e => movDiv(e))

        function movDiv(e) {
            let movingZoneWidth = Math.min(parentDiv.offsetWidth, 1400)
            let movingZoneHeight = Math.min(parentDiv.offsetHeight, 800)
            console.log(movingZoneWidth, movingZoneHeight)
            let horizontalPos = (e.pageX-movingZoneWidth/2) / movingZoneWidth
            let horizontalMove = horizontalPos * (movingZoneWidth - div.offsetWidth)
            let verticalPos = (e.pageY-movingZoneHeight/2) / movingZoneHeight
            let verticalMove = verticalPos * (movingZoneHeight - div.offsetHeight)
            console.log(horizontalMove, verticalMove)
            div.style.transform = 'translate(' + horizontalMove + 'px,' + verticalMove + 'px)'
        }
    })
}
