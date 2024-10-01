let currentPage = 1;
let totalPages = document.querySelectorAll('.page').length;

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        let currentPageElement = document.getElementById(`page-${currentPage}`);
        let nextPageElement = document.getElementById(`page-${currentPage + 1}`);
        currentPageElement.classList.add('flip');
        nextPageElement.classList.add('flip');
        setTimeout(() => {
            currentPageElement.classList.remove('flip');
            nextPageElement.classList.remove('flip');
            currentPageElement.style.display = 'none';
            nextPageElement.style.display = 'block';
            currentPage++;
        }, 800);
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        let currentPageElement = document.getElementById(`page-${currentPage}`);
        let prevPageElement = document.getElementById(`page-${currentPage - 1}`);
        currentPageElement.classList.add('flip');
        prevPageElement.classList.add('flip');
        setTimeout(() => {
            currentPageElement.classList.remove('flip');
            prevPageElement.classList.remove('flip');
            currentPageElement.style.display = 'none';
            prevPageElement.style.display = 'block';
            currentPage--;
        }, 800);
    }
});