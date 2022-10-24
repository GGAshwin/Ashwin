window.addEventListener('load', () => {
    var val = 1
    setTimeout(() => {
        const loading = document.querySelector('.loading')
        loading.id = "hidden"
        if (loading.style.opacity == 0) {
            console.log('yes');
            setTimeout(() => {
                loading.style.display = "none"
            }, 2000)
        }
    }, 2000)
})

const loading = document.querySelector('.loading')
