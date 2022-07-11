function showError(errorTitle, errorMessge) {
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('appModal'));
    let titleSection = document.getElementById('appModalTitle');
    let contentSection = document.getElementById('appModalContent');

    titleSection.textContent = errorTitle;
    contentSection.innerHTML = errorMessge;

    modal.show();
}

function closeModal() {
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('appModal'));

    modal.hide();
}