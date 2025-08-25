window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    
    // Tunggu sebentar untuk efek dramatis (opsional)
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 500); // 0.5 detik
});
