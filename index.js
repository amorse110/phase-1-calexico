const menuAPI = "http://localhost:3000/menu";
const menuList = document.getElementById('menu-items');

fetch(menuAPI)
.then(res => res.json())
.then(renderMenuItems)

function renderMenuItems(items) {
    items.forEach(renderInMenu)
}

function renderInMenu(dishObj) {
    const menuItem = document.createElement('span');
    menuItem.textContent = dishObj.name;
    menuList.append(menuItem)
}

