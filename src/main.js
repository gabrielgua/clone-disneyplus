document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-btn]');
    

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {

            const targetId = btn.target.dataset.tabBtn;
            const targetTab = document.querySelector(`[data-tab-id="${targetId}"]`);


            hideAllTabs();

            targetTab.classList.add('shows__wrapper--active');   
            
            removeActiveClassFromButtons();
            btn.target.classList.add('shows__tabs__button--active');
        });
    }
});

function hideAllTabs() {
    const tabs = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('shows__wrapper--active');
    }
}

function removeActiveClassFromButtons() {
    const buttons = document.querySelectorAll('[data-tab-btn]');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--active');
    }
}

