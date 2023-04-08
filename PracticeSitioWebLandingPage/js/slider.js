/*(function () {
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    
    let value;

    buttonNext.addEventListener('click' , ()=>{
        changePosition(1);
    });

    
    buttonBefore.addEventListener('click' , ()=>{
        changePosition(-1);
    });

    const changePosition = (add) =>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');

        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('testimony__body--show');

    }   
})();*/

(function () {
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
  
    let currentIndex = 0;
    let isTransitioning = false;
  
    buttonNext.addEventListener('click' , () => {
      if (!isTransitioning) {
        const nextIndex = (currentIndex + 1) % sliders.length;
        transitionTo(nextIndex, 1);
      }
    });
  
    buttonBefore.addEventListener('click' , () => {
      if (!isTransitioning) {
        const prevIndex = (currentIndex - 1 + sliders.length) % sliders.length;
        transitionTo(prevIndex, -1);
      }
    });
  
    const transitionTo = (nextIndex, direction) => {
      isTransitioning = true;
  
      sliders[currentIndex].classList.remove('testimony__body--show');
      sliders[nextIndex].classList.add('testimony__body--show');
  
      setTimeout(() => {
        isTransitioning = false;
        currentIndex = nextIndex;
      }, 1000);
    };
  })();
