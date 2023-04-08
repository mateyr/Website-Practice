/*(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    console.log(titleQuestions)

    titleQuestions.forEach(question =>{
        question.addEventListener('click' ,() =>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;

            scrollHeight permite agregar el alto minimo para que el elemento exist por lo cual el div question padding servira para que este elemento si puediese tener un padding y no se vea pegado al otro elemento

        })
    });
})();*/

(function(){
    const titleQuestions = Array.from(document.querySelectorAll('.questions__title'));
  
    titleQuestions.forEach(question =>{
      question.addEventListener('click' ,() =>{
        let height = 0;
        let answer = question.nextElementSibling;
        let addPadding = question.parentElement.parentElement;
  
        addPadding.classList.toggle('questions__padding--add');
        question.querySelector('.questions__arrow').classList.toggle('questions__arrow--rotate');
  
        if(!answer.clientHeight){
          height = answer.scrollHeight;
        }
  
        answer.style.height = `${height}px`;
  
        /*scrollHeight permite agregar el alto minimo para que el elemento exist por lo cual el div question padding servira para que este elemento si puediese tener un padding y no se vea pegado al otro elemento*/ 
  
      })
    });
  })();