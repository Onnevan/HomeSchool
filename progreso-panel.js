'use strict';

function setProgressText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function readProgress(key) {
  try { return JSON.parse(localStorage.getItem(key)) ?? {}; }
  catch { return {}; }
}

function showProgress() {
  const math = readProgress('homeschool-v3');
  const done = new Set(Array.isArray(math.done) ? math.done.filter(n => Number.isInteger(n) && n >= 0 && n < 10) : []);
  document.querySelectorAll('[data-done]').forEach(mark => {
    const complete = done.has(Number(mark.dataset.done) - 1);
    mark.dataset.complete = String(complete);
    mark.textContent = complete ? '✓ Completada' : 'Pendiente';
  });
  setProgressText('math-progress', done.size + ' de 10 lecciones completadas');
  setProgressText('math-card-progress', 'Ver temas · ' + done.size + ' de 10 lecciones completadas');
  setProgressText('resume', Number.isInteger(math.lesson) ? 'Continuar Matemáticas →' : 'Abrir Matemáticas →');

  const homework = readProgress('homeschool-deberes-divisibilidad-v1');
  const completed = new Set(Array.isArray(homework.completed) ? homework.completed.filter(id => typeof id === 'string' && /^[0-3]-[0-4]$/.test(id)) : []);
  setProgressText('homework-progress', completed.size + ' de 20 ejercicios resueltos · Deberes');
  const topicHomework = document.getElementById('topic-homework-progress');
  if (topicHomework) topicHomework.textContent = completed.size + ' de 20 resueltos';
}

window.addEventListener('pageshow', showProgress);
showProgress();
