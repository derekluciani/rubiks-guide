document.querySelectorAll('[data-quiz]').forEach((quiz)=>{
  const feedback=quiz.querySelector('.feedback');
  quiz.querySelectorAll('button[data-correct]').forEach((button)=>{
    button.addEventListener('click',()=>{
      quiz.querySelectorAll('button').forEach(b=>b.classList.remove('correct','wrong'));
      const ok=button.dataset.correct==='true';
      button.classList.add(ok?'correct':'wrong');
      if(feedback) feedback.textContent=ok?'Yes! You got it.':'Not yet. Try again.';
    });
  });
});
