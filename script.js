function createGrid(width, height, pixel) {
    let grid = document.getElementById('grid');
    grid.style.cssText= 'display: flex; flex-direction: column; padding: 64px;';
    for (let i=0; i < height; i++) {
        // Create and style row
        let hDiv = document.createElement('div');
        hDiv.classList.add('row');
        hDiv.classList.add(i);
        hDiv.style.cssText = `display: flex; width: ${width*pixel}px; height: ${pixel}px;`;
        // Create and style columns for that row
        for (let j=0; j < width; j++) {
            let vDiv = document.createElement('div');
            vDiv.classList.add('col');
            vDiv.classList.add(j);
            vDiv.style.cssText = `width: ${pixel}px; height: ${pixel}px, border-style: dotted; border-color: light-gray;`;
            hDiv.addEventListener('mouseup', (e) => {
                changeColor(e.target);
                e.stopImmediatePropagation();
            })
            hDiv.appendChild(vDiv);
        }
        grid.appendChild(hDiv);
    }
}


function changeColor(div) {
    if (div.classList.contains('filled')) {
        div.classList.remove('filled');
    } else {
        div.classList.add('filled');
    }
}


function run() {
    createGrid(16, 16, 32);
    setupButton();
}

function setupButton() {
    let btn = document.getElementById('reset');
    btn.addEventListener('click', () => {
        clearGrid();
        let newWidth = prompt("Grid width:");
        newWidth = newWidth > 100 ? 100 : newWidth;
        let newHeight = prompt("Grid height:");
        newHeight = newHeight > 100 ? 100: newHeight;
        let pixelSize = prompt("Pixel size:");
        pixelSize = pixelSize > 64 ? 64: pixelSize;
        createGrid(newWidth, newHeight, pixelSize);
    })
}

function clearGrid() {
    let grid = document.getElementById('grid');
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

run();