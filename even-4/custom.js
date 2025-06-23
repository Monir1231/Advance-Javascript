

window.addEventListener('beforeunload', (event) => {
            event.preventDefault();
            // Google Chrome requires returnValue to be set.
            event.returnValue = '';
        });