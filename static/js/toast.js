function showToast(title, message, type = 'normal', duration = 3000) {
    const toastComponent = document.getElementById('toast-component');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon'); 
    
    if (!toastComponent) return;

    if (type === 'success') {
        toastComponent.classList.add('bg-white', 'shadow-2xl', 'shadow-blue-500/20');
        toastIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
    } else if (type === 'error') {
        toastComponent.classList.add('bg-white', 'shadow-2xl', 'shadow-red-500/20');
        toastIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
    } else if (type === 'warning') {
        toastComponent.classList.add('bg-white', 'shadow-2xl', 'shadow-yellow-500/20');
        toastIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`;
    } else { // Tipe 'normal' atau 'info'
        toastComponent.classList.add('bg-white', 'shadow-2xl', 'shadow-gray-500/20');
        toastIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
    }

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    toastComponent.classList.remove('opacity-0', 'scale-95'); 
    toastComponent.classList.add('opacity-100', 'scale-100');

    setTimeout(() => {
        toastComponent.classList.remove('opacity-100', 'scale-100');
        toastComponent.classList.add('opacity-0', 'scale-95');
    }, duration);
}