//DOM load event
function setDivMove (id) {
    window.addEventListener("DOMContentLoaded", () => {
        let div = document.getElementById(id)
        let parentDiv = div.parentNode
        parentDiv.addEventListener('mousemove', e => movDiv(e))

        function movDiv(e) {
            /*let movingZoneWidth = Math.min(parentDiv.offsetWidth, 500)
            let movingZoneHeight = Math.min(parentDiv.offsetHeight, 300)
            let horizontalPos = (e.pageX-movingZoneWidth/2) / movingZoneWidth
            let horizontalMove = horizontalPos * (movingZoneWidth - div.offsetWidth)
            let verticalPos = (e.pageY-movingZoneHeight/2) / movingZoneHeight
            let verticalMove = verticalPos * (movingZoneHeight - div.offsetHeight)*/

            let parentDivWidth = parentDiv.offsetWidth
            let cursorPositionX = e.pageX - (parentDivWidth / 2) - parentDiv.getBoundingClientRect().x
            let movingZoneWidth = Math.min(parentDivWidth, 500)
            let horizontalMove = cursorPositionX * (movingZoneWidth / parentDivWidth)

            let parentDivHeight = parentDiv.offsetHeight
            let cursorPositionY = e.pageY - (parentDivHeight / 2) - parentDiv.getBoundingClientRect().y
            let movingZoneHeight = Math.min(parentDivHeight, 300)
            let verticalMove = cursorPositionY * (movingZoneHeight / parentDivHeight)

            div.style.transform = 'translate(' + horizontalMove + 'px,' + verticalMove + 'px)'
        }
    })
}
