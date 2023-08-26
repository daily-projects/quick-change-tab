const input = document.querySelector('input');
const btn = document.querySelector('.btn');

const states = document.querySelectorAll('.state');
const content = document.querySelector('.content')



btn.addEventListener('click', () => {
    const state = states[input.value];
    if (state) {
        clickState(state);
    } else {
        alert('Invalid tab index: ' + input.value);
    }
})


states.forEach(state => {
    state.addEventListener('click', clickState.bind(this, state));
});

function clickState(state) {
    states.forEach(state => state.classList.remove('active'))
    state.classList.add('active');
    content.textContent = `${state.textContent} Content`;
    content.style.textTransform = 'capitalize';
}