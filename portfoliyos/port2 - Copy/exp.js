document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.animated-list li');

    function checkVisibility() {
        var triggerBottom = window.innerHeight * 0.8;

        listItems.forEach(function(item) {
            var itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Run it initially in case elements are already in view
});

document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.animated-list1 li');

    function checkVisibility() {
        var triggerBottom = window.innerHeight * 0.8;

        listItems.forEach(function(item) {
            var itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Run it initially in case elements are already in view
});
