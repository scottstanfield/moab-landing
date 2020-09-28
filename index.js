const imgixParams = (height) => `?auto=compress,format&h=${height || 700}`;
let carouselCount = 0;
let carouselInterval;

const toggleCarousel = () => {
  const carousel = document.getElementById('carousel');
  if (carouselCount > 4) {
    carouselCount = 0;
  }
  setToggleToOrange(carouselCount);
  switch (carouselCount) {
    case 0:
      carousel.style.backgroundImage = `url('https://moab.imgix.net/topdown/camera-module.jpg${imgixParams()}')`;
      break;
    case 1:
      carousel.style.backgroundImage = `url('https://moab.imgix.net/topdown/raspberry-pi-4.jpg${imgixParams()}')`;
      break;
    case 2:
      carousel.style.backgroundImage = `url('https://moab.imgix.net/topdown/control-arms.jpg${imgixParams()}')`;
      break;
    case 3:
      carousel.style.backgroundImage = `url('https://moab.imgix.net/topdown/power-control-board.jpg${imgixParams()}')`;
      break;
    case 4:
      carousel.style.backgroundImage = `url('https://moab.imgix.net/topdown/servos.jpg${imgixParams()}')`;
      break;
    default:
      carousel.style.backgroundImage = `url('https://moab.imgix.net/topdown/m2.jpg${imgixParams()}')`;
      break;
  }
  carouselCount++;
}

const directlyToggleCarousel = (id) => {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(() => toggleCarousel(), 3000);
  carouselCount = id;
  const carousel = document.getElementById('carousel');

  setToggleToOrange(id);
  switch (id) {
    case 0:
      carousel.style.backgroundImage = `url('https://moab.imgix.net/topdown/camera-module.jpg${imgixParams()}')`;
      break;
    case 1:
      carousel.style.backgroundImage = `url('https://moab.imgix.net/topdown/raspberry-pi-4.jpg${imgixParams()}')`;
      break;
    case 2:
      carousel.style.backgroundImage = `url('https://moab.imgix.net/topdown/control-arms.jpg${imgixParams()}')`;
      break;
    case 3:
      carousel.style.backgroundImage = `url('https://moab.imgix.net/topdown/power-control-board.jpg${imgixParams()}')`;
      break;
    case 4:
      carousel.style.backgroundImage = `url('https://moab.imgix.net/topdown/servos.jpg${imgixParams()}')`;
      break;
    default:
      carousel.style.backgroundImage = `url('https://moab.imgix.net/topdown/m2.jpg${imgixParams()}')`;
      break;
  }
}

const setToggleToOrange = (idToToggle) => {
  const ids = [0, 1, 2, 3, 4];
  for (const id in ids) {
    const listItem = document.getElementById(`toggle-${id}`);
    const circle = document.getElementById(`circle-${id}`);
    listItem.style.color = "#333333";
    circle.style.backgroundColor = "#eeeeee";
  }
  const listItemToTurnOrange = document.getElementById(`toggle-${idToToggle}`);
  const circleToTurnOrange = document.getElementById(`circle-${idToToggle}`);
  listItemToTurnOrange.style.color = "#ee7100";
  circleToTurnOrange.style.backgroundColor = "#ee7100";
}

const onLoadFns = () => {
  simplePause();
  carouselInterval = setInterval(() => toggleCarousel(), 3000);
}