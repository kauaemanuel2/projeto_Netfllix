document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                // Close all other open answers
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    }
                });
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
