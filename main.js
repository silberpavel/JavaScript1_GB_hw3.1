window.onload = function () {

    // 1. Найти все элементы h1, являющиеся потомками div и заменить их содержимое на произвольное.
    var allDivs = document.body.getElementsByTagName("div");

    for (let index = 0; index < allDivs.length; index++) {
        const element = allDivs[index];
        const divChilds = element.children;

        for (let index = 0; index < divChilds.length; index++) {
            divChilds[index].innerText = 'THIS MY NEW TEXT';
        }
    }

    // 2. Установить всем input type="text" произвольное содержимое. Содержимое второго инпута должно отличаться от первого.
    var inputs = document.body.getElementsByTagName("input");
    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        if (element.name == 'fname') {
            element.value = 'Vasilis';
        } else {
            element.value = 'Vasilkov';
        }
    }

    // 3. Выведите значение option с value=2







}