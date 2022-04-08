//using selectors inside the element



// traversing the dom

const Btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question")

Btns.forEach(function(btn){
 btn.addEventListener("click", function(e){
  const question = e.currentTarget.parentElement.parentElement

   questions.forEach(function(eachQuestion){
    if ( eachQuestion !== question){
     eachQuestion.classList.remove("show-text")
    }
   });

  question.classList.toggle("show-text")
  
 });
});