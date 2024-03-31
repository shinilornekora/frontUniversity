function lockedProfile() {
    const profileButtons = document.querySelectorAll('.profile button');
  
    profileButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const profile = this.parentNode;
            const isLocked = profile.querySelector(`input[name="user${index + 1}Locked"]:checked`).value === 'lock';
            const hiddenFields = profile.querySelector(`#user${index + 1}HiddenFields`);
            
            console.log(profile, isLocked, hiddenFields)

            if (isLocked) {
                return;
            }
    
            if (this.textContent === 'Show more') {
                hiddenFields.style.display = 'block';
                this.textContent = 'Hide it';
                return;
            }

            hiddenFields.style.display = 'none';
            this.textContent = 'Show more';
        });
    });
}