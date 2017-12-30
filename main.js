window.onload = function () {

// Найти все элементы h1, являющиеся потомками div и заменить их содержимое на произвольное.
    var allDivs = document.body.getElementsByTagName("div");

    for (let index = 0; index < allDivs.length; index++) {
        const element = allDivs[index];
        const divChilds = element.children;

        for (let index = 0; index < divChilds.length; index++) {
            divChilds[index].innerText = 'THIS MY NEW TEXT';
        }
    }

}