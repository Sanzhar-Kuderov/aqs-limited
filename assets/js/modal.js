
function modal_active() {
    document.querySelector('.body').classList.add('no-scroll');
    document.querySelector('.modal').classList.add('active');
}
function modal_exit() {
    document.querySelector('.modal.active').classList.remove('active');
    document.querySelector('.body').classList.remove('no-scroll');
}
const submit_modal_consultant = document.querySelectorAll('.modal-active');
for (let i = 0; i < submit_modal_consultant.length; i++) {
    submit_modal_consultant[i].addEventListener('click', function () {
        modal_active();
    })
}
document.getElementById('mobal-exit-form').addEventListener('click', function () {
    modal_exit();
})
document.getElementById('modal-exit-fullscreen').addEventListener('click', function () {
    modal_exit();
})