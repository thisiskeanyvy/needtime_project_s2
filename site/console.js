console.clear();
let devToolsOpened = false;

setInterval(() => {
    if (window.outerHeight - window.innerHeight > 100 || window.outerWidth - window.innerWidth > 100) {
        if (!devToolsOpened) {
            console.log("%c       ╔════════╗ \n       ║  42  11║ \n       ║10        1║ \n       ║9          2║ \n       ║  8    7 ║ \n       ╚════════╝ \n          ║  3   6║ \n             4    5 ", "color: blue;");
            console.log("Credits NeedTime() - Félix Despretz, Yanis Jerjini, Hamza Khamchane, Antoine Mulot et Keany Vy Khun");
            console.log("Projet scolaire de fin d'année - EPITA");
            devToolsOpened = true;
        }
    } else {
        devToolsOpened = false;
    }
}, 1000);